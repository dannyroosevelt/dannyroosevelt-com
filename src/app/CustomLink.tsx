import React from "react";
import Link from "next/link";

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
}

const CustomLink = ({ href, children }: CustomLinkProps) => {
  return (
    <Link
      className="inline-block transition-transform font-bold hover:underline hover:text-blue-600"
      target="_blank"
      rel="noopener"
      href={href}
    >
      {children}
    </Link>
  );
};

export default CustomLink;