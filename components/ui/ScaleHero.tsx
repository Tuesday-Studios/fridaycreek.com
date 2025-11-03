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
      const imageWrapper = imageWrapperRef.current;

      // Set initial scale value on document root
      gsap.set(document.documentElement, {
        "--scale-value": 0.27,
      });

      // Unified timeline with both scale and pin
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: imageWrapper,
          start: "top top",
          end: "+=150vh", // Extended for pause effect
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          onEnter: () => {
            // Unlock scroll when animation starts
            document.body.style.overflow = "auto";
          },
          onLeave: () => {
            if (onAnimationComplete) onAnimationComplete();
          },
        },
      });

      // Animate scale value from 0.27 to 1 (66% of timeline)
      tl.to(document.documentElement, {
        "--scale-value": 1,
        ease: "none",
        duration: 1,
      });

      // Add pause - hold at full scale (34% of timeline)
      tl.to({}, {
        duration: 0.5,
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
              className="object-cover"
              sizes="(max-width: 800px) 100vw, (max-width: 1440px) 90vw, 80vw"
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
