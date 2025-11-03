"use client";

import { useGSAP as useGSAPCore } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  // Refresh ScrollTrigger after page load to fix production build issues
  if (typeof window !== "undefined") {
    window.addEventListener("load", () => {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    });
  }
}

/**
 * Custom useGSAP hook that wraps @gsap/react with proper configuration
 * Handles SSR, cleanup, and provides GSAP context for animations
 */
export { useGSAPCore as useGSAP };

/**
 * Hook to handle reduced motion preferences
 */
export const useReducedMotion = () => {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = () => {
      if (mediaQuery.matches) {
        // Disable GSAP animations for users who prefer reduced motion
        gsap.globalTimeline.timeScale(0.00001);
        ScrollTrigger.config({ limitCallbacks: true });
      } else {
        gsap.globalTimeline.timeScale(1);
      }
    };

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);
};

export { gsap, ScrollTrigger };
