"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "@/hooks/useGSAP";

interface ScaleHeroProps {
  image: string;
  alt: string;
  title?: string;
  className?: string;
  onAnimationComplete?: () => void;
}

export default function ScaleHero({
  image,
  alt,
  title,
  className = "",
  onAnimationComplete,
}: ScaleHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imageWrapperRef.current) return;

    // Lock scroll on page load
    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      // Set initial scale value on document root
      gsap.set(document.documentElement, {
        "--scale-value": 0.27,
      });

      // Auto-play timeline (not scroll-triggered)
      const tl = gsap.timeline({
        delay: 0.3, // Small delay after page load
        onComplete: () => {
          // Unlock scroll after animation completes
          setTimeout(() => {
            document.body.style.overflow = "auto";
            if (onAnimationComplete) onAnimationComplete();
          }, 500); // Brief pause before enabling scroll
        },
      });

      // Animate scale value from 0.27 to 1
      tl.to(document.documentElement, {
        "--scale-value": 1,
        duration: 1.8, // Smooth zoom over 1.8 seconds
        ease: "power2.inOut",
      });
    }, containerRef);

    return () => {
      ctx.revert();
      // Ensure scroll is unlocked on cleanup
      document.body.style.overflow = "auto";
    };
  }, [onAnimationComplete]);

  return (
    <div ref={containerRef} className={`scale-hero-container ${className}`}>
      <div
        ref={imageWrapperRef}
        className="scale-hero-wrapper"
      >
        <div className="scale-hero-inner">
          <div className="scale-hero-image-wrapper">
            <Image
              src={image}
              alt={alt}
              fill
              className="object-cover w-full h-full"
              sizes="100vw"
              priority
            />
          </div>

          {title && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-10">
              <h1 className="font-display text-display-lg text-white text-center px-8 text-shadow">
                {title}
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
