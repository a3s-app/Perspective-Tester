import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Globe, Shield, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/utils";

const teamMembers = [
  {
    name: "Jason McKee",
    role: "Managing Director, CEO & Founder",
    photo: "/jason-mckee.jpg",
  },
  {
    name: "Justin Sales",
    role: "Accounts Manager",
    photo: "/justin-sales.jpg",
  },
  {
    name: "Khushwant Parihar",
    role: "Web Accessibility Specialist",
    photo: "/khushwant-parihar.jpg",
  },
];

const values = [
  {
    icon: Globe,
    title: "Accessibility for Everyone",
    description:
      "We build for the 2 billion people around the world who need some level of support when accessing the web.",
  },
  {
    icon: Users,
    title: "Real-User Testing",
    description:
      "Our team includes native assistive technology users who test against real-world usage patterns, not just automated checklists.",
  },
  {
    icon: Shield,
    title: "WCAG 2.2 AA Standards",
    description:
      "We test against WCAG 2.2 AA standards with manual testing as our primary approach, backed by IAAP-certified professionals.",
  },
  {
    icon: Heart,
    title: "Building for the Real User",
    description:
      "We focus on building the web for real disabled users, maintaining relationships with accessibility attorneys and advocacy groups.",
  },
];

export function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background section-padding-y border-b">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
            <div className="flex flex-col gap-6 text-left">
              <Tagline>
                <Users className="h-3.5 w-3.5 text-primary" />
                <span className="text-foreground">About Us</span>
              </Tagline>

              <div className="section-title-gap-lg flex flex-col">
                <h1 className="heading-xl text-balance text-foreground">
                  Engineering Equity for the Digital World
                </h1>
                <p className="max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
                  Perspective Tester is a digital accessibility consultancy
                  helping organizations create inclusive digital experiences. We
                  work to ensure your online presence fosters inclusivity while
                  protecting you from legal liabilities.
                </p>
              </div>

              <div className="grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-xl border bg-card px-4 py-3">
                  <p className="text-foreground text-sm font-semibold">2B+</p>
                  <p className="text-muted-foreground text-xs">
                    people impacted by digital accessibility
                  </p>
                </div>
                <div className="rounded-xl border bg-card px-4 py-3">
                  <p className="text-foreground text-sm font-semibold">WCAG 2.2 AA</p>
                  <p className="text-muted-foreground text-xs">
                    standards-first delivery model
                  </p>
                </div>
                <div className="rounded-xl border bg-card px-4 py-3">
                  <p className="text-foreground text-sm font-semibold">IAAP Team</p>
                  <p className="text-muted-foreground text-xs">
                    certified specialists and real-user testers
                  </p>
                </div>
              </div>
            </div>

            <div className="min-w-0">
              <div className="overflow-hidden rounded-2xl border bg-secondary/40 shadow-sm">
                <Image
                  src={assetPath("/team-photo.jpg")}
                  alt="The Perspective Tester team"
                  width={1000}
                  height={800}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
              <p className="text-muted-foreground mt-3 text-sm">
                A multidisciplinary team focused on practical remediation, legal
                compliance, and inclusive product delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background section-padding-y border-b">
        <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <Tagline>Our Approach</Tagline>
            <h2 className="heading-lg text-foreground">
              What Drives Us
            </h2>
            <p className="text-muted-foreground text-base">
              We believe accessibility is a fundamental right, not an afterthought.
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
            <Tagline>Our Team</Tagline>
            <h2 className="heading-lg text-foreground">
              Meet the People Behind Perspective Tester
            </h2>
            <p className="text-muted-foreground text-base">
              IAAP-certified accessibility experts and senior-level programmers
              with proven experience in accessibility implementation.
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
                    alt={`${member.name}, ${member.role}`}
                    width={112}
                    height={112}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-foreground text-base font-semibold">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {member.role}
                  </p>
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
              <Tagline>Trusted By</Tagline>
              <h2 className="heading-lg text-foreground">
                Organizations We Work With
              </h2>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {[
                "State of Colorado",
                "Mercer",
                "Oprah Winfrey Charitable Foundation",
                "Fordham University",
                "Jackson Healthcare",
                "El Paso County",
                "Portland State University",
              ].map((client) => (
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
              Ready to Make Your Digital Products Accessible?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl text-base leading-relaxed">
              Whether you need a full managed service or a platform to track
              your own remediation, we have a solution for you.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <Link href="/contact" prefetch>
                  Talk to Sales
                  <ArrowRight />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                <Link href="/#products" prefetch>
                  View Products
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
