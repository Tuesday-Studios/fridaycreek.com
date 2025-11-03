import Link from "next/link";

const footerLinks = {
  about: [
    { name: "Facilities", href: "/facilities" },
    { name: "While You're Here", href: "/whats-nearby" },
    { name: "Reviews", href: "/reviews" },
    { name: "Blog", href: "/blog" },
  ],
  cottages: [
    { name: "The Big House", href: "/cottages/the-big-house" },
    { name: "Tribal Cottage", href: "/cottages/tribal-cottage" },
    { name: "Asian Cottage", href: "/cottages/asian-cottage" },
    { name: "View All Cottages", href: "/cottages" },
  ],
  info: [
    { name: "Contact", href: "/contact" },
    { name: "Pet Friendly", href: "/pet-friendly" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-olive text-cream section-padding-l">
      <div className="container-padding">
        <div className="max-w-7xl mx-auto">
          {/* Top section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-cream/20">
            {/* Brand */}
            <div>
              <Link
                href="/"
                className="font-display text-2xl inline-block mb-4 hover:text-cream/80 transition-colors"
              >
                Friday Creek Retreat
              </Link>
              <p className="text-cream/80 text-sm">
                Tucked amongst the hinterland&apos;s rolling hills, offering privacy
                and seclusion.
              </p>
            </div>

            {/* About Links */}
            <div>
              <h3 className="font-sans font-medium mb-4">About</h3>
              <ul className="space-y-2">
                {footerLinks.about.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-cream/80 text-sm hover:text-cream transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cottages Links */}
            <div>
              <h3 className="font-sans font-medium mb-4">Cottages</h3>
              <ul className="space-y-2">
                {footerLinks.cottages.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-cream/80 text-sm hover:text-cream transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Info */}
            <div>
              <h3 className="font-sans font-medium mb-4">Get in Touch</h3>
              <ul className="space-y-2 mb-4">
                <li className="text-cream/80 text-sm">
                  <a href="tel:0434284070" className="hover:text-cream transition-colors">
                    0434 284 070
                  </a>
                </li>
                <li className="text-cream/80 text-sm">
                  <a
                    href="mailto:info@fridaycreek.com"
                    className="hover:text-cream transition-colors"
                  >
                    info@fridaycreek.com
                  </a>
                </li>
              </ul>
              <ul className="space-y-2">
                {footerLinks.info.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-cream/80 text-sm hover:text-cream transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom section */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/60 text-sm">
              © {new Date().getFullYear()} Friday Creek Retreat. All Rights Reserved.
            </p>
            <div className="flex gap-4">
              {/* Social Media Links - Add as needed */}
              <a
                href="https://www.facebook.com/fridaycreekretreat/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/60 hover:text-cream transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
