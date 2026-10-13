"use client";

import { useSection } from "@/components/cms/content-provider";
import defaults from "@/cms/content/privacy-page.json";

import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { Shield } from "lucide-react";

export function PrivacyPage() {
  const content = useSection("privacy-page", defaults);

  return (
    <>
      {/* Hero */}
      <section className="bg-background section-padding-y border-b">
        <div className="container-padding-x container mx-auto">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <Tagline>
              <Shield className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              <span className="text-foreground">{content.text_1}</span>
            </Tagline>
            <div className="section-title-gap-xl flex flex-col">
              <h1 className="heading-xl text-balance text-foreground">
                {content.heading_2}
              </h1>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
                {content.paragraph_3}{" "}
                <time dateTime="2025-03-06">{content.text_4}</time>
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
                    {content.heading_5}
                  </h2>
                  <p>{content.paragraph_6}</p>
                </div>

                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold text-foreground">
                    {content.heading_7}
                  </h2>
                  <p>{content.paragraph_8}</p>
                  <ul className="flex flex-col gap-2 pl-5 list-disc">
                    <li>
                      <strong className="text-foreground">
                        {content.text_9}
                      </strong>{" "}
                      {content.text_10}
                    </li>
                    <li>
                      <strong className="text-foreground">
                        {content.text_11}
                      </strong>{" "}
                      {content.text_12}
                    </li>
                    <li>
                      <strong className="text-foreground">
                        {content.text_13}
                      </strong>{" "}
                      {content.text_14}
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold text-foreground">
                    {content.heading_15}
                  </h2>
                  <p>{content.paragraph_16}</p>
                  <ul className="flex flex-col gap-2 pl-5 list-disc">
                    <li>{content.text_17}</li>
                    <li>{content.text_18}</li>
                    <li>{content.text_19}</li>
                    <li>{content.text_20}</li>
                    <li>{content.text_21}</li>
                  </ul>
                </div>

                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold text-foreground">
                    {content.heading_22}
                  </h2>
                  <p>{content.paragraph_23}</p>
                </div>

                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold text-foreground">
                    {content.heading_24}
                  </h2>
                  <p>{content.paragraph_25}</p>
                </div>

                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold text-foreground">
                    {content.heading_26}
                  </h2>
                  <p>{content.paragraph_27}</p>
                  <ul className="flex flex-col gap-2 pl-5 list-disc">
                    <li>{content.text_28}</li>
                    <li>{content.text_29}</li>
                    <li>{content.text_30}</li>
                    <li>{content.text_31}</li>
                  </ul>
                  <p>
                    {content.paragraph_32}{" "}
                    <a
                      href={content.href_33}
                      className="font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {content.text_34}
                    </a>
                    .
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold text-foreground">
                    {content.heading_35}
                  </h2>
                  <p>{content.paragraph_36}</p>
                </div>

                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold text-foreground">
                    {content.heading_37}
                  </h2>
                  <p>
                    {content.paragraph_38}{" "}
                    <a
                      href={content.href_39}
                      className="font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {content.text_40}
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
