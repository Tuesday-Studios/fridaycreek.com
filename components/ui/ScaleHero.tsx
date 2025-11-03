"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "@/hooks/useGSAP";

interface ScaleHeroProps {
  image: string;
  alt: string;
  title?: string;
  className?: string;
}

export default function ScaleHero({
  image,
  alt,
  title,
  className = "",
}: ScaleHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imageWrapperRef.current || !imageInnerRef.current) return;

    const ctx = gsap.context(() => {
      const imageWrapper = imageWrapperRef.current;
      const imageInner = imageInnerRef.current;
      const imageHeight = imageWrapper?.offsetHeight || 800;

      // Set initial scale value
      gsap.set(":root", {
        "--scale-value": 0.27,
      });

      // Animation 1: Scale CSS variable from 0.27 to 1
      gsap.to(":root", {
        "--scale-value": 1,
        scrollTrigger: {
          trigger: imageWrapper,
          start: "center 40%",
          end: `+=${imageHeight}`,
          scrub: 1,
        },
      });

      // Animation 2: Pin the image while scaling
      gsap.to(imageWrapper, {
        scrollTrigger: {
          trigger: imageWrapper,
          start: "center center",
          end: `+=${imageHeight}`,
          scrub: 1,
          pin: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div
        ref={imageWrapperRef}
        className="scale-hero-wrapper mx-auto overflow-hidden w-full"
        style={{ marginTop: "-10%", marginBottom: "80px" }}
      >
        <div
          ref={imageInnerRef}
          className="scale-hero-inner overflow-hidden relative"
          style={{
            aspectRatio: "16/9",
          }}
        >
          <div className="scale-hero-image-wrapper relative w-full h-full">
            <Image
              src={image}
              alt={alt}
              fill
              className="object-cover"
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
