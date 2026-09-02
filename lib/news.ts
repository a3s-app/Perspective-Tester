export interface NewsLink {
  /** Exact substring of the paragraph text to turn into a link. */
  text: string;
  /** Internal paths ("/a3s") open in place; absolute URLs open in a new tab. */
  href: string;
}

export type NewsContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string; links?: NewsLink[] };

export interface NewsItem {
  slug: string;
  title: string;
  description: string;
  /** ISO date, used for sorting, <time> and structured data. */
  date: string;
  dateLabel: string;
  tags: string[];
  heroImage: string;
  heroAlt: string;
  heroCredit?: { text: string; href?: string };
  content: NewsContentBlock[];
}

const EVENT_URL = "https://events.govtech.com/Colorado-Digital-Government-Summit";

export const newsItems: NewsItem[] = [
  {
    slug: "proud-to-sponsor-the-colorado-digital-government-summit",
    title: "We Are Proud to Sponsor the Colorado Digital Government Summit",
    description:
      "Perspective Tester is a sponsor of the Colorado Digital Government Summit, hosted by Government Technology in Denver, and is co-sponsoring the opening keynote with ANM. Colorado set the precedent for digital accessibility, and it is where our A3S program was born.",
    date: "2026-09-02",
    dateLabel: "September 2, 2026",
    tags: ["Sponsorship", "Colorado", "ADA Title II"],
    heroImage: "/news/colorado-digital-government-summit.jpg",
    heroAlt:
      "Aerial view of downtown Denver at sunset, with the Rocky Mountains along the horizon.",
    heroCredit: {
      text: "Photo by Nils Huenerfuerst on Unsplash",
      href: "https://unsplash.com/photos/the-sun-is-setting-over-a-large-city-OVE2SA0TVJE",
    },
    content: [
      {
        type: "paragraph",
        text: "We are proud to be a Sponsor of the Colorado Digital Government Summit, hosted by Government Technology in Denver. The summit brings together technology leaders from state agencies, cities, counties, and special districts across Colorado.",
        links: [
          {
            text: "Colorado Digital Government Summit",
            href: EVENT_URL,
          },
        ],
      },
      {
        type: "paragraph",
        text: "We are also proud to co-sponsor the opening keynote with ANM: Phil Hansen’s “Embrace the Shake: Transforming Limitations into Opportunities.” The message that limitations can become the starting point for something better is one we live every day.",
      },
      {
        type: "paragraph",
        text: "This year’s topics include improving the constituent experience, modernizing with purpose and agility, and delivering more with less. Every one of those comes back to the same question: can the people you serve actually use what you build? That is the question our A3S program answers, and we are proud to talk about it at this year’s event. A3S, our Accessibility as a Service program, provides agencies with ongoing audits and remediation so their sites stay accessible over time rather than drifting after a one-time fix.",
        links: [
          {
            text: "A3S, our Accessibility as a Service program",
            href: "/a3s",
          },
        ],
      },
      { type: "heading", text: "Why Colorado" },
      {
        type: "paragraph",
        text: "Colorado set a precedent. With HB21-1110, the state made digital accessibility a legal requirement for all public entities and gave people with disabilities a way to enforce that requirement. Colorado acted early, and its agencies have been doing the work for years.",
      },
      {
        type: "paragraph",
        text: "Colorado is also where A3S was born. We built the program alongside Colorado counties that needed a way to meet the state’s requirements and keep meeting them, not just pass an audit once. The teams we work with here are not asking whether accessibility applies to them. They are asking how to do it well. That is exactly what it takes to maintain a defensible accessibility program.",
      },
      { type: "heading", text: "The rest of the country is catching up" },
      {
        type: "paragraph",
        text: "The U.S. Department of Justice has finalized its Title II ADA rule covering websites and mobile apps for all state and local governments. It uses the same WCAG 2.1 Level AA standard Colorado already requires. The compliance dates are April 26, 2027 for entities serving populations of 50,000 or more and April 26, 2028 for smaller entities and special districts.",
      },
      {
        type: "paragraph",
        text: "Every public entity in the country now has a deadline. Colorado had a head start.",
      },
      { type: "heading", text: "About Perspective Tester" },
      {
        type: "paragraph",
        text: "Perspective Tester provides WCAG audits, ADA Title II and Section 508 compliance support, and document remediation for government and enterprise clients.",
      },
      {
        type: "paragraph",
        text: "If a complaint landed on your desk tomorrow, could you show what your agency has done about accessibility? If the honest answer is “not sure,” that is where A3S starts. We audit, we fix, and we document every step, so you have a record of real progress instead of a scramble.",
      },
      {
        type: "paragraph",
        text: "A defensible program should not break the budget, and it does not have to. Let’s talk.",
        links: [{ text: "Let’s talk.", href: "/contact" }],
      },
      {
        type: "paragraph",
        text: "Read more about the event at: Colorado Digital Government Summit",
        links: [
          {
            text: "Colorado Digital Government Summit",
            href: EVENT_URL,
          },
        ],
      },
    ],
  },
];

/** Every news item, newest first. */
export function getAllNews(): NewsItem[] {
  return [...newsItems].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((item) => item.slug === slug);
}

/** Estimated reading time, derived from word count (~200 wpm). */
export function getNewsReadingTime(item: NewsItem): string {
  const words = [item.title, item.description, ...item.content.map((block) => block.text)]
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}
