// Text alternatives for the homepage videos (WCAG 1.2.3, prerecorded video).
//
// Each video has its own alternative covering both what is said and what is
// shown on screen, with on-screen text quoted as it appears. Speech is clean
// verbatim (fillers and false starts dropped, wording kept), reconciled
// between YouTube's captions and a Whisper transcription of the audio. A video
// whose `alternative` is null renders no disclosure, and
// `pnpm check:video-alternatives` fails until every video has one.

export type AlternativeLine =
  | { kind: "speech"; speaker: string; text: string }
  | { kind: "visual"; text: string };

export type HomepageVideo = {
  id: string;
  title: string;
  description: string;
  alternative: AlternativeLine[] | null;
};

export const homepageVideos: HomepageVideo[] = [
  {
    id: "aR2hLNmyT9U",
    title: "Justin's Perspective on Blindness",
    description:
      "Justin Salas, our Accessibility Champion at Perspective Tester, guides us through his world of web navigation.",
    alternative: [
      {
        kind: "visual",
        text: "Justin sits facing the camera in a dark T-shirt against a plain wall, hands clasped, a tattoo sleeve on his left forearm.",
      },
      {
        kind: "speech",
        speaker: "Justin Salas",
        text: "My name is Justin. I work for Perspective Tester, and I'm blind or low vision, and I'm a native assistive technology user. My vision presents with no central vision and limited peripheral vision. Without assistive technology, I certainly don't think I would be where I am today.",
      },
      {
        kind: "visual",
        text: "Over Justin's shoulder: he leans in to a large monitor showing the Google home page, then gestures at it from a normal viewing distance. The screen zooms in until one letter of the Google logo and the mouse pointer fill the whole display.",
      },
      {
        kind: "speech",
        speaker: "Justin Salas",
        text: "You know, I can't see the screen when it's back this far. I see a little bit of light and contrast in certain places, but I really need to get down on the individual letter size to see what things are. I use screen readers and zoom and all the different tools to help me navigate life and to be as independent as I possibly can. And so when it doesn't work, it's extremely frustrating. It's pretty limiting, but I can still function and get around.",
      },
      {
        kind: "visual",
        text: "Back at the monitor, magnified so far that the mouse pointer, then the text cursor, fills the screen while Justin types.",
      },
      {
        kind: "speech",
        speaker: "Justin Salas",
        text: "With nothing in the middle, I can't see my screens very well. I use assistive technology in a myriad of different ways. When I'm using my computer, I'm zooming down to individual letters and navigating my screens that way.",
      },
      {
        kind: "visual",
        text: "Justin pans across a magnified website a few letters at a time: part of a navigation link, “Join now” and “Sign in” buttons, a search field, and a pale “Get tickets” button that barely stands out from its background.",
      },
      {
        kind: "speech",
        speaker: "Justin Salas",
        text: "Sometimes it's really difficult to read long paragraphs of text with one letter on the screen at a time, and so I use VoiceOver at a pretty fast speaking rate. It's really important that a lot of websites and mobile apps work well with screen readers, to have it read it to me.",
      },
      {
        kind: "visual",
        text: "Justin browses a web page with a photo of a man holding a guitar, then zooms in on a heading beginning “Our” with the text cursor over it.",
      },
      {
        kind: "speech",
        speaker: "Justin Salas",
        text: "It's really amazing, but when it doesn't work, it creates huge limiting factors.",
      },
      {
        kind: "visual",
        text: "Justin, seated facing the camera again.",
      },
      {
        kind: "speech",
        speaker: "Justin Salas",
        text: "My name's Justin, and this is my perspective.",
      },
    ],
  },
  {
    id: "usiTK_CvwkA",
    title: "About Perspective Tester",
    description:
      "Hear the story about the inspiration behind Perspective Tester.",
    alternative: [
      {
        kind: "visual",
        text: "Text on a dark blue screen: “In the US, about 74.6 million people have some type of physical disability.” Source: John Hopkins Medicine, “Statistics of Disability,” 2013.",
      },
      {
        kind: "visual",
        text: "Two people sit at a table with a laptop. Text: “Globally, more than 1 billion people use assistive technology.” Source: World Health Organization. Then: “23% percent of disabled respondents say they ‘never’ go online.” Source: Pew Research.",
      },
      {
        kind: "speech",
        speaker: "Jason McKee",
        text: "First time I met someone who was disabled and watched them use the internet through assistive technology, I realized that I had never considered how these people were engaging online. It changed the way I thought about getting a message across to an audience. It's changed the way I thought about how websites should be built, how users should interact with apps. It really transformed my understanding of digital as a whole.",
      },
      {
        kind: "visual",
        text: "Jason, a man with short fair hair in a light shirt, speaks in a blue-lit room, intercut with people typing code, using a phone, and working on laptops.",
      },
      {
        kind: "speech",
        speaker: "Jason McKee",
        text: "So from that point on, I was pretty much invested in not only learning more about this new perspective, but also in helping corporations bridge this gap that a lot of them are not even aware exists.",
      },
      { kind: "visual", text: "Music." },
      {
        kind: "speech",
        speaker: "Jason McKee",
        text: "My name is Jason McKee, and I'm an accessibility consultant.",
      },
      {
        kind: "visual",
        text: "On-screen title: “Accessibility Consultant, Jason McKee.” The Perspective Tester logo appears.",
      },
      {
        kind: "visual",
        text: "A woman shops for clothes online. Text: “Accessibility is the practice of making your websites usable by as many people as possible.”",
      },
      {
        kind: "speech",
        speaker: "Jason McKee",
        text: "Well, when I learned what accessibility was, I realized that I wanted to be part of the solution. I realized it's a large problem. It affects up to a billion people, and it affects everything you do online, on your phone, your computer, whatnot.",
      },
      {
        kind: "visual",
        text: "A world map. Text: “15% of the world's population has some sort of disability.” Source: World Health Organization. Then hands typing on a laptop, and a close-up of a screen reflected in someone's glasses.",
      },
      {
        kind: "speech",
        speaker: "Jason McKee",
        text: "Perspective Tester is an accessibility consultancy that helps corporate clients find the best solution to address accessibility in their organization.",
      },
      {
        kind: "visual",
        text: "Quote card over a phone: “The best solution to address accessibility.” Perspective Tester.",
      },
      {
        kind: "speech",
        speaker: "Jason McKee",
        text: "Every company with an online presence is required to understand what is sufficient and compliant for accessibility.",
      },
      {
        kind: "visual",
        text: "A person at a laptop. Text: “Laws and guidelines exist to make websites more accessible. Only a few companies understand that non-compliance to those laws means discrimination against people with disabilities.”",
      },
      {
        kind: "speech",
        speaker: "Jason McKee",
        text: "One of the challenges with accessibility is, you know, it's not a quick fix. It's not just pushing a button or buying a piece of software, so it doesn't fit in with some of the other compliance techniques and tactics that are out there. Accessibility means that the people who are designing and developing for you understand accessibility. This is the start of an education process. This is not going to go away. It will eventually be accepted as a layer of QA: how was this viewed and tested for accessibility? That's going to be standard.",
      },
      {
        kind: "visual",
        text: "Code on a screen, reflected in a pair of glasses. Then a business meeting. Text: “Perspective Tester will ensure your website complies with all major guidelines such as WCAG, ADA, CCPA, Section 508 of the Rehabilitation Act of 1973 and AODA.”",
      },
      {
        kind: "speech",
        speaker: "Jason McKee",
        text: "I think before any big decisions are made, I think a simple consultation with someone who is an expert and understands this, and hopefully can also bring along the perspective of a disabled user who's certified in testing for accessibility and understands the legal requirements as well, that can give you a clear picture of what users are experiencing on your site. And then you can start deciding, well, what are our options for improving?",
      },
      {
        kind: "visual",
        text: "Hands holding a tablet. Text: “How can you schedule a consultation with Perspective Tester?”",
      },
      {
        kind: "speech",
        speaker: "Jason McKee",
        text: "The easiest way is to go to perspectivetester.com and contact us through there. We'll be in touch. We'll talk about what your options are.",
      },
      {
        kind: "visual",
        text: "The Perspective Tester logo, then the web address: PerspectiveTester.com.",
      },
    ],
  },
  {
    id: "vhHr1a8bEMc",
    title: "What Makes the Web Inaccessible?",
    description:
      "Justin Salas shares one key reason digital experiences become inaccessible.",
    alternative: [
      {
        kind: "visual",
        text: "Over Justin's shoulder as he sits close to a large monitor showing a news website. Title text: “What makes a website inaccessible?”",
      },
      {
        kind: "speech",
        speaker: "Justin Salas",
        text: "So we're going to talk about things that are not accessible. It's not necessarily just a lack of trying. A lot of the times, people just don't know. So, no disrespect, but, like, this kind of thing is frustrating.",
      },
      {
        kind: "visual",
        text: "Justin magnifies the site's navigation. The word “NEWS” appears in dark text on a white background.",
      },
      {
        kind: "speech",
        speaker: "Justin Salas",
        text: "Like, this level of contrast is fantastic. This black on white background, it's easy to see. But usually then I try and get it into the frame, and all of a sudden it goes yellow.",
      },
      {
        kind: "visual",
        text: "When the pointer hovers over “NEWS”, the link turns pale yellow on white and becomes hard to see.",
      },
      {
        kind: "speech",
        speaker: "Justin Salas",
        text: "But now the contrast ratio is bad enough that I can't hardly tell what I'm looking at. That's a big, big sticking point.",
      },
      {
        kind: "visual",
        text: "A popup has opened: a dark box with a large letter “C” and the text “Subscribe to our notifications and updates,” with “Subscribe” and “Later” buttons. Magnified, Justin sees only fragments of it as he moves around the page.",
      },
      {
        kind: "speech",
        speaker: "Justin Salas",
        text: "None of this is clickable at the moment, 'cause this popup has occurred. So it can be difficult. It's a popup showing up on a web page, and you can't get out of it, or you can't find it. This is pretty confusing. The popup is only findable based on this contrast here, between this and this. But otherwise it's difficult to see it's even there.",
      },
      {
        kind: "visual",
        text: "Justin pans past an advertisement for a reverse mortgage guide, finds the “Later” button and closes the popup. Hovering over the “PEOPLE” link turns it yellow, and the page responds again.",
      },
      {
        kind: "speech",
        speaker: "Justin Salas",
        text: "So sometimes I'll be clicking around on a site and I'm like, why is nothing working? And then I'm looking around the page, I'm trying to figure out what's what, and I finally find that, oh, there's a popup. I need to close that. And then things start functioning again.",
      },
      { kind: "visual", text: "Music. End card: Perspective Tester." },
    ],
  },
];
