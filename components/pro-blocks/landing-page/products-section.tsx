"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import {
  ArrowRight,
  BarChart3,
  ClipboardCheck,
  FileText,
  Lightbulb,
  Users,
  Code,
  GitBranch,
  ListChecks,
} from "lucide-react";
import Link from "next/link";

const products = [
  {
    name: "A3S",
    subtitle: "Accessibility as a Service",
    description:
      "A managed accessibility service for local and county governments. We pair expert accessibility teams with public-sector workflows to help you reach and maintain WCAG 2.2 AA compliance with legal protection documentation.",
    features: [
      {
        icon: ClipboardCheck,
        name: "4-phase accessibility workflow",
      },
      {
        icon: FileText,
        name: "VPAT reports & legal documentation",
      },
      {
        icon: BarChart3,
        name: "Continuous monitoring & reporting",
      },
      {
        icon: Lightbulb,
        name: "Expert-led remediation guidance",
      },
    ],
    cta: "Learn About A3S",
    href: "/a3s",
    highlighted: true,
  },
  {
    name: "Manage Platform",
    subtitle: "Accessibility Issue Management",
    description:
      "An accessibility management platform that helps teams track, assign, and resolve accessibility issues across websites and applications with real-time collaboration and developer integrations.",
    features: [
      {
        icon: ListChecks,
        name: "Accessibility issue tracking",
      },
      {
        icon: GitBranch,
        name: "Remediation workflows",
      },
      {
        icon: Users,
        name: "Team collaboration & assignments",
      },
      {
        icon: Code,
        name: "Developer integrations",
      },
    ],
    cta: "Explore Manage Platform",
    href: "/manage",
    highlighted: false,
  },
];

export function ProductsSection() {
  return (
    <section className="bg-secondary section-padding-y border-b" id="products">
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        {/* Section Title */}
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          <Tagline>Products</Tagline>
          <h2 className="heading-lg text-foreground">Our Products</h2>
          <p className="text-muted-foreground text-base">
            Two powerful solutions designed to fit every stage of your
            accessibility journey.
          </p>
        </div>

        {/* Product Cards */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2">
          {products.map((product) => (
            <Card
              key={product.name}
              className={`gap-0 overflow-hidden rounded-xl border p-0 shadow-none ${
                product.highlighted ? "shadow-lg ring-1 ring-primary/10" : ""
              }`}
            >
              <CardContent className="flex flex-col gap-6 p-6 sm:p-8">
                {/* Product Header */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <h3 className="text-foreground text-xl font-semibold">
                      {product.name}
                    </h3>
                    {product.highlighted && (
                      <span className="bg-primary/10 text-primary rounded-full px-2.5 py-0.5 text-xs font-medium">
                        Managed
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm font-medium">
                    {product.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-col gap-3">
                  {product.features.map((feature) => (
                    <div
                      key={feature.name}
                      className="flex items-center gap-3"
                    >
                      <div className="bg-primary/10 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
                        <feature.icon className="text-primary h-4 w-4" />
                      </div>
                      <span className="text-foreground text-sm font-medium">
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link href={product.href}>
                  <Button
                    variant={product.highlighted ? "default" : "outline"}
                    className="mt-2 w-full"
                  >
                    {product.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
