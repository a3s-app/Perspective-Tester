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
  heroImage: string;
  heroAlt: string;
  heroCredit?: string;
  tags: string[];
  content: BlogContentBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "what-title-ii-compliance-looks-like-in-practice",
    title: "What Title II Compliance Looks Like in Practice",
    description:
      "A Texas State Library webinar on ADA Title II compliance made one thing clear: compliance is a program you run, not a project you finish. Notes on who owns the risk, why PDFs are the highest-cost area, how the 35.201 exemptions really work, and the lawsuit that could reinstate the original 2026 deadline.",
    author: {
      name: "Justin Sales",
      role: "Accounts Manager",
      photo: "/justin-sales.jpg",
    },
    date: "2026-07-01",
    dateLabel: "July 1, 2026",
    heroImage: "/blog/title-ii-compliance.jpg",
    heroAlt:
      "The sweeping curved balconies of a public library, tiers of book-lined shelves following the wall around a bright central atrium.",
    tags: ["ADA Title II", "WCAG 2.1 AA", "Government Compliance"],
    content: [
      {
        type: "paragraph",
        text: "The Texas State Library and Archives Commission hosted a webinar last week that walked a roomful of public librarians through the operational realities of ADA Title II compliance. Marie Cohan, the digital accessibility officer at the Texas Department of Information Resources, reviewed the pre-submitted questions and addressed them one by one. The audience was librarians. Every answer applies to any public entity running a website with documents on it. By the end of the hour, all of it pointed in one direction: compliance is a program you run, not a project you finish.",
      },
      {
        type: "heading",
        text: "It starts with who owns what",
      },
      {
        type: "paragraph",
        text: "Most public entities assume that a vendor who builds the website also owns the compliance. Wrong. The DOJ Title II rule covers anything a government provides or makes available, including through vendors. The vendor is responsible for making the product accessible. The entity owns the compliance. Hire whoever you want to do the work. The obligation stays with you.",
      },
      {
        type: "paragraph",
        text: "Once you accept that, the rest of the conversation changes. How you publish content, how you manage what already exists on your site, and how you evaluate vendors. All of it flows from one fact: the entity holds the risk.",
      },
      {
        type: "heading",
        text: "Which means your content decisions carry weight",
      },
      {
        type: "paragraph",
        text: "Marie called PDFs the highest-cost area of Title II compliance. We see the same thing working with government clients. A single entity can have thousands of documents on its site, and each belongs to the entity, whether a clerk or a vendor created it.",
      },
      {
        type: "paragraph",
        text: "She raised a question most government offices never stop to ask. When you are about to publish something new, why is it a PDF? Most of the time, habit. Library policies, fee schedules, event announcements. They end up as PDFs because the last person did it that way. The format decision is itself an accessibility decision, and it happens before any remediation work starts. An HTML page or a protected Word document carries the same content with a fraction of the accessibility overhead. Making format selection a deliberate part of the content workflow prevents problems that never need to exist.",
      },
      {
        type: "paragraph",
        text: "For the documents already on the site, her guidance was practical. Pull your analytics. Ask IT which pages and documents get the most hits. Start there. Library card instructions, fee structures, room reservations, registration forms. Those are what people open, and almost none of them will qualify for an exemption.",
      },
      {
        type: "paragraph",
        text: "The exemptions are real, but they do not work the way most people assume. The rule lists them under 28 CFR 35.201. None of them apply to whole groups of files. Each document must pass the full test on its own, and the decision must be written down. An exemption without supporting documentation will not hold up.",
      },
      {
        type: "paragraph",
        text: "Pre-existing conventional electronic documents under 35.201(b) are the ones most entities reach for first. A pre-deadline PDF qualifies here only if it is not currently used to apply for, access, or participate in a government service. A library card application or a fee schedule is an active service document. It does not qualify no matter how old it is. Marie told the audience to prioritize exactly these kinds of files, which means the exemption does not cover most of the work.",
      },
      {
        type: "paragraph",
        text: "Archived web content under 35.201(a) is narrower still. Four conditions, all required: the content pre-dates the compliance deadline, exists solely for reference or recordkeeping, has never been altered after archiving, and sits in a clearly labeled archive area. Marie confirmed this and added a detail she received directly from the ADA Southwest Region office. Digitizing old material, such as yearbooks, qualifies for the exemption as long as you leave the content untouched. Metadata is fine. Edit the actual content, and it becomes a new document subject to WCAG 2.1 AA.",
      },
      {
        type: "paragraph",
        text: "Other exemptions cover third-party content, individualized secured documents, and pre-existing social media posts. One rule overrides all of them. A person with a disability requests an accessible version; the entity provides one. No discretion. The exemption is a deferral that can be called in at any time.",
      },
      {
        type: "heading",
        text: "Which means your procurement has to reflect it",
      },
      {
        type: "paragraph",
        text: "The compliance obligation does not move based on who builds the product. So one of the best ways to mitigate your risk is to start before you buy. Marie recommended requiring an Accessibility Conformance Report based on VPAT 2.4 or higher in all solicitation language. Older VPATs go stale fast. An ACR up front costs less than a remediation project later, and far less than a complaint.",
      },
      {
        type: "paragraph",
        text: "Entities with an accessibility program built on operational standards catch vendor gaps during routine audit cycles. Entities without one find out when someone files a complaint.",
      },
      {
        type: "heading",
        text: "And the timeline makes all of it more urgent",
      },
      {
        type: "paragraph",
        text: "The DOJ published an interim final rule on April 20, 2026 pushing the compliance deadlines out a year. Governments serving 50,000 people or more now have until April 26, 2027. Smaller entities and special districts have until April 26, 2028.",
      },
      {
        type: "paragraph",
        text: "Nothing else changed. The standard is still WCAG 2.1 AA. The scope is the same. The underlying Title II duty to communicate effectively with people with disabilities never paused.",
      },
      {
        type: "paragraph",
        text: "On May 21, 2026, the National Federation of the Blind filed suit against DOJ and HHS in the U.S. District Court for the District of Maryland, represented by Democracy Forward and Brown, Goldstein & Levy. The case is National Federation of the Blind v. DOJ et al. NFB argues the agencies bypassed required public notice-and-comment procedures and acted arbitrarily. They want the court to vacate the extensions and restore the original deadlines from the 2024 final rules.",
      },
      {
        type: "paragraph",
        text: "The complaint names real people harmed by the delay. NFB members were unable to complete unemployment applications, register businesses, enroll in classes, or access telehealth because the websites they needed were not accessible. Not hypothetical. People are waiting for the access they were promised.",
      },
      {
        type: "paragraph",
        text: "Marie laid out what happens next. If the court rules in favor of NFB, the original compliance deadline of April 24, 2026, will be reinstated. Already passed. Any content published after it falls under the original rule. No grace period. Entities that slowed down after the extension would not just be behind. They would be out of compliance retroactively.",
      },
      {
        type: "paragraph",
        text: "She called it risk mitigation. I think that undersells it. The DOJ’s own financial analysis acknowledged most public entities were not ready to meet the original deadline. The extension exists because of that gap. The court removes it, and those same entities are expected to have been compliant since April. Nobody wants to be in that position. The only move is to keep working as though the deadline never changed.",
      },
      {
        type: "heading",
        text: "What holds up",
      },
      {
        type: "paragraph",
        text: "Do not try to guess which deadline holds. Build a program that does not depend on deadlines.",
      },
      {
        type: "paragraph",
        text: "Marie said something toward the end that I keep coming back to. The entities that document their work are in a fundamentally different position from those that do not. Complaint, mediation, or just keeping up with your own content. Documentation changes the conversation every time.",
      },
      {
        type: "paragraph",
        text: "The strongest public entities are those that run accessibility as an operational standard. Policy, regular audits, documented remediation, continuous progress. You own the website. You own the risk. The work you can show will always matter more than the work you say you did.",
      },
    ],
  },
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

/** Estimated reading time, derived from word count (~200 wpm). */
export function getReadingTime(post: BlogPost): string {
  const words = [post.title, ...post.content.map((block) => block.text)]
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

/** URL-safe id for a heading, used for in-page anchors. */
export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
