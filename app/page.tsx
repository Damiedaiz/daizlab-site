"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const sections = [
  { tag: "01 — STATEMENT", title: "A system becomes more useful when it understands the intent behind an action.", body: "A system should understand the reason behind an action. The reason gives the action meaning." },
  { tag: "02 — ANALOGY", title: "A system becomes more useful when it understands the intent behind an action. A click is only the signal; intent is the reason.", body: "A system should understand the reason behind an action. The reason gives the action meaning." },
  { tag: "03 — QUESTION", title: "A system becomes more useful when it understands the intent behind an action. What is the person trying to achieve?", body: "A system should understand the reason behind an action. The reason gives the action meaning." },
  { tag: "04 — EXAMPLE", title: "A system becomes more useful when it understands the intent behind an action. Reading, pausing and returning can reveal different levels of consideration.", body: "A system should understand the reason behind an action. The reason gives the action meaning." },
  { tag: "05 — SUMMARY", title: "A system becomes more useful when it understands the intent behind an action.", body: "A system should understand the reason behind an action. The reason gives the action meaning." }
];

export default function Home() {
  const [seconds, setSeconds] = useState(0);
  const [depth, setDepth] = useState(0);
  const [viewed, setViewed] = useState<number[]>([]);
  const [score, setScore] = useState<number | null>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onVisibility = () => setVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  useEffect(() => {
    if (!visible || score !== null) return;
    const id = window.setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => window.clearInterval(id);
  }, [visible, score]);

  useEffect(() => {
    const update = () => {
      setDepth(Math.max(0, Math.min(100, Math.round(((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100))));
      const found = sections.map((_, i) => {
        const el = document.getElementById("section-" + i);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top < window.innerHeight * .8 && r.bottom > window.innerHeight * .2;
      });
      setViewed((old) => Array.from(new Set([...old, ...found.flatMap((v, i) => v ? [i] : [])])));
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  const percent = Math.min(100, Math.round(seconds / 90 * 100));
  const clock = useMemo(() => String(Math.floor(seconds / 60)).padStart(2, "0") + ":" + String(seconds % 60).padStart(2, "0"), [seconds]);

  function calculate() {
    const timeScore = Math.min(40, seconds / 90 * 40);
    const depthScore = depth / 100 * 25;
    const coverageScore = viewed.length / sections.length * 25;
    const result = Math.round(timeScore + depthScore + coverageScore);
    setScore(result);
    try { localStorage.setItem("daizlab:last-reading-score", JSON.stringify({ score: result, seconds, depth, sectionsViewed: viewed.length, sectionsTotal: sections.length, note: "Reading activity indicator, not a comprehension test." })); } catch {}
  }

  return <main className="wrap">
    <section className="hero">
      <p className="eyebrow">INTENT SYSTEMS LABORATORY · EST. IN PRINCIPLE</p>
      <h1>Systems should understand <em>why</em>, not just what was clicked.</h1>
      <p className="lead">DaizLab explores a simple proposition: human intent can be made clearer, more structured and more useful to digital systems.</p>
      <div className="hero-actions"><a className="btn" href="#objective">Explore the objective <span>↘</span></a><Link className="text-link" href="/architecture">How the architecture works →</Link></div>
      <div className="signal"><span className="pulse" /> HUMAN INTENT <span className="line" /> STRUCTURED ACTION</div>
    </section>
    <section className="section objective" id="objective">
      <div className="section-kicker">01 / THE OBJECTIVE</div>
      <div className="section-heading"><h2>One idea. Repeated until it becomes clear.</h2><p>The same principle returns again and again. Not to add complexity, but to give the mind enough time to recognise, test and retain it.</p></div>
      <div className="objective-list">{sections.map((item, i) => <article className="objective-card" id={"section-" + i} key={item.tag}><span className="num">{item.tag}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
      <div className="intent-panel">
        <div><span className="eyebrow">YOUR READING SESSION</span><h3>{score === null ? "Understanding takes time." : "Reflection recorded."}</h3><p>{score === null ? "Read at your own pace. Your local reading signal becomes available after the reflection window." : "Your activity score is stored on this device only. It does not measure comprehension or agreement."}</p></div>
        <div className="meter"><strong>{clock}</strong><span>{percent}% considered</span><div className="progress"><i style={{ width: percent + "%" }} /></div><small>Minimum reflection window: <b>90 seconds</b></small></div>
        <button className="btn" disabled={seconds < 90 || score !== null} onClick={calculate}>Ready to confirm? <span>→</span></button>
        {score !== null && <div className="score-result"><strong>{score}/100</strong><h3>Your reading digest</h3><p>{seconds} active seconds · {depth}% scroll depth · {viewed.length} of {sections.length} sections viewed.</p><p>Score combines active time (40), scroll depth (25) and section coverage (25). It is an activity indicator, not a test of intelligence or understanding.</p></div>}
      </div>
    </section>
    <section className="section split"><div><div className="section-kicker">02 / THE METHOD</div><h2>Make the invisible legible.</h2></div><p>DaizLab works at the intersection of human intent, structured information and digital execution. The goal is not more interface. It is better interpretation.</p></section>
    <section className="cta-band"><p className="eyebrow">CONTINUE EXPLORING</p><h2>Understand the structure behind the experience.</h2><div className="hero-actions"><Link className="btn" href="/architecture">Explore architecture</Link><Link className="text-link" href="/archive">Visit the research archive →</Link></div></section>
  </main>;
}