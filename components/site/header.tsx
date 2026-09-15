"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CatMark } from "./cat-mark";
import { Arrow } from "./section-heading";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Journey" },
];

export function SiteHeader() {
  return (
    <header className="fixed left-1/2 top-4 z-50 flex min-h-16 w-[min(1280px,calc(100%-1.5rem))] -translate-x-1/2 items-center justify-between rounded-full border border-white/40 bg-background/80 px-3 py-2 pl-5 shadow-[0_12px_42px_rgba(49,34,29,.08)] backdrop-blur-xl md:top-4 md:w-[min(1280px,calc(100%-3rem))]">
      <a
        className="group flex items-center gap-2.5 font-serif text-xl font-bold italic focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mocha"
        href="#top"
        aria-label="Arunya, back to top"
      >
        <CatMark className="w-8 text-espresso" />
        <span>Arunya</span>
      </a>

      <nav className="hidden items-center gap-8 text-xs font-semibold md:flex" aria-label="Main navigation">
        {links.map((link) => (
          <a
            className="relative py-2 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-mocha after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mocha"
            href={link.href}
            key={link.href}
          >
            {link.label}
          </a>
        ))}
        <Button asChild variant="ghost" className="bg-espresso text-paper-light hover:bg-mocha">
          <a href="mailto:mahajanarunya@gmail.com">
            Let&apos;s talk <Arrow />
          </a>
        </Button>
      </nav>

      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="bg-espresso text-paper-light hover:bg-mocha md:hidden"
            aria-label="Open navigation"
          >
            <Menu className="size-4" aria-hidden="true" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="mt-12">
            <SheetTitle>Navigate</SheetTitle>
          </SheetHeader>
          <nav className="mt-10 flex flex-col gap-2" aria-label="Mobile navigation">
            {links.map((link) => (
              <SheetClose asChild key={link.href}>
                <a
                  className="border-b border-line py-4 font-serif text-3xl transition-colors hover:text-clay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mocha"
                  href={link.href}
                >
                  {link.label}
                </a>
              </SheetClose>
            ))}
            <SheetClose asChild>
              <a
                className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-bold text-mocha"
                href="mailto:mahajanarunya@gmail.com"
              >
                Let&apos;s talk <Arrow />
              </a>
            </SheetClose>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
