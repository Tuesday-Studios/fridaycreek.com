import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  padding?: "xl" | "l" | "m" | "s" | "xs";
  paddingTop?: "xl" | "l" | "m" | "s" | "xs";
  paddingBottom?: "xl" | "l" | "m" | "s" | "xs";
  background?: "cream" | "olive" | "navy" | "transparent";
  container?: boolean;
  narrow?: boolean;
  overflow?: "hidden" | "visible";
}

export default function Section({
  children,
  className = "",
  padding,
  paddingTop,
  paddingBottom,
  background = "transparent",
  container = true,
  narrow = false,
  overflow = "visible",
}: SectionProps) {
  // Build padding classes
  const paddingClasses = [];

  if (padding) {
    paddingClasses.push(`section-padding-${padding}`);
  } else {
    if (paddingTop) paddingClasses.push(`pt-section-${paddingTop}`);
    if (paddingBottom) paddingClasses.push(`pb-section-${paddingBottom}`);
  }

  // Background classes
  const bgClasses = {
    cream: "bg-cream text-black",
    olive: "bg-olive text-cream",
    navy: "bg-navy text-cream",
    transparent: "",
  };

  // Overflow classes
  const overflowClass = overflow === "hidden" ? "overflow-hidden" : "";

  return (
    <section
      className={`relative ${bgClasses[background]} ${overflowClass} ${className}`}
    >
      <div className={paddingClasses.join(" ")}>
        {container ? (
          <div
            className={`${
              narrow ? "max-w-4xl" : "max-w-7xl"
            } mx-auto container-padding`}
          >
            {children}
          </div>
        ) : (
          children
        )}
      </div>
    </section>
  );
}
