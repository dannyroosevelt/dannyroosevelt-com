"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import {
  CloseIcon,
  GitHubIcon,
  LinkedInIcon,
  MenuIcon,
  XIcon,
} from "./Icons";

// The address is base64-encoded here so it can't be regex-harvested from the
// (public) repo source, and it's only decoded + attached to the link on the
// client after mount — so the plaintext mailto never appears in the
// prerendered HTML that scrapers read either. Real, JS-enabled visitors still
// get a normal clickable link. (Decodes to the obvious address for any human.)
const ENCODED_EMAIL = "ZGxyb29zZXZlbHRAZ21haWwuY29t";

// false during SSR / initial hydration, true once mounted on the client.
const useMounted = () =>
  useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

type NavItem = {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  external?: boolean;
  email?: boolean;
};

const items: NavItem[] = [
  { label: "Resume", href: "/danny-roosevelt-resume.pdf", external: true },
  { label: "Email", email: true },
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
  const mounted = useMounted();
  const menuRef = useRef<HTMLDivElement>(null);

  const hrefFor = (item: NavItem) =>
    item.email
      ? mounted
        ? `mailto:${atob(ENCODED_EMAIL)}`
        : undefined
      : item.href;

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
            href={hrefFor(item)}
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
                href={hrefFor(item)}
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
