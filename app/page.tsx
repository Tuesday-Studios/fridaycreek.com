"use client";

import Image from "next/image";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import ImageSlider from "@/components/ui/ImageSlider";
import AnimatedText from "@/components/ui/AnimatedText";
import homepageData from "../../building/crawled-data/homepage.json";
import { useGSAP, useReducedMotion } from "@/hooks/useGSAP";
import { heroReveal, scrollStagger, scrollFadeUp } from "@/utils/gsapAnimations";

export default function Home() {
  const { hero, welcome, featuredCottages, directBooking } = homepageData;

  // Respect user's reduced motion preference
  useReducedMotion();

  // Initialize GSAP animations
  useGSAP(() => {
    // Hero animation
    heroReveal(".hero-slider");

    // Card grid stagger animation
    scrollStagger(".card-item", {
      duration: 0.8,
      stagger: 0.15,
    });

    // Welcome section image
    scrollFadeUp(".welcome-image", {
      duration: 1,
    });

    // CTA sections
    scrollFadeUp(".cta-section", {
      duration: 0.8,
    });
  }, []);

  // Transform hero slides for ImageSlider
  const heroSlides = hero.slides.map((slide) => ({
    url: slide.image,
    alt: slide.alt,
    title: slide.title,
  }));

  return (
    <>
      {/* Hero Section with Image Slider */}
      <section className="relative hero-slider">
        <ImageSlider images={heroSlides} autoplay loop />
      </section>

      {/* Spacer */}
      <div className="h-20 md:h-24 lg:h-32" />

      {/* Welcome Section */}
      <Section background="cream" className="py-24 md:py-32 lg:py-40">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <AnimatedText
              as="h1"
              className="font-display text-display-md text-olive mb-6"
            >
              {welcome.title}
            </AnimatedText>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {welcome.description}
            </p>
            <ul className="space-y-3 mb-8">
              {welcome.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-olive flex-shrink-0 mt-0.5 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <Button href="/about" variant="primary">
              Learn More About Us
            </Button>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden welcome-image">
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
      <Section background="navy" className="py-24 md:py-32 lg:py-40">
        <div className="text-center max-w-3xl mx-auto cta-section">
          <h2 className="font-display text-display-sm text-cream mb-4">
            {directBooking.title}
          </h2>
          <p className="text-cream/90 text-lg mb-6">
            {directBooking.description}
          </p>
          <ul className="flex flex-wrap justify-center gap-6 mb-8 text-cream/80">
            {directBooking.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-olive-light"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
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
      <Section background="cream" className="py-24 md:py-32 lg:py-40">
        <div>
          <div className="text-center mb-12">
            <AnimatedText
              as="h2"
              className="font-display text-display-sm text-olive mb-4"
            >
              Our Cottages
            </AnimatedText>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Nine private cottages, each with its own unique décor and
              personality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-12">
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
      <Section background="olive" className="py-20 md:py-28 lg:py-36">
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
