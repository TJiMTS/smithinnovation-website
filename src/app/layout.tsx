import type { Metadata } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://smithinnovation.studio";

export const metadata: Metadata = {
  title: {
    default:
      "Smith Innovation Studio — Custom Apps & AI-Native Operating Systems",
    template: "%s — Smith Innovation Studio",
  },
  description:
    "We build custom applications and AI-native operating systems for businesses. Built by operators, not vendors. Real systems running real operations.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Smith Innovation Studio",
    title:
      "Smith Innovation Studio — Custom Apps & AI-Native Operating Systems",
    description:
      "We build custom applications and AI-native operating systems for businesses. Built by operators, not vendors.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Smith Innovation Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Smith Innovation Studio — Custom Apps & AI-Native Operating Systems",
    description:
      "We build custom applications and AI-native operating systems for businesses. Built by operators, not vendors.",
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Replace with your GA4 Measurement ID
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />

        {/* Google Analytics 4 */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
