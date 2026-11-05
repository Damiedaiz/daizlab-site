import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Genesis Engine — Mapping the History of Human Intent",
  description: "A DaizLab research framework tracing how human intent moves from precept to expression, interpretation, decision and execution.",
  alternates: { canonical: "/genesis" },
  openGraph: {
    type: "article",
    title: "The Genesis Engine: Mapping the History of Human Intent",
    description: "Before a system can process value, it must understand the source of the action.",
    url: "https://daizlab.app/genesis"
  }
};

const history = [
  { era: "01 / PRE-LANGUAGE", title: "The age of gesture", text: "Before formal writing, people communicated purpose through movement, posture, facial expression, objects and shared routines. A gesture was not merely motion; within a social context it could signal warning, invitation, refusal, direction or need." },
  { era: "02 / SPOKEN CULTURE", title: "The age of language", text: "Speech made intention portable between minds. People could describe an absent object, negotiate a future outcome, ask for help and explain why an action mattered. Meaning became richer, but it remained dependent on context, memory and interpretation." },
  { era: "03 / SYMBOLIC MEMORY", title: "The age of inscription", text: "Marks, numbers, drawings and writing allowed intent to outlive the moment in which it was expressed. Agreements, instructions, records and stories could travel across distance and generations. Human purpose began to acquire an external memory." },
  { era: "04 / MECHANICAL SYSTEMS", title: "The age of standardised procedure", text: "Forms, ledgers, timetables, machines and institutions translated human decisions into repeatable procedures. Standardisation increased scale, but it also separated the original reason for an instruction from the process that later carried it out." },
  { era: "05 / DIGITAL INTERFACES", title: "The age of clicks and commands", text: "Computers made interaction measurable. Buttons, forms, menus, search queries and events gave software observable inputs. Yet a click often records what happened without fully explaining what the person hoped to achieve." },
  { era: "06 / NETWORKED INTELLIGENCE", title: "The age of connected signals", text: "Connected devices and platforms made behaviour visible across sessions and services. This created opportunities for continuity and relevance, alongside serious responsibilities around consent, privacy, data minimisation and the risk of mistaking correlation for intention." },
  { era: "07 / INTENT-AWARE SYSTEMS", title: "The age of interpretation", text: "Language models and structured data make it increasingly practical to interpret requests in context, represent uncertainty and connect a person's stated objective to an appropriate next step. The challenge is not simply automation; it is accountable interpretation." }
];

const pipeline = [
  ["01", "Precept", "The initial idea, need, belief or condition from which a purpose begins."],
  ["02", "Formation", "The person develops a desired outcome, constraint, priority and sense of what success would mean."],
  ["03", "Expression", "Intent becomes communicable through speech, text, gesture, behaviour or a digital request."],
  ["04", "Capture", "A system receives the expression together with only the context that is relevant and permitted."],
  ["05", "Classification", "The signal is organised into a useful category without pretending that a category captures the whole person."],
  ["06", "Interpretation", "The system forms a provisional understanding, identifies ambiguity and distinguishes evidence from assumption."],
  ["07", "Confirmation", "The person can correct, clarify or approve the interpretation before consequential action."],
  ["08", "Execution", "An authorised worker, service or process performs the appropriate action within defined limits."],
  ["09", "Evaluation", "The outcome is compared with the intended result, and errors or unintended effects are made visible."],
  ["10", "Learning", "With appropriate permission and safeguards, the system improves its process without treating private human experience as unrestricted training material."]
];

const dimensions = [
  ["Clarity", "Can the intended outcome be stated in a way that is understandable?"],
  ["Context", "What circumstances materially change the meaning of the request?"],
  ["Confidence", "How strong is the evidence behind the interpretation, and what remains uncertain?"],
  ["Consent", "Has the person agreed to the relevant collection, interpretation and action?"],
  ["Consequence", "What happens if the system is wrong, and who is accountable for the result?"]
];

