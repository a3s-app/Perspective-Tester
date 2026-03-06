"use client";

import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Mail } from "lucide-react";
import Link from "next/link";

export function AccessibilityStatementPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background section-padding-y border-b">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <Tagline>
              <Shield className="h-3.5 w-3.5 text-primary" />
              <span className="text-foreground">Accessibility</span>
            </Tagline>

            <div className="section-title-gap-xl flex flex-col">
              <h1 className="heading-xl text-balance text-foreground">
                Accessibility Statement
              </h1>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
                Perspective Tester is committed to ensuring digital accessibility
                for people with disabilities. We continually work to improve the
                accessibility of our website in alignment with WCAG 2.2 AA
                standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-secondary section-padding-y border-b">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-xl border bg-card p-6 sm:p-10">
              <div className="flex flex-col gap-10">
                {/* Conformance Status */}
                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold text-foreground">
                    Conformance Status
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    The Web Content Accessibility Guidelines (WCAG) define
                    requirements for designers and developers to improve
                    accessibility for people with disabilities. It defines three
                    levels of conformance: Level A, Level AA, and Level AAA.
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    This website is fully conformant with WCAG 2.2 Level AA.
                    Fully conformant means that the content fully conforms to the
                    accessibility standard without any exceptions.
                  </p>
                </div>

                {/* Standards Applied */}
                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold text-foreground">
                    Standards Applied
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    This website has been designed and developed in accordance
                    with the following accessibility standards:
                  </p>
                  <ul className="flex flex-col gap-2 pl-5 text-sm text-muted-foreground list-disc">
                    <li>
                      WCAG 2.2 Level AA — Web Content Accessibility Guidelines
                    </li>
                    <li>
                      ADA Title III — Americans with Disabilities Act
                    </li>
                    <li>
                      Section 508 of the Rehabilitation Act
                    </li>
                    <li>
                      EN 301 549 — European Accessibility Standard
                    </li>
                  </ul>
                </div>

                {/* Technologies Used */}
                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold text-foreground">
                    Technologies Used
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    The accessibility of this website relies on the following
                    technologies to work with the particular combination of web
                    browser and assistive technologies or plugins installed on
                    your computer:
                  </p>
                  <ul className="flex flex-col gap-2 pl-5 text-sm text-muted-foreground list-disc">
                    <li>HTML5</li>
                    <li>WAI-ARIA</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                  </ul>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    These technologies are relied upon for conformance with the
                    accessibility standards used.
                  </p>
                </div>

                {/* Accessibility Features */}
                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold text-foreground">
                    Accessibility Features
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    This website includes the following accessibility features:
                  </p>
                  <ul className="flex flex-col gap-2 pl-5 text-sm text-muted-foreground list-disc">
                    <li>
                      Semantic HTML structure with proper heading hierarchy
                    </li>
                    <li>
                      Skip navigation link to bypass repeated content
                    </li>
                    <li>
                      ARIA landmarks for page regions (navigation, main, footer)
                    </li>
                    <li>
                      Descriptive alt text for all meaningful images
                    </li>
                    <li>
                      Visible focus indicators on all interactive elements
                    </li>
                    <li>
                      Form fields with associated labels and error messaging
                    </li>
                    <li>
                      Sufficient color contrast ratios (minimum 4.5:1 for text)
                    </li>
                    <li>
                      Responsive design that reflows at all viewport widths
                    </li>
                    <li>
                      Keyboard navigation support throughout the site
                    </li>
                    <li>
                      Minimum 24x24 CSS pixel target size for interactive elements
                    </li>
                  </ul>
                </div>

                {/* Assessment Methods */}
                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold text-foreground">
                    Assessment Methods
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Perspective Tester assessed the accessibility of this website
                    using the following methods:
                  </p>
                  <ul className="flex flex-col gap-2 pl-5 text-sm text-muted-foreground list-disc">
                    <li>
                      Manual testing with keyboard-only navigation
                    </li>
                    <li>
                      Screen reader testing (NVDA, JAWS, VoiceOver)
                    </li>
                    <li>
                      Automated accessibility scanning tools
                    </li>
                    <li>
                      Color contrast analysis using WCAG 2.2 standards
                    </li>
                    <li>
                      Code review against WCAG 2.2 Level AA success criteria
                    </li>
                  </ul>
                </div>

                {/* Feedback */}
                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold text-foreground">
                    Feedback
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    We welcome your feedback on the accessibility of this
                    website. If you encounter any accessibility barriers or have
                    suggestions for improvement, please contact us:
                  </p>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-4 w-4 text-primary" />
                    </div>
                    <a
                      href="mailto:kush@p15r.com"
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      kush@p15r.com
                    </a>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    We try to respond to accessibility feedback within 2
                    business days.
                  </p>
                </div>

                {/* Date */}
                <div className="flex flex-col gap-3 border-t pt-6">
                  <p className="text-xs text-muted-foreground">
                    This statement was last updated on{" "}
                    <time dateTime="2025-03-06">March 6, 2025</time>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background section-padding-y">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <h2 className="heading-lg text-foreground">
              Need Accessibility Help?
            </h2>
            <p className="text-muted-foreground text-base max-w-xl leading-relaxed">
              As accessibility experts, we can help your organization achieve and
              maintain WCAG 2.2 compliance across your digital properties.
            </p>
            <Link href="/contact">
              <Button size="lg">
                Get a Consultation
                <ArrowRight />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
