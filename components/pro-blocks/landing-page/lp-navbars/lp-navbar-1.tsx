"use client";

import { Logo } from "@/components/pro-blocks/logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

const MENU_ITEMS = [
  { label: "A3S", href: "/a3s" },
  { label: "Manage", href: "/manage" },
  { label: "Clients", href: "/clients" },
  { label: "About", href: "/about" },
] as const;

interface NavMenuItemsProps {
  className?: string;
  compact?: boolean;
}

const NavMenuItems = ({ className, compact }: NavMenuItemsProps) => (
  <div className={`flex flex-col gap-1 md:flex-row ${className ?? ""}`}>
    {MENU_ITEMS.map(({ label, href }) => (
      <Link key={label} href={href}>
        <Button
          variant="ghost"
          className={`w-full md:w-auto transition-all duration-500 ease-in-out ${compact ? "h-8 text-sm px-3" : "h-9 text-sm px-4"}`}
        >
          {label}
        </Button>
      </Link>
    ))}
  </div>
);

export function LpNavbar1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div
      className={`sticky top-0 isolate z-50 transition-all duration-500 ease-in-out ${
        scrolled ? "px-4 pt-3 md:px-6" : "px-0 pt-0"
      }`}
    >
      <nav
        className={`transition-all duration-500 ease-in-out ${
          scrolled
            ? "mx-auto max-w-5xl rounded-2xl border border-border/60 bg-background/80 shadow-lg shadow-black/5 backdrop-blur-xl py-2"
            : "mx-auto max-w-none rounded-none border-b border-transparent bg-background shadow-none backdrop-blur-none py-3.5 md:py-4"
        }`}
      >
        <div
          className={`relative flex flex-col justify-between gap-4 md:flex-row md:items-center md:gap-6 transition-all duration-500 ease-in-out ${
            scrolled
              ? "container mx-auto px-5"
              : "container mx-auto px-6"
          }`}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="transition-transform duration-300">
              <Logo />
            </Link>
            <Button
              variant="ghost"
              className="flex size-9 items-center justify-center md:hidden"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden w-full flex-row justify-end gap-3 md:flex md:items-center">
            <NavMenuItems compact={scrolled} />
            <Link href="/contact">
              <Button
                variant="outline"
                className={`transition-all duration-500 ease-in-out ${
                  scrolled ? "h-8 text-sm px-3" : "h-9 text-sm px-4"
                }`}
              >
                Talk to Sales
              </Button>
            </Link>
            <Link href="/#products">
              <Button
                className={`transition-all duration-500 ease-in-out ${
                  scrolled ? "h-8 text-sm px-3" : "h-9 text-sm px-4"
                }`}
              >
                View Products
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="flex w-full flex-col justify-end gap-5 pb-2.5 md:hidden">
              <NavMenuItems />
              <Link href="/contact">
                <Button variant="outline" className="w-full">
                  Talk to Sales
                </Button>
              </Link>
              <Link href="/#products">
                <Button className="w-full">View Products</Button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
