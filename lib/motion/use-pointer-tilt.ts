"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";
import {
  FINE_HOVER_QUERY,
  REDUCED_MOTION_QUERY,
  TILT_EASE,
  TILT_HOVER_SCALE,
  TILT_MAX_DEGREES,
  TILT_MOVE_DURATION,
  TILT_RETURN_DURATION,
} from "@/lib/motion/tokens";

export function usePointerTilt<T extends HTMLElement>(
  onMove?: (px: number, py: number) => void,
  onLeave?: () => void
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const hoverQuery = window.matchMedia(FINE_HOVER_QUERY);
    const reducedQuery = window.matchMedia(REDUCED_MOTION_QUERY);
    let attached = false;

    function handlePointerMove(event: PointerEvent) {
      const target = ref.current;
      if (!target) return;
      const rect = target.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;

      animate(target, {
        rotateY: px * TILT_MAX_DEGREES,
        rotateX: py * -TILT_MAX_DEGREES,
        scale: TILT_HOVER_SCALE,
        duration: TILT_MOVE_DURATION,
        ease: TILT_EASE,
      });

      onMove?.(px, py);
    }

    function handlePointerLeave() {
      const target = ref.current;
      if (!target) return;

      animate(target, {
        rotateY: 0,
        rotateX: 0,
        scale: 1,
        duration: TILT_RETURN_DURATION,
        ease: TILT_EASE,
      });

      onLeave?.();
    }

    function attach() {
      if (attached) return;
      el?.addEventListener("pointermove", handlePointerMove);
      el?.addEventListener("pointerleave", handlePointerLeave);
      attached = true;
    }

    function detach() {
      if (!attached) return;
      el?.removeEventListener("pointermove", handlePointerMove);
      el?.removeEventListener("pointerleave", handlePointerLeave);
      attached = false;
    }

    function syncCapabilities() {
      if (hoverQuery.matches && !reducedQuery.matches) {
        attach();
      } else {
        detach();
        handlePointerLeave();
      }
    }

    syncCapabilities();
    hoverQuery.addEventListener("change", syncCapabilities);
    reducedQuery.addEventListener("change", syncCapabilities);

    return () => {
      hoverQuery.removeEventListener("change", syncCapabilities);
      reducedQuery.removeEventListener("change", syncCapabilities);
      detach();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
