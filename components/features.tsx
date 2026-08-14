import { features } from "@/lib/data";
import { HeadsetIcon, RefreshIcon, ShieldCheckIcon, TruckIcon } from "@/components/icons";
import { StaggerReveal } from "@/components/motion/stagger-reveal";

const icons = {
  "free-shipping": TruckIcon,
  "original-product": ShieldCheckIcon,
  "easy-returns": RefreshIcon,
  support: HeadsetIcon,
};

export function Features() {
  return (
    <section id="about" className="border-y border-neutral-200 bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <StaggerReveal className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = icons[feature.id as keyof typeof icons];
            return (
              <div
                key={feature.id}
                data-reveal-item
                className="group flex flex-col items-start gap-4"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-white transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-medium text-neutral-900">{feature.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
}
