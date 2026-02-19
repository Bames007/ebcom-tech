import type { Metadata, Viewport } from "next";
import {
  Geist,
  Geist_Mono,
  Poppins,
  Gantari,
  Playfair_Display,
  Bebas_Neue,
} from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gantari = Gantari({
  variable: "--font-gantari",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ebcomtechnologies.com"),
  title:
    "EBCom Technologies | Innovative Software Solutions for Businesses, Schools & Government",
  description:
    "Leading technology company providing cutting-edge software services, custom solutions, and digital transformation for individuals, businesses, schools, and government organizations.",
  keywords:
    "software development, tech solutions, business software, school management systems, government software, digital transformation, custom software",
  authors: [{ name: "EBCom Technologies" }],
  creator: "EBCom Technologies",
  publisher: "EBCom Technologies",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
  openGraph: {
    title: "EBCom Technologies | Innovative Software Solutions",
    description:
      "Leading technology company providing cutting-edge software services for businesses, schools, and government organizations.",
    images: ["/og-image.png"],
    type: "website",
    locale: "en_US",
    siteName: "EBCom Technologies",
    url: "https://ebcomtechnologies.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "EBCom Technologies | Innovative Software Solutions",
    description:
      "Leading technology company providing cutting-edge software services for businesses, schools, and government organizations.",
    images: ["/twitter-image.png"],
    creator: "@ebcomtech",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${poppins.variable} ${gantari.variable} ${geistMono.variable} ${geistSans.variable} ${playfair.variable} antialiased`}
      >
        <Analytics />
        {/* Professional tech background gradient */}
        <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50/70 -z-10" />

        {/* Optional subtle grid pattern for tech feel */}
        <div className="fixed inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:64px_64px] -z-10" />

        {/* Scrollable content */}
        <div className="relative min-h-screen">{children}</div>
      </body>
    </html>
  );
}
