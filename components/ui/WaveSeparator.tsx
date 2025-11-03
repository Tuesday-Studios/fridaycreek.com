"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/hooks/useGSAP";

interface WaveSeparatorProps {
  position?: "top" | "bottom";
  color?: "cream" | "olive" | "navy";
  flip?: boolean;
  className?: string;
}

const colorMap = {
  cream: "#f7f7ee",
  olive: "#5b6647",
  navy: "#03364f",
};

export default function WaveSeparator({
  position = "bottom",
  color = "cream",
  flip = false,
  className = "",
}: WaveSeparatorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainWaveRef = useRef<SVGPathElement>(null);
  const secondaryWaveRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!containerRef.current || !mainWaveRef.current || !secondaryWaveRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax wave animation on scroll
      gsap.to(mainWaveRef.current, {
        x: () => -(window.innerHeight / 1.5),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(secondaryWaveRef.current, {
        x: () => -(window.innerHeight / 3),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const fillColor = colorMap[color];
  const rotateClass = flip ? "rotate-180" : "";
  const positionClass = position === "top" ? "-top-1" : "-bottom-1";

  return (
    <div
      ref={containerRef}
      className={`absolute left-0 w-full ${positionClass} overflow-hidden pointer-events-none ${rotateClass} ${className}`}
      style={{ height: "80px" }}
    >
      <svg
        className="absolute left-0 w-full h-full"
        viewBox="0 0 3876 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Main Wave */}
        <path
          ref={mainWaveRef}
          d="M0 60C323 60 323 0 646 0C969 0 969 60 1292 60C1615 60 1615 0 1938 0C2261 0 2261 60 2584 60C2907 60 2907 0 3230 0C3553 0 3553 60 3876 60V160H0V60Z"
          fill={fillColor}
          opacity="0.5"
        />
        {/* Secondary Wave (slightly offset) */}
        <path
          ref={secondaryWaveRef}
          d="M0 80C323 80 323 20 646 20C969 20 969 80 1292 80C1615 80 1615 20 1938 20C2261 20 2261 80 2584 80C2907 80 2907 20 3230 20C3553 20 3553 80 3876 80V160H0V80Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}
