"use client";

import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { Shield } from "lucide-react";

export function PrivacyPage() {
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
                Privacy Policy
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
                    Introduction
                  </h2>
                  <p>
                    Perspective Tester (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
                    &ldquo;us&rdquo;) respects your privacy and is committed to
                    protecting the personal information you share with us. This
                    Privacy Policy describes how we collect, use, and safeguard
                    information when you visit our website at
                    perspectivetester.com.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold text-foreground">
                    Information We Collect
                  </h2>
                  <p>We may collect the following types of information:</p>
                  <ul className="flex flex-col gap-2 pl-5 list-disc">
                    <li>
                      <strong className="text-foreground">
                        Contact Information:
                      </strong>{" "}
                      Name, email address, phone number, and organization name
                      that you voluntarily provide through our contact form.
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Project Details:
                      </strong>{" "}
                      Service interests, budget range, website URL, and project
                      descriptions submitted through our inquiry form.
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Usage Information:
                      </strong>{" "}
                      General website analytics such as pages visited, time
                      spent, and referral sources. This data is collected in
                      aggregate and does not personally identify you.
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold text-foreground">
                    How We Use Your Information
                  </h2>
                  <p>We use the information we collect to:</p>
                  <ul className="flex flex-col gap-2 pl-5 list-disc">
                    <li>Respond to your inquiries and consultation requests</li>
                    <li>Provide accessibility services and support</li>
                    <li>
                      Communicate with you about our products, services, and
                      updates
                    </li>
                    <li>Improve our website and user experience</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>

                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold text-foreground">
                    Information Sharing
                  </h2>
                  <p>
                    We do not sell, trade, or rent your personal information to
                    third parties. We may share information with trusted service
                    providers who assist us in operating our website and
                    delivering services, provided they agree to keep your
                    information confidential.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold text-foreground">
                    Data Security
                  </h2>
                  <p>
                    We implement industry-standard security measures to protect
                    your personal information from unauthorized access,
                    alteration, disclosure, or destruction. However, no method of
                    electronic transmission or storage is completely secure, and
                    we cannot guarantee absolute security.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold text-foreground">
                    Your Rights
                  </h2>
                  <p>You have the right to:</p>
                  <ul className="flex flex-col gap-2 pl-5 list-disc">
                    <li>
                      Request access to the personal information we hold about
                      you
                    </li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt out of marketing communications</li>
                  </ul>
                  <p>
                    To exercise any of these rights, please contact us at{" "}
                    <a
                      href="mailto:kush@p15r.com"
                      className="font-medium text-foreground hover:text-primary transition-colors"
                    >
                      kush@p15r.com
                    </a>
                    .
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold text-foreground">
                    Changes to This Policy
                  </h2>
                  <p>
                    We may update this Privacy Policy from time to time. Any
                    changes will be posted on this page with a revised
                    &ldquo;Last updated&rdquo; date. We encourage you to review
                    this page periodically.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold text-foreground">
                    Contact Us
                  </h2>
                  <p>
                    If you have questions or concerns about this Privacy Policy,
                    please contact us at{" "}
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
