import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Reusable GSAP animation presets for consistent animations throughout the site
 */

export interface AnimationConfig {
  duration?: number;
  delay?: number;
  ease?: string;
  stagger?: number;
}

/**
 * Fade in animation
 */
export const fadeIn = (
  element: gsap.TweenTarget,
  config: AnimationConfig = {}
) => {
  const { duration = 0.6, delay = 0, ease = "power2.out" } = config;

  return gsap.fromTo(
    element,
    { opacity: 0 },
    {
      opacity: 1,
      duration,
      delay,
      ease,
      force3D: true,
    }
  );
};

/**
 * Slide up with fade animation
 */
export const slideUp = (
  element: gsap.TweenTarget,
  config: AnimationConfig = {}
) => {
  const { duration = 0.8, delay = 0, ease = "power2.out" } = config;

  return gsap.fromTo(
    element,
    { y: 60, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration,
      delay,
      ease,
      force3D: true,
    }
  );
};

/**
 * Scale in animation
 */
export const scaleIn = (
  element: gsap.TweenTarget,
  config: AnimationConfig = {}
) => {
  const { duration = 0.6, delay = 0, ease = "back.out(1.2)" } = config;

  return gsap.fromTo(
    element,
    { scale: 0.9, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration,
      delay,
      ease,
      force3D: true,
    }
  );
};

/**
 * Staggered animation for grids/lists
 */
export const staggerFadeUp = (
  elements: gsap.TweenTarget,
  config: AnimationConfig = {}
) => {
  const { duration = 0.8, delay = 0, ease = "power2.out", stagger = 0.05 } = config;

  return gsap.fromTo(
    elements,
    { y: 60, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration,
      delay,
      ease,
      stagger,
      force3D: true,
    }
  );
};

/**
 * Scroll-triggered fade up animation
 */
export const scrollFadeUp = (
  element: gsap.TweenTarget,
  config: AnimationConfig & { trigger?: string } = {}
) => {
  const { duration = 0.8, ease = "power2.out", trigger } = config;

  return gsap.fromTo(
    element,
    { y: 80, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration,
      ease,
      force3D: true,
      scrollTrigger: {
        trigger: trigger || element,
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none none",
      },
    }
  );
};

/**
 * Scroll-triggered stagger animation
 */
export const scrollStagger = (
  elements: gsap.TweenTarget,
  config: AnimationConfig & { trigger?: string } = {}
) => {
  const { duration = 0.8, ease = "power2.out", stagger = 0.1, trigger } = config;

  return gsap.fromTo(
    elements,
    { y: 60, opacity: 0, scale: 0.95 },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration,
      ease,
      stagger,
      force3D: true,
      scrollTrigger: {
        trigger: trigger || elements,
        start: "top 85%",
        end: "top 20%",
        toggleActions: "play none none none",
      },
    }
  );
};

/**
 * Hero image reveal animation
 */
export const heroReveal = (element: gsap.TweenTarget) => {
  return gsap.fromTo(
    element,
    { scale: 1.1, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 1.2,
      ease: "power2.out",
      force3D: true,
    }
  );
};

/**
 * Hover lift effect
 */
export const hoverLift = (element: HTMLElement) => {
  const onEnter = () => {
    gsap.to(element, {
      y: -8,
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out",
      force3D: true,
    });
  };

  const onLeave = () => {
    gsap.to(element, {
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
      force3D: true,
    });
  };

  element.addEventListener("mouseenter", onEnter);
  element.addEventListener("mouseleave", onLeave);

  return () => {
    element.removeEventListener("mouseenter", onEnter);
    element.removeEventListener("mouseleave", onLeave);
  };
};

/**
 * Button hover animation
 */
export const buttonHover = (element: HTMLElement) => {
  const onEnter = () => {
    gsap.to(element, {
      scale: 1.05,
      duration: 0.3,
      ease: "back.out(1.5)",
      force3D: true,
    });
  };

  const onLeave = () => {
    gsap.to(element, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
      force3D: true,
    });
  };

  element.addEventListener("mouseenter", onEnter);
  element.addEventListener("mouseleave", onLeave);

  return () => {
    element.removeEventListener("mouseenter", onEnter);
    element.removeEventListener("mouseleave", onLeave);
  };
};

/**
 * Image scale hover effect
 */
export const imageScaleHover = (element: HTMLElement, scale = 1.1) => {
  const img = element.querySelector("img");
  if (!img) return () => {};

  const onEnter = () => {
    gsap.to(img, {
      scale,
      duration: 0.5,
      ease: "power2.out",
      force3D: true,
    });
  };

  const onLeave = () => {
    gsap.to(img, {
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
      force3D: true,
    });
  };

  element.addEventListener("mouseenter", onEnter);
  element.addEventListener("mouseleave", onLeave);

  return () => {
    element.removeEventListener("mouseenter", onEnter);
    element.removeEventListener("mouseleave", onLeave);
  };
};

/**
 * Navigation link stagger animation
 */
export const navLinkStagger = (elements: gsap.TweenTarget) => {
  return gsap.fromTo(
    elements,
    { y: -20, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
      delay: 0.3,
      force3D: true,
    }
  );
};
