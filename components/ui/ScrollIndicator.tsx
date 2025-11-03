"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/hooks/useGSAP";

interface ScrollIndicatorProps {
  delay?: number;
  className?: string;
}

export default function ScrollIndicator({
  delay = 0,
  className = "",
}: ScrollIndicatorProps) {
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!indicatorRef.current) return;

    const ctx = gsap.context(() => {
      const indicator = indicatorRef.current;

      // Fade in arrow after delay
      gsap.fromTo(
        indicator,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay,
          ease: "power2.out",
        }
      );

      // Continuous bounce animation
      gsap.to(indicator, {
        y: 10,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: delay + 0.8,
      });

      // Hide on scroll
      const handleScroll = () => {
        if (window.scrollY > 50 && indicator) {
          gsap.to(indicator, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }, indicatorRef);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div
      ref={indicatorRef}
      className={`fixed bottom-12 left-1/2 -translate-x-1/2 z-50 opacity-0 ${className}`}
    >
      <div className="flex flex-col items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}>
        <span className="text-white text-sm font-medium drop-shadow-lg">Scroll to explore</span>
        <svg
          className="w-8 h-8 text-white drop-shadow-lg"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
}
