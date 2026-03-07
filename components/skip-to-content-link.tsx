"use client";

import type { MouseEvent } from "react";

export function SkipToContentLink() {
  const handleSkipToMain = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const main = document.getElementById("main-content");
    if (!main) return;

    if (!main.hasAttribute("tabindex")) {
      main.setAttribute("tabindex", "-1");
    }

    main.focus({ preventScroll: true });
    main.scrollIntoView({ block: "start", behavior: "auto" });
    window.location.hash = "main-content";
  };

  return (
    <a
      href="#main-content"
      onClick={handleSkipToMain}
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground focus:shadow-lg"
    >
      Skip to main content
    </a>
  );
}
