"use client";

import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { Shield } from "lucide-react";

export function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background section-padding-y border-b">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <Tagline>
              <Shield className="h-3.5 w-3.5 text-primary" />
              <span className="text-foreground">Legal</span>
            </Tagline>
            <div className="section-title-gap-xl flex flex-col">
              <h1 className="heading-xl text-balance text-foreground">
                Terms of Service
              </h1>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
                Last updated:{" "}
                <time dateTime="2025-03-06">March 6, 2025</time>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-secondary section-padding-y">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-xl border bg-card p-6 sm:p-10">
              <div className="flex flex-col gap-10 text-sm leading-relaxed text-muted-foreground">
                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold text-foreground">
                    Agreement to Terms
                  </h2>
                  <p>
                    By accessing and using the Perspective Tester website at
                    perspectivetester.com (&ldquo;the Site&rdquo;), you agree to
                    be bound by these Terms of Service. If you do not agree with
                    any part of these terms, you should not use the Site.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold text-foreground">
                    Services
                  </h2>
                  <p>
                    Perspective Tester provides digital accessibility consulting,
                    testing, and compliance services including but not limited
                    to:
                  </p>
                  <ul className="flex flex-col gap-2 pl-5 list-disc">
                    <li>
                      A3S (Accessibility as a Service) — managed accessibility
                      compliance
                    </li>
                    <li>
                      P15R — accessibility ops without chaos
                    </li>
                    <li>
                      Accessibility audits and WCAG 2.2 compliance assessments
                    </li>
                    <li>Remediation support and consulting</li>
                    <li>VPAT and ACR documentation</li>
                    <li>Training and consulting services</li>
                  </ul>
                  <p>
                    Specific service terms, deliverables, and pricing are defined
                    in individual service agreements between Perspective Tester
                    and the client.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold text-foreground">
                    Intellectual Property
                  </h2>
                  <p>
                    All content on this Site, including text, graphics, logos,
                    images, and software, is the property of Perspective Tester
                    or its content suppliers and is protected by copyright and
                    intellectual property laws. You may not reproduce,
                    distribute, modify, or create derivative works from any
                    content on this Site without prior written consent.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold text-foreground">
                    Use of the Site
                  </h2>
                  <p>You agree to use this Site only for lawful purposes and in a way that does not:</p>
                  <ul className="flex flex-col gap-2 pl-5 list-disc">
                    <li>
                      Infringe the rights of others or restrict their use of the
                      Site
                    </li>
                    <li>
                      Attempt to gain unauthorized access to any part of the
                      Site or its infrastructure
                    </li>
                    <li>
                      Transmit harmful, offensive, or unlawful content
                    </li>
                    <li>
                      Use automated systems to access the Site without
                      permission
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold text-foreground">
                    Disclaimers
                  </h2>
                  <p>
                    The information on this Site is provided &ldquo;as
                    is&rdquo; without warranties of any kind, either express or
                    implied. Perspective Tester does not warrant that the Site
                    will be uninterrupted, error-free, or free of viruses or
                    other harmful components.
                  </p>
                  <p>
                    While we strive to provide accurate and up-to-date
                    information about accessibility standards and compliance, the
                    content on this Site should not be construed as legal advice.
                    Consult with a qualified attorney for specific legal
                    guidance.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold text-foreground">
                    Limitation of Liability
                  </h2>
                  <p>
                    To the fullest extent permitted by law, Perspective Tester
                    shall not be liable for any indirect, incidental, special,
                    consequential, or punitive damages arising from your use of
                    or inability to use the Site or our services.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold text-foreground">
                    Governing Law
                  </h2>
                  <p>
                    These Terms shall be governed by and construed in accordance
                    with the laws of the State of Colorado, United States,
                    without regard to conflict of law provisions.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold text-foreground">
                    Changes to These Terms
                  </h2>
                  <p>
                    We reserve the right to modify these Terms at any time.
                    Changes will be posted on this page with a revised
                    &ldquo;Last updated&rdquo; date. Continued use of the Site
                    after changes constitutes acceptance of the revised Terms.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold text-foreground">
                    Contact Us
                  </h2>
                  <p>
                    If you have questions about these Terms, please contact us
                    at{" "}
                    <a
                      href="mailto:kush@p15r.com"
                      className="font-medium text-foreground hover:text-primary transition-colors"
                    >
                      kush@p15r.com
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
