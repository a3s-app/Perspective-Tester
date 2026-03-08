"use client";

import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { Button } from "@/components/ui/button";
import { ArrowRight, Quote, Building2, GraduationCap, Home, Briefcase } from "lucide-react";
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
  org: string;
  logo: string;
  darkBg?: boolean;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "A3S has been instrumental in helping us achieve full WCAG 2.2 AA compliance across our county website. Their team is professional, knowledgeable, and responsive.",
    org: "El Paso County",
    logo: "/clients/elpasoco.png",
  },
  {
    quote:
      "Working with A3S has transformed our approach to digital accessibility. Their comprehensive program ensures we meet all compliance requirements while providing excellent user experiences.",
    org: "Portland State University",
    logo: "/clients/pdx.svg",
  },
  {
    quote:
      "The A3S team provided outstanding accessibility remediation services. Their expertise in WCAG standards and commitment to quality made our compliance journey seamless.",
    org: "Concorde Career College",
    logo: "/clients/concorde.png",
  },
  {
    quote:
      "A3S delivers exceptional accessibility solutions with legal protection guarantee. Their proactive approach and detailed reporting give us confidence in our compliance status.",
    org: "Jackson Healthcare",
    logo: "/clients/jacksonhealthcare.svg",
  },
];

const governmentClients: Client[] = [
  { name: "El Paso County", logo: "/clients/elpasoco.png", category: "government" },
  { name: "El Paso County Health", logo: "/clients/elpasocountyhealth.png", category: "government" },
  { name: "El Paso County Sheriff's Office", logo: "/clients/epcsheriffsoffice.png", category: "government" },
  { name: "Gilpin County", logo: "/clients/gilpin-county.png", category: "government" },
  { name: "Kit Carson County", logo: "/clients/kitcarsoncounty.png", category: "government" },
  { name: "Saguache County", logo: "/clients/saguachecounty.png", category: "government" },
];

const educationClients: Client[] = [
  { name: "Concorde Career College", logo: "/clients/concorde.png", category: "education" },
  { name: "Portland State University", logo: "/clients/pdx.svg", category: "education" },
];

const realEstateClients: Client[] = [
  { name: "280 Gramercy Place", logo: "/clients/280gramercyplace.png", category: "real-estate", darkBg: true },
  { name: "Bayonne Bay", logo: "/clients/bayonnebaynj.png", category: "real-estate", darkBg: true },
  { name: "Best Rent NJ", logo: "/clients/bestrentnj.jpg", category: "real-estate" },
  { name: "Condo Central NJ", logo: "/clients/condocentralnj.png", category: "real-estate" },
  { name: "Ewing Town Center", logo: "/clients/ewingtowncenter.png", category: "real-estate" },
  { name: "Hallmark Homes", logo: "/clients/hallmarkhomes.png", category: "real-estate", darkBg: true },
  { name: "Live at RVR", logo: "/clients/liveatrvr.svg", category: "real-estate" },
  { name: "Live at Woodlands Square", logo: "/clients/liveatwoodlandsquare.png", category: "real-estate", darkBg: true },
  { name: "Live Beekman", logo: "/clients/livebeekman.png", category: "real-estate" },
  { name: "Ready NJ Apartments", logo: "/clients/readynjapartments.png", category: "real-estate" },
  { name: "Stratford at Monroe", logo: "/clients/stratfordatmonroe.png", category: "real-estate" },
  { name: "The Continental", logo: "/clients/thecontinental.png", category: "real-estate" },
  { name: "Tower 31", logo: "/clients/tower31.png", category: "real-estate" },
  { name: "Woodhaven at Old Bridge", logo: "/clients/woodhavenoldbridge.png", category: "real-estate" },
  { name: "Xchange NJ", logo: "/clients/xchangenj.png", category: "real-estate" },
];

const businessClients: Client[] = [
  { name: "EdCount", logo: "/clients/edcount.jpg", category: "business" },
  { name: "Jackson Healthcare", logo: "/clients/jacksonhealthcare.svg", category: "business" },
  { name: "MRO Corp", logo: "/clients/mrocorp.png", category: "business" },
  { name: "SubItUp", logo: "/clients/subitup.png", category: "business" },
  { name: "Visability", logo: "/clients/visability.png", category: "business" },
  { name: "Vertex Systems", logo: "/clients/vertexsystems.png", category: "business", darkBg: true },
  { name: "Wilftek", logo: "/clients/wilftek.png", category: "business" },
];

function ClientLogoGrid({ clients }: { clients: Client[] }) {
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
              alt={`${client.name} logo`}
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
  return (
    <>
      {/* Hero */}
      <section className="bg-background section-padding-y border-b">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <Tagline>
              <Building2 className="h-3.5 w-3.5 text-primary" />
              <span className="text-foreground">Our Clients</span>
            </Tagline>

            <div className="section-title-gap-xl flex flex-col">
              <h1 className="heading-xl text-balance text-foreground">
                Trusted by Organizations Across Industries
              </h1>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
                From local government agencies to universities and healthcare
                organizations, we help teams achieve and maintain digital
                accessibility compliance.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-sm text-muted-foreground">
              <span className="font-medium">
                <span className="text-foreground text-lg font-semibold">30+</span>{" "}
                Active Clients
              </span>
              <span className="hidden h-4 w-px bg-border sm:block" />
              <span className="font-medium">
                <span className="text-foreground text-lg font-semibold">6</span>{" "}
                Industries
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary section-padding-y border-b">
        <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <Tagline>Testimonials</Tagline>
            <h2 className="heading-lg text-foreground">
              What Our Clients Say
            </h2>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <div
                key={t.org}
                className="flex flex-col gap-5 rounded-xl border bg-card p-6 sm:p-8"
              >
                <Quote className="h-5 w-5 text-primary/40" />
                <p className="text-sm leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-auto flex items-center gap-3 border-t pt-5">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg border p-1.5 ${
                      t.darkBg ? "bg-slate-800 border-slate-700" : "bg-background"
                    }`}
                  >
                    <Image
                      src={assetPath(t.logo)}
                      alt={`${t.org} logo`}
                      width={32}
                      height={32}
                      className="h-6 w-auto object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {t.org}
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
            <Tagline>All Clients</Tagline>
            <h2 className="heading-lg text-foreground">
              Organizations We Work With
            </h2>
            <p className="text-muted-foreground text-base">
              Serving government, education, healthcare, real estate, and
              technology organizations.
            </p>
          </div>

          <div className="mx-auto flex max-w-5xl flex-col gap-12">
            <CategorySection
              icon={Building2}
              title="Government & Public Services"
              clients={governmentClients}
            />

            <CategorySection
              icon={GraduationCap}
              title="Education"
              clients={educationClients}
            />

            <CategorySection
              icon={Briefcase}
              title="Business & Technology"
              clients={businessClients}
            />

            <CategorySection
              icon={Home}
              title="Real Estate & Property Management"
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
              Join Our Growing List of Clients
            </h2>
            <p className="text-primary-foreground/80 max-w-xl text-base leading-relaxed">
              Ready to make your digital properties accessible and compliant?
              Let&apos;s discuss how we can help your organization.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <Link href="/contact">
                  Get Started
                  <ArrowRight />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                <Link href="/a3s">
                  Learn About A3S
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
