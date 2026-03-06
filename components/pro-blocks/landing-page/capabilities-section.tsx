"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import {
  FileText,
  ScanSearch,
  GraduationCap,
  Scale,
  Code,
  FileCheck,
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "PDF & Document Remediation",
    description:
      "We remediate PDFs, Word documents, and spreadsheets to meet WCAG 2.2 AA and PDF/UA standards — ensuring your downloadable content is fully accessible.",
  },
  {
    icon: ScanSearch,
    title: "One-Time Accessibility Audits",
    description:
      "A comprehensive manual audit of your website or application by IAAP-certified testers using real assistive technologies, with a detailed WCAG 2.2 compliance report.",
  },
  {
    icon: Code,
    title: "Custom Development & Remediation",
    description:
      "Our senior developers write production-ready code fixes for accessibility issues — from ARIA patterns and keyboard navigation to semantic HTML restructuring.",
  },
  {
    icon: FileCheck,
    title: "VPAT & ACR Documentation",
    description:
      "We produce Voluntary Product Accessibility Templates and Accessibility Conformance Reports required for government procurement and enterprise vendor reviews.",
  },
  {
    icon: GraduationCap,
    title: "Training & Workshops",
    description:
      "Live training sessions for designers, developers, and QA teams covering WCAG standards, assistive technology usage, and accessible development practices.",
  },
  {
    icon: Scale,
    title: "Legal Compliance Consulting",
    description:
      "Expert guidance on ADA Title II & III, Section 508, and state-level digital accessibility legislation — including litigation response support.",
  },
];

export function CapabilitiesSection() {
  return (
    <section
      className="bg-secondary section-padding-y border-b"
      id="services"
    >
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        {/* Section Title */}
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          <Tagline>Services</Tagline>
          <h2 className="heading-lg text-foreground">
            Services We Offer
          </h2>
          <p className="text-muted-foreground text-base">
            Beyond our A3S and Manage products, we provide hands-on
            accessibility services tailored to your needs.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="gap-0 rounded-xl border p-0 shadow-none transition-shadow hover:shadow-md"
            >
              <CardContent className="flex flex-col gap-4 p-6">
                <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                  <service.icon className="text-primary h-5 w-5" aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-foreground text-base font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
