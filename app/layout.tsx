import "./globals.css";
import localFont from "next/font/local";

import { cn } from "@/utils/util";
import AOSInit from "./components/Helper/AOSInit";
import { Metadata } from "next";

const gillSans = localFont({
  src: [
    {
      path: "./fonts/GillSans.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/GillSans-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/GillSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/GillSans-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/GillSans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/GillSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/GillSans-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-gill-sans",
});

const cheltenhamLT = localFont({
  src: [
    {
      path: "./fonts/CheltenhamLT-BookItalic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-itc-cheltenham-std",
});

const cormorantGaramond = localFont({
  src: [
    {
      path: "./fonts/CormorantGaramond-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/CormorantGaramond-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/CormorantGaramond-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/CormorantGaramond-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/CormorantGaramond-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/CormorantGaramond-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/CormorantGaramond-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/CormorantGaramond-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/CormorantGaramond-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-cormorant-garamond",
});

const cheltenhamBT = localFont({
  src: [
    {
      path: "./fonts/CheltenhamBT-Roman.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/CheltenhamBT-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-cheltenham-bt",
});

export const metadata: Metadata = {
  title: "Airjet Reed Manufacturer | Healdframe Manufacturer ",
  description:
    "Premier manufacturer of airjet and rapier reeds, healdframes, and textile loom components. ISO-certified with 25+ years of expertise.",
  keywords: [
    // Core Products
    "airjet reed manufacturer",
    "airjet reed",
    "rapier reed supplier",
    "projectile reed manufacturing",
    "healdframe manufacturer",
    "textile reed production",

    // Services
    "reed reconditioning services",
    "reed repair and maintenance",
    "healdframe restoration",
    "textile equipment repair",
    "preventive maintenance textile",

    // Technical Terms
    "weaving reed supplier",
    "loom reed manufacturer",
    "dent reed fabrication",
    "custom reed manufacturing",
    "precision textile reeds",

    // Location/Market
    "textile reed manufacturer India",
    "textile machinery components",
    "industrial weaving equipment",
    "textile manufacturing solutions",

    // Machine Types
    "airjet loom reeds",
    "rapier loom parts",
    "projectile loom reeds",
    "water jet loom reeds",

    // Quality/Certification
    "ISO certified reed manufacturer",
    "high quality textile reeds",
    "precision engineered reeds",
    "professional reed reconditioning",
  ].join(", "),
  authors: [{ name: "PrafulReed" }],
  creator: "PrafulReed",
  publisher: "PrafulReed",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://prafulreed.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prafulreed.com",
    title: "PrafulReed - Leading Airjet Reed & Healdframe Manufacturer",
    description:
      "Professional textile reed manufacturing, reconditioning, and repair services. Specializing in airjet, rapier, and projectile loom reeds with 25+ years of expertise.",
    siteName: "PrafulReed",
    images: [
      {
        url: "https://prafulreed.com/og-image.webp", // Add your OG image
        width: 1200,
        height: 630,
        alt: "PrafulReed - Textile Reed Manufacturing",
      },
    ],
  },
  verification: {
    google: "YRjg3eJXN4CGwxLFuc3we6QUBJ_iqU_dhwv4qs2u8-Y", // Add your Google Search Console verification code
  },
  category: "Manufacturing",
};

// JSON-LD Structured Data for better SEO
export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PrafulReed",
  description:
    "Leading manufacturer of textile reeds and healdframes for airjet, rapier, and projectile looms",
  url: "https://prafulreed.com",
  logo: "https://prafulreed.com/PrafulLogo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9825080713", // Add your phone number
    areaServed: "IN",
    availableLanguage: ["en", "hi"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Kanchanvilla, Vakil Vadi, opp. Chandramani Flat, nr. L.G. Corner, Balvatika, Maninagar",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "380008",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/company/praful-reed-and-heald-frame-private-limited",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "150",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const htmlClasses = cn(
    [
      gillSans.variable,
      cheltenhamLT.variable,
      cheltenhamBT.variable,
      cormorantGaramond.variable,
    ],
    "overscroll-none",
  );

  return (
    <html lang="en" className={`${htmlClasses} `}>
      <body className="bg-white font-serif text-black">
        <AOSInit />
        <main role="main">{children}</main>
      </body>
    </html>
  );
}
