import Image from "next/image";
import type { Product } from "@/lib/data";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-neutral-900/10">
      <div className="relative aspect-square overflow-hidden bg-neutral-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {product.isNew && (
          <span className="absolute top-4 left-4 rounded-full bg-neutral-900 px-3 py-1 text-xs font-medium text-white">
            New
          </span>
        )}
      </div>
      <div className="flex items-start justify-between gap-4 p-5">
        <div>
          <p className="text-xs font-medium tracking-wide text-accent uppercase">
            {product.category}
          </p>
          <h3 className="mt-1 font-medium text-neutral-900">{product.name}</h3>
        </div>
        <p className="shrink-0 font-semibold text-neutral-900">
          ${product.price}
        </p>
      </div>
    </article>
  );
}
