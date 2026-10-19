export type CoverageCategory = "automatic" | "partial" | "manual";

export type CoverageIssue = {
  id: string;
  title: string;
  category: CoverageCategory;
  area: string;
  summary: string;
  lighthouse: string;
  axe: string;
  humanCheck: string;
  rules: string[];
  wcag: string[];
  sources: { label: string; href: string }[];
};

// Categories describe the specific checks below, not complete WCAG coverage.
// Rule selection is based on Lighthouse 13.5.0 and axe-core 4.14.0.
export const coverageIssues: CoverageIssue[] = [
  {
    id: "missing-image-alternatives",
    title: "Images without a text alternative",
    category: "automatic",
    area: "Images & content",
    summary:
      "An image has no accepted text alternative or decorative treatment. This is different from having an alternative that describes the image well.",
    lighthouse: "Checks image alternatives in its accessibility audit.",
    axe: "The image-alt rule runs by default.",
    humanCheck:
      "Confirm that informative images have useful descriptions and that images marked decorative really add no necessary information.",
    rules: ["image-alt"],
    wcag: ["1.1.1"],
    sources: [
      {
        label: "Deque: image alternatives",
        href: "https://dequeuniversity.com/rules/axe/4.14/image-alt",
      },
    ],
  },
  {
    id: "unnamed-controls",
    title: "Buttons, links, and fields without names",
    category: "automatic",
    area: "Forms & controls",
    summary:
      "An icon button, empty link, or form field has no name that assistive technology can use.",
    lighthouse:
      "Checks accessible names for supported buttons, links, and fields.",
    axe: "Naming rules for these elements run by default.",
    humanCheck:
      "Check whether each name describes the action or input. Fields also need adequate visible labels and instructions.",
    rules: ["button-name", "link-name", "label", "select-name"],
    wcag: ["4.1.2", "2.4.4"],
    sources: [
      {
        label: "Deque: button names",
        href: "https://dequeuniversity.com/rules/axe/4.14/button-name",
      },
      {
        label: "Deque: form labels",
        href: "https://dequeuniversity.com/rules/axe/4.14/label",
      },
      {
        label: "Deque: link names",
        href: "https://dequeuniversity.com/rules/axe/4.14/link-name",
      },
    ],
  },
  {
    id: "invalid-aria",
    title: "Invalid roles, states, and relationships",
    category: "automatic",
    area: "Structure & semantics",
    summary:
      "Examples include an unknown role, aria-expanded set to an invalid value, or a widget missing a required child role.",
    lighthouse: "Includes checks for several ARIA markup failures.",
    axe: "Checks supported roles, attributes, values, and required relationships.",
    humanCheck:
      "Operate the component. Valid markup does not prove that its announced state matches its behavior or that its keyboard controls work.",
    rules: [
      "aria-roles",
      "aria-valid-attr-value",
      "aria-prohibited-attr",
      "aria-required-children",
    ],
    wcag: ["4.1.2", "1.3.1"],
    sources: [
      {
        label: "Deque: ARIA values",
        href: "https://dequeuniversity.com/rules/axe/4.14/aria-valid-attr-value",
      },
      {
        label: "Deque: required child roles",
        href: "https://dequeuniversity.com/rules/axe/4.14/aria-required-children",
      },
      {
        label: "Deque: prohibited ARIA attributes",
        href: "https://dequeuniversity.com/rules/axe/4.14/aria-prohibited-attr",
      },
    ],
  },
  {
    id: "document-title-language",
    title: "Missing page titles or language information",
    category: "automatic",
    area: "Images & content",
    summary:
      "The document lacks a nonempty title, has no language declaration, or uses an invalid language code.",
    lighthouse: "Includes document-title and page-language checks.",
    axe: "These checks run by default.",
    humanCheck:
      "Confirm that the title identifies the page and that the declared language matches the content. Review passages in other languages too.",
    rules: ["document-title", "html-has-lang", "html-lang-valid", "valid-lang"],
    wcag: ["2.4.2", "3.1.1", "3.1.2"],
    sources: [
      {
        label: "Deque: document titles",
        href: "https://dequeuniversity.com/rules/axe/4.14/document-title",
      },
      {
        label: "Deque: page language",
        href: "https://dequeuniversity.com/rules/axe/4.14/html-has-lang",
      },
      {
        label: "Deque: valid language values",
        href: "https://dequeuniversity.com/rules/axe/4.14/valid-lang",
      },
    ],
  },
  {
    id: "list-table-markup",
    title: "Broken list structure and table references",
    category: "automatic",
    area: "Structure & semantics",
    summary:
      "A list has unsupported children, a list item lacks its required parent, or a table cell points to unsuitable header elements.",
    lighthouse: "Includes list structure and table header-reference checks.",
    axe: "These structural checks run by default.",
    humanCheck:
      "Check that visual lists are marked as lists and that table headers actually explain the right data. Correct syntax alone cannot establish meaning.",
    rules: ["list", "listitem", "td-headers-attr"],
    wcag: ["1.3.1"],
    sources: [
      {
        label: "Deque: list structure",
        href: "https://dequeuniversity.com/rules/axe/4.14/list",
      },
      {
        label: "Deque: table header references",
        href: "https://dequeuniversity.com/rules/axe/4.14/td-headers-attr",
      },
    ],
  },
  {
    id: "restricted-zoom",
    title: "Settings that restrict zoom",
    category: "automatic",
    area: "Vision & layout",
    summary:
      "Viewport settings disable or restrict the ability to enlarge the page.",
    lighthouse: "Explicitly enables the meta-viewport check.",
    axe: "Checks restrictive viewport settings by default.",
    humanCheck:
      "Enlarge the actual page and test its layout. Removing a zoom restriction does not prove that text and controls remain usable.",
    rules: ["meta-viewport"],
    wcag: ["1.4.4"],
    sources: [
      {
        label: "Deque: viewport settings",
        href: "https://dequeuniversity.com/rules/axe/4.14/meta-viewport",
      },
    ],
  },
  {
    id: "invalid-autocomplete",
    title: "Invalid autocomplete values",
    category: "automatic",
    area: "Forms & controls",
    summary:
      "A field has an autocomplete value that is malformed or not recognized.",
    lighthouse: "Explicitly enables autocomplete-valid.",
    axe: "Checks existing autocomplete values by default.",
    humanCheck:
      "Review fields collecting personal information for the right input-purpose information. This check does not find every missing autocomplete attribute.",
    rules: ["autocomplete-valid"],
    wcag: ["1.3.5"],
    sources: [
      {
        label: "Deque: autocomplete values",
        href: "https://dequeuniversity.com/rules/axe/4.14/autocomplete-valid",
      },
    ],
  },
  {
    id: "nested-controls",
    title: "Interactive controls nested inside controls",
    category: "automatic",
    area: "Forms & controls",
    summary:
      "A control whose child semantics are hidden contains another focusable control, such as a link inside a button.",
    lighthouse: "Lighthouse 13.5.0 explicitly disables nested-interactive.",
    axe: "Axe-core 4.14.0 enables nested-interactive by default.",
    humanCheck:
      "Check each control's keyboard operation and screen reader announcement after fixing the nesting.",
    rules: ["nested-interactive"],
    wcag: ["4.1.2"],
    sources: [
      {
        label: "Deque: nested interactive controls",
        href: "https://dequeuniversity.com/rules/axe/4.14/nested-interactive",
      },
      {
        label: "Lighthouse rule selection",
        href: "https://github.com/GoogleChrome/lighthouse/blob/v13.5.0/core/gather/gatherers/accessibility.js",
      },
    ],
  },
  {
    id: "scrollable-regions",
    title: "Scrollable regions without keyboard access",
    category: "automatic",
    area: "Keyboard & focus",
    summary:
      "A scrollable area has no suitable way to receive keyboard focus. Some cases need review because browser behavior differs.",
    lighthouse:
      "Lighthouse 13.5.0 explicitly disables scrollable-region-focusable.",
    axe: "Enabled by default in axe-core 4.14.0; some cases return review items.",
    humanCheck:
      "Use the keyboard to reach and scroll all content in the supported browsers, including Safari where relevant.",
    rules: ["scrollable-region-focusable"],
    wcag: ["2.1.1"],
    sources: [
      {
        label: "Deque: keyboard access to scrolling",
        href: "https://dequeuniversity.com/rules/axe/4.14/scrollable-region-focusable",
      },
      {
        label: "Lighthouse rule selection",
        href: "https://github.com/GoogleChrome/lighthouse/blob/v13.5.0/core/gather/gatherers/accessibility.js",
      },
    ],
  },
  {
    id: "additional-element-names",
    title: "Missing names beyond buttons and links",
    category: "automatic",
    area: "Structure & semantics",
    summary:
      "Linked image-map areas, eligible elements with an image role, disclosure summaries, and ARIA tabs need accessible names too.",
    lighthouse:
      "Lighthouse 13.5.0 explicitly disables these four dedicated naming rules.",
    axe: "Axe-core 4.14.0 enables all four rules by default.",
    humanCheck:
      "Check whether names explain their purpose. For tabs and disclosures, also test keyboard behavior and changes in state.",
    rules: ["area-alt", "role-img-alt", "summary-name", "aria-tab-name"],
    wcag: ["1.1.1", "2.4.4", "4.1.2"],
    sources: [
      {
        label: "Deque: image-map names",
        href: "https://dequeuniversity.com/rules/axe/4.14/area-alt",
      },
      {
        label: "Deque: image-role names",
        href: "https://dequeuniversity.com/rules/axe/4.14/role-img-alt",
      },
      {
        label: "Deque: disclosure summary names",
        href: "https://dequeuniversity.com/rules/axe/4.14/summary-name",
      },
      {
        label: "Deque: tab names",
        href: "https://dequeuniversity.com/rules/axe/4.14/aria-tab-name",
      },
      {
        label: "Lighthouse rule selection",
        href: "https://github.com/GoogleChrome/lighthouse/blob/v13.5.0/core/gather/gatherers/accessibility.js",
      },
    ],
  },
  {
    id: "meaningful-alternatives",
    title: "Names and descriptions that convey meaning",
    category: "partial",
    area: "Images & content",
    summary:
      "Text can exist without helping: a chart labeled “image,” a link named “click here,” or an informative image wrongly marked decorative.",
    lighthouse:
      "Can find missing names and alternatives, but cannot establish their meaning in context.",
    axe: "Naming rules check accepted alternatives, not complete content quality.",
    humanCheck:
      "Compare each name or description with the content and its purpose. Check that labels stay visible when a person enters information.",
    rules: ["image-alt", "link-name", "label"],
    wcag: ["1.1.1", "2.4.4", "3.3.2"],
    sources: [
      {
        label: "Deque: image alternatives",
        href: "https://dequeuniversity.com/rules/axe/4.14/image-alt",
      },
      {
        label: "W3C: labels and instructions",
        href: "https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html",
      },
    ],
  },
  {
    id: "contrast-and-color",
    title: "Contrast and information conveyed by color",
    category: "partial",
    area: "Vision & layout",
    summary:
      "Supported text contrast failures can be measured. Complex backgrounds, non-text visuals, and color-only meaning need separate review.",
    lighthouse: "Checks supported text contrast and some link-color patterns.",
    axe: "Checks supported text/background combinations; difficult cases can need review. Color contrast is unsupported in JSDOM.",
    humanCheck:
      "Inspect images of text, icons, borders, charts, and focus indicators. Check hover and error states, and ensure color is not the only cue.",
    rules: ["color-contrast", "link-in-text-block"],
    wcag: ["1.4.3", "1.4.11", "1.4.1"],
    sources: [
      {
        label: "Deque: text contrast limits",
        href: "https://dequeuniversity.com/rules/axe/4.14/color-contrast",
      },
      {
        label: "W3C: non-text contrast",
        href: "https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html",
      },
      {
        label: "W3C: use of color",
        href: "https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html",
      },
      {
        label: "axe-core supported environments",
        href: "https://github.com/dequelabs/axe-core/blob/v4.14.0/README.md",
      },
    ],
  },
  {
    id: "captions-and-media",
    title: "Captions, transcripts, and audio description",
    category: "partial",
    area: "Images & content",
    summary:
      "A caption track can exist while its words, timing, or sound descriptions are wrong. Other media alternatives also depend on the content.",
    lighthouse:
      "Includes video-caption, but an unresolved review item does not necessarily lower the score.",
    axe: "In axe-core 4.14.0, missing caption-track markup produces a review item because captions may use another method.",
    humanCheck:
      "Play the media. Check accurate, synchronized captions and the applicable transcript or audio-description requirement. A transcript does not automatically replace captions.",
    rules: ["video-caption"],
    wcag: ["1.2.1", "1.2.2", "1.2.3", "1.2.5"],
    sources: [
      {
        label: "axe caption-check implementation",
        href: "https://github.com/dequelabs/axe-core/blob/v4.14.0/lib/checks/media/caption-evaluate.js",
      },
      {
        label: "W3C: accessible media",
        href: "https://www.w3.org/WAI/media/av/",
      },
      {
        label: "Lighthouse result handling",
        href: "https://github.com/GoogleChrome/lighthouse/blob/v13.5.0/core/audits/accessibility/axe-audit.js",
      },
    ],
  },
  {
    id: "target-size",
    title: "Targets that are too small or crowded",
    category: "partial",
    area: "Forms & controls",
    summary:
      "Targets can fail the 24 by 24 CSS pixel size requirement without sufficient spacing or an applicable exception.",
    lighthouse: "Lighthouse 13.5.0 explicitly enables target-size.",
    axe: "Default-off in axe-core 4.14.0. Include wcag22aa or explicitly enable target-size.",
    humanCheck:
      "Review the criterion's exceptions and every state in which a target appears. Check the actual clickable area, including crowded controls.",
    rules: ["target-size"],
    wcag: ["2.5.8"],
    sources: [
      {
        label: "Deque: target size and spacing",
        href: "https://dequeuniversity.com/rules/axe/4.14/target-size",
      },
      {
        label: "W3C: target-size exceptions",
        href: "https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html",
      },
      {
        label: "axe rule selection behavior",
        href: "https://github.com/dequelabs/axe-core/blob/v4.14.0/lib/core/utils/rule-should-run.js",
      },
    ],
  },
  {
    id: "visible-label-name",
    title: "Visible labels missing from accessible names",
    category: "partial",
    area: "Forms & controls",
    summary:
      "A control visibly says “Search” but has an accessible name that omits “Search,” making it harder to identify with speech input.",
    lighthouse:
      "Lighthouse 13.5.0 runs the rule but hides it and gives it zero weight in the default report.",
    axe: "Label-content-name-mismatch is enabled by default starting in axe-core 4.14.0.",
    humanCheck:
      "Compare the visible label and accessible name. Then check whether the wording clearly describes the action; matching words alone do not establish that.",
    rules: ["label-content-name-mismatch"],
    wcag: ["2.5.3"],
    sources: [
      {
        label: "Lighthouse report configuration",
        href: "https://github.com/GoogleChrome/lighthouse/blob/v13.5.0/core/config/default-config.js",
      },
      {
        label: "axe-core 4.14 rule changes",
        href: "https://github.com/dequelabs/axe-core/releases/tag/v4.14.0",
      },
      {
        label: "W3C: label in name",
        href: "https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html",
      },
    ],
  },
  {
    id: "meaningful-structure",
    title: "Headings, reading order, and table meaning",
    category: "partial",
    area: "Structure & semantics",
    summary:
      "A page can have valid markup while its headings misdescribe sections, its reading order is confusing, or its table relationships are misleading.",
    lighthouse:
      "Checks selected structural patterns. Heading-level jumps are reported as a best practice.",
    axe: "Checks selected heading and table patterns; those checks do not establish a meaningful structure.",
    humanCheck:
      "Read sequentially and navigate headings and table cells with a screen reader. Compare their meaning with the visual layout. A heading jump alone is not always a WCAG failure.",
    rules: ["heading-order", "td-headers-attr"],
    wcag: ["1.3.1", "1.3.2", "2.4.6"],
    sources: [
      {
        label: "Deque: heading order",
        href: "https://dequeuniversity.com/rules/axe/4.14/heading-order",
      },
      {
        label: "W3C: meaningful sequence",
        href: "https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html",
      },
      {
        label: "W3C: information and relationships",
        href: "https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html",
      },
    ],
  },
  {
    id: "keyboard-operation",
    title: "Tasks that cannot be completed with a keyboard",
    category: "manual",
    area: "Keyboard & focus",
    summary:
      "A named button responds only to pointer clicks, a menu cannot be operated, or focus becomes trapped with no way out.",
    lighthouse:
      "A normal scan does not operate every control or complete a keyboard journey.",
    axe: "Related markup checks cannot establish full keyboard operation or the absence of traps.",
    humanCheck:
      "Complete key tasks using Tab, Shift+Tab, Enter, Space, arrow keys, and Escape where appropriate. Confirm that every component can be entered and exited.",
    rules: [],
    wcag: ["2.1.1", "2.1.2"],
    sources: [
      {
        label: "W3C: keyboard operation",
        href: "https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html",
      },
      {
        label: "W3C: no keyboard trap",
        href: "https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html",
      },
    ],
  },
  {
    id: "focus-management",
    title: "Focus that jumps, escapes, or disappears",
    category: "manual",
    area: "Keyboard & focus",
    summary:
      "Focus moves in a confusing order, escapes a modal, or is lost after a dialog closes or the page changes.",
    lighthouse:
      "Offers manual focus checks; a scan does not verify the complete interaction.",
    axe: "Can flag some focusability problems, but does not prove logical focus movement through a task.",
    humanCheck:
      "Trace focus before, during, and after interactions. Check dialog entry, containment where appropriate, exit, and return to a logical position.",
    rules: [],
    wcag: ["2.4.3"],
    sources: [
      {
        label: "W3C: focus order",
        href: "https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html",
      },
      {
        label: "Chrome: conducting an accessibility review",
        href: "https://web.dev/articles/how-to-review",
      },
    ],
  },
  {
    id: "visible-focus",
    title: "Focus indicators people cannot see",
    category: "manual",
    area: "Keyboard & focus",
    summary:
      "The focused control has no visible indicator or is entirely hidden behind a sticky header, footer, or overlay.",
    lighthouse:
      "A normal accessibility scan does not establish visible, unobscured focus across the page.",
    axe: "A passing text-contrast or focusability check does not verify the focus indicator.",
    humanCheck:
      "Inspect every focused control, including at enlarged views. WCAG AA prohibits complete obscuring by author-created content; the no-part-obscured requirement is AAA.",
    rules: [],
    wcag: ["2.4.7", "2.4.11"],
    sources: [
      {
        label: "W3C: visible focus",
        href: "https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html",
      },
      {
        label: "W3C: focus not obscured, minimum",
        href: "https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html",
      },
    ],
  },
  {
    id: "dynamic-announcements",
    title: "Updates a screen reader does not announce",
    category: "manual",
    area: "Forms & controls",
    summary:
      "Search-result counts, cart updates, or status messages about errors or success appear visually without an appropriate announcement.",
    lighthouse:
      "A scan does not establish that updates are announced at the right time.",
    axe: "The presence of aria-live or a valid role does not prove that a message is announced usefully.",
    humanCheck:
      "Trigger status messages with a screen reader and check that they are announced without moving focus. Check the timing and wording, and whether repeated announcements interrupt the task.",
    rules: [],
    wcag: ["4.1.3"],
    sources: [
      {
        label: "W3C: status messages",
        href: "https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html",
      },
    ],
  },
  {
    id: "form-error-recovery",
    title: "Form errors people cannot understand or fix",
    category: "manual",
    area: "Forms & controls",
    summary:
      "An error is vague, disconnected from its field, or offers no useful correction. A person may lose information while trying again.",
    lighthouse:
      "Naming checks do not establish useful error handling or recovery.",
    axe: "Can check some markup in an error state after it is exposed; it does not judge the whole recovery process.",
    humanCheck:
      "Submit empty, invalid, and valid data. Check error identification, correction suggestions, preserved information, and applicable confirmation or reversal steps.",
    rules: [],
    wcag: ["3.3.1", "3.3.3", "3.3.4"],
    sources: [
      {
        label: "W3C: error identification",
        href: "https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html",
      },
      {
        label: "W3C: error suggestions",
        href: "https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html",
      },
      {
        label: "W3C: error prevention",
        href: "https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data.html",
      },
    ],
  },
  {
    id: "resize-and-reflow",
    title: "Content that breaks when enlarged",
    category: "manual",
    area: "Vision & layout",
    summary:
      "Larger text overlaps controls, essential content is clipped, or a task requires unnecessary scrolling in both directions.",
    lighthouse:
      "A viewport check does not test whether the enlarged layout remains usable.",
    axe: "A scan at one size cannot establish usable resizing and reflow.",
    humanCheck:
      "Test text at 200% and horizontal-writing layouts at 320 CSS pixels wide, considering exceptions. A common reflow check uses 400% zoom from a 1280-pixel viewport.",
    rules: [],
    wcag: ["1.4.4", "1.4.10"],
    sources: [
      {
        label: "W3C: resizing text",
        href: "https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html",
      },
      {
        label: "W3C: reflow",
        href: "https://www.w3.org/WAI/WCAG22/Understanding/reflow.html",
      },
    ],
  },
  {
    id: "text-spacing",
    title: "Content lost when text spacing changes",
    category: "manual",
    area: "Vision & layout",
    summary:
      "A person's preferred spacing causes clipped text, overlapping controls, or lost functionality.",
    lighthouse:
      "A normal scan does not apply and inspect the complete text-spacing test.",
    axe: "A limited inline-spacing rule exists, but it does not establish that the adjusted layout remains usable.",
    humanCheck:
      "Apply line height 1.5, paragraph spacing 2 times font size, letter spacing 0.12 em, and word spacing 0.16 em together. Check for lost content and functionality.",
    rules: ["avoid-inline-spacing"],
    wcag: ["1.4.12"],
    sources: [
      {
        label: "W3C: text spacing",
        href: "https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html",
      },
      {
        label: "Deque: inline-spacing rule",
        href: "https://dequeuniversity.com/rules/axe/4.14/avoid-inline-spacing",
      },
    ],
  },
  {
    id: "hover-focus-content",
    title: "Tooltips and popovers that are hard to use",
    category: "manual",
    area: "Forms & controls",
    summary:
      "Extra content disappears too soon, cannot be dismissed, or vanishes when the pointer moves onto it.",
    lighthouse:
      "A snapshot can inspect exposed content but does not establish the full hover or focus behavior.",
    axe: "Scanning an open tooltip does not verify its dismissibility, hoverability, and persistence.",
    humanCheck:
      "Trigger content with both pointer and keyboard. Try moving onto it, dismissing it, and keeping it open long enough to use, subject to the criterion's exceptions.",
    rules: [],
    wcag: ["1.4.13"],
    sources: [
      {
        label: "W3C: content on hover or focus",
        href: "https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html",
      },
    ],
  },
  {
    id: "gestures-and-dragging",
    title: "Dragging or gestures with no usable alternative",
    category: "manual",
    area: "Forms & controls",
    summary:
      "A task requires dragging, multiple touch points, or a precise pointer path without an applicable exception or suitable alternative.",
    lighthouse:
      "A normal scan does not complete these gestures or compare alternative ways to perform the task.",
    axe: "Valid roles and names do not establish a working alternative to the gesture.",
    humanCheck:
      "Complete the operation using a simple pointer alternative, and with a keyboard where required. A keyboard alternative alone does not satisfy the dragging requirement.",
    rules: [],
    wcag: ["2.5.1", "2.5.7", "2.1.1"],
    sources: [
      {
        label: "W3C: pointer gestures",
        href: "https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures.html",
      },
      {
        label: "W3C: dragging movements",
        href: "https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html",
      },
    ],
  },
  {
    id: "time-and-motion",
    title: "Time limits and moving content people cannot control",
    category: "manual",
    area: "Images & content",
    summary:
      "A session expires before a person can finish, or moving and updating content cannot be paused when required.",
    lighthouse:
      "Some markup patterns can be flagged, but a scan does not evaluate every timeout, animation, or flashing sequence.",
    axe: "Limited timing and media rules do not replace testing the actual content and its controls.",
    humanCheck:
      "Exercise timeouts and pause, stop, hide, or extend controls. Review applicable exceptions. Flashing content may need a separate analysis of the sequence.",
    rules: [],
    wcag: ["2.2.1", "2.2.2", "2.3.1"],
    sources: [
      {
        label: "W3C: adjustable timing",
        href: "https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html",
      },
      {
        label: "W3C: pause, stop, hide",
        href: "https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html",
      },
      {
        label: "W3C: flash thresholds",
        href: "https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html",
      },
    ],
  },
  {
    id: "authentication-and-repeated-entry",
    title: "Login barriers and unnecessary repeated entry",
    category: "manual",
    area: "Forms & controls",
    summary:
      "Authentication depends on an unsupported memory task, or a process asks for the same information again without an applicable exception.",
    lighthouse:
      "A normal accessibility scan does not evaluate the whole authentication or multi-step process.",
    axe: "Field naming and autocomplete checks cannot establish an accessible sign-in or repeated-entry experience.",
    humanCheck:
      "Test password managers, copy and paste, verification alternatives, and reuse of previously supplied information. Check the exceptions in each criterion.",
    rules: [],
    wcag: ["3.3.8", "3.3.7"],
    sources: [
      {
        label: "W3C: accessible authentication",
        href: "https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html",
      },
      {
        label: "W3C: redundant entry",
        href: "https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html",
      },
    ],
  },
];
