"use client";

import { useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "./Icons";

// The current theme lives on <html> (the `.dark` class), set before paint by
// the inline script in the layout. We read it through useSyncExternalStore so
// there's no setState-in-effect and no hydration mismatch.
const listeners = new Set<() => void>();

const subscribe = (onChange: () => void) => {
  listeners.add(onChange);
  return () => {
    listeners.delete(onChange);
  };
};

const getSnapshot = () =>
  document.documentElement.classList.contains("dark");

// The server can't know the theme; the client reconciles right after hydration.
const getServerSnapshot = () => false;

const ThemeToggle = () => {
  const isDark = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* ignore storage failures (e.g. private mode) */
    }
    listeners.forEach((notify) => notify());
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="rounded-lg border border-transparent p-2 opacity-50 transition hover:border-gray-300 hover:bg-gray-100 hover:opacity-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    >
      {isDark ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
