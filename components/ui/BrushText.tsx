"use client";

import { useRef, useEffect, ReactNode } from "react";
import { gsap } from "@/hooks/useGSAP";

interface BrushTextProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  triggerOnScroll?: boolean;
  delay?: number;
}

export default function BrushText({
  children,
  className = "",
  as: Tag = "h2",
  triggerOnScroll = true,
  delay = 0,
}: BrushTextProps) {
  const containerRef = useRef<HTMLElement>(null);
  const originalRef = useRef<HTMLDivElement>(null);
  const cloneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !originalRef.current || !cloneRef.current) return;

    const ctx = gsap.context(() => {
      if (triggerOnScroll) {
        // Scroll-triggered brush effect
        gsap.fromTo(
          originalRef.current,
          { xPercent: -100 },
          {
            xPercent: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "bottom 80%",
              end: "bottom 70vh",
              toggleActions: "play none none none",
            },
          }
        );

        gsap.fromTo(
          cloneRef.current,
          { xPercent: 100 },
          {
            xPercent: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "bottom 80%",
              end: "bottom 70vh",
              toggleActions: "play none none none",
            },
          }
        );
      } else {
        // On-load brush effect
        const tl = gsap.timeline({ delay });

        tl.fromTo(
          originalRef.current,
          { xPercent: -100 },
          { xPercent: 0, duration: 0.6, ease: "power2.out" }
        );

        tl.fromTo(
          cloneRef.current,
          { xPercent: 100 },
          { xPercent: 0, duration: 0.6, ease: "power2.out" },
          "<"
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [triggerOnScroll, delay]);

  return (
    <Tag ref={containerRef as any} className={`relative overflow-hidden ${className}`}>
      {/* Original text (comes from left) */}
      <div ref={originalRef} className="relative">
        {children}
      </div>

      {/* Clone text (comes from right, overlays original) */}
      <div
        ref={cloneRef}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {children}
      </div>
    </Tag>
  );
}
