"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const sections = [
  { tag: "01 — STATEMENT", title: "A system becomes more useful when it understands the intent behind an action.", body: "A system should understand the reason behind an action. The reason gives the action meaning." },
  { tag: "02 — ANALOGY", title: "A system becomes more useful when it understands the intent behind an action. A click is only the signal; intent is the reason.", body: "A system should understand the reason behind an action. The reason gives the action meaning." },
  { tag: "03 — QUESTION", title: "A system becomes more useful when it understands the intent behind an action. What is the person trying to achieve?", body: "A system should understand the reason behind an action. The reason gives the action meaning." },
  { tag: "04 — EXAMPLE", title: "A system becomes more useful when it understands the intent behind an action. Reading, pausing and returning can reveal different levels of consideration.", body: "A system should understand the reason behind an action. The reason gives the action meaning." },
  { tag: "05 — SUMMARY", title: "A system becomes more useful when it understands the intent behind an action.", body: "A system should understand the reason behind an action. The reason gives the action meaning." }
];

type ReadingResult = {
  score: number; seconds: number; depth: number; sectionsViewed: number;
  sectionsTotal: number; calculation: { time: number; scrollDepth: number; coverage: number; revisits: number };
  date: string;
};

export default function Home() {
  const [seconds, setSeconds] = useState(0);
  const [depth, setDepth] = useState(0);
  const [viewed, setViewed] = useState<number[]>([]);
  const [score, setScore] = useState<ReadingResult | null>(null);
  const [consentVisible, setConsentVisible] = useState(false);
  const activeSince = useRef(Date.now());
  const activeMs = useRef(0);
  const visibleSections = useRef(new Set<number>());
  const visits = useRef<Record<number, number>>({});
  const depthValue = useRef(0);

  const measure = useCallback(() => {
    const nextDepth = Math.max(0, Math.min(100, Math.round(((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100)));
    depthValue.current = Math.max(depthValue.current, nextDepth);
    setDepth(depthValue.current);
    sections.forEach((_, i) => {
      const element = document.getElementById("section-" + i);
      if (!element) return;
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2) {
        visibleSections.current.add(i);
        visits.current[i] = (visits.current[i] || 0) + 1;
      }
    });
    setViewed(Array.from(visibleSections.current));
  }, []);

  useEffect(() => {
    try { if (!localStorage.getItem("daizlab:consent")) setConsentVisible(true); } catch {}
    const onVisibility = () => {
      if (document.hidden) activeMs.current += Date.now() - activeSince.current;
      else activeSince.current = Date.now();
    };
    const tick = () => {
      const elapsed = activeMs.current + (document.hidden ? 0 : Date.now() - activeSince.current);
      setSeconds(Math.floor(elapsed / 1000));
      measure();
    };
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("scroll", measure, { passive: true });
    const timer = window.setInterval(tick, 1000);
    measure(); tick();
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("scroll", measure);
      window.clearInterval(timer);
    };
  }, [measure]);

  const percent = Math.min(100, Math.round(seconds / 90 * 100));
  const clock = useMemo(() => String(Math.floor(seconds / 60)).padStart(2, "0") + ":" + String(seconds % 60).padStart(2, "0"), [seconds]);

  function calculate() {
    const totalSeconds = Math.floor((activeMs.current + (document.hidden ? 0 : Date.now() - activeSince.current)) / 1000);
    const timeScore = Math.min(40, totalSeconds / 90 * 40);
    const depthScore = depthValue.current / 100 * 25;
    const coverageScore = visibleSections.current.size / sections.length * 25;
    const revisitScore = Math.min(10, Object.values(visits.current).filter(count => count > 1).length / sections.length * 20);
    const result: ReadingResult = {
      score: Math.round(timeScore + depthScore + coverageScore + revisitScore),
      seconds: totalSeconds, depth: depthValue.current, sectionsViewed: visibleSections.current.size,
      sectionsTotal: sections.length,
      calculation: { time: Math.round(timeScore), scrollDepth: Math.round(depthScore), coverage: Math.round(coverageScore), revisits: Math.round(revisitScore) },
      date: new Date().toISOString()
    };
    setScore(result);
    try { localStorage.setItem("daizlab:last-reading-score", JSON.stringify(result)); } catch {}
  }

  function acceptConsent() {
    try { localStorage.setItem("daizlab:consent", "true"); } catch {}
    setConsentVisible(false);
  }

  return <>
    {consentVisible && <aside className="consent" role="dialog" aria-label="Local reading activity notice"><p>This experience stores your reading activity on this device only. Nothing is sent to a server.</p><button className="btn small" onClick={acceptConsent}>Continue</button></aside>}
    <main className="wrap">
      <section className="hero">
        <p className="eyebrow">DAIZLAB / INTENT SYSTEMS LABORATORY</p>
        <h1>Intent is the <em>gateway.</em><br />Action is the outcome.</h1>
        <p className="lead">A connected environment for turning human intention into structured decisions, useful systems and measurable execution. Enter through the idea. Move through the system. Arrive at the outcome.</p>
        <div className="hero-actions"><a className="btn" href="#gateway-map">Explore the gateway <span>↘</span></a><Link className="text-link" href="/architecture">Understand the architecture →</Link></div>
        <div className="signal"><span className="pulse" /> INTENT <span className="line" /> DECISION <span className="line" /> EXECUTION</div>
      </section>
      <section className="gateway-map" id="gateway-map" aria-label="Explore DaizLab">
        <div className="gateway-map-heading"><div><span className="section-kicker">THE DAIZLAB GATEWAY / 03 PATHS</span><h2>Start where your intention is.</h2></div><p>Three entry points. One connected environment. The next step appears when you are ready for it.</p></div>
        <div className="gateway-map-grid">
          <Link className="gateway-map-card" href="/genesis"><span className="gateway-map-number">01 / UNDERSTAND</span><span className="gateway-map-symbol">↗</span><strong>Discover the doctrine</strong><small>Explore the ideas, research and architecture behind intent-led systems.</small><span className="gateway-map-action">ENTER THE KNOWLEDGE LAYER <b>→</b></span></Link>
          <Link className="gateway-map-card" href="/growth-systems"><span className="gateway-map-number">02 / BUILD</span><span className="gateway-map-symbol">⌘</span><strong>Explore the systems</strong><small>Move into workflows, operating systems and connected infrastructure.</small><span className="gateway-map-action">ENTER THE SYSTEMS LAYER <b>→</b></span></Link>
          <Link className="gateway-map-card" href="/haven"><span className="gateway-map-number">03 / EXPERIENCE</span><span className="gateway-map-symbol">◉</span><strong>Enter the experience</strong><small>Meet the spaces where people, memory and digital action come together.</small><span className="gateway-map-action">ENTER THE EXPERIENCE LAYER <b>→</b></span></Link>
        </div>
      </section>
      <section className="section objective" id="objective">
        <div className="section-kicker">01 / THE OBJECTIVE</div>
        <div className="section-heading"><h2>One idea. Repeated until it becomes clear.</h2><p>The same principle returns again and again. Not to add complexity, but to give the mind enough time to recognise, test and retain it.</p></div>
        <div className="objective-list">{sections.map((item, i) => <article className="objective-card" id={"section-" + i} key={item.tag}><span className="num">{item.tag}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
        <div className="intent-panel">
          <div><span className="eyebrow">YOUR READING SESSION</span><h3>{score ? "Reflection recorded on this device." : "Understanding takes time."}</h3><p>{score ? "Your score is saved locally. No answers or reading data have been transmitted." : "Read at your own pace. Your local reading signal becomes available when the reflection window is complete."}</p></div>
          <div className="meter"><strong>{clock}</strong><span>{percent}% considered</span><div className="progress"><i style={{ width: percent + "%" }} /></div><small>Minimum reflection window: <b>90 seconds</b></small></div>
          <button className="btn" disabled={seconds < 90 || !!score} onClick={calculate}>Ready to confirm? <span>→</span></button>
          {score && <div className="score-result" aria-live="polite"><strong>{score.score}/100</strong><h3>Your reading digest</h3><p>You spent {score.seconds} active seconds with the objective, reached {score.depth}% scroll depth and viewed {score.sectionsViewed} of {score.sectionsTotal} sections.</p><p>Score = time ({score.calculation.time}/40) + depth ({score.calculation.scrollDepth}/25) + section coverage ({score.calculation.coverage}/25) + revisits ({score.calculation.revisits}/10). This reflects on-device reading activity, not intelligence, agreement or comprehension.</p></div>}
        </div>
      </section>
      <section className="section split"><div><div className="section-kicker">02 / THE METHOD</div><h2>Make the invisible legible.</h2></div><p>DaizLab works at the intersection of human intent, structured information and digital execution. The goal is not more interface. It is better interpretation.</p></section>
      <section className="cta-band"><p className="eyebrow">CONTINUE EXPLORING</p><h2>Understand the structure behind the experience.</h2><div className="hero-actions"><Link className="btn" href="/architecture">Explore architecture</Link><Link className="text-link" href="/archive">Visit the research archive →</Link></div></section>
    </main>
  </>;
}
