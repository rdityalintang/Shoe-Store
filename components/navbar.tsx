"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/data";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { CtaLink } from "@/components/motion/cta-link";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      data-intro="navbar"
      className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-md"
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href="#home"
          className="text-xl font-semibold tracking-tight text-neutral-900"
        >
          STRYDE<span className="text-accent">.</span>
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative text-sm font-medium text-neutral-600 transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-neutral-900 after:transition-transform after:duration-300 hover:text-neutral-900 hover:after:scale-x-100 focus-visible:text-neutral-900 focus-visible:after:scale-x-100"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <CtaLink
            href="#collection"
            className="inline-flex items-center rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent"
          >
            Shop Now
          </CtaLink>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md p-2 text-neutral-900 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </nav>

      <div
        data-testid="mobile-menu"
        inert={!isOpen}
        className={`overflow-hidden border-t border-black/5 bg-white transition-[max-height] duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-2 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <CtaLink
              href="#collection"
              onClick={() => setIsOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white"
            >
              Shop Now
            </CtaLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
