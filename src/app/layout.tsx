import type { Metadata } from "next";
import "@/app/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 * Root layout – wraps every page in the app.
 * Server Component by default: no "use client". Metadata is exported for SEO.
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://coffeeshop-ui-2.vercel.app"),
  title: {
    default: "Hurma Cafe | En İyi Kahve Deneyimi",
    template: "%s | Hurma Cafe",
  },
  description:
    "Hurma Cafe – En taze espresso, americano ve cappuccino. Antalya'da sıcak bir atmosfer ve birinci sınıf kalite kahve çekirdekleriyle hizmetinizdeyiz.",
  authors: [
    { name: "Hurma Cafe", url: "" },
  ],
  creator: "Hurma Cafe",
  publisher: "Hurma Cafe",
  keywords: [
    "kahve",
    "kafe",
    "Antalya",
    "Hurma",
    "Hurma Cafe",
    "Konyaaltı",
    "espresso",
    "americano",
    "cappuccino",
    "en iyi kahve",
    "kahve dükkanı",
    "taze kahve",
  ],
  openGraph: {
    title: "Hurma Cafe | En İyi Kahve Deneyimi",
    description:
      "En taze espresso, americano ve kahve çeşitleri için Antalya Hurma'daki kafemize bekliyoruz. Kaliteli kahve çekirdekleri ve sıcak atmosfer.",
    type: "website",
    images: [
      { url: "/coffee_logo.png", alt: "Hurma Cafe Logosu" },
      { url: "/favicon.ico", alt: "Hurma Cafe Favicon" },
    ],
    url: "https://coffeeshop-ui-2.vercel.app/",
    siteName: "Hurma Cafe",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hurma Cafe | En İyi Kahve Deneyimi",
    description:
      "En taze espresso, americano ve kahve çeşitleri için kafemize bekliyoruz.",
    images: ["/coffee_logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://coffeeshop-ui-2.vercel.app/",
  },
};

/**
 * RootLayout – receives `children` (the page content). Renders <html> and <body>.
 * suppressHydrationWarning avoids console errors when browser extensions alter the DOM (e.g. add attributes).
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}