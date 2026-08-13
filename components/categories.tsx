import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/data";
import { ArrowRightIcon } from "@/components/icons";

export function Categories() {
  return (
    <section className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-medium tracking-wide text-accent uppercase">
            Shop by Category
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900">
            Find Your Fit
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              href="#collection"
              className="group relative flex aspect-[4/5] items-end overflow-hidden rounded-2xl bg-neutral-900"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover opacity-80 transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="relative z-10 p-7">
                <h3 className="text-2xl font-semibold text-white">
                  {category.name}
                </h3>
                <p className="mt-1 text-sm text-white/80">
                  {category.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-white">
                  Explore
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
