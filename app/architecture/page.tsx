import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Intent Architecture",
  description: "Explore the DaizLab intent architecture: human intent, input, compiler, structured output and machine intelligence."
};

const stages = [
  ["01 / INPUT", "Human intent", "The outcome a person is trying to reach, expressed in their own language and context."],
  ["02 / INTERPRET", "Input", "A request, signal or interaction captured with its relevant context."],
  ["03 / TRANSFORM", "Compiler", "Rules and models organize the request into a consistent representation."],
  ["04 / REPRESENT", "Structured output", "Machine-readable information that can be validated, routed and understood."],
  ["05 / EXECUTE", "Machine intelligence", "Software can use structured context to recommend or perform an appropriate next action, with human oversight where needed."]
];

export default function Architecture() {
  return <main className="wrap">
    <section className="page-hero"><p className="eyebrow">SYSTEM ARCHITECTURE</p><h1>From human intent to structured action.</h1><p className="lead">A conceptual pipeline for making requests interpretable, traceable and useful.</p></section>
    <div className="grid-2">{stages.map(([number, title, description]) => <article className="content-card" key={number}><span className="num">{number}</span><h2>{title}</h2><p className="muted">{description}</p></article>)}</div>
    <section className="section"><h2>Frequently asked questions</h2><h3>Is this a deployed AI product?</h3><p className="muted">This page describes a systems architecture and research direction. It does not claim that every component is currently deployed as an autonomous service.</p><h3>What is SMAMD?</h3><p className="muted">Schema Markup and Machine-readable Data: a working emphasis on structuring information so software can interpret it consistently.</p><h3>Does intent scoring read a person's mind?</h3><p className="muted">No. Any score shown on this site is based only on disclosed, observable on-device interaction signals.</p></section>
    <p><Link className="text-link" href="/waaas">Explore the WAAAS proof page →</Link></p>
  </main>;
}
