"use client";

import { useMemo } from "react";

// The address is assembled at runtime from parts so it never appears as a
// literal string in the page source. This defeats the naive scrapers that
// harvest `mailto:` links for spam, while keeping a normal clickable link.
const USER = ["dl", "roosevelt"];
const DOMAIN = ["gmail", "com"];

const Email = () => {
  const address = useMemo(
    () => `${USER.join("")}@${DOMAIN.join(".")}`,
    []
  );

  return (
    <a
      href={`mailto:${address}`}
      className="rounded-lg border border-transparent p-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    >
      <p className="m-0 text-sm opacity-50">Email</p>
    </a>
  );
};

export default Email;
