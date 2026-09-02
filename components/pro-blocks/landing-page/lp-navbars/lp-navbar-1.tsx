"use client";

import { Logo } from "@/components/pro-blocks/logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Six items plus both CTAs only just fit a 768px viewport, so the item and
// CTA padding is tightened between md and lg and restored from lg up.
const MENU_ITEMS = [
  { label: "A3S", href: "/a3s" },
  { label: "P15R", href: "/manage" },
  { label: "Clients", href: "/clients" },
  { label: "Blog", href: "/blog" },
  { label: "News", href: "/news" },
  { label: "About", href: "/about" },
] as const;

/*
 * WCAG 1.3.1: the navigation gave no indication of which page you were on --
 * neither visually nor to a screen reader. `aria-current="page"` supplies the
 * semantics ("A3S, link, current page") and the underline/foreground treatment
 * supplies the visual cue, so it is not carried by colour alone.
 */
const useIsCurrent = () => {
  const pathname = usePathname();
  return (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
};

const NavMenuItems = ({ compact }: { compact?: boolean }) => {
  const isCurrent = useIsCurrent();
  return (
  <div className="flex items-center gap-0.5">
    {MENU_ITEMS.map(({ label, href }) => (
      <Button
        key={label}
        asChild
        variant="ghost"
        className={`rounded-lg font-medium transition-[color,background-color,border-color,transform] duration-300 ease-out ${
          compact
            ? "h-8 px-2 text-[13px] lg:px-3"
            : "h-9 px-2.5 text-sm lg:px-3.5"
        } ${isCurrent(href) ? "text-foreground underline underline-offset-8 decoration-2" : ""}`}
      >
        <Link href={href} prefetch aria-current={isCurrent(href) ? "page" : undefined}>
          {label}
        </Link>
      </Button>
    ))}
  </div>
  );
};

export function LpNavbar1() {
  const isCurrentPage = useIsCurrent();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const compactRef = useRef(false);

  // The navbar animates through inline styles, which a `prefers-reduced-motion`
  // media query cannot override, so the preference is read in JS instead.
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = (event: MediaQueryList | MediaQueryListEvent) =>
      setPrefersReducedMotion(event.matches);

    sync(mediaQuery);
    mediaQuery.addEventListener("change", sync);

    return () => mediaQuery.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    let rafId = 0;
    const ENTER_COMPACT_SCROLL_Y = 96;
    const EXIT_COMPACT_SCROLL_Y = 56;

    const updateCompactState = () => {
      const y = window.scrollY;
      const currentlyCompact = compactRef.current;
      const nextCompact = currentlyCompact
        ? y > EXIT_COMPACT_SCROLL_Y
        : y > ENTER_COMPACT_SCROLL_Y;

      if (nextCompact !== currentlyCompact) {
        compactRef.current = nextCompact;
        setIsCompact(nextCompact);
      }
      rafId = 0;
    };

    const onScroll = () => {
      if (rafId !== 0) return;
      rafId = window.requestAnimationFrame(updateCompactState);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateCompactState();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId !== 0) window.cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const closeMenuOnDesktop = (event: MediaQueryList | MediaQueryListEvent) => {
      if (event.matches) {
        setIsMenuOpen(false);
      }
    };

    closeMenuOnDesktop(mediaQuery);
    mediaQuery.addEventListener("change", closeMenuOnDesktop);

    return () => {
      mediaQuery.removeEventListener("change", closeMenuOnDesktop);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Premium easing - Apple-style spring curve
  const ease = "cubic-bezier(0.16, 1, 0.3, 1)";
  /** Build a transition string, or disable it entirely for reduced motion. */
  const motion = (value: string) => (prefersReducedMotion ? "none" : value);

  return (
    <header
      className="sticky top-0 isolate z-50"
      onKeyDown={(event) => {
        if (event.key === "Escape" && isMenuOpen) setIsMenuOpen(false);
      }}
    >
      {/* Outer wrapper - padding animates to create the floating inset */}
      <div
        style={{
          paddingLeft: isCompact ? "16px" : "0px",
          paddingRight: isCompact ? "16px" : "0px",
          paddingTop: isCompact ? "12px" : "0px",
          transition: motion(`padding 700ms ${ease}`),
        }}
      >
        <nav
          aria-label="Main"
          style={{
            maxWidth: isCompact ? "56rem" : "100%",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: isCompact ? "16px" : "0px",
            backgroundColor: isCompact
              ? "oklch(1 0 0 / 0.72)"
              : "oklch(0.985 0.002 250)",
            backdropFilter: isCompact
              ? "blur(20px) saturate(1.8)"
              : "blur(0px) saturate(1)",
            WebkitBackdropFilter: isCompact
              ? "blur(20px) saturate(1.8)"
              : "blur(0px) saturate(1)",
            boxShadow: isCompact
              ? "0 8px 32px -4px oklch(0.37 0.1 260 / 0.08), 0 2px 8px -2px oklch(0.37 0.1 260 / 0.05), inset 0 0.5px 0 oklch(1 0 0 / 0.5)"
              : "0 1px 0 0 oklch(0.91 0.01 250)",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: isCompact
              ? "oklch(0.91 0.01 250 / 0.5)"
              : "transparent",
            borderBottomColor: isCompact
              ? "oklch(0.91 0.01 250 / 0.5)"
              : "oklch(0.91 0.01 250)",
            transition: motion(
              `max-width 700ms ${ease}, border-radius 700ms ${ease}, background-color 500ms ${ease}, backdrop-filter 500ms ${ease}, -webkit-backdrop-filter 500ms ${ease}, box-shadow 500ms ${ease}, border-color 500ms ${ease}`,
            ),
          }}
        >
          {/* Inner container - padding shrinks when compact */}
          <div
            className="relative flex items-center justify-between"
            style={{
              paddingTop: isCompact ? "8px" : "14px",
              paddingBottom: isCompact ? "8px" : "14px",
              paddingLeft: isCompact ? "20px" : "24px",
              paddingRight: isCompact ? "20px" : "24px",
              transition: motion(`padding 700ms ${ease}`),
            }}
          >
            {/* Logo */}
            <Link
              href="/"
              className="transition-transform duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]"
            >
              <Logo />
            </Link>

            {/* Desktop: nav items + CTAs */}
            <div className="hidden md:flex md:items-center md:gap-1">
              <NavMenuItems compact={isCompact} />

              {/* Subtle divider */}
              <div
                className="mx-2 h-5 w-px rounded-full"
                style={{
                  backgroundColor: "oklch(0.91 0.01 250)",
                  transition: motion(`background-color 500ms ${ease}`),
                }}
                aria-hidden="true"
              />

              {/* CTA buttons */}
              <div className="flex items-center gap-2">
                <Button
                  asChild
                  variant="outline"
                  className={`rounded-lg font-medium transition-[color,background-color,border-color,transform] duration-300 ease-out ${
                    isCompact
                      ? "h-8 px-2.5 text-[13px] lg:px-3"
                      : "h-9 px-3 text-sm lg:px-3.5"
                  }`}
                >
                  <Link href="/contact" prefetch>
                    Talk to Sales
                  </Link>
                </Button>
                <Button
                  asChild
                  className={`rounded-lg font-medium transition-[color,background-color,border-color,transform] duration-300 ease-out ${
                    isCompact
                      ? "h-8 px-2.5 text-[13px] lg:px-3"
                      : "h-9 px-3 text-sm lg:px-3.5"
                  }`}
                >
                  <Link href="/#products" prefetch>
                    View Products
                  </Link>
                </Button>
              </div>
            </div>

            {/* Mobile hamburger - animated icon rotation */}
            <Button
              variant="ghost"
              className="flex size-9 items-center justify-center rounded-lg md:hidden"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation-menu"
            >
              <div className="relative h-5 w-5">
                <Menu
                  className={`absolute inset-0 h-5 w-5 transition-all duration-300 ease-out ${
                    isMenuOpen
                      ? "rotate-90 scale-0 opacity-0"
                      : "rotate-0 scale-100 opacity-100"
                  }`}
                  aria-hidden="true"
                />
                <X
                  className={`absolute inset-0 h-5 w-5 transition-all duration-300 ease-out ${
                    isMenuOpen
                      ? "rotate-0 scale-100 opacity-100"
                      : "-rotate-90 scale-0 opacity-0"
                  }`}
                  aria-hidden="true"
                />
              </div>
            </Button>
          </div>

          {/* Mobile menu - animated grid collapse. Kept mounted so the
              hamburger's aria-controls always resolves and so the collapse
              can animate; `inert` keeps it out of the tab order and the
              accessibility tree while it is closed. */}
          <div
            id="mobile-navigation-menu"
            className="overflow-hidden md:hidden"
            inert={!isMenuOpen}
            style={{
              display: "grid",
              gridTemplateRows: isMenuOpen ? "1fr" : "0fr",
              opacity: isMenuOpen ? 1 : 0,
              transition: motion(
                `grid-template-rows 500ms ${ease}, opacity 400ms ${ease}`,
              ),
            }}
          >
            {/*
              * WCAG 1.4.4 / 1.4.10. This panel lives inside a `sticky top-0`
              * header, so it stays pinned as the page scrolls -- anything taller
              * than the viewport is simply unreachable, and page scrolling
              * cannot bring it back. At 200% zoom (a ~342px tall viewport) the
              * menu ran to 430px and the "Talk to Sales" and "View Products"
              * calls to action fell off the bottom with no way to get to them.
              * Capping to the space below the header bar and scrolling inside
              * keeps every item reachable at any zoom level.
              */}
            <div
              className="min-h-0 overflow-y-auto overscroll-contain"
              style={{ maxHeight: "calc(100dvh - 5rem)" }}
            >
              <div className="flex flex-col gap-1 border-t px-5 pb-5 pt-4">
                {MENU_ITEMS.map(({ label, href }) => (
                  <Button
                    key={label}
                    asChild
                    variant="ghost"
                    className={`h-11 w-full justify-start rounded-lg px-3 text-sm font-medium ${
                      isCurrentPage(href) ? "text-foreground underline underline-offset-4 decoration-2" : ""
                    }`}
                  >
                    <Link
                      href={href}
                      prefetch
                      onClick={() => setIsMenuOpen(false)}
                      aria-current={isCurrentPage(href) ? "page" : undefined}
                    >
                      {label}
                    </Link>
                  </Button>
                ))}
                <div className="mt-3 flex flex-col gap-2">
                  <Button
                    asChild
                    variant="outline"
                    className="h-11 w-full rounded-lg text-sm font-medium"
                  >
                    <Link
                      href="/contact"
                      prefetch
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Talk to Sales
                    </Link>
                  </Button>
                  <Button asChild className="h-11 w-full rounded-lg text-sm font-medium">
                    <Link
                      href="/#products"
                      prefetch
                      onClick={() => setIsMenuOpen(false)}
                    >
                      View Products
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
