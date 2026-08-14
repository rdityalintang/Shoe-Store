import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Terms of Service — STRYDE",
  description: "The terms that govern your use of the STRYDE website and store.",
};

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-20 lg:pt-40 lg:px-8">
        <p className="text-sm font-medium tracking-wide text-accent uppercase">
          Legal
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900">
          Terms of Service
        </h1>
        <p className="mt-6 leading-relaxed text-neutral-600">
          This page is a placeholder. STRYDE&apos;s full terms of service —
          covering orders, returns, and acceptable use of this site — will
          be published here before the store opens for purchases.
        </p>
      </main>
      <Footer />
    </>
  );
}
