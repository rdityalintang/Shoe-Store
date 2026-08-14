import { products } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { StaggerReveal } from "@/components/motion/stagger-reveal";

export function FeaturedProducts() {
  return (
    <section id="collection" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-medium tracking-wide text-accent uppercase">
            Featured Products
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900">
            Our Best Sellers
          </h2>
          <p className="mt-4 text-neutral-600">
            Hand-picked styles our customers keep coming back for.
          </p>
        </div>

        <StaggerReveal className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} data-reveal-item>
              <ProductCard product={product} />
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
