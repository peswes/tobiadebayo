import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AosProvider from "@/providers/AosProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tobi Adebayo - Contemporary Artist",
  description: "Portfolio of Tobi Adebayo - exploring digital culture and identity",
  openGraph: {
    title: "Tobi Adebayo",
    description: "Contemporary artist and activist",
    url: "https://tobiadelayo.com",
    siteName: "Tobi Adebayo",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black dark:bg-black dark:text-white`}
      >
        <Header />
        <AosProvider>
          <main className="min-h-screen">{children}</main>
        </AosProvider>
        <Footer />
      </body>
    </html>
  );
}
