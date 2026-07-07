import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pyae Zaw | Portfolio",
  description:
    "Minimal portfolio and resume website for Pyae Zaw, focused on content writing, AI content creation, digital marketing, video, and remote support."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
