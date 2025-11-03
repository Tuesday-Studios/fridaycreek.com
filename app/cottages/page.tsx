"use client";

import Section from "@/components/layout/Section";
import AnimatedText from "@/components/ui/AnimatedText";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import WaveSeparator from "@/components/ui/WaveSeparator";
import BackgroundShape from "@/components/ui/BackgroundShape";
import cottagesData from "../../../building/crawled-data/cottages.json";
import { useGSAP, useReducedMotion } from "@/hooks/useGSAP";
import { scrollStagger, focusBlur } from "@/utils/gsapAnimations";
import { useRef } from "react";

export default function CottagesPage() {
  const cardGridRef = useRef<HTMLDivElement>(null);

  // Respect user's reduced motion preference
  useReducedMotion();

  // Initialize GSAP animations
  useGSAP(() => {
    // Card grid stagger animation
    scrollStagger(".card-item", {
      duration: 0.8,
      stagger: 0.1,
    });

    // Focus blur effect on card grid
    if (cardGridRef.current) {
      const cleanup = focusBlur(cardGridRef.current, ".card-item");
      return () => cleanup();
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Section padding="xl" background="cream" className="relative">
        <BackgroundShape variant="organic" colorStart="#9eab87" colorEnd="#667250" opacity={0.05} />
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedText
            as="h1"
            className="font-display text-display-lg text-olive mb-6"
          >
            Our Cottages
          </AnimatedText>
          <p className="text-xl text-gray-700 leading-relaxed">
            Nine private cottages, each with its own unique décor and
            personality, nestled amongst the trees, rolling hills and green
            pastures of the Coffs Harbour hinterland.
          </p>
        </div>
        <WaveSeparator position="bottom" color="cream" flip />
      </Section>

      {/* Spacer */}
      <div className="h-16 md:h-20 lg:h-24" />

      {/* Cottages Grid */}
      <Section padding="l" background="cream" className="relative">
        <BackgroundShape variant="blob" colorStart="#9eab87" colorEnd="#5b6647" opacity={0.06} />
        <WaveSeparator position="top" color="cream" />
        <div ref={cardGridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {cottagesData.cottages.map((cottage) => (
            <Card
              key={cottage.id}
              title={cottage.name}
              subtitle={cottage.subtitle}
              description={cottage.shortDescription}
              image={cottage.images[0].url}
              href={`/cottages/${cottage.slug}`}
              imageAlt={cottage.images[0].alt}
            />
          ))}
        </div>
        <WaveSeparator position="bottom" color="cream" flip />
      </Section>

      {/* Spacer */}
      <div className="h-20 md:h-24 lg:h-32" />

      {/* Features Section */}
      <Section padding="l" background="navy" className="relative">
        <BackgroundShape variant="wave" colorStart="#05496b" colorEnd="#022B40" opacity={0.15} />
        <WaveSeparator position="top" color="navy" />
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-display-sm text-cream mb-4">
              What&apos;s Included
            </h2>
            <p className="text-cream/90 text-lg">
              Every cottage comes with thoughtful amenities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Self-contained fully equipped kitchen",
              "Quality linen & toiletries",
              "Free Wifi",
              "Reverse cycle air conditioning",
              "Open log fireplace (winter months)",
              "Pet-friendly",
              "TV, Blue-ray & Bluetooth speaker",
              "Free access to movies, music & books",
              "Free parking",
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 text-cream/90"
              >
                <svg
                  className="w-6 h-6 text-olive-light flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
        <WaveSeparator position="bottom" color="navy" flip />
      </Section>

      {/* Spacer */}
      <div className="h-20 md:h-24 lg:h-32" />

      {/* CTA Section */}
      <Section padding="m" background="olive" className="relative">
        <BackgroundShape variant="organic" colorStart="#667250" colorEnd="#535D41" opacity={0.2} />
        <WaveSeparator position="top" color="olive" />
        <div className="text-center">
          <h2 className="font-display text-display-sm text-cream mb-6">
            Ready to Book Your Perfect Cottage?
          </h2>
          <Button
            href="https://book-directonline.com/properties/fridaycreekredirect"
            variant="primary"
            external
          >
            Check Availability
          </Button>
        </div>
      </Section>
    </>
  );
}
