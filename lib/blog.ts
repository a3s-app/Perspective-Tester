export type BlogContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  author: {
    name: string;
    role: string;
    photo: string;
  };
  date: string;
  dateLabel: string;
  readingTime: string;
  heroImage: string;
  heroAlt: string;
  heroCredit?: string;
  tags: string[];
  content: BlogContentBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "a-webinar-about-buildings-that-got-me-thinking-about-the-web",
    title: "A Webinar About Buildings That Got Me Thinking About the Web",
    description:
      "Neuroinclusive design in physical spaces and WCAG on the web turn out to be the same problem. A reflection on a Mid-Atlantic ADA Center webinar and the vocabulary that makes our accessibility work obvious.",
    author: {
      name: "Justin Sales",
      role: "Accounts Manager",
      photo: "/justin-sales.jpg",
    },
    date: "2026-06-25",
    dateLabel: "June 25, 2026",
    readingTime: "4 min read",
    heroImage: "/blog/neuroinclusive-design.jpg",
    heroAlt:
      "The vaulted glass-and-iron ceiling and arched stone galleries of a grand museum hall, light pouring through the skylights.",
    heroCredit: "Photo via Pexels",
    tags: ["Accessibility", "WCAG 2.2", "Neuroinclusion"],
    content: [
      {
        type: "paragraph",
        text: "I sat in on a Mid-Atlantic ADA Center webinar today, Neuroinclusive Design: Beyond Compliance Toward Sensory-Responsive Accessibility, presented by Piper Hutson, an arts-and-health specialist and neuroinclusion researcher. Most of the context was physical. Libraries, museums, workplaces, the buildings you walk into. I do digital accessibility, so on paper none of it was my world. But the whole time, I kept translating it into the web in my head.",
      },
      {
        type: "paragraph",
        text: "The phrase that stuck with me was right in the title. \u201CBeyond compliance.\u201D It sounds like extra credit you do after the legal box is checked. I read it the other way. Going beyond a minimum checklist is how we actually get a website compliant and keep it that way.",
      },
      {
        type: "heading",
        text: "Physical access and web access are the same problem",
      },
      {
        type: "paragraph",
        text: "Hutson talked about a museum building sensory access into the visit instead of bolting it on later. A gallery keeping EnChroma glasses on hand for colorblind visitors. Those are physical moves, but they support the same goals the ADA requires online: equal access and effective communication.",
      },
      {
        type: "paragraph",
        text: "On the web, that is WCAG. When we get a site working in line with how people actually read and navigate a page, we aren\u2019t going beyond compliance. We are meeting it in a way that holds up for real users. Same obligation, different way of building.",
      },
      {
        type: "heading",
        text: "Vocabulary is WCAG vocabulary",
      },
      {
        type: "paragraph",
        text: "Hutson framed neuroinclusive design around sensory and cognitive factors: lighting, acoustics, wayfinding, predictability, and sensory load. I sat there mapping each one to a success criterion.",
      },
      {
        type: "paragraph",
        text: "Predictability is WCAG\u2019s Predictable guideline. Focus that does not jump on its own. Settings that do not trigger something unexpected. Components that look the same and behave the same. On the web, that is Consistent Navigation, Consistent Identification, and the Consistent Help criterion added in 2.2.",
      },
      {
        type: "paragraph",
        text: "Wayfinding in a building is signage and orientation. On a page, it is clear headings, logical reading order, and knowing where you are in a process.",
      },
      {
        type: "paragraph",
        text: "Sensory load in a room is noise and light. On a site it is motion you cannot stop, audio that plays on its own, and content that flashes. Same overload, different input.",
      },
      {
        type: "paragraph",
        text: "A few more criteria do this work without anyone calling it neuroinclusion. Redundant Entry prevents a site from requiring people to retype what they already entered. Accessible Authentication kills login steps that test your memory. Use of Color is the EnChroma example on a screen: if color is the only way I flag an error, colorblind users miss it.",
      },
      {
        type: "paragraph",
        text: "The point is the optics. None of this shows up if we only treat accessibility as a screen-reader problem. It shows up when we design for the range of ways people process a page.",
      },
      {
        type: "heading",
        text: "The part that stuck with me",
      },
      {
        type: "paragraph",
        text: "At the end, the host said the real takeaway was the vocabulary, and that everyone could stand to be kinder to their own brain. I keep coming back to that.",
      },
      {
        type: "paragraph",
        text: "Finding violations is how we do the job, and it is what creates real change for people with disabilities. Every issue our team catches and fixes is a barrier someone no longer has to run into. What Hutson gave me is better language for the person on the other side of that fix. A contrast failure is someone who can finally read the page. A missing label is someone who can finally tell what a button does. The work does not change. The vocabulary just makes it obvious who it is for.",
      },
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
