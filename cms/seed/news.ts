export interface NewsLink {
  /** Exact substring of the paragraph text to turn into a link. */
  text: string;
  /** Internal paths ("/a3s") open in place; absolute URLs open in a new tab. */
  href: string;
}

export type NewsContentBlock =
  /** `level` defaults to 2; use 3 for a subheading nested under the one above. */
  | { type: "heading"; text: string; level?: 2 | 3 }
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
  /** Intrinsic pixel size of the hero, used for social cards and matte layout. */
  heroSize: { width: number; height: number };
  /**
   * Set for a hero that is a designed graphic rather than photography: instead
   * of filling the header and the index cards, the image is shown whole
   * against `background` — ideally the graphic's own backdrop, so the matte is
   * invisible.
   */
  heroMatte?: { background: string };
  heroCredit?: { text: string; href?: string };
  content: NewsContentBlock[];
}

const EVENT_URL = "https://events.govtech.com/Colorado-Digital-Government-Summit";

const UAC_URL = "https://www.utahcounties.org/";

export const newsItems: NewsItem[] = [
  {
    slug: "can-you-prove-youre-compliant-2026-uac-annual-convention",
    title:
      "Can You Prove You’re Compliant? Notes from the 2026 UAC Annual Convention",
    description:
      "We exhibited at the Utah Association of Counties Annual Convention in Provo and had a few minutes in front of the county IT directors. What we shared: automated tools find problems, but they cannot prove the problems are gone. Proof is a record — a test plan, logged findings, fixes, re-tests, and an Accessibility Conformance Report.",
    date: "2026-09-15",
    dateLabel: "September 15, 2026",
    tags: ["Events", "Utah", "ADA Title II"],
    heroImage: "/news/uac-annual-convention-2026.jpg",
    heroAlt:
      "A collection of five photos from the 2026 Utah Association of Counties convention: 1. Justin Salas at the Perspective Tester booth with service dog Ember. 2. presenting a slide on why automated testing can’t prove issues are fixed. 3, 4, and 5, talking with attendees on the exhibit floor. Perspective Tester and UAC logos below.",
    heroSize: { width: 1080, height: 1080 },
    // The collage sits on its own teal backdrop, so matting on the same colour
    // keeps it whole in the header and on the index cards without visible bars.
    heroMatte: { background: "#0f404e" },
    content: [
      {
        type: "paragraph",
        text: "Last week, we exhibited at the Utah Association of Counties Annual Convention in Provo. We spent three days talking with county officials and IT staff from across the state, and we were given a few minutes in front of the county IT directors. Thank you to UAC for hosting us, and to everyone who stopped by the booth to say hello to Ember.",
        links: [
          {
            text: "Utah Association of Counties Annual Convention",
            href: UAC_URL,
          },
        ],
      },
      { type: "heading", text: "Here is what we shared with the IT directors." },
      {
        type: "heading",
        level: 3,
        text: "Automated tools find problems. It cannot prove they’re gone.",
      },
      {
        type: "paragraph",
        text: "Automated accessibility scanners are a common part of a county’s toolkit, and for good reason. They cover a lot of pages quickly, they are consistent, they catch mechanical errors fast, and they flag regressions when something breaks after an update.",
      },
      {
        type: "paragraph",
        text: "The DOJ’s Title II web rule sets a standard, WCAG 2.1 AA. It does not set a method. Many of the criteria in that standard require a human to judge them, things like keyboard focus, whether the reading order makes sense, or whether a link’s text actually tells you where it goes. A scanner cannot evaluate those.",
      },
      {
        type: "paragraph",
        text: "A scan produces a list of the errors it was built to detect, on the pages it was pointed at, on the day it ran. That list helps you find and fix the low-hanging fruit. It is not evidence that the site meets the standard, and if a complaint or an audit comes after the deadline, evidence is what will be asked for.",
      },
      { type: "heading", text: "What proof looks like" },
      {
        type: "paragraph",
        text: "Proof is a record. It starts with a test plan and logged findings. Each finding gets fixed, then re-tested to confirm the fix holds. The results are documented in an Accessibility Conformance Report, or ACR, which shows criterion by criterion how the site was tested and where it stands.",
        links: [
          {
            text: "Accessibility Conformance Report, or ACR",
            href: "/a3s",
          },
        ],
      },
      { type: "heading", text: "Why it matters now" },
      {
        type: "paragraph",
        text: "Under the rule, counties serving 50,000 or more people must meet WCAG 2.1 AA by April 26, 2027. Counties under 50,000 have until April 26, 2028. Testing, fixing, and re-testing a full website and its documents takes time and expertise, and you need to know whether these fixes were implemented correctly.",
      },
      { type: "heading", text: "How we can help" },
      {
        type: "paragraph",
        text: "We bridge automated scanning and actual compliance. Our certified testers do the manual work scanners cannot, and we produce the record showing the work was done.",
      },
      {
        type: "paragraph",
        text: "We are proud to be working alongside Utah counties as they prepare for Title II, and we look forward to seeing everyone again next year.",
      },
    ],
  },
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
    heroSize: { width: 1600, height: 920 },
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
