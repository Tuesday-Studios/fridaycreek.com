"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGSAP } from "@/hooks/useGSAP";
import { navLinkStagger } from "@/utils/gsapAnimations";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Cottages", href: "/cottages" },
  { name: "Facilities", href: "/facilities" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  // Animate navigation links on mount (only on non-homepage)
  useGSAP(() => {
    if (!isHomepage) {
      navLinkStagger(".nav-link");
    }
  }, [isHomepage]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if scrolled past threshold
      setIsScrolled(currentScrollY > 50);

      // On homepage, keep header visible once it appears
      // On other pages, hide/show header based on scroll direction
      if (!isHomepage) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
          setIsMobileMenuOpen(false); // Close mobile menu on scroll down
        } else {
          setIsVisible(true);
        }
      } else {
        // Homepage: always keep visible (header fade-in is controlled by GSAP)
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isHomepage]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${isScrolled ? "bg-cream border-b border-cream-border" : "bg-cream"} ${
          isHomepage ? "homepage-header" : ""
        }`}
      >
        <div className="container-padding">
          <nav className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="font-display text-xl lg:text-2xl text-olive hover:text-olive-dark transition-colors relative z-50"
            >
              Friday Creek Retreat
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`nav-link font-sans text-sm font-medium transition-colors hover:text-olive ${
                    pathname === item.href ? "text-olive" : "text-black"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://book-directonline.com/properties/fridaycreekredirect"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary nav-link"
              >
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 relative z-50"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-olive z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-8">
          {navigation.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={closeMobileMenu}
              className={`font-display text-3xl text-cream hover:text-cream/80 transition-all duration-300 ${
                isMobileMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : "0ms",
              }}
            >
              {item.name}
            </Link>
          ))}

          <a
            href="https://book-directonline.com/properties/fridaycreekredirect"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
            className={`btn-primary text-lg mt-8 transition-all duration-300 ${
              isMobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{
              transitionDelay: isMobileMenuOpen
                ? `${navigation.length * 100}ms`
                : "0ms",
            }}
          >
            Book Now
          </a>
        </div>
      </div>
    </>
  );
}
