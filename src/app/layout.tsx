import type { Metadata } from "next";
import { Archivo, Libre_Baskerville } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const display = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display-active",
  display: "swap",
});

const accent = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-accent-active",
  display: "swap",
});

// === MEGA TAG CONFIG === (real OC Skin Care Center values — Meta prospecting, Pixel ON)
const SITE_KEY = "qvsczupnzvxtza3u";
const SITE_ID = "b3520734-191d-4e5d-a969-ffe2a3a26a7b";
const GTM_ID = "GTM-W8CFHS2D";
const PIXEL_ID = "992122401762482";

export const metadata: Metadata = {
  metadataBase: new URL("https://book.ocskincarecenter.com"),
  title:
    "OC Skin Care Center — Premium Facials & Injectables in Newport Beach, CA",
  description:
    "Personalized, results-focused facials and medical aesthetics in Newport Beach. Signature and HydroFacials, Botox/Dysport, dermal fillers and PRP/PRF from a team serving Orange County since 2010. Injectable visits begin with a complimentary consultation.",
  openGraph: {
    title:
      "OC Skin Care Center — Healthy Skin at Every Stage of Life",
    description:
      "Premium facials and injectables in Newport Beach, planned around your skin. 5.0 across 191+ Google reviews. Serving Orange County since 2010.",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  robots: { index: false, follow: false }, // paid-ads LP — not indexed
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  // The MEGA optimizer injects BOTH GTM and the Meta Pixel from this config.
  // Do NOT hand-write a GTM loader or fbq('init') block — that would double-fire.
  const megaTagConfig = `window.MEGA_TAG_CONFIG={siteKey:"${SITE_KEY}",siteId:"${SITE_ID}",gtmId:"${GTM_ID}",pixelId:"${PIXEL_ID}"};window.API_ENDPOINT="https://optimizer.gomega.ai";window.TRACKING_API_ENDPOINT="https://events-api.gomega.ai";`;

  return (
    <html lang="en" className={`${display.variable} ${accent.variable}`}>
      <head>
        <meta name="mega-site-id" content={SITE_ID} />
        <script
          id="mega-tag-config"
          dangerouslySetInnerHTML={{ __html: megaTagConfig }}
        />
        <script
          id="optimizer-script"
          src="https://cdn.gomega.ai/scripts/optimizer.min.js"
          data-site-id={SITE_ID}
          async
        />
      </head>
      <body className="bg-[var(--color-bg)] text-[var(--color-text)] antialiased">
        {children}
        {/* CallTrackingMetrics — universal Mega account (never remove) */}
        <Script src="https://572388.tctm.co/t.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
