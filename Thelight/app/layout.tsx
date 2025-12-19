import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Preloader from "@/components/common/Preloader";
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
  title: "Tobi Adebayo",
  description: "Portfolio of Tobi Adebayo - artist & activist",
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
        <Preloader />
        <Header />
        <AosProvider>
          <main className="pt-20">{children}</main>
        </AosProvider>
        <Footer />
      </body>
    </html>
  );
}
