"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { animate, createScope, onScroll, stagger, utils } from "animejs";
import {
  REDUCED_MOTION_QUERY,
  REVEAL_ITEM_DURATION,
  REVEAL_EASE,
  REVEAL_STAGGER_MS,
  SCROLL_REVEAL_ENTER,
} from "@/lib/motion/tokens";

type StaggerRevealProps = {
  children: ReactNode;
  className?: string;
  itemSelector?: string;
  staggerMs?: number;
  y?: number;
  scale?: number;
};

export function StaggerReveal({
  children,
  className,
  itemSelector = "[data-reveal-item]",
  staggerMs = REVEAL_STAGGER_MS,
  y = 28,
  scale = 1,
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const items = container.querySelectorAll<HTMLElement>(itemSelector);
    if (items.length === 0) return;

    const scope = createScope({
      root: ref,
      mediaQueries: { reduced: REDUCED_MOTION_QUERY },
    }).add((self) => {
      if (!self) return;

      if (self.matches.reduced) {
        utils.set(items, { opacity: 1, translateY: 0, scale: 1 });
        return;
      }

      const props: Record<string, unknown> = {
        opacity: [0, 1],
        translateY: [y, 0],
      };
      if (scale !== 1) props.scale = [scale, 1];

      animate(items, {
        ...props,
        duration: REVEAL_ITEM_DURATION,
        delay: stagger(staggerMs, { from: "first" }),
        ease: REVEAL_EASE,
        autoplay: onScroll({ target: container, enter: SCROLL_REVEAL_ENTER, repeat: false }),
      });
    });

    return () => scope.revert();
  }, [itemSelector, staggerMs, y, scale]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
