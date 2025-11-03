import Section from "@/components/layout/Section";
import AnimatedText from "@/components/ui/AnimatedText";
import Button from "@/components/ui/Button";
import aboutData from "../../../building/crawled-data/about.json";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section padding="xl" background="cream">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedText
            as="h1"
            className="font-display text-display-lg text-olive mb-8"
          >
            {aboutData.heading}
          </AnimatedText>
        </div>
      </Section>

      {/* Content Section */}
      <Section padding="l" background="cream">
        <div className="max-w-3xl mx-auto space-y-6">
          {aboutData.content.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg text-gray-700 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      {/* Spacer */}
      <div className="h-20 md:h-24 lg:h-32" />

      {/* Navigation Cards */}
      <Section padding="l" background="olive">
        <div className="text-center mb-12">
          <h2 className="font-display text-display-sm text-cream mb-4">
            Explore More
          </h2>
          <p className="text-cream/90 text-lg">
            Discover what makes Friday Creek Retreat special
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {aboutData.navigation.sections.map((section, index) => (
            <a
              key={index}
              href={section.link}
              className="group bg-cream/10 backdrop-blur-sm rounded-sm p-8 text-center hover:bg-cream/20 transition-all duration-300 border border-cream/20"
            >
              <h3 className="font-display text-2xl text-cream mb-2 group-hover:text-cream/80 transition-colors">
                {section.title}
              </h3>
              <div className="flex items-center justify-center text-cream/80 group-hover:text-cream transition-colors mt-4">
                <span className="text-sm font-medium">Learn More →</span>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* Spacer */}
      <div className="h-20 md:h-24 lg:h-32" />

      {/* CTA Section */}
      <Section padding="m" background="navy">
        <div className="text-center">
          <h2 className="font-display text-display-sm text-cream mb-6">
            Ready to Experience Friday Creek?
          </h2>
          <Button
            href="https://book-directonline.com/properties/fridaycreekredirect"
            variant="primary"
            external
          >
            Book Your Stay
          </Button>
        </div>
      </Section>
    </>
  );
}
