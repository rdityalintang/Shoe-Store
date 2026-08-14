"use client";

import { useEffect } from "react";
import { createScope, createTimeline, utils } from "animejs";
import { ENTRANCE_EASE, REDUCED_MOTION_QUERY } from "@/lib/motion/tokens";

const TARGETS = [
  "navbar",
  "hero-eyebrow",
  "hero-headline",
  "hero-description",
  "hero-cta",
  "hero-product",
] as const;

export function PageIntro() {
  useEffect(() => {
    const scope = createScope({
      mediaQueries: { reduced: REDUCED_MOTION_QUERY },
    }).add((self) => {
      if (!self) return;

      const [navbar, eyebrow, headline, description, cta, heroProduct] = TARGETS.map((name) =>
        document.querySelector<HTMLElement>(`[data-intro="${name}"]`)
      );
      const elements = [navbar, eyebrow, headline, description, cta, heroProduct].filter(
        (el): el is HTMLElement => el !== null
      );

      if (elements.length === 0) return;

      if (self.matches.reduced) {
        utils.set(elements, { opacity: 1, translateY: 0, scale: 1 });
        return;
      }

      const timeline = createTimeline({ defaults: { ease: ENTRANCE_EASE } });

      if (navbar) {
        timeline.add(navbar, { opacity: [0, 1], translateY: [-16, 0], duration: 600 }, 0);
      }
      if (eyebrow) {
        timeline.add(eyebrow, { opacity: [0, 1], translateY: [14, 0], duration: 550 }, 150);
      }
      if (headline) {
        timeline.add(headline, { opacity: [0, 1], translateY: [24, 0], duration: 700 }, 230);
      }
      if (description) {
        timeline.add(
          description,
          { opacity: [0, 1], translateY: [18, 0], duration: 600 },
          330
        );
      }
      if (cta) {
        timeline.add(
          cta,
          { opacity: [0, 1], translateY: [14, 0], scale: [0.96, 1], duration: 550 },
          420
        );
      }
      if (heroProduct) {
        timeline.add(
          heroProduct,
          { opacity: [0, 1], translateY: [32, 0], scale: [0.94, 1], duration: 900 },
          250
        );
      }
    });

    return () => scope.revert();
  }, []);

  return null;
}
