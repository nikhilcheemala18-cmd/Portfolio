import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI / GenAI Engineer Portfolio",
  description:
    "A personal engineering portfolio for full-stack development, AI, computer vision, GenAI, RAG systems, and AI agents.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
