import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import { SiteFooter } from "./components";
import { SiteHeader } from "./site-header";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Psicoterapeuta Fermo | Dott.ssa Martina Pallottini",
  description:
    "Dott.ssa Martina Pallottini, psicologa psicoterapeuta a Fermo e online. Percorsi clinici per ansia, stress e difficoltà emotive.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${manrope.variable} ${playfair.variable} antialiased`}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
