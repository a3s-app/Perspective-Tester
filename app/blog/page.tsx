import type { Metadata } from "next";
import { BlogIndexPage } from "@/components/pro-blocks/landing-page/blog-index-page";
import { SiteShell } from "@/components/pro-blocks/landing-page/site-shell";

export const metadata: Metadata = {
  title: "Blog - Notes on Digital Accessibility",
  description:
    "Field notes from the Perspective Tester team on WCAG 2.2, accessibility remediation, and building digital experiences that work for real users.",
  keywords: [
    "accessibility blog",
    "WCAG 2.2",
    "digital accessibility",
    "neuroinclusive design",
    "accessibility insights",
  ],
  openGraph: {
    title: "Blog | Perspective Tester",
    description:
      "Field notes from our team on WCAG 2.2, remediation, and building accessible digital experiences.",
    url: "/blog",
  },
};

export default function Page() {
  return (
    <SiteShell>
      <BlogIndexPage />
    </SiteShell>
  );
}
