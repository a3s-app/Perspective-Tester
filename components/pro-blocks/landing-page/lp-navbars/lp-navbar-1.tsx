"use client";

import { Logo } from "@/components/pro-blocks/logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const MENU_ITEMS = [
  { label: "A3S", href: "/a3s" },
  { label: "P15R", href: "/manage" },
  { label: "Clients", href: "/clients" },
  { label: "About", href: "/about" },
] as const;

const NavMenuItems = ({ compact }: { compact?: boolean }) => (
  <div className="flex items-center gap-0.5">
    {MENU_ITEMS.map(({ label, href }) => (
      <Link key={label} href={href}>
        <Button
          variant="ghost"
          className={`rounded-lg font-medium transition-all duration-300 ease-out ${
            compact
              ? "h-8 px-3 text-[13px]"
              : "h-9 px-3.5 text-sm"
          }`}
        >
          {label}
        </Button>
      </Link>
    ))}
  </div>
);

export function LpNavbar1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const compactRef = useRef(false);

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

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Premium easing - Apple-style spring curve
  const ease = "cubic-bezier(0.16, 1, 0.3, 1)";

  return (
    <div className="sticky top-0 isolate z-50">
      {/* Outer wrapper - padding animates to create the floating inset */}
      <div
        style={{
          paddingLeft: isCompact ? "16px" : "0px",
          paddingRight: isCompact ? "16px" : "0px",
          paddingTop: isCompact ? "12px" : "0px",
          transition: `padding 700ms ${ease}`,
        }}
      >
        <nav
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
            transition: `max-width 700ms ${ease}, border-radius 700ms ${ease}, background-color 500ms ${ease}, backdrop-filter 500ms ${ease}, -webkit-backdrop-filter 500ms ${ease}, box-shadow 500ms ${ease}, border-color 500ms ${ease}`,
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
              transition: `padding 700ms ${ease}`,
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
                  transition: `background-color 500ms ${ease}`,
                }}
                aria-hidden="true"
              />

              {/* CTA buttons */}
              <div className="flex items-center gap-2">
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className={`rounded-lg font-medium transition-all duration-300 ease-out ${
                      isCompact
                        ? "h-8 px-3 text-[13px]"
                        : "h-9 px-3.5 text-sm"
                    }`}
                  >
                    Talk to Sales
                  </Button>
                </Link>
                <Link href="/#products">
                  <Button
                    className={`rounded-lg font-medium transition-all duration-300 ease-out ${
                      isCompact
                        ? "h-8 px-3 text-[13px]"
                        : "h-9 px-3.5 text-sm"
                    }`}
                  >
                    View Products
                  </Button>
                </Link>
              </div>
            </div>

            {/* Mobile hamburger - animated icon rotation */}
            <Button
              variant="ghost"
              className="flex size-9 items-center justify-center rounded-lg md:hidden"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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

          {/* Mobile menu - animated grid collapse */}
          <div
            className="overflow-hidden md:hidden"
            style={{
              display: "grid",
              gridTemplateRows: isMenuOpen ? "1fr" : "0fr",
              opacity: isMenuOpen ? 1 : 0,
              transition: `grid-template-rows 500ms ${ease}, opacity 400ms ${ease}`,
            }}
          >
            <div className="min-h-0">
              <div className="flex flex-col gap-1 border-t px-5 pb-5 pt-4">
                {MENU_ITEMS.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button
                      variant="ghost"
                      className="h-11 w-full justify-start rounded-lg px-3 text-sm font-medium"
                    >
                      {label}
                    </Button>
                  </Link>
                ))}
                <div className="mt-3 flex flex-col gap-2">
                  <Link
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button
                      variant="outline"
                      className="h-11 w-full rounded-lg text-sm font-medium"
                    >
                      Talk to Sales
                    </Button>
                  </Link>
                  <Link
                    href="/#products"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button className="h-11 w-full rounded-lg text-sm font-medium">
                      View Products
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
