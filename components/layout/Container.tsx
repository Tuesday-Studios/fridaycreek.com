import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
  fullWidth?: boolean;
}

export default function Container({
  children,
  className = "",
  narrow = false,
  fullWidth = false,
}: ContainerProps) {
  if (fullWidth) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      className={`${
        narrow ? "max-w-4xl" : "max-w-7xl"
      } mx-auto container-padding ${className}`}
    >
      {children}
    </div>
  );
}
