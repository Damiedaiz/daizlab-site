import Link from "next/link";

const pillars = [
  { number: "01", title: "DISCOVERY", text: "Structured player intake: position, age, location, dominant foot, physical profile and match footage." },
  { number: "02", title: "DEVELOPMENT", text: "A clear development pathway built around technical, tactical, physical and professional readiness." },
  { number: "03", title: "DOCUMENTATION", text: "A presentation-ready player profile that helps clubs assess the person, the player and the evidence." },
  { number: "04", title: "DISTRIBUTION", text: "Professional introductions, placement conversations and career guidance built around the player's long-term interests." }
];

const steps = [
  ["01", "Submit your details", "Share your football background, preferred position and available match footage."],
  ["02", "Initial review", "The MESH team reviews the information and determines whether a further assessment is appropriate."],
  ["03", "Assessment & plan", "Suitable players receive a clear next-step recommendation and development priorities."],
  ["04", "Representation pathway", "Where there is mutual fit, representation terms and the next steps are discussed transparently."]
];

const whatsapp = "https://wa.me/?text=Hello%20MESH%20Elite%20Talent%2C%20I%27m%20interested%20in%20a%20player%20assessment.";

export default function MeshPage() {
  return (
    <main className="wrap" style={{ maxWidth: 1120 }}>
      <section className="hero" style={{ maxWidth: 920, paddingTop: 88 }}>
        <p className="eyebrow" style={{ color: "#CFB113" }}>MESH ELITE TALENT <span style={{ color: "#57e0ad" }}> / MET</span></p>
        <p style={{ color: "#91a4b6", letterSpacing: ".22em", fontSize: ".7rem", fontWeight: 700 }}>PLAYER REPRESENTATION · CAREER DEVELOPMENT · CLUB CONNECTIONS</p>
        <h1 style={{ maxWidth: 850 }}>Architecting <em style={{ color: "#CFB113" }}>elite football</em> careers.</h1>
        <p className="lead">A structured pathway for emerging football talent. We bring player insight, professional development and purposeful club conversations into one clear process.</p>
        <div className="hero-actions">
          <a className="btn" href="#player-pathway" style={{ borderColor: "#CFB11399", background: "#CFB11312" }}>Explore the pathway <span>↘</span></a>
          <a className="text-link" href={whatsapp} target="_blank" rel="noreferrer">Make an enquiry →</a>
        </div>
        <div className="signal"><span className="pulse" style={{ background: "#CFB113", boxShadow: "0 0 12px #CFB113" }} /> DISCOVER <span className="line" /> DEVELOP <span className="line" /> POSITION</div>
      </section>

      <section className="section" style={{ borderTopColor: "#CFB11344" }}>
        <div className="section-kicker" style={{ color: "#CFB113" }}>THE MESH STANDARD</div>
        <div className="section-heading">
          <h2>Talent deserves more than a forwarded highlight video.</h2>
          <p>Every career needs context, preparation and the right professional conversations. MESH is building a disciplined process around all three.</p>
        </div>
        <div className="grid-2">
          <article className="content-card">
            <span className="eyebrow" style={{ color: "#CFB113" }}>OUR POSITION</span>
            <h3 style={{ fontSize: "1.5rem", lineHeight: 1.25 }}>A career-first approach to football representation.</h3>
            <p className="muted">We look beyond a single performance. We consider the player's ability, character, readiness, ambitions and the environment in which they can grow.</p>
          </article>
          <article className="content-card" style={{ background: "linear-gradient(145deg,#102722,#081323)", borderColor: "#28594c" }}>
            <span className="eyebrow">OUR PRINCIPLE</span>
            <h3 style={{ fontSize: "1.5rem", lineHeight: 1.25 }}>Systems over hustle. Evidence over noise.</h3>
            <p className="muted">Clear information. Honest assessment. Professional communication. Sustainable career decisions.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-kicker" style={{ color: "#CFB113" }}>THE FOUR-PILLAR SYSTEM</div>
        <h2>From potential to professional opportunity.</h2>
        <div className="objective-list" style={{ marginTop: 30 }}>
          {pillars.map((pillar) => (
            <article className="objective-card" key={pillar.number} style={{ borderColor: "#CFB11333" }}>
              <span className="num" style={{ color: "#CFB113" }}>{pillar.number} / MET PROTOCOL</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="player-pathway">
        <div className="section-kicker" style={{ color: "#CFB113" }}>PLAYER PATHWAY</div>
        <div className="section-heading">
          <h2>A clear process. One step at a time.</h2>
          <p>Players and families should understand what happens next, what information is needed and when a decision has been made.</p>
        </div>
        <div style={{ display: "grid", gap: 12 }}>
          {steps.map(([number, title, text]) => (
            <article key={number} className="content-card" style={{ display: "grid", gridTemplateColumns: "62px 1fr", gap: 15, margin: 0 }}>
              <strong style={{ color: "#CFB113", fontSize: "1.2rem" }}>{number}</strong>
              <div><h3 style={{ margin: "0 0 5px" }}>{title}</h3><p className="muted" style={{ margin: 0 }}>{text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <div className="section-kicker" style={{ color: "#CFB113" }}>FOR CLUBS & SCOUTS</div>
          <h2>Relevant talent. Clear information. Direct conversations.</h2>
        </div>
        <div>
          <p className="muted">MESH aims to make player introductions useful to decision-makers: concise profiles, verified information where available, match footage and a clear point of contact.</p>
          <a className="btn" href={whatsapp} target="_blank" rel="noreferrer" style={{ borderColor: "#CFB11399", background: "#CFB11312" }}>Discuss a player →</a>
        </div>
      </section>

      <section className="cta-band" style={{ borderTop: "1px solid #CFB11344" }}>
        <p className="eyebrow" style={{ color: "#CFB113" }}>THE NEXT MOVE STARTS WITH A CONVERSATION</p>
        <h2>Build the career with intention.</h2>
        <p className="lead" style={{ fontSize: "1rem" }}>Players, parents, coaches and club representatives can make an initial enquiry directly to MESH Elite Talent.</p>
        <div className="hero-actions">
          <a className="btn" href={whatsapp} target="_blank" rel="noreferrer" style={{ borderColor: "#CFB113", background: "#CFB113", color: "#090a0f" }}>Start an enquiry <span>↗</span></a>
          <Link className="text-link" href="/">A DaizLab experience →</Link>
        </div>
        <p className="muted" style={{ fontSize: ".75rem", marginTop: 28 }}>Prototype notice: this page is an informational front-end. Player submissions, document uploads, player records and representation agreements are not collected or stored on this prototype.</p>
      </section>
    </main>
  );
}
