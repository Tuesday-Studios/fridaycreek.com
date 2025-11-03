"use client";

import Image from "next/image";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import ScaleHero from "@/components/ui/ScaleHero";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import AnimatedText from "@/components/ui/AnimatedText";
import WaveSeparator from "@/components/ui/WaveSeparator";
import BackgroundShape from "@/components/ui/BackgroundShape";
import homepageData from "../../building/crawled-data/homepage.json";
import { useGSAP, useReducedMotion } from "@/hooks/useGSAP";
import { scrollStagger, scrollFadeUp, parallax, focusBlur } from "@/utils/gsapAnimations";
import { useRef } from "react";

export default function Home() {
  const { hero, welcome, featuredCottages, directBooking } = homepageData;
  const cardGridRef = useRef<HTMLDivElement>(null);
  const welcomeImageRef = useRef<HTMLDivElement>(null);

  // Respect user's reduced motion preference
  useReducedMotion();

  // Initialize GSAP animations
  useGSAP(() => {
    // Card grid stagger animation
    scrollStagger(".card-item", {
      duration: 0.8,
      stagger: 0.15,
    });

    // Focus blur effect on card grid
    if (cardGridRef.current) {
      const cleanup = focusBlur(cardGridRef.current, ".card-item");
      return () => cleanup();
    }

    // Welcome section image with parallax
    if (welcomeImageRef.current) {
      parallax(welcomeImageRef.current, { speed: -15 });
    }

    // CTA sections
    scrollFadeUp(".cta-section", {
      duration: 0.8,
    });
  }, []);

  return (
    <>
      {/* Hero Section with Scale Animation - negative margin pulls it up under header */}
      <div className="-mt-20 lg:-mt-24">
        <ScaleHero
          image={hero.slides[0].image}
          alt={hero.slides[0].alt}
          title={hero.slides[0].title}
        />
      </div>

      {/* Scroll Indicator Arrow - appears after zoom */}
      <ScrollIndicator delay={2.6} />

      {/* Welcome Section */}
      <Section background="cream" className="py-24 md:py-32 lg:py-40 relative">
        <BackgroundShape variant="organic" colorStart="#9eab87" colorEnd="#667250" opacity={0.05} />
        <WaveSeparator position="top" color="cream" />
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <AnimatedText
              as="h1"
              className="font-display text-display-md text-olive mb-4"
            >
              {welcome.title}
            </AnimatedText>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {welcome.description}
            </p>
            <ul className="space-y-3 mb-8">
              {welcome.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-olive mr-3">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <Button href="/about" variant="primary">
              Learn More About Us
            </Button>
          </div>
          <div ref={welcomeImageRef} className="relative aspect-[4/3] rounded-xl overflow-hidden welcome-image">
            <Image
              src={welcome.image}
              alt="Friday Creek Retreat Pool Deck"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      {/* Spacer */}
      <div className="h-20 md:h-24 lg:h-32" />

      {/* Direct Booking CTA */}
      <Section background="navy" className="py-24 md:py-32 lg:py-40 relative">
        <BackgroundShape variant="wave" colorStart="#05496b" colorEnd="#022B40" opacity={0.15} />
        <div className="text-center max-w-3xl mx-auto cta-section">
          <h2 className="font-display text-display-sm text-cream mb-2">
            {directBooking.title}
          </h2>
          <p className="text-cream/90 text-lg mb-6">
            {directBooking.description}
          </p>
          <ul className="flex flex-wrap justify-center gap-6 mb-8 text-cream/80">
            {directBooking.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center">
                <span className="text-olive-light mr-2">✓</span>
                {benefit}
              </li>
            ))}
          </ul>
          <Button
            href={directBooking.cta.link}
            variant="primary"
            external
          >
            {directBooking.cta.text}
          </Button>
        </div>
      </Section>

      {/* Spacer */}
      <div className="h-20 md:h-24 lg:h-32" />

      {/* Featured Cottages */}
      <Section background="cream" className="py-24 md:py-32 lg:py-40 relative">
        <BackgroundShape variant="blob" colorStart="#9eab87" colorEnd="#5b6647" opacity={0.06} />
        <div>
          <div className="text-center mb-12">
            <AnimatedText
              as="h2"
              className="font-display text-display-sm text-olive mb-2"
            >
              Our Cottages
            </AnimatedText>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Nine private cottages, each with its own unique décor and
              personality
            </p>
          </div>

          <div ref={cardGridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-12">
            {featuredCottages.map((cottage) => (
              <Card
                key={cottage.id}
                title={cottage.name}
                subtitle={cottage.subtitle}
                description={cottage.description}
                image={cottage.image}
                href={cottage.link}
                imageAlt={cottage.name}
              />
            ))}
          </div>

          <div className="text-center">
            <Button href="/cottages" variant="secondary">
              View All Cottages
            </Button>
          </div>
        </div>
      </Section>

      {/* Spacer */}
      <div className="h-20 md:h-24 lg:h-32" />

      {/* Pet Friendly CTA */}
      <Section background="olive" className="py-20 md:py-28 lg:py-36 relative">
        <BackgroundShape variant="organic" colorStart="#667250" colorEnd="#535D41" opacity={0.2} />
        <div className="text-center cta-section">
          <h2 className="font-display text-display-sm text-cream mb-6">
            Friday Creek Retreat is Pet Friendly!
          </h2>
          <Button href="/pet-friendly" variant="secondary">
            Find Out More
          </Button>
        </div>
      </Section>
    </>
  );
}
