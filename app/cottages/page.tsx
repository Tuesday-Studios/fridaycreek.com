"use client";

import Section from "@/components/layout/Section";
import AnimatedText from "@/components/ui/AnimatedText";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import BackgroundShape from "@/components/ui/BackgroundShape";
import Image from "next/image";
import cottagesData from "../../../building/crawled-data/cottages.json";
import { useGSAP, useReducedMotion } from "@/hooks/useGSAP";
import { scrollStagger, focusBlur } from "@/utils/gsapAnimations";
import { useRef } from "react";
import {
  ChefHat,
  Sparkles,
  Wifi,
  Wind,
  Flame,
  PawPrint,
  Tv,
  Music,
  Car,
} from "lucide-react";

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
      <Section padding="xl" background="cream" className="relative mb-16 md:mb-24 lg:mb-32">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedText
            as="h1"
            className="font-display text-display-lg text-olive mb-4"
          >
            Our Cottages
          </AnimatedText>
          <p className="text-xl text-gray-700 leading-relaxed">
            Nine private cottages, each with its own unique décor and
            personality, nestled amongst the trees, rolling hills and green
            pastures of the Coffs Harbour hinterland.
          </p>
        </div>
      </Section>

      {/* Cottages Grid */}
      <Section padding="l" background="cream" className="relative">
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
      </Section>

      {/* Spacer */}
      <div className="h-20 md:h-24 lg:h-32" />

      {/* Features Section */}
      <Section padding="l" background="navy" className="relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-display-sm text-cream mb-2">
              What&apos;s Included
            </h2>
            <p className="text-cream/90 text-lg">
              Every cottage comes with thoughtful amenities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: ChefHat,
                label: "Self-contained fully equipped kitchen",
              },
              { icon: Sparkles, label: "Quality linen & toiletries" },
              { icon: Wifi, label: "Free Wifi" },
              { icon: Wind, label: "Reverse cycle air conditioning" },
              { icon: Flame, label: "Open log fireplace (winter months)" },
              { icon: PawPrint, label: "Pet-friendly" },
              { icon: Tv, label: "TV, Blue-ray & Bluetooth speaker" },
              { icon: Music, label: "Free access to movies, music & books" },
              { icon: Car, label: "Free parking" },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="facility-card group bg-navy-light/20 rounded-lg p-6 border border-cream/10 hover:border-cream/30 hover:bg-navy-light/30 transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-olive-light/20 group-hover:bg-olive-light/30 transition-colors duration-300">
                      <Icon
                        className="w-8 h-8 text-olive-light group-hover:scale-110 transition-transform duration-300"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="text-cream/90 leading-relaxed">
                      {feature.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Spacer */}
      <div className="h-12 md:h-16 lg:h-20" />

      {/* Cottage Map */}
      <Section padding="l" background="navy">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display text-display-sm text-cream mb-8 text-center">
            Cottage Layout
          </h3>
          <div className="relative w-full rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://www.fridaycreek.com/wp-content/uploads/2019/09/Map-from-photo-1.jpg"
              alt="Friday Creek Retreat Cottage Map"
              width={1200}
              height={800}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
          </div>
          <p className="text-center text-cream/80 text-sm mt-6">
            Explore our 100-acre property with nine unique cottages nestled amongst the trees
          </p>
        </div>
      </Section>

      {/* Spacer */}
      <div className="h-20 md:h-24 lg:h-32" />

      {/* CTA Section */}
      <Section padding="m" background="olive" className="relative mt-12 md:mt-16 lg:mt-20">
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
