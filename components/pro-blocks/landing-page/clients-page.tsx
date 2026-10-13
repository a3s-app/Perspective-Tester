"use client";

import { useSection } from "@/components/cms/content-provider";
import defaults from "@/cms/content/clients-page.json";

import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Quote,
  Building2,
  GraduationCap,
  Home,
  Briefcase,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/utils";

interface Client {
  name: string;
  logo: string;
  category: string;
  darkBg?: boolean;
}

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  org: string;
  highlight: string;
}

function ClientLogoGrid({ clients }: { clients: Client[] }) {
  const content = useSection("clients-page", defaults);

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {clients.map((client) => (
        <div
          key={client.name}
          className="flex flex-col items-center gap-3 rounded-xl border bg-card p-4 transition-shadow hover:shadow-md"
        >
          <div
            className={`flex h-16 w-full items-center justify-center rounded-lg px-3 ${
              client.darkBg ? "bg-slate-800" : ""
            }`}
          >
            <Image
              src={assetPath(client.logo)}
              alt={content.alt_1}
              width={160}
              height={80}
              className="h-10 w-auto max-w-[130px] object-contain"
            />
          </div>
          <span className="text-xs font-medium text-muted-foreground text-center leading-tight">
            {client.name}
          </span>
        </div>
      ))}
    </div>
  );
}

function CategorySection({
  icon: Icon,
  title,
  clients,
}: {
  icon: React.ElementType;
  title: string;
  clients: Client[];
}) {
  const content = useSection("clients-page", defaults);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-4 w-4 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <span className="text-xs text-muted-foreground">
          ({clients.length})
        </span>
      </div>
      <ClientLogoGrid clients={clients} />
    </div>
  );
}

export function ClientsPage() {
  const content = useSection("clients-page", defaults);
  const testimonials: Testimonial[] = content.testimonials;
  const governmentClients: Client[] = content.governmentClients;
  const educationClients: Client[] = content.educationClients;
  const realEstateClients: Client[] = content.realEstateClients;
  const businessClients: Client[] = content.businessClients;

  return (
    <>
      {/* Hero */}
      <section className="bg-background section-padding-y border-b">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <Tagline>
              <Building2
                className="h-3.5 w-3.5 text-primary"
                aria-hidden="true"
              />
              <span className="text-foreground">{content.text_2}</span>
            </Tagline>

            <div className="section-title-gap-xl flex flex-col">
              <h1 className="heading-xl text-balance text-foreground">
                {content.heading_3}
              </h1>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
                {content.paragraph_4}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-sm text-muted-foreground">
              <span className="font-medium">
                <span className="text-foreground text-lg font-semibold">
                  {content.text_5}
                </span>{" "}
                {content.text_6}
              </span>
              <span className="hidden h-4 w-px bg-border sm:block" />
              <span className="font-medium">
                <span className="text-foreground text-lg font-semibold">
                  {content.text_7}
                </span>{" "}
                {content.text_8}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary section-padding-y border-b">
        <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <Tagline>{content.text_9}</Tagline>
            <h2 className="heading-lg text-foreground">{content.heading_10}</h2>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex flex-col gap-5 rounded-xl border bg-card p-6 sm:p-8"
              >
                <Quote className="h-5 w-5 text-primary/40" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-auto flex flex-col gap-3 border-t pt-5">
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.title}</p>
                    <p className="text-xs text-muted-foreground">{t.org}</p>
                  </div>
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {t.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client logos by category */}
      <section className="bg-background section-padding-y border-b">
        <div className="container-padding-x container mx-auto flex flex-col gap-12 md:gap-16">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <Tagline>{content.text_11}</Tagline>
            <h2 className="heading-lg text-foreground">{content.heading_12}</h2>
            <p className="text-muted-foreground text-base">
              {content.paragraph_13}
            </p>
          </div>

          <div className="mx-auto flex max-w-5xl flex-col gap-12">
            <CategorySection
              icon={Building2}
              title={content.title_14}
              clients={governmentClients}
            />

            <CategorySection
              icon={GraduationCap}
              title={content.title_15}
              clients={educationClients}
            />

            <CategorySection
              icon={Briefcase}
              title={content.title_16}
              clients={businessClients}
            />

            <CategorySection
              icon={Home}
              title={content.title_17}
              clients={realEstateClients}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary section-padding-y">
        <div className="container-padding-x container mx-auto">
          <div className="bg-primary mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-2xl px-6 py-12 text-center sm:px-12 sm:py-16">
            <h2 className="text-primary-foreground text-2xl font-semibold text-balance sm:text-3xl">
              {content.heading_18}
            </h2>
            <p className="text-primary-foreground/80 max-w-xl text-base leading-relaxed">
              {content.paragraph_19}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 focus-visible:ring-primary-foreground focus-visible:ring-offset-primary"
              >
                <Link href={content.href_20}>
                  {content.text_21}
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground hover:text-primary focus-visible:ring-primary-foreground focus-visible:ring-offset-primary"
              >
                <Link href={content.href_22}>{content.text_23}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
