import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: {
    default: "Nexus Agency | Software Development, AI Automation & Cloud Solutions",
    template: "%s | Nexus Agency"
  },
  description: "Transform your business with cutting-edge software development, AI automation, eCommerce solutions, and cloud services. Trusted by 500+ clients worldwide with 98% satisfaction rate.",
  keywords: [
    "software development",
    "AI automation",
    "eCommerce solutions",
    "cloud services",
    "SaaS development",
    "manufacturing automation",
    "real-time dashboards",
    "API integration",
    "enterprise solutions",
    "startup consulting"
  ],
  authors: [{ name: "Nexus Agency" }],
  creator: "Nexus Agency",
  publisher: "Nexus Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://nexusagency.com'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexusagency.com",
    title: "Nexus Agency | Software Development & AI Automation",
    description: "Transform your business with cutting-edge software development, AI automation, and cloud solutions.",
    siteName: "Nexus Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus Agency | Software Development & AI Automation",
    description: "Transform your business with cutting-edge software development, AI automation, and cloud solutions.",
    creator: "@nexusagency",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable}`}>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <main style={{ minHeight: "100vh", paddingTop: "80px" }}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