export default function GenesisPage() {
  return (
    <main className="wrap">
      <section className="page-hero" style={{ paddingTop: 92, maxWidth: 900 }}>
        <p className="eyebrow">DAIZLAB RESEARCH / THE GENESIS ENGINE</p>
        <p className="muted" style={{ letterSpacing: ".16em", fontSize: ".72rem" }}>A FRAMEWORK FOR THE HISTORY, STRUCTURE AND EXECUTION OF HUMAN INTENT</p>
        <h1 style={{ fontSize: "clamp(2.8rem,7vw,5.4rem)", lineHeight: 1.02, letterSpacing: "-.06em" }}>The Genesis Engine:<br /><em style={{ color: "var(--green)", fontFamily: "Georgia,serif", fontWeight: 400 }}>Mapping the History</em><br />of Human Intent.</h1>
        <p className="lead">Before a system can process value, it must decode the source of human interaction. The action is visible. The intention that gives it meaning is often not.</p>
        <p className="muted" style={{ fontSize: ".85rem" }}>By Oluwadamilare Taofeek Oloyede · DaizLab</p>
        <div className="hero-actions">
          <a className="btn" href="#genesis-timeline">Explore the history <span>↘</span></a>
          <a className="text-link" href="https://damiedaiz.medium.com/the-genesis-engine-mapping-the-history-of-human-intent-cca2fffd9b23" target="_blank" rel="noreferrer">Read the original essay on Medium ↗</a>
        </div>
        <div className="signal"><span className="pulse" /> PRECEPT <span className="line" /> INTENT <span className="line" /> DECISION <span className="line" /> ACTION</div>
      </section>

      <section className="section">
        <div className="section-kicker">THE CENTRAL PROPOSITION</div>
        <div className="section-heading">
          <h2>Every meaningful action has a history.</h2>
          <p>A request does not begin when a user touches a screen. It begins earlier: with a condition, an idea, a need or a desired change. The interface receives an expression of that history, not the whole history itself.</p>
        </div>
        <article className="content-card" style={{ borderColor: "#57e0ad55", background: "linear-gradient(135deg,#0b1c29,#06101e)" }}>
          <p className="eyebrow">THE DAIZLAB PRINCIPLE</p>
          <h2 style={{ fontSize: "clamp(1.6rem,4vw,2.7rem)", lineHeight: 1.2 }}>A click is an event. Intent is the reason that gives the event meaning.</h2>
          <p className="muted">The purpose of an intent-aware system is not to claim certainty about a person. It is to preserve the relationship between what someone is trying to accomplish, what they communicate, what a system understands and what the system is authorised to do.</p>
        </article>
      </section>

      <section className="section" id="genesis-timeline">
        <div className="section-kicker">01 / THE HISTORY OF EXPRESSION</div>
        <div className="section-heading">
          <h2>From gesture to machine-readable intent.</h2>
          <p>This is an interpretive design history, not a claim that human communication evolved in one straight line. These modes overlap and continue to coexist.</p>
        </div>
        <div style={{ display: "grid", gap: 13 }}>
          {history.map((item) => (
            <article className="content-card" key={item.era} style={{ margin: 0, display: "grid", gridTemplateColumns: "minmax(125px, .28fr) 1fr", gap: 22 }}>
              <span className="num">{item.era}</span>
              <div><h3 style={{ margin: "0 0 8px", fontSize: "1.35rem" }}>{item.title}</h3><p className="muted" style={{ margin: 0 }}>{item.text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-kicker">02 / THE GENESIS PIPELINE</div>
        <div className="section-heading">
          <h2>How a precept becomes an action.</h2>
          <p>The Genesis Engine describes a chain of translation. Each stage can preserve meaning, lose context or introduce error. A robust system makes those transitions inspectable.</p>
        </div>
        <div className="grid-2">
          {pipeline.map(([number, title, text]) => (
            <article className="content-card" key={number} style={{ margin: 0 }}>
              <span className="num">{number} / STAGE</span>
              <h3 style={{ margin: "12px 0 6px", fontSize: "1.25rem" }}>{title}</h3>
              <p className="muted" style={{ margin: 0 }}>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-kicker">03 / THE INTERPRETATION STANDARD</div>
        <div className="section-heading">
          <h2>Understanding requires more than a score.</h2>
          <p>Any intent framework should be assessed across several dimensions. These are design questions and evaluation criteria, not a validated psychological measurement instrument.</p>
        </div>
        <div className="grid-2">
          {dimensions.map(([title, question], i) => (
            <article className="content-card" key={title} style={{ margin: 0 }}>
              <span className="num">0{i + 1} / DIMENSION</span>
              <h3 style={{ margin: "12px 0 6px" }}>{title}</h3>
              <p className="muted" style={{ margin: 0 }}>{question}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <div><div className="section-kicker">04 / FROM EVENTS TO INTELLIGENCE</div><h2>Events are the language. Decisions are the intelligence. Workers are execution.</h2></div>
        <div>
          <p className="muted">In the DaizLab model, channels collect and present signals; an interpretation layer organises context; decision logic selects an authorised next step; and workers carry it out. The architecture should retain a clear boundary between recommendation and execution.</p>
          <p className="muted">This separation makes it possible to audit what was received, what was inferred, what was confirmed, which rule or model influenced a decision and what action followed.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-kicker">05 / THE HUMAN BOUNDARY</div>
        <div className="section-heading"><h2>Interpretation must not become presumption.</h2><p>Human intent is personal, contextual and sometimes contradictory. A system can support understanding, but it should not claim ownership of another person's meaning.</p></div>
        <div className="content-card">
          <ul className="muted" style={{ paddingLeft: 22, margin: 0 }}>
            <li>Collect only information necessary for the stated purpose.</li>
            <li>Explain what is being observed and how it may be used.</li>
            <li>Ask for clarification when evidence is incomplete or ambiguous.</li>
            <li>Provide a meaningful opportunity to correct or reject an interpretation.</li>
            <li>Require explicit authorisation for consequential actions.</li>
            <li>Keep records, retention and access proportionate to the purpose.</li>
            <li>Make human accountability clear when automated decisions affect people.</li>
          </ul>
        </div>
      </section>

      <section className="cta-band" style={{ borderTop: "1px solid var(--line)" }}>
        <p className="eyebrow">THE NEXT LAYER</p>
        <h2>Build systems that can explain the path from intention to outcome.</h2>
        <p className="lead" style={{ fontSize: "1rem" }}>The Genesis Engine is the historical and conceptual foundation. The architecture explores how intent can be represented, interpreted and routed into useful digital action.</p>
        <div className="hero-actions">
          <Link className="btn" href="/architecture">Explore the intent architecture <span>→</span></Link>
          <Link className="text-link" href="/archive">Continue to the research archive ↗</Link>
        </div>
        <p className="muted" style={{ fontSize: ".8rem", marginTop: 28 }}>Author: Oluwadamilare Taofeek Oloyede. This page develops a conceptual framework for systems design. Its historical sequence and evaluation dimensions are presented as an interpretive model, not as established scientific laws.</p>
      </section>
    </main>
  );
}
