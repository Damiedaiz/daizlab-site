"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const gifts = [
  ["01", "A better question", "Free frameworks for thinking clearly before acting."],
  ["02", "A working system", "Small digital tools, patterns and experiments people can actually use."],
  ["03", "A bridge", "Practical knowledge shared across borders without asking for permission, payment or applause."],
];

export default function ThisPage() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setRevealed(true), 120);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className={"prince-page" + (revealed ? " is-ready" : "")}>
      <div className="prince-orbit prince-orbit-a" />
      <div className="prince-orbit prince-orbit-b" />

      <nav className="prince-nav">
        <Link href="/" className="prince-brand">DAIZLAB / THIS</Link>
        <span>AN AFRICAN GIFT IN PUBLIC</span>
      </nav>

      <section className="prince-hero">
        <p className="prince-kicker">THE PRINCE OF AFRICA / A COUNTER-NARRATIVE</p>
        <h1>
          They expected a <em>scam.</em>
          <br />
          I brought a <span>gift.</span>
        </h1>
        <p className="prince-lead">
          For generations, the phrase “African prince” has been used as a punchline for
          deception. This page turns the symbol around: no hidden inheritance, no urgent
          transfer, no trick. Just ideas, systems and useful work offered freely.
        </p>

        <div className="prince-actions">
          <a href="#gift" className="prince-button">RECEIVE THE GIFT ↓</a>
          <a href="#manifesto" className="prince-link">READ THE MANIFESTO →</a>
        </div>

        <div className="prince-seal" aria-label="Prince of Africa seal">
          <span>AFRICA</span>
          <strong>PRINCE</strong>
          <span>NOT BY CROWN — BY RESPONSIBILITY</span>
        </div>
      </section>

      <section className="prince-thesis" id="manifesto">
        <div className="prince-label">01 / ZOOM OUT</div>
        <div>
          <h2>Do not judge the book by its cover. <i>Read the whole story.</i></h2>
          <p>
            A stereotype can be inherited without being true. A bad story can be repeated
            until it sounds like history. But the person standing in front of you is still
            allowed to write another chapter.
          </p>
          <p>
            I am interested in that chapter: where technology becomes service, where
            African intelligence is exported as value rather than suspicion, and where
            generosity becomes evidence that a narrative can change.
          </p>
        </div>
      </section>

      <section className="prince-gift" id="gift">
        <div className="prince-label">02 / THE GIFT</div>
        <div className="prince-gift-copy">
          <p className="prince-overline">NO PAYMENT REQUIRED</p>
          <h2>Take something useful.</h2>
          <p>
            The point is not to convince you that every African is good, or that every
            Western story is bad. The point is simpler: <strong>judge the work.</strong>
          </p>
          <div className="prince-gift-list">
            {gifts.map(([number, title, body]) => (
              <article key={number}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{body}</p></div>
                <b>↗</b>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="prince-quote">
        <p>“The opposite of a stereotype is not another stereotype. It is a person.”</p>
        <span>— THE PRINCIPLE OF THE PAGE</span>
      </section>

      <section className="prince-journey">
        <div className="prince-label">03 / THE JOURNEY</div>
        <div className="prince-steps">
          <div><span>01</span><h3>Look closer.</h3><p>What you see first may only be the packaging.</p></div>
          <div><span>02</span><h3>Test the work.</h3><p>Ideas earn trust through usefulness, not biography.</p></div>
          <div><span>03</span><h3>Carry it forward.</h3><p>If something helps you, use it. Then make something that helps someone else.</p></div>
        </div>
      </section>

      <section className="prince-final">
        <p className="prince-kicker">THE PRINCE OF AFRICA</p>
        <h2>No crown required.</h2>
        <p>
          A prince, in this story, is not a claim to bloodline or inherited power.
          It is a commitment to carry something valuable from one generation to another.
        </p>
        <div className="prince-actions">
          <Link href="/" className="prince-button">ENTER DAIZLAB →</Link>
          <a href="#manifesto" className="prince-link">START AGAIN ↑</a>
        </div>
      </section>

      <footer className="prince-footer">
        <span>DAIZLAB / THIS</span>
        <span>AFRICA → WORLD / VALUE WITHOUT THE ASK</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </main>
  );
}
