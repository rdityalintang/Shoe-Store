import { FINE_HOVER_QUERY, REDUCED_MOTION_QUERY } from "@/lib/motion/tokens";

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

export function supportsFineHover(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia(FINE_HOVER_QUERY).matches;
}
