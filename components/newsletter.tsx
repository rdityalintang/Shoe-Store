"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { animate } from "animejs";
import { Reveal } from "@/components/motion/reveal";
import { HOVER_EASE } from "@/lib/motion/tokens";

type Status = "idle" | "loading" | "success" | "error";

export function Newsletter() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const statusRef = useRef<HTMLParagraphElement>(null);
  const errorRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (status === "success" && statusRef.current) {
      animate(statusRef.current, {
        opacity: [0, 1],
        translateY: [10, 0],
        duration: 450,
        ease: "outQuart",
      });
    }
    if (status === "error" && errorRef.current) {
      animate(errorRef.current, {
        opacity: [0, 1],
        translateY: [10, 0],
        duration: 450,
        ease: "outQuart",
      });
    }
  }, [status]);

  // Focus/submit feedback stays active under prefers-reduced-motion for the
  // same reason as CTA hover/press: it's small interactive feedback, not
  // page motion, and removing it would make the form feel unresponsive.
  function handleFocus() {
    if (inputRef.current) {
      animate(inputRef.current, { scale: 1.015, duration: 220, ease: HOVER_EASE });
    }
  }

  function handleBlur() {
    if (inputRef.current) {
      animate(inputRef.current, { scale: 1, duration: 220, ease: HOVER_EASE });
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = String(new FormData(form).get("email") ?? "");

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data: { ok: boolean; error?: string } = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <section id="contact" className="bg-neutral-900 py-20">
      <Reveal className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Join the STRYDE Circle
        </h2>
        <p className="mt-4 text-neutral-400">
          Be the first to know about new drops, exclusive offers, and
          members-only access.
        </p>

        {status === "success" ? (
          <p
            ref={statusRef}
            className="mt-8 text-sm font-medium text-accent-light"
            role="status"
            aria-live="polite"
          >
            Thank you for subscribing — welcome to the circle.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              disabled={status === "loading"}
              ref={inputRef}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm text-white placeholder-neutral-500 outline-none transition-colors duration-200 focus:border-accent disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="shrink-0 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "Subscribing…" : "Subscribe"}
            </button>
          </form>
        )}

        {status === "error" ? (
          <p
            ref={errorRef}
            className="mt-4 text-sm font-medium text-red-400"
            role="alert"
            aria-live="assertive"
          >
            {errorMessage}
          </p>
        ) : null}
      </Reveal>
    </section>
  );
}
