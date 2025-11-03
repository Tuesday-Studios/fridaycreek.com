import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const dmSans = DM_Sans({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

// Using Playfair Display as a fallback for PP Woodland
const playfairDisplay = Playfair_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-woodland",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Friday Creek Retreat | Coffs Harbour Hinterland Resort",
  description:
    "Tucked amongst the hinterland's rolling hills, our retreat cottages offer privacy and seclusion only 15 minutes from the coastal city of Coffs Harbour.",
  keywords: [
    "Coffs Harbour accommodation",
    "hinterland retreat",
    "pet friendly",
    "romantic getaway",
    "luxury cottages",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfairDisplay.variable}`}>
      <body className="font-sans">
        <SmoothScroll />
        <Header />
        <main className="pt-20 lg:pt-24 pb-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
