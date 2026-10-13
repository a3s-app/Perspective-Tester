"use client";

import { useSection } from "@/components/cms/content-provider";
import defaults from "@/cms/content/products-section.json";

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
import Image from "next/image";
import { assetPath } from "@/lib/utils";

const contentIcons = {
  ClipboardCheck,
  FileText,
  BarChart3,
  Lightbulb,
  ListChecks,
  GitBranch,
  Users,
  Code,
};

export function ProductsSection() {
  const content = useSection("products-section", defaults, contentIcons);
  const products = content.products;

  return (
    /*
     * WCAG 2.4.3. "View Products" is a same-page link. Without a tabindex the
     * target is not focusable, so activating it scrolled the viewport but left
     * focus back in the header -- the next Tab resumed from the nav instead of
     * the products section, and screen reader users were dropped somewhere
     * unrelated. tabIndex={-1} lets the browser move focus here on activation
     * without adding the section to the tab sequence.
     */
    <section
      className="bg-secondary section-padding-y border-b focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      id="products"
      tabIndex={-1}
    >
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        {/* Section Title */}
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          <Tagline>{content.text_1}</Tagline>
          <h2 className="heading-lg text-foreground">{content.heading_2}</h2>
          <p className="text-muted-foreground text-base">
            {content.paragraph_3}
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
                  <div className="bg-background flex h-16 w-16 items-center justify-center rounded-xl border p-2">
                    <Image
                      src={assetPath(product.logo)}
                      alt={product.logoAlt}
                      width={64}
                      height={64}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-foreground text-xl font-semibold">
                      {product.name}
                    </h3>
                    {product.highlighted && (
                      <span className="bg-primary/10 text-primary rounded-full px-2.5 py-0.5 text-xs font-medium">
                        {content.text_4}
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

                {/* Features
                    WCAG 1.3.1: these rows read as a list visually, so AT must be
                    told the count and position ("1 of 4"). The icon is decorative
                    once the adjacent text carries the meaning. */}
                <ul className="flex list-none flex-col gap-3">
                  {product.features.map((feature) => (
                    <li key={feature.name} className="flex items-center gap-3">
                      <div
                        className="bg-primary/10 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                        aria-hidden="true"
                      >
                        <feature.icon className="text-primary h-4 w-4" />
                      </div>
                      <span className="text-foreground text-sm font-medium">
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  asChild
                  variant={product.highlighted ? "default" : "outline"}
                  className="mt-2 w-full"
                >
                  <Link href={product.href}>
                    {product.cta}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
