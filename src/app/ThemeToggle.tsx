"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./Icons";

// The initial `.dark` class is applied by an inline script in the layout
// (before paint, based on stored preference or the OS setting), so here we
// just read that state on mount and let the button flip it from then on.
const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* ignore storage failures (e.g. private mode) */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="rounded-lg border border-transparent p-2 opacity-50 transition-colors transition-opacity hover:border-gray-300 hover:bg-gray-100 hover:opacity-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    >
      {/* Render a stable placeholder until mounted to avoid hydration mismatch */}
      {mounted ? (
        isDark ? (
          <SunIcon className="h-5 w-5" />
        ) : (
          <MoonIcon className="h-5 w-5" />
        )
      ) : (
        <span className="block h-5 w-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
