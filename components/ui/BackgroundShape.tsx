"use client";

import { useRef, useEffect, useId } from "react";
import { gsap } from "@/hooks/useGSAP";

interface BackgroundShapeProps {
  variant?: "wave" | "blob" | "organic";
  colorStart?: string;
  colorEnd?: string;
  className?: string;
  opacity?: number;
}

export default function BackgroundShape({
  variant = "organic",
  colorStart = "#667250",
  colorEnd = "#535D41",
  className = "",
  opacity = 0.1,
}: BackgroundShapeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<SVGLinearGradientElement>(null);
  const gradientId = useId();

  useEffect(() => {
    if (!containerRef.current || !gradientRef.current) return;

    const ctx = gsap.context(() => {
      // Animate gradient position on scroll
      gsap.to(gradientRef.current, {
        attr: { x2: "100%" },
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

  const getPath = () => {
    switch (variant) {
      case "wave":
        return "M0 30C150 30 150 10 300 10C450 10 450 30 600 30C750 30 750 10 900 10C1050 10 1050 30 1200 30V100H0V30Z";
      case "blob":
        return "M50,25 Q75,5 100,25 Q125,45 150,25 Q175,5 200,25 Q225,45 250,25 L250,100 L50,100 Z";
      case "organic":
      default:
        return "M10,50 Q50,10 90,50 Q130,90 170,50 Q210,10 250,50 Q290,90 330,50 Q370,10 410,50 Q450,90 490,50 L500,150 L0,150 Z";
    }
  };

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{ opacity }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 500 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient
            ref={gradientRef}
            id={gradientId}
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor={colorStart} />
            <stop offset="100%" stopColor={colorEnd} />
          </linearGradient>
        </defs>
        <path
          d={getPath()}
          fill={`url(#${gradientId})`}
          className="shape-path"
        />
      </svg>
    </div>
  );
}
