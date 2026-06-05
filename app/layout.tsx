import type { Metadata } from "next";
import { Lexend, Manrope } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Kinetic Court | Vantage Point Padel",
  description:
    "Elevate your game at the intersection of electric energy and premium performance. Experience the ultimate Padel destination.",
  keywords: ["padel", "booking", "court", "sports", "premium", "vantage point"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${lexend.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container antialiased">
        {children}
      </body>
    </html>
  );
}
