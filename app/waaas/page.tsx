import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WAAAS — Web Accessible Application Systems",
  description: "A transparent proof-of-concept for lightweight, web-accessible application architecture."
};

const cards = [
  ["Small by design", "Static assets, browser-native APIs and clear progressive enhancement."],
  ["Resilient by default", "A service worker can cache essential pages for repeat visits and offline fallback."],
  ["Privacy-aware", "Local-first interactions keep personal activity on the device unless a user explicitly chooses otherwise."],
  ["Honest proof", "A proof of concept demonstrates a pattern. It is not a claim of production scale, security certification or independent audit."]
];

export default function Waaas() {
  return <main className="wrap">
    <section className="page-hero"><p className="eyebrow">PROOF OF CONCEPT / WAAAS</p><h1>Useful software. Less infrastructure.</h1><p className="lead">A lightweight web application can deliver meaningful workflows without requiring a heavyweight stack for every use case.</p></section>
    <div className="grid-2">{cards.map(([title, description]) => <article className="content-card" key={title}><h2>{title}</h2><p className="muted">{description}</p></article>)}</div>
    <section className="section"><h2>Frequently asked questions</h2>
      <h3>Does WAAAS require a backend?</h3><p className="muted">Not for every workflow. Static content and local-only tools can run without one. Authentication, shared data and payments need trusted services.</p>
      <h3>Is this a performance benchmark?</h3><p className="muted">No benchmark figures are claimed on this page. Performance should be measured on representative devices and networks.</p>
      <h3>Can it grow?</h3><p className="muted">Yes. Add services only when the product requirements justify them, and keep the boundary between browser and server explicit.</p>
    </section>
    <p><a className="btn" href="/architecture">View the architecture</a></p>
  </main>;
}