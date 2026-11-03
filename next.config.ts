import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/arch.html", destination: "/architecture", permanent: true },
      { source: "/archive.html", destination: "/archive", permanent: true },
      { source: "/damiedaiz.html", destination: "/damiedaiz", permanent: true },
      { source: "/dgcs.html", destination: "/growth-systems", permanent: true },
      { source: "/slos.html", destination: "/slos", permanent: true },
      { source: "/waaas.html", destination: "/waaas", permanent: true },
      { source: "/haven/", destination: "/haven", permanent: true }
    ];
  }
};

export default nextConfig;