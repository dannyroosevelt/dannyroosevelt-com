import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const title = "Danny Roosevelt";
const description =
  "Hello, my name is Danny Roosevelt. I'm currently building Pipedream. Love technology, food, and Seinfeld.";
const url = "https://dannyroosevelt.com";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url,
    siteName: title,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
