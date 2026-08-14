import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-32 text-center lg:pt-40">
        <p className="text-sm font-medium tracking-wide text-accent uppercase">
          404
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-neutral-600">
          The page you&apos;re looking for doesn&apos;t exist or may have
          been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent"
        >
          Back to home
        </Link>
      </main>
      <Footer />
    </>
  );
}
