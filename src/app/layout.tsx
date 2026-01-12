import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Danny Roosevelt",
  description: "Hello, my name is Danny Roosevelt. I'm currently building Pipedream. Love technology, food, and Seinfeld.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
