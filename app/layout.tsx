import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const siteTitle = "Arunya — Agentic Engineer & Zero-Knowledge (ZK) Engineer";
const siteDescription =
  "Arunya is an Agentic Engineer and Zero-Knowledge (ZK) Engineer building autonomous AI systems, privacy systems, embedded electronics, robotics, and assistive technology.";
const socialTitle = "Arunya — Intelligence you can touch";
const socialDescription =
  "Agentic systems, zero-knowledge systems, circuits, and robots. Complex systems, brewed with patience.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  applicationName: "Arunya Portfolio",
  alternates: {
    canonical: siteUrl,
  },
  keywords: [
    "Arunya",
    "Agentic Engineer",
    "Agentic AI",
    "Zero-Knowledge engineer",
    "ZK engineer",
    "hardware engineer",
    "robotics",
    "RAG",
    "embedded systems",
  ],
  authors: [{ name: "Arunya" }],
  creator: "Arunya",
  icons: {
    icon: "https://avatars.githubusercontent.com/u/148463665?v=4",
    shortcut: "https://avatars.githubusercontent.com/u/148463665?v=4",
  },
  openGraph: {
    title: socialTitle,
    description: socialDescription,
    type: "website",
    siteName: "Arunya Portfolio",
    locale: "en_IN",
    url: siteUrl,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 800,
        type: "image/jpeg",
        alt: "Arunya — Agentic and Zero-Knowledge engineering portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: socialTitle,
    description: socialDescription,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
