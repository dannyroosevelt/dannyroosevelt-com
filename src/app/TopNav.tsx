"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  CloseIcon,
  GitHubIcon,
  LinkedInIcon,
  MenuIcon,
  XIcon,
} from "./Icons";

// Assembled at runtime so the address never appears as a literal string in
// the page source (defeats naive email-harvesting scrapers).
const EMAIL = `${["dl", "roosevelt"].join("")}@${["gmail", "com"].join(".")}`;

type NavItem = {
  label: string;
  href: string;
  icon?: React.ReactNode;
  external?: boolean;
};

const items: NavItem[] = [
  { label: "Resume", href: "/danny-roosevelt-resume.pdf", external: true },
  { label: "Email", href: `mailto:${EMAIL}` },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dannyroosevelt/",
    icon: <LinkedInIcon className="h-5 w-5" />,
    external: true,
  },
  {
    label: "X",
    href: "https://x.com/droosevelt",
    icon: <XIcon className="h-5 w-5" />,
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/dannyroosevelt",
    icon: <GitHubIcon className="h-5 w-5" />,
    external: true,
  },
];

const anchorProps = (item: NavItem) =>
  item.external ? { target: "_blank", rel: "noopener noreferrer" } : {};

const TopNav = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <nav className="flex items-center justify-end text-sm">
      {/* Desktop: inline row */}
      <div className="hidden items-center gap-x-1 sm:flex">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            aria-label={item.label}
            title={item.icon ? item.label : undefined}
            className="rounded-lg border border-transparent p-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            {...anchorProps(item)}
          >
            {item.icon ? (
              <span className="block opacity-50 transition-opacity hover:opacity-100">
                {item.icon}
              </span>
            ) : (
              <span className="opacity-50">{item.label}</span>
            )}
          </a>
        ))}
      </div>

      {/* Mobile: collapsible menu */}
      <div ref={menuRef} className="relative sm:hidden">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Menu"
          className="rounded-lg border border-transparent p-3 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <span className="block opacity-50">
            {open ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </span>
        </button>
        {open && (
          <div className="absolute right-0 z-20 mt-1 flex min-w-[9rem] flex-col rounded-lg border border-gray-200 bg-white py-1 shadow-lg dark:border-neutral-800 dark:bg-slate-950">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-4 py-2 text-right opacity-60 transition-opacity hover:opacity-100"
                {...anchorProps(item)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default TopNav;
