import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Axeleron Expo 2027 — AI & Robotics Innovation Challenge",
  description:
    "India's premier AI & Robotics Innovation Challenge for engineering college students. Compete from state level to the National Grand Finale in January 2027.",
  keywords: [
    "Axeleron Expo",
    "AI Innovation Challenge",
    "Robotics Competition",
    "Engineering Students India",
    "Mobialive",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${manrope.variable} font-manrope antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
