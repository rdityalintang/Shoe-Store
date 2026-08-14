import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative z-10">
          <p className="mb-5 inline-flex items-center rounded-full border border-neutral-200 px-4 py-1.5 text-xs font-medium tracking-wide text-neutral-600 uppercase">
            New Season Collection
          </p>
          <h1 className="text-5xl leading-[1.05] font-semibold tracking-tight text-neutral-900 sm:text-6xl lg:text-6xl">
            Step Into
            <br />
            Premium <span className="text-accent">Comfort</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-neutral-600">
            Meticulously crafted footwear that blends timeless design with
            modern performance. Discover the collection built to move with
            you.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="#collection"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-8 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent"
            >
              Shop Collection
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
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

        <div className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-lg overflow-hidden rounded-[2.5rem] bg-neutral-100 shadow-2xl shadow-neutral-900/10">
            <Image
              src="https://images.unsplash.com/photo-1552346154-21d32810aba3?w=1200&q=80&auto=format&fit=crop"
              alt="Premium white sneaker on display"
              fill
              priority
              sizes="(min-width: 1024px) 32rem, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-4 shadow-xl shadow-neutral-900/10 sm:block">
            <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase">
              Starting from
            </p>
            <p className="text-2xl font-semibold text-neutral-900">$89</p>
          </div>
        </div>
      </div>
    </section>
  );
}
