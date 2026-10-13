"use client";

import { useSection } from "@/components/cms/content-provider";
import defaults from "@/cms/content/about-page.json";

import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Globe, Shield, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/utils";

const contentIcons = { Globe, Users, Shield, Heart };

export function AboutPage() {
  const content = useSection("about-page", defaults, contentIcons);
  const teamMembers: {
    name: string;
    role: string;
    credential?: string;
    photo: string;
  }[] = content.teamMembers;
  const values = content.values;

  return (
    <>
      {/* Hero */}
      <section className="bg-background section-padding-y border-b">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
            <div className="flex flex-col gap-6 text-left">
              <Tagline>
                <Users
                  className="h-3.5 w-3.5 text-primary"
                  aria-hidden="true"
                />
                <span className="text-foreground">{content.text_1}</span>
              </Tagline>

              <div className="section-title-gap-lg flex flex-col">
                <h1 className="heading-xl text-balance text-foreground">
                  {content.heading_2}
                </h1>
                <p className="max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
                  {content.paragraph_3}
                </p>
              </div>

              <div className="grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-xl border bg-card px-4 py-3">
                  <p className="text-foreground text-sm font-semibold">
                    {content.paragraph_4}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {content.paragraph_5}
                  </p>
                </div>
                <div className="rounded-xl border bg-card px-4 py-3">
                  <p className="text-foreground text-sm font-semibold">
                    {content.paragraph_6}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {content.paragraph_7}
                  </p>
                </div>
                <div className="rounded-xl border bg-card px-4 py-3">
                  <p className="text-foreground text-sm font-semibold">
                    {content.paragraph_8}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {content.paragraph_9}
                  </p>
                </div>
              </div>
            </div>

            <div className="min-w-0">
              <div className="overflow-hidden rounded-2xl border bg-secondary/40 shadow-sm">
                <Image
                  src={assetPath(content.image_10)}
                  alt={content.alt_11}
                  width={1000}
                  height={800}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
              <p className="text-muted-foreground mt-3 text-sm">
                {content.paragraph_12}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background section-padding-y border-b">
        <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <Tagline>{content.text_13}</Tagline>
            <h2 className="heading-lg text-foreground">{content.heading_14}</h2>
            <p className="text-muted-foreground text-base">
              {content.paragraph_15}
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="flex gap-4">
                <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                  <value.icon className="text-primary h-5 w-5" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-foreground text-base font-semibold">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-secondary section-padding-y border-b">
        <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <Tagline>{content.text_16}</Tagline>
            <h2 className="heading-lg text-foreground">{content.heading_17}</h2>
            <p className="text-muted-foreground text-base">
              {content.paragraph_18}
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center gap-4 rounded-xl border bg-card p-6 text-center"
              >
                <div className="h-28 w-28 overflow-hidden rounded-full border-2 border-primary/10">
                  <Image
                    src={assetPath(member.photo)}
                    alt={content.alt_19}
                    width={112}
                    height={112}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-foreground text-base font-semibold">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                  {member.credential ? (
                    <p className="text-primary text-sm font-medium">
                      {member.credential}
                    </p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="bg-background section-padding-y border-b">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
            <div className="section-title-gap-lg flex flex-col items-center">
              <Tagline>{content.text_20}</Tagline>
              <h2 className="heading-lg text-foreground">
                {content.heading_21}
              </h2>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {content.items_22.map((client) => (
                <span
                  key={client}
                  className="text-muted-foreground text-sm font-medium"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary section-padding-y">
        <div className="container-padding-x container mx-auto">
          <div className="bg-primary mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-2xl px-6 py-12 text-center sm:px-12 sm:py-16">
            <h2 className="text-primary-foreground text-2xl font-semibold text-balance sm:text-3xl">
              {content.heading_23}
            </h2>
            <p className="text-primary-foreground/80 max-w-xl text-base leading-relaxed">
              {content.paragraph_24}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 focus-visible:ring-primary-foreground focus-visible:ring-offset-primary"
              >
                <Link href={content.href_25} prefetch>
                  {content.text_26}
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground hover:text-primary focus-visible:ring-primary-foreground focus-visible:ring-offset-primary"
              >
                <Link href={content.href_27} prefetch>
                  {content.text_28}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
