import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AosProvider from "@/providers/AosProvider";
import Preloader from "@/components/common/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tobi Adebayo - Contemporary Artist",
    template: "%s | Tobi Adebayo",
  },
  description: "Portfolio of Tobi Adebayo - exploring digital culture and identity through charcoal, acrylics, digital art, and social initiatives",
  metadataBase: new URL("https://tobiadebayo.com"),
  openGraph: {
    title: "Tobi Adebayo",
    description: "Contemporary artist and activist exploring digital culture and identity",
    url: "https://tobiadebayo.com",
    siteName: "Tobi Adebayo",
    type: "website",
    images: [
      {
        url: "/images/tobi.jpg",
        width: 1200,
        height: 630,
        alt: "Tobi Adebayo - Contemporary Artist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tobi Adebayo",
    description: "Contemporary artist and activist exploring digital culture and identity",
    images: ["/images/tobi.jpg"],
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
      <body
        className={`min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black dark:bg-black dark:text-white`}
      >
        <Preloader />
        <Header />
        <AosProvider>
          <main className="min-h-screen">{children}</main>
        </AosProvider>
        <Footer />
      </body>
    </html>
  );
}
