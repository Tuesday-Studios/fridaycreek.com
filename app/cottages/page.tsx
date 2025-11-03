import Section from "@/components/layout/Section";
import AnimatedText from "@/components/ui/AnimatedText";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import cottagesData from "../../../building/crawled-data/cottages.json";

export default function CottagesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section padding="xl" background="cream">
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
      </Section>

      {/* Spacer */}
      <div className="h-16 md:h-20 lg:h-24" />

      {/* Cottages Grid */}
      <Section padding="l" background="cream">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
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
      <Section padding="l" background="navy">
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
      </Section>

      {/* Spacer */}
      <div className="h-20 md:h-24 lg:h-32" />

      {/* CTA Section */}
      <Section padding="m" background="olive">
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
