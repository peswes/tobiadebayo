import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AosProvider from "@/providers/AosProvider";
import Preloader from "@/components/common/Preloader";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
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
        className={`min-h-screen ${plusJakarta.variable} ${outfit.variable} antialiased`}
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
