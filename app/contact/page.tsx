"use client";

import Section from "@/components/layout/Section";
import AnimatedText from "@/components/ui/AnimatedText";
import contactData from "../../../building/crawled-data/contact.json";
import { useGSAP, useReducedMotion } from "@/hooks/useGSAP";
import { scrollStagger, scrollFadeUp } from "@/utils/gsapAnimations";

export default function ContactPage() {
  const { contactDetails, travelInfo, location } = contactData;

  // Respect user's reduced motion preference
  useReducedMotion();

  // Initialize GSAP animations
  useGSAP(() => {
    // Travel cards stagger animation
    scrollStagger(".travel-card", {
      duration: 0.8,
      stagger: 0.15,
    });

    // Contact form fade in
    scrollFadeUp(".contact-form", {
      duration: 0.8,
    });

    // Contact info fade in
    scrollFadeUp(".contact-info", {
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
            className="font-display text-display-lg text-olive mb-6"
          >
            Contact & Location
          </AnimatedText>
          <p className="text-xl text-gray-700">
            Get in touch or find us in the beautiful Coffs Harbour hinterland
          </p>
        </div>
      </Section>

      {/* Spacer */}
      <div className="h-16 md:h-20 lg:h-24" />

      {/* Contact Details & Form */}
      <Section padding="l" background="cream">
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="contact-info">
            <h2 className="font-display text-display-sm text-olive mb-6">
              Get in Touch
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-lg text-olive mb-2">
                  Hosts
                </h3>
                <p className="text-gray-700">{contactDetails.hosts}</p>
              </div>

              <div>
                <h3 className="font-medium text-lg text-olive mb-2">
                  Phone
                </h3>
                <a
                  href={`tel:${contactDetails.mobile}`}
                  className="text-gray-700 hover:text-olive transition-colors"
                >
                  {contactDetails.mobile}
                </a>
                <p className="text-sm text-gray-600 mt-1">
                  International: {contactDetails.international}
                </p>
              </div>

              <div>
                <h3 className="font-medium text-lg text-olive mb-2">
                  Email
                </h3>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="text-gray-700 hover:text-olive transition-colors"
                >
                  {contactDetails.email}
                </a>
              </div>

              <div>
                <h3 className="font-medium text-lg text-olive mb-2">
                  Address
                </h3>
                <address className="text-gray-700 not-italic">
                  {contactDetails.address.street}
                  <br />
                  {contactDetails.address.suburb}, {contactDetails.address.state}{" "}
                  {contactDetails.address.postcode}
                  <br />
                  {contactDetails.address.country}
                </address>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form bg-white rounded-xl p-8 md:p-10 shadow-md">
            <h3 className="font-display text-2xl text-olive mb-8">
              Send Us a Message
            </h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-navy mb-2"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border-2 border-cream-border rounded-lg focus:border-olive focus:ring-2 focus:ring-olive/20 outline-none transition-all duration-200 bg-white hover:border-olive/50"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-navy mb-2"
                >
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border-2 border-cream-border rounded-lg focus:border-olive focus:ring-2 focus:ring-olive/20 outline-none transition-all duration-200 bg-white hover:border-olive/50"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-navy mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border-2 border-cream-border rounded-lg focus:border-olive focus:ring-2 focus:ring-olive/20 outline-none transition-all duration-200 bg-white hover:border-olive/50"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-navy mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-cream-border rounded-lg focus:border-olive focus:ring-2 focus:ring-olive/20 outline-none transition-all duration-200 bg-white resize-none hover:border-olive/50"
                />
              </div>

              <button type="submit" className="btn-primary w-full mt-8">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Section>

      {/* Spacer */}
      <div className="h-20 md:h-24 lg:h-32" />

      {/* Travel Information */}
      <Section padding="l" background="navy">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-display-sm text-cream mb-12 text-center">
            Getting Here
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Air Travel */}
            <div className="travel-card bg-cream/10 backdrop-blur-sm rounded-xl p-6 border border-cream/20 hover:bg-cream/15 transition-colors duration-300">
              <div className="text-5xl mb-4">✈️</div>
              <h3 className="font-display text-xl text-cream mb-3">
                {travelInfo.air.title}
              </h3>
              <p className="text-cream/80 text-sm leading-relaxed">
                {travelInfo.air.description}
              </p>
            </div>

            {/* Road Travel */}
            <div className="travel-card bg-cream/10 backdrop-blur-sm rounded-xl p-6 border border-cream/20 hover:bg-cream/15 transition-colors duration-300">
              <div className="text-5xl mb-4">🚗</div>
              <h3 className="font-display text-xl text-cream mb-3">
                {travelInfo.road.title}
              </h3>
              <p className="text-cream/80 text-sm leading-relaxed mb-3">
                {travelInfo.road.driveTime} from Coffs Harbour
              </p>
              <ul className="text-cream/70 text-sm space-y-1">
                <li>• {travelInfo.road.distances.fromSydney} from Sydney</li>
                <li>• {travelInfo.road.distances.fromBrisbane} from Brisbane</li>
              </ul>
            </div>

            {/* Rail Travel */}
            <div className="travel-card bg-cream/10 backdrop-blur-sm rounded-xl p-6 border border-cream/20 hover:bg-cream/15 transition-colors duration-300">
              <div className="text-5xl mb-4">🚂</div>
              <h3 className="font-display text-xl text-cream mb-3">
                {travelInfo.rail.title}
              </h3>
              <p className="text-cream/80 text-sm leading-relaxed">
                {travelInfo.rail.description}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Spacer */}
      <div className="h-12 md:h-16 lg:h-20" />

      {/* Map Section */}
      <Section padding="l" background="cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-display-sm text-olive mb-8 text-center">
            Find Us
          </h2>

          <div className="aspect-[21/9] bg-gray-200 rounded-xl overflow-hidden">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.${location.coordinates.lat}!2d${location.coordinates.lng}!3d${location.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f6!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE5JzEyLjMiUyAxNTPCsDAxJzM0LjkiRQ!5e0!3m2!1sen!2sau!4v1234567890`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Friday Creek Retreat Location"
            />
          </div>

          <div className="text-center mt-8">
            <a
              href={location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get Directions
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
