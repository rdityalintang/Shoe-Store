import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy — STRYDE",
  description: "How STRYDE collects, uses, and protects your information.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-20 lg:pt-40 lg:px-8">
        <p className="text-sm font-medium tracking-wide text-accent uppercase">
          Legal
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900">
          Privacy Policy
        </h1>
        <p className="mt-6 leading-relaxed text-neutral-600">
          This page is a placeholder. STRYDE&apos;s full privacy policy —
          covering what information we collect, how it&apos;s used, and how
          you can control it — will be published here before the store
          begins processing customer data.
        </p>
      </main>
      <Footer />
    </>
  );
}
