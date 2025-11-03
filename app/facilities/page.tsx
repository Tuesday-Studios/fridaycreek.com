"use client";

import Image from "next/image";
import Section from "@/components/layout/Section";
import AnimatedText from "@/components/ui/AnimatedText";
import Button from "@/components/ui/Button";
import MasonryGallery from "@/components/ui/MasonryGallery";
import facilitiesData from "../../../building/crawled-data/facilities.json";
import { useGSAP, useReducedMotion } from "@/hooks/useGSAP";
import { scrollStagger, scrollFadeUp } from "@/utils/gsapAnimations";
import { Pizza, Coffee } from "lucide-react";

export default function FacilitiesPage() {
  // Respect user's reduced motion preference
  useReducedMotion();

  // Initialize GSAP animations
  useGSAP(() => {
    // Facility cards stagger animation
    scrollStagger(".facility-card", {
      duration: 0.8,
      stagger: 0.2,
    });

    // Dining cards animation
    scrollStagger(".dining-card", {
      duration: 0.8,
      stagger: 0.15,
    });

    // CTA sections
    scrollFadeUp(".cta-section", {
      duration: 0.8,
    });
  }, []);
  return (
    <>
      {/* Hero Section */}
      <Section padding="xl" background="cream">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedText
            as="h1"
            className="font-display text-display-lg text-olive mb-4"
          >
            {facilitiesData.title}
          </AnimatedText>
          <p className="text-xl text-gray-700">
            {facilitiesData.subtitle}
          </p>
        </div>
      </Section>

      {/* Spacer */}
      <div className="h-16 md:h-20 lg:h-24" />

      {/* Intro */}
      <Section padding="m" background="cream">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            {facilitiesData.intro}
          </p>
        </div>
      </Section>

      {/* Spacer */}
      <div className="h-16 md:h-20 lg:h-24" />

      {/* Facilities Grid */}
      <Section padding="l" background="cream">
        <div className="space-y-20 md:space-y-24">
          {/* Commented out: Boules/Petanque and Guest laundry facilities */}
          {facilitiesData.facilities
            .filter((facility) =>
              facility.name !== "The gentle art of Boules/Petanque (French), Boccé (Italian for Boule) & Croquet" &&
              facility.name !== "Guest laundry and Games equipment"
            )
            .map((facility, index) => (
            <div
              key={index}
              className={`facility-card flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <h2 className="font-display text-display-sm text-olive mb-4">
                  {facility.name}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {facility.description}
                </p>
              </div>
              <div
                className={`relative aspect-[4/3] rounded-xl overflow-hidden shadow-md ${
                  index % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                {"imageUrl" in facility && facility.imageUrl ? (
                  <Image
                    src={facility.imageUrl}
                    alt={facility.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <div className="w-full h-full bg-olive/10 flex items-center justify-center">
                    <div className="text-6xl text-olive/30">🏞️</div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Spacer */}
      <div className="h-20 md:h-24 lg:h-32" />

      {/* Dining Section */}
      <Section padding="l" background="navy">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-display-sm text-cream mb-4">
              {facilitiesData.dining.title}
            </h2>
            <p className="text-cream/90 text-lg mb-2">
              {facilitiesData.dining.subtitle}
            </p>
            <p className="text-cream/80">
              {facilitiesData.dining.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pizza Oven */}
            <div className="dining-card group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-2 border-cream/30 hover:border-cream/50 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden">
              {/* Pricing Badge */}
              <div className="absolute top-6 right-6 bg-olive-light text-white px-4 py-2 rounded-full text-xl font-bold shadow-lg">
                ${facilitiesData.dining.pizzaOven.price}
              </div>

              {/* Icon */}
              <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-2xl bg-cream/20 group-hover:bg-cream/30 transition-colors">
                <Pizza className="w-12 h-12 text-cream" strokeWidth={1.5} />
              </div>

              <h3 className="font-display text-3xl text-cream mb-4 pr-20">
                {facilitiesData.dining.pizzaOven.title}
              </h3>
              <p className="text-cream/90 text-base leading-relaxed">
                {facilitiesData.dining.pizzaOven.description}
              </p>
            </div>

            {/* Breakfast */}
            <div className="dining-card group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-2 border-cream/30 hover:border-cream/50 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden">
              {/* Pricing Badge */}
              <div className="absolute top-6 right-6 bg-olive-light text-white px-4 py-2 rounded-full text-xl font-bold shadow-lg">
                ${facilitiesData.dining.breakfast.price}
              </div>

              {/* Icon */}
              <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-2xl bg-cream/20 group-hover:bg-cream/30 transition-colors">
                <Coffee className="w-12 h-12 text-cream" strokeWidth={1.5} />
              </div>

              <h3 className="font-display text-3xl text-cream mb-4 pr-20">
                {facilitiesData.dining.breakfast.title}
              </h3>
              <p className="text-cream/90 text-base leading-relaxed">
                {facilitiesData.dining.breakfast.description}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Spacer */}
      <div className="h-20 md:h-24 lg:h-32" />

      {/* Gallery Section */}
      <Section padding="l" background="cream">
        <div className="text-center mb-12">
          <h2 className="font-display text-display-sm text-olive mb-4">
            Facility Gallery
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Explore our stunning facilities and natural surroundings. Click any
            image to view in full size.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <MasonryGallery />
        </div>
      </Section>

    </>
  );
}
