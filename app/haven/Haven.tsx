"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Entry = { text: string; date: string };

export default function Haven() {
  const [text, setText] = useState("");
  const [entries, setEntries] = useState<Entry[]>([]);
  const [silent, setSilent] = useState(false);
  const [ready, setReady] = useState(false);
  const [status, setStatus] = useState("Entries stay in this browser's local storage.");

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("daizlab:haven") || "[]");
      if (Array.isArray(stored)) setEntries(stored);
    } catch {}
    setReady(true);
  }, []);

  function save() {
    if (!text.trim()) return;
    const next = [...entries, { text: text.trim(), date: new Date().toISOString() }];
    try {
      localStorage.setItem("daizlab:haven", JSON.stringify(next));
      setEntries(next);
      setText("");
      setStatus("Saved on this device. Nothing was sent.");
    } catch {
      setStatus("This browser could not save the entry. Check available device storage.");
    }
  }

  return <main className="wrap" style={{ filter: silent ? "saturate(.25)" : "none", transition: "filter .25s ease" }}>
    <section className="page-hero"><p className="eyebrow">HAVEN / PRIVATE SPACE</p><h1>A little room to think.</h1><p className="lead">No performance. No audience. Just a place to put a thought down.</p></section>
    <article className="content-card">
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center", flexWrap: "wrap" }}><h2>Presence</h2><button className="btn small" onClick={() => setSilent(value => !value)} aria-pressed={silent}>Silent mode: {silent ? "on" : "off"}</button></div>
      <p className="muted">What has been sitting with you lately?</p>
      <textarea className="field" rows={5} value={text} onChange={event => setText(event.target.value)} placeholder="Write without needing to make it perfect…" />
      <button className="btn" style={{ marginTop: 14 }} onClick={save}>Save privately</button>
      <p className="muted" role="status">{status}</p>
    </article>
    <h2 id="entries">Your reflections</h2>
    {ready && entries.slice().reverse().map((entry, i) => <article className="content-card" key={entry.date + i}><p>{entry.text}</p><small className="muted">{new Date(entry.date).toLocaleString()}</small></article>)}
    <article className="content-card"><h3>A gentle prompt</h3><p className="muted">What is one thing you can make simpler today?</p></article>
    <nav className="bottom-tabs" aria-label="Haven navigation"><a className="active" href="#top">Haven</a><a href="#journal" onClick={() => document.querySelector("textarea")?.focus()}>Spheres</a><Link href="/">Map</Link><a href="#entries">Flow</a><a href="#journal" onClick={() => document.querySelector("textarea")?.focus()}>Presence</a></nav>
    <span id="journal" />
  </main>;
}