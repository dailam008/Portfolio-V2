import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dailam | Portfolio",
  description:
    "Personal portfolio of Dailam — a passionate developer crafting modern web experiences.",
  keywords: ["portfolio", "developer", "web developer", "next.js", "react"],
  authors: [{ name: "Dailam" }],
  openGraph: {
    title: "Dailam | Portfolio",
    description:
      "Personal portfolio of Dailam — a passionate developer crafting modern web experiences.",
    type: "website",
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";
import Preloader from "@/components/Preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Preloader />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
