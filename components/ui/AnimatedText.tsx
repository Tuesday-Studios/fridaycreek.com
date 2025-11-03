"use client";

import { useEffect, useRef, createElement } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedTextProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  delay?: number;
}

export default function AnimatedText({
  children,
  className = "",
  as: Tag = "h2",
  delay = 0,
}: AnimatedTextProps) {
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const element = textRef.current;

    // Split text into lines for animation
    const lines = children.split("\n");
    element.innerHTML = "";

    lines.forEach((line) => {
      const lineSpan = document.createElement("span");
      lineSpan.style.display = "block";
      lineSpan.style.overflow = "hidden";

      const textSpan = document.createElement("span");
      textSpan.style.display = "block";
      textSpan.innerHTML = line || "&nbsp;";
      textSpan.style.transform = "translateY(100%)";
      textSpan.style.opacity = "0";

      lineSpan.appendChild(textSpan);
      element.appendChild(lineSpan);
    });

    // Animate lines on scroll
    const lineSpans = element.querySelectorAll("span span");

    gsap.fromTo(
      lineSpans,
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        delay,
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [children, delay]);

  return createElement(Tag, { ref: textRef, className }, children);
}
