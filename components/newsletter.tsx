"use client";

import { useState, type FormEvent } from "react";

export function Newsletter() {
  const [status, setStatus] = useState<"idle" | "subscribed">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("subscribed");
  }

  return (
    <section id="contact" className="bg-neutral-900 py-20">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Join the STRYDE Circle
        </h2>
        <p className="mt-4 text-neutral-400">
          Be the first to know about new drops, exclusive offers, and
          members-only access.
        </p>

        {status === "subscribed" ? (
          <p className="mt-8 text-sm font-medium text-accent-light">
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
              type="email"
              required
              placeholder="Enter your email"
              className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm text-white placeholder-neutral-500 outline-none transition-colors duration-200 focus:border-accent"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent-dark"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
