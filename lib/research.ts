/**
 * Research index.
 *
 * Research pieces are evidence reviews, not marketing. Each entry records the
 * kinds of sources it rests on and the date it was last checked, because both
 * are part of the claim the page is making. Add new pieces here; the index
 * page and the sitemap both read from this list.
 */

export type SourceKind =
  | "Peer-reviewed research"
  | "Court documents"
  | "SEC filings"
  | "Federal regulatory orders"
  | "Survey data"
  | "Vendor documentation"
  | "Community resolutions";

export interface ResearchPiece {
  slug: string;
  title: string;
  /** Short summary for the index card. */
  summary: string;
  /** What question the piece set out to answer. */
  question: string;
  /** ISO date the piece was first published. */
  published: string;
  /** ISO date the sources were last verified. */
  lastReviewed: string;
  lastReviewedLabel: string;
  /** Number of numbered references on the page. */
  referenceCount: number;
  sourceKinds: SourceKind[];
  subject: string;
}

export const researchPieces: ResearchPiece[] = [
  {
    slug: "acquia",
    title: "Acquia and Web Governance: The Documentary Record",
    summary:
      "Acquia is routinely grouped with overlay vendors and does not belong there. What its accessibility product actually does, what it gets right, what its subscription agreement and accessibility statement say, where PageAssist sits, and the limits that remain.",
    question:
      "What is Acquia's accessibility product, what does it genuinely get right, and what are its real limits?",
    published: "2026-08-18",
    lastReviewed: "2026-08-18",
    lastReviewedLabel: "18 August 2026",
    referenceCount: 21,
    sourceKinds: [
      "Vendor documentation",
      "Peer-reviewed research",
      "Federal regulatory orders",
      "Survey data",
      "Community resolutions",
    ],
    subject: "Acquia, Inc. and Acquia Web Governance (formerly Monsido / Acquia Optimize)",
  },
  {
    slug: "accessibility-overlays",
    title: "Accessibility Overlays: The Documentary Record",
    summary:
      "What can actually be established about accessibility overlay products, and about the two most widely deployed vendors, AudioEye and UserWay. Covers what each company's own contracts and filings say, the litigation each faces, where the research finds overlays genuinely help, and which widely repeated criticisms do not survive checking.",
    question:
      "Do accessibility overlays deliver conformance with accessibility standards, and what does the documentary record show about AudioEye and UserWay in particular?",
    published: "2026-08-17",
    lastReviewed: "2026-08-17",
    lastReviewedLabel: "17 August 2026",
    referenceCount: 25,
    sourceKinds: [
      "Peer-reviewed research",
      "Court documents",
      "SEC filings",
      "Federal regulatory orders",
      "Survey data",
      "Vendor documentation",
      "Community resolutions",
    ],
    subject: "AudioEye, Inc. (Nasdaq: AEYE), UserWay Inc. and the overlay category",
  },
];

export function getAllResearch(): ResearchPiece[] {
  return [...researchPieces].sort((a, b) =>
    b.published.localeCompare(a.published),
  );
}

export function getResearchBySlug(slug: string): ResearchPiece | undefined {
  return researchPieces.find((piece) => piece.slug === slug);
}
