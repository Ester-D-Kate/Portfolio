import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "http://localhost:5001";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Arunya — Agentic Engineer & Zero-Knowledge (ZK) Engineer",
  description:
    "Arunya is an Agentic Engineer and Zero-Knowledge (ZK) Engineer building autonomous AI systems, privacy systems, embedded electronics, robotics, and assistive technology.",
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
    title: "Arunya — Intelligence you can touch",
    description:
      "Agentic systems, zero-knowledge systems, circuits, and robots. Complex systems, brewed with patience.",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: "/og.png",
        width: 1536,
        height: 1024,
        alt: "Arunya — Agentic and Zero-Knowledge engineering portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arunya — Intelligence you can touch",
    description:
      "Agentic systems, zero-knowledge systems, circuits, and robots. Complex systems, brewed with patience.",
    images: ["/og.png"],
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
