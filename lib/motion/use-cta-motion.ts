"use client";

import { useEffect, useRef, type RefObject } from "react";
import { animate } from "animejs";
import { HOVER_EASE, HOVER_IN_DURATION, HOVER_OUT_DURATION, PRESS_DURATION } from "@/lib/motion/tokens";

const REST = { translateY: 0, scale: 1 };
const HOVERED = { translateY: -2, scale: 1.015 };
const PRESSED = { translateY: -2, scale: 0.98 };
const ICON_REST = { translateX: 0 };
const ICON_HOVERED = { translateX: 4 };

/**
 * Hover/press feedback is intentionally NOT gated behind
 * prefers-reduced-motion: it's sub-300ms, sub-2%-scale interactive
 * feedback rather than page motion, and removing it would make buttons
 * feel unresponsive without any comfort benefit.
 */
export function useCtaMotion<T extends HTMLElement, IconEl extends HTMLElement = HTMLElement>() {
  const ref = useRef<T | null>(null);
  const iconRef = useRef<IconEl | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let hovered = false;

    function goHovered() {
      animate(el as HTMLElement, { ...HOVERED, duration: HOVER_IN_DURATION, ease: HOVER_EASE });
      if (iconRef.current) {
        animate(iconRef.current, { ...ICON_HOVERED, duration: HOVER_IN_DURATION, ease: HOVER_EASE });
      }
    }

    function goRest() {
      animate(el as HTMLElement, { ...REST, duration: HOVER_OUT_DURATION, ease: HOVER_EASE });
      if (iconRef.current) {
        animate(iconRef.current, { ...ICON_REST, duration: HOVER_OUT_DURATION, ease: HOVER_EASE });
      }
    }

    function goPressed() {
      animate(el as HTMLElement, { ...PRESSED, duration: PRESS_DURATION, ease: HOVER_EASE });
    }

    function handlePointerEnter() {
      hovered = true;
      goHovered();
    }

    function handlePointerLeave() {
      hovered = false;
      goRest();
    }

    function handlePointerDown() {
      goPressed();
    }

    function handlePointerUp() {
      if (hovered) {
        goHovered();
      } else {
        goRest();
      }
    }

    el.addEventListener("pointerenter", handlePointerEnter);
    el.addEventListener("pointerleave", handlePointerLeave);
    el.addEventListener("pointerdown", handlePointerDown);
    el.addEventListener("pointerup", handlePointerUp);

    return () => {
      el.removeEventListener("pointerenter", handlePointerEnter);
      el.removeEventListener("pointerleave", handlePointerLeave);
      el.removeEventListener("pointerdown", handlePointerDown);
      el.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  return { ref, iconRef } as { ref: RefObject<T | null>; iconRef: RefObject<IconEl | null> };
}
