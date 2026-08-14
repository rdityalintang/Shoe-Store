"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useCtaMotion } from "@/lib/motion/use-cta-motion";
import { ArrowRightIcon } from "@/components/icons";

type CtaLinkProps = {
  href: string;
  className: string;
  children: ReactNode;
  icon?: boolean;
  onClick?: () => void;
};

export function CtaLink({ href, className, children, icon = false, onClick }: CtaLinkProps) {
  const { ref, iconRef } = useCtaMotion<HTMLAnchorElement, HTMLSpanElement>();

  return (
    <Link href={href} ref={ref} onClick={onClick} className={className}>
      {children}
      {icon ? (
        <span ref={iconRef} className="inline-flex">
          <ArrowRightIcon className="h-4 w-4" />
        </span>
      ) : null}
    </Link>
  );
}
