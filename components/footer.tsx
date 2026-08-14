import Link from "next/link";
import { categories, navLinks } from "@/lib/data";
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TwitterIcon,
} from "@/components/icons";
import { Reveal } from "@/components/motion/reveal";

export function Footer() {
  return (
    <footer className="bg-white">
      <Reveal className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="#home" className="text-xl font-semibold tracking-tight text-neutral-900">
              STRYDE<span className="text-accent">.</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-600">
              Premium footwear crafted for those who move with purpose.
              Quality, comfort, and timeless design in every step.
            </p>
            <div className="mt-6 flex items-center gap-4 text-neutral-500">
              <a href="#social-instagram" aria-label="Instagram" className="transition-colors duration-200 hover:text-neutral-900">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#social-facebook" aria-label="Facebook" className="transition-colors duration-200 hover:text-neutral-900">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#social-twitter" aria-label="Twitter" className="transition-colors duration-200 hover:text-neutral-900">
                <TwitterIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral-900">Navigation</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 transition-colors duration-200 hover:text-neutral-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral-900">Categories</h3>
            <ul className="mt-4 space-y-3">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    href="#collection"
                    className="text-sm text-neutral-600 transition-colors duration-200 hover:text-neutral-900"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral-900">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral-600">
              <li className="flex items-start gap-2.5">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-neutral-400" />
                <span>123 Fifth Avenue, New York, NY 10160</span>
              </li>
              <li className="flex items-center gap-2.5">
                <PhoneIcon className="h-4 w-4 shrink-0 text-neutral-400" />
                <span>+1 (555) 012-3456</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MailIcon className="h-4 w-4 shrink-0 text-neutral-400" />
                <span>hello@stryde.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-8 sm:flex-row">
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} STRYDE. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-neutral-500">
            <Link href="/privacy" className="transition-colors duration-200 hover:text-neutral-900">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors duration-200 hover:text-neutral-900">
              Terms of Service
            </Link>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
