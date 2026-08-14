"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { animate, type JSAnimation } from "animejs";
import { usePointerTilt } from "@/lib/motion/use-pointer-tilt";
import { prefersReducedMotion } from "@/lib/motion/media";
import {
  AMBIENT_EASE,
  AMBIENT_FLOAT_AMPLITUDE,
  AMBIENT_FLOAT_DURATION,
  TILT_EASE,
  TILT_MOVE_DURATION,
  TILT_RETURN_DURATION,
} from "@/lib/motion/tokens";

const HERO_PRODUCT_ENTRANCE_END_MS = 1150;
const SHADOW_TRAVEL = 14;

type HeroProductVisualProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
};

export function HeroProductVisual({ src, alt, sizes, priority }: HeroProductVisualProps) {
  const shadowRef = useRef<HTMLDivElement>(null);

  const tiltRef = usePointerTilt<HTMLDivElement>(
    (px, py) => {
      const shadow = shadowRef.current;
      if (!shadow) return;
      animate(shadow, {
        translateX: px * -SHADOW_TRAVEL,
        translateY: py * -SHADOW_TRAVEL,
        duration: TILT_MOVE_DURATION,
        ease: TILT_EASE,
      });
    },
    () => {
      const shadow = shadowRef.current;
      if (!shadow) return;
      animate(shadow, {
        translateX: 0,
        translateY: 0,
        duration: TILT_RETURN_DURATION,
        ease: TILT_EASE,
      });
    }
  );

  useEffect(() => {
    const card = tiltRef.current;
    if (!card || prefersReducedMotion()) return;

    let floatAnimation: JSAnimation | null = null;
    const startTimer = window.setTimeout(() => {
      floatAnimation = animate(card, {
        translateY: [-AMBIENT_FLOAT_AMPLITUDE / 2, AMBIENT_FLOAT_AMPLITUDE / 2],
        duration: AMBIENT_FLOAT_DURATION,
        ease: AMBIENT_EASE,
        loop: true,
        alternate: true,
      });
    }, HERO_PRODUCT_ENTRANCE_END_MS);

    function handleVisibilityChange() {
      if (!floatAnimation) return;
      if (document.hidden) {
        floatAnimation.pause();
      } else {
        floatAnimation.play();
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.clearTimeout(startTimer);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      floatAnimation?.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative" data-intro="hero-product">
      <div
        className="relative mx-auto w-full max-w-lg [perspective:1000px]"
        style={{ aspectRatio: "1 / 1" }}
      >
        <div
          ref={shadowRef}
          aria-hidden="true"
          className="absolute inset-[6%] -z-10 rounded-full bg-accent/35 blur-3xl"
        />
        <div
          ref={tiltRef}
          className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-neutral-100 shadow-2xl shadow-neutral-900/10 [transform-style:preserve-3d] will-change-transform"
        >
          <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
        </div>
      </div>
      <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-4 shadow-xl shadow-neutral-900/10 sm:block">
        <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase">
          Starting from
        </p>
        <p className="text-2xl font-semibold text-neutral-900">$89</p>
      </div>
    </div>
  );
}
