"use client";

import { useSection } from "@/components/cms/content-provider";
import defaults from "@/cms/content/capabilities-section.json";

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

const contentIcons = {
  FileText,
  ScanSearch,
  Code,
  FileCheck,
  GraduationCap,
  Scale,
};

export function CapabilitiesSection() {
  const content = useSection("capabilities-section", defaults, contentIcons);
  const services = content.services;

  return (
    <section className="bg-secondary section-padding-y border-b" id="services">
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        {/* Section Title */}
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          <Tagline>{content.text_1}</Tagline>
          <h2 className="heading-lg text-foreground">{content.heading_2}</h2>
          <p className="text-muted-foreground text-base">
            {content.paragraph_3}
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
                  <service.icon
                    className="text-primary h-5 w-5"
                    aria-hidden="true"
                  />
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
