"use client";

import "./globals.css";

export default function GlobalError({
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <html lang="en">
      <body
        className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center"
        style={{ fontFamily: "system-ui, Arial, Helvetica, sans-serif" }}
      >
        <p className="text-sm font-medium tracking-wide text-accent uppercase">
          Error
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
          Something went wrong
        </h1>
        <p className="mt-4 max-w-md text-neutral-600">
          A critical error occurred. Please try again.
        </p>
        <button
          type="button"
          onClick={() => retry()}
          className="mt-8 inline-flex items-center rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
