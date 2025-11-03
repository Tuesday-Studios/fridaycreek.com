"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { hoverLift } from "@/utils/gsapAnimations";

interface CardProps {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  href: string;
  imageAlt?: string;
}

export default function Card({
  title,
  subtitle,
  description,
  image,
  href,
  imageAlt = "",
}: CardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      const cleanup = hoverLift(cardRef.current);
      return cleanup;
    }
  }, []);

  return (
    <Link
      ref={cardRef}
      href={href}
      className="group block overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300 card-item"
      data-animate="card"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={imageAlt || title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {subtitle && (
          <p className="text-sm text-olive-light font-medium mb-1">
            {subtitle}
          </p>
        )}
        <h3 className="font-display text-2xl text-olive mb-3 group-hover:text-olive-dark transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>

        <div className="mt-4 flex items-center text-olive group-hover:text-olive-dark transition-colors">
          <span className="text-sm font-medium">Learn More</span>
          <svg
            className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
