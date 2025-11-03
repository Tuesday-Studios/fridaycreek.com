"use client";

import Link from "next/link";
import { ReactNode, useRef, useEffect } from "react";
import { buttonHover } from "@/utils/gsapAnimations";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  disabled = false,
  external = false,
}: ButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current && !disabled) {
      const cleanup = buttonHover(buttonRef.current as HTMLElement);
      return cleanup;
    }
  }, [disabled]);

  const buttonClass = `btn ${
    variant === "primary" ? "btn-primary" : "btn-secondary"
  } ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          ref={buttonRef as React.RefObject<HTMLAnchorElement>}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={buttonClass}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClass}
    >
      {children}
    </button>
  );
}
