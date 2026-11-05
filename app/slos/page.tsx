"use client";

import { useState } from "react";

type Question = [prompt: string, options: string[], correctAnswer: number];

const qs: Question[] = [
  ["What is the primary role of a logistics operating system?", ["Coordinate and optimize logistics workflows", "Replace every human decision", "Only store invoices"], 0],
  ["Which signal helps estimate delivery progress?", ["Font choice", "GPS and scan events", "Social likes"], 1],
  ["What does route optimization seek to improve?", ["Distance, time and constraints", "Logo consistency", "Email subject lines"], 0],
  ["Why is inventory visibility important?", ["It removes all demand uncertainty", "It supports availability and replenishment decisions", "It replaces suppliers"], 1],
  ["What is a proof of delivery?", ["A verified record that an item was delivered", "A marketing slogan", "A warehouse floor plan"], 0],
  ["What is a key purpose of exception management?", ["Hide late deliveries", "Identify and resolve deviations", "Delete tracking data"], 1],
  ["Why integrate order and transport data?", ["To reduce fragmented information", "To increase duplicate entry", "To prevent reporting"], 0],
  ["What is a useful operational KPI?", ["Number of decorative icons", "On-time delivery rate", "Screen brightness"], 1],
  ["What should a system do when location data is missing?", ["Invent coordinates", "Flag uncertainty and use fallback processes", "Mark delivery complete"], 1],
  ["What is a responsible automation principle?", ["Automate every decision without review", "Keep accountability and escalation paths clear", "Never log actions"], 1]
];

type Result = { answers: number[]; score: number; total: number; seconds: number; completedAt: string };

export default function SLOS() {
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<Result | null>(null);
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [dataMessage, setDataMessage] = useState("");

  function finish(finalAnswers: number[]) {
    const saved: Result = {
      answers: finalAnswers,
      score: finalAnswers.reduce((sum, answer, i) => sum + (answer === qs[i][2] ? 1 : 0), 0),
      total: qs.length,
      seconds: Math.round((Date.now() - (startedAt || Date.now())) / 1000),
      completedAt: new Date().toISOString()
    };
    setResult(saved);
    try { localStorage.setItem("daizlab:slos", JSON.stringify(saved)); } catch {}
  }

  function next() {
    if (answers[index] === undefined) { setDataMessage("Choose an answer to continue."); return; }
    setDataMessage("");
    if (index < qs.length - 1) setIndex(index + 1);
    else finish(answers);
  }

  function viewData() {
    try { setDataMessage(localStorage.getItem("daizlab:slos") || "No saved quiz data."); }
    catch { setDataMessage("Local storage is unavailable in this browser."); }
  }

  function exportData() {
    let payload = "{}";
    try { payload = localStorage.getItem("daizlab:slos") || "{}"; } catch {}
    const blob = new Blob([payload], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url; anchor.download = "daizlab-slos-data.json"; anchor.click();
    URL.revokeObjectURL(url);
  }

  function deleteData() {
    try { localStorage.removeItem("daizlab:slos"); setDataMessage("Saved quiz data deleted from this device."); }
    catch { setDataMessage("Could not access local storage."); }
  }

  return <main className="wrap">
    <section className="page-hero"><p className="eyebrow">LEARNING CHECK / SLOS</p><h1>Smart Logistics Operating Systems.</h1><p className="lead">A short knowledge check. Your selections and completion time remain in this browser only.</p></section>
    {!started ? <article className="content-card"><h2>Before you begin</h2><p className="muted">This quiz records your selected answers, score and time taken in local storage on this device. It does not transmit data to DaizLab or any server.</p><button className="btn" onClick={() => { setStartedAt(Date.now()); setStarted(true); }}>I understand — begin</button></article>
      : !result ? <article className="content-card"><p className="eyebrow">QUESTION {index + 1} / {qs.length}</p><h2>{qs[index][0]}</h2>{qs[index][1].map((answer, option) => <label className="content-card" style={{ display: "block", cursor: "pointer" }} key={answer}><input type="radio" name="slos-answer" checked={answers[index] === option} onChange={() => setAnswers(old => { const nextAnswers = [...old]; nextAnswers[index] = option; return nextAnswers; })} /> {answer}</label>)}<button className="btn" onClick={next}>{index === qs.length - 1 ? "Finish" : "Next →"}</button>{dataMessage && <p className="muted" role="status">{dataMessage}</p>}</article>
      : <article className="content-card"><h2>Check complete</h2><p>Your score: <strong>{result.score}/{result.total}</strong></p><p className="muted">Completed in {result.seconds} seconds. Your result is stored locally on this device.</p><button className="btn" onClick={() => { setStarted(false); setIndex(0); setAnswers([]); setResult(null); setStartedAt(null); }}>Take the check again</button></article>}
    <article className="content-card"><h2>Your local data</h2><p className="muted">View, export or delete the quiz result stored in this browser.</p><div className="hero-actions"><button className="btn small" onClick={viewData}>View my data</button><button className="btn small" onClick={exportData}>Export JSON</button><button className="btn small" onClick={deleteData}>Delete my data</button></div>{dataMessage && <pre className="muted" style={{ whiteSpace: "pre-wrap", overflowWrap: "anywhere" }} aria-live="polite">{dataMessage}</pre>}</article>
  </main>;
}
