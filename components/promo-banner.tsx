"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { animate, createScope, onScroll } from "animejs";
import { StaggerReveal } from "@/components/motion/stagger-reveal";
import { CtaLink } from "@/components/motion/cta-link";
import { REDUCED_MOTION_QUERY } from "@/lib/motion/tokens";

export function PromoBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const imageWrap = imageWrapRef.current;
    if (!section || !imageWrap) return;

    const scope = createScope({
      mediaQueries: { reduced: REDUCED_MOTION_QUERY },
    }).add((self) => {
      if (!self || self.matches.reduced) return;

      animate(imageWrap, {
        scale: [1.08, 1.18],
        translateY: [-20, 20],
        autoplay: onScroll({ target: section, sync: true }),
      });
    });

    return () => scope.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-neutral-900">
          <div ref={imageWrapRef} className="absolute inset-0 will-change-transform">
            <Image
              src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=70&auto=format&fit=crop"
              alt="Shoes on display"
              fill
              sizes="100vw"
              className="object-cover opacity-30"
            />
          </div>
          <StaggerReveal
            className="relative z-10 flex flex-col items-start gap-6 px-8 py-16 sm:px-14 sm:py-20 lg:items-center lg:text-center"
            staggerMs={90}
          >
            <p
              data-reveal-item
              className="text-xs font-medium tracking-widest text-accent-light uppercase"
            >
              Limited Time
            </p>
            <h2
              data-reveal-item
              className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              Up to 30% Off the Summer Collection
            </h2>
            <p data-reveal-item className="max-w-xl text-neutral-300">
              Refresh your wardrobe with premium styles at an exclusive
              price. Offer ends soon.
            </p>
            <div data-reveal-item>
              <CtaLink
                href="#collection"
                icon
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium text-neutral-900 transition-colors duration-200 hover:bg-accent hover:text-white"
              >
                Shop the Sale
              </CtaLink>
            </div>
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
