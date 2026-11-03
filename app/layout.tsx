import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lab.daizlab.store"),
  title: { default: "DaizLab — Systems That Understand Intent", template: "%s | DaizLab" },
  description: "DaizLab explores human intent, structured information and meaningful digital action.",
  applicationName: "DaizLab",
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    siteName: "DaizLab",
    title: "DaizLab — Systems That Understand Intent",
    description: "Human intent, structured into meaningful digital action."
  }
};

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link className="brand" href="/"><span className="brand-mark">D</span> DAIZLAB<span className="brand-dot">.</span></Link>
          <nav>
            <Link href="/archive">Archive</Link>
            <Link href="/architecture">Architecture</Link>
            <Link href="/haven">Haven</Link>
          </nav>
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