"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { animate, createScope, onScroll, utils } from "animejs";
import {
  REDUCED_MOTION_QUERY,
  REVEAL_DURATION,
  REVEAL_EASE,
  SCROLL_REVEAL_ENTER,
} from "@/lib/motion/tokens";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
  y?: number;
  scale?: number;
  clipPath?: boolean;
  delay?: number;
};

export function Reveal({
  children,
  className,
  as = "div",
  y = 28,
  scale = 1,
  clipPath = false,
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const scope = createScope({
      root: ref,
      mediaQueries: { reduced: REDUCED_MOTION_QUERY },
    }).add((self) => {
      if (!self) return;

      const props: Record<string, unknown> = {
        opacity: [0, 1],
        translateY: [y, 0],
      };
      if (scale !== 1) props.scale = [scale, 1];
      if (clipPath) {
        props.clipPath = ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"];
      }

      if (self.matches.reduced) {
        utils.set(el, { opacity: 1, translateY: 0, scale: 1, clipPath: "none" });
        return;
      }

      animate(el, {
        ...props,
        duration: REVEAL_DURATION,
        delay,
        ease: REVEAL_EASE,
        autoplay: onScroll({ target: el, enter: SCROLL_REVEAL_ENTER, repeat: false }),
      });
    });

    return () => scope.revert();
  }, [y, scale, clipPath, delay]);

  if (as === "section") {
    return (
      <section ref={ref} className={className}>
        {children}
      </section>
    );
  }

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
