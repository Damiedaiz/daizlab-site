import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import ServiceWorker from "./ServiceWorker";
import GatewayNav from "./GatewayNav";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://daizlab.app"),
  title: { default: "DaizLab — Systems That Understand Intent", template: "%s | DaizLab" },
  description: "DaizLab explores human intent, structured information and meaningful digital action.",
  applicationName: "DaizLab",
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    siteName: "DaizLab",
    title: "DaizLab — Systems That Understand Intent",
    description: "Human intent, structured into meaningful digital action.",
    url: "https://daizlab.app"
  },
  alternates: { canonical: "/" }
};

export const viewport: Viewport = {
  themeColor: "#070707",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ServiceWorker />
        <header className="site-header">
          <Link className="brand" href="/"><span className="brand-mark">D</span> DAIZLAB<span className="brand-dot">.</span></Link>
          <div className="header-right">
            <span className="header-manifesto">SYSTEMS OVER HUSTLE <i /> INTENT BEFORE EXECUTION</span>
            <GatewayNav />
          </div>
        </header>
        {children}
        <footer className="footer">
          <Link className="brand" href="/">DAIZLAB<span className="brand-dot">.</span></Link>
          <span>Systems over hustle. Intent before execution.</span>
          <span>© {new Date().getFullYear()} DaizClou Technologies Limited</span>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
