interface SectionSeparatorProps {
  position?: "top" | "bottom";
  color?: "cream" | "olive" | "navy";
  flip?: boolean;
}

export default function SectionSeparator({
  position = "bottom",
  color = "cream",
  flip = false,
}: SectionSeparatorProps) {
  const colors = {
    cream: "#f7f7ee",
    olive: "#5b6647",
    navy: "#03364f",
  };

  const fillColor = colors[color];

  const transform = flip ? "scale(-1, 1)" : "scale(1, 1)";

  return (
    <div
      className={`absolute left-0 w-full ${
        position === "top" ? "top-0 -translate-y-full" : "bottom-0 translate-y-full"
      } pointer-events-none z-10`}
    >
      <svg
        viewBox="0 0 1440 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-12 md:h-16"
        style={{ transform }}
      >
        <path
          d="M0 48h1440V0c-198.46 0-396.9 48-595.36 48C646.18 48 447.74 0 249.28 0 151.08 0 75.54 24 0 24v24z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}
