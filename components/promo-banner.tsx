import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export function PromoBanner() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-neutral-900">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=70&auto=format&fit=crop"
              alt="Shoes on display"
              fill
              sizes="100vw"
              className="object-cover opacity-30"
            />
          </div>
          <div className="relative z-10 flex flex-col items-start gap-6 px-8 py-16 sm:px-14 sm:py-20 lg:items-center lg:text-center">
            <p className="text-xs font-medium tracking-widest text-accent-light uppercase">
              Limited Time
            </p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Up to 30% Off the Summer Collection
            </h2>
            <p className="max-w-xl text-neutral-300">
              Refresh your wardrobe with premium styles at an exclusive
              price. Offer ends soon.
            </p>
            <Link
              href="#collection"
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium text-neutral-900 transition-colors duration-200 hover:bg-accent hover:text-white"
            >
              Shop the Sale
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
