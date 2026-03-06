import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Perspective Tester - Enterprise Accessibility Testing & Compliance",
    template: "%s | Perspective Tester",
  },
  description:
    "Test, monitor, and manage accessibility across your digital products. Perspective Tester helps enterprises achieve and maintain WCAG 2.2 compliance at scale.",
  keywords: [
    "accessibility testing",
    "WCAG compliance",
    "ADA compliance",
    "Section 508",
    "web accessibility",
    "digital accessibility",
    "accessibility audit",
    "accessibility remediation",
    "VPAT",
    "ACR",
    "enterprise accessibility",
    "accessibility as a service",
  ],
  authors: [{ name: "Perspective Tester" }],
  creator: "Perspective Tester",
  publisher: "Perspective Tester",
  metadataBase: new URL("https://perspectivetester.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Perspective Tester",
    title: "Perspective Tester - Enterprise Accessibility Testing & Compliance",
    description:
      "Test, monitor, and manage accessibility across your digital products. Achieve and maintain WCAG 2.2 compliance at scale.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Perspective Tester - Enterprise Accessibility Compliance",
    description:
      "Test, monitor, and manage accessibility across your digital products. Achieve and maintain WCAG 2.2 compliance at scale.",
  },
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
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Perspective Tester",
  url: "https://perspectivetester.com",
  email: "Info@perspectivetester.com",
  description:
    "Enterprise accessibility testing and compliance platform helping organizations achieve WCAG 2.2 compliance at scale.",
  sameAs: ["https://a3s.app", "https://manage.p15r.com"],
  knowsAbout: [
    "Web Accessibility",
    "WCAG 2.2",
    "ADA Compliance",
    "Section 508",
    "Accessibility Testing",
    "VPAT",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Perspective Tester",
  url: "https://perspectivetester.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(organizationJsonLd),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(websiteJsonLd),
            }}
          />
        </head>
        <body className={`${inter.variable} font-sans relative antialiased`}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground focus:shadow-lg focus:outline-none"
          >
            Skip to main content
          </a>
          {children}
        </body>
      </html>
    </>
  );
}
