"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <p className="text-sm font-medium tracking-wide text-accent uppercase">
        Error
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
        Something went wrong
      </h1>
      <p className="mt-4 max-w-md text-neutral-600">
        An unexpected error occurred while loading this page. You can try
        again, or head back to the homepage.
      </p>
      <div className="mt-8 flex items-center gap-4">
        <button
          type="button"
          onClick={() => retry()}
          className="inline-flex items-center rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex items-center rounded-full border border-neutral-200 px-6 py-2.5 text-sm font-medium text-neutral-700 transition-colors duration-200 hover:bg-neutral-50"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
