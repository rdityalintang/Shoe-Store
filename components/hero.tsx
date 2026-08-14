import Link from "next/link";
import { CtaLink } from "@/components/motion/cta-link";
import { HeroProductVisual } from "@/components/motion/hero-product-visual";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative z-10">
          <p
            data-intro="hero-eyebrow"
            className="mb-5 inline-flex items-center rounded-full border border-neutral-200 px-4 py-1.5 text-xs font-medium tracking-wide text-neutral-600 uppercase"
          >
            New Season Collection
          </p>
          <h1
            data-intro="hero-headline"
            className="text-5xl leading-[1.05] font-semibold tracking-tight text-neutral-900 sm:text-6xl lg:text-6xl"
          >
            Step Into
            <br />
            Premium <span className="text-accent">Comfort</span>
          </h1>
          <p
            data-intro="hero-description"
            className="mt-6 max-w-md text-lg leading-relaxed text-neutral-600"
          >
            Meticulously crafted footwear that blends timeless design with
            modern performance. Discover the collection built to move with
            you.
          </p>
          <div data-intro="hero-cta" className="mt-10 flex flex-wrap items-center gap-4">
            <CtaLink
              href="#collection"
              icon
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-8 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent"
            >
              Shop Collection
            </CtaLink>
            <Link
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-8 py-3.5 text-sm font-medium text-neutral-900 transition-colors duration-200 hover:border-neutral-900"
            >
              Learn More
            </Link>
          </div>

          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-neutral-200 pt-8">
            <div>
              <dt className="text-2xl font-semibold text-neutral-900">12k+</dt>
              <dd className="mt-1 text-sm text-neutral-500">Happy Customers</dd>
            </div>
            <div>
              <dt className="text-2xl font-semibold text-neutral-900">150+</dt>
              <dd className="mt-1 text-sm text-neutral-500">Premium Styles</dd>
            </div>
            <div>
              <dt className="text-2xl font-semibold text-neutral-900">4.9</dt>
              <dd className="mt-1 text-sm text-neutral-500">Average Rating</dd>
            </div>
          </dl>
        </div>

        <HeroProductVisual
          src="https://images.unsplash.com/photo-1552346154-21d32810aba3?w=1200&q=80&auto=format&fit=crop"
          alt="Premium white sneaker on display"
          priority
          sizes="(min-width: 1024px) 32rem, 90vw"
        />
      </div>
    </section>
  );
}
