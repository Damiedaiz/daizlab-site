"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type GatewayGroup = {
  id: string;
  number: string;
  title: string;
  description: string;
  links: { label: string; detail: string; href: string; external?: boolean }[];
};

const groups: GatewayGroup[] = [
  {
    id: "doctrine", number: "01", title: "Discover the doctrine",
    description: "Start with the ideas, research and principles behind intent-led systems.",
    links: [
      { label: "Genesis", detail: "The origin of intent", href: "/genesis" },
      { label: "Research archive", detail: "Notes, essays and explorations", href: "/archive" },
      { label: "Architecture", detail: "How the system is structured", href: "/architecture" },
      { label: "Leviticus", detail: "The laws of intent and leverage", href: "https://daizlab.store/levticuls", external: true },
      { label: "Numbers", detail: "The calculus of scale and return", href: "https://daizlab.store/numberZ", external: true }
    ]
  },
  {
    id: "systems", number: "02", title: "Explore the systems",
    description: "Move from principles into operating systems, workflows and applied infrastructure.",
    links: [
      { label: "Smart Logistics · SLOS", detail: "Operational learning and logistics workflows", href: "/slos" },
      { label: "Growth systems", detail: "Build repeatable growth infrastructure", href: "/growth-systems" },
      { label: "WAAAS", detail: "Web application as an operating system", href: "/waaas" },
      { label: "DaizClou Mesh", detail: "Connected infrastructure and signals", href: "/mesh" },
      { label: "Supply Chain Finance", detail: "SCF command centre", href: "https://daizlab.vercel.app/scf", external: true }
    ]
  },
  {
    id: "experience", number: "03", title: "Enter the experience",
    description: "Use the interactive spaces where people, memory and digital action meet.",
    links: [
      { label: "Haven", detail: "A calmer personal digital space", href: "/haven" },
      { label: "Social Story Archive", detail: "Personal visual-memory experience", href: "https://daizlab.vercel.app/ssa", external: true },
      { label: "Outside Tech", detail: "Member and administrator access", href: "https://daizlab.vercel.app/outside-tech/login?redirectedFrom=%2Foutside-tech%2Fadmin", external: true },
      { label: "DaizBaba", detail: "The architect's point of view", href: "/damiedaiz" },
      { label: "DGCS", detail: "Digital growth and client systems", href: "/dgcs.html" }
    ]
  }
];

export default function GatewayNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const root = useRef<HTMLDivElement>(null);
  const selected = groups.find((group) => group.id === active);

  useEffect(() => {
    function onPointer(event: PointerEvent) {
      if (root.current && !root.current.contains(event.target as Node)) {
        setOpen(false);
        setActive(null);
      }
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        setActive(null);
      }
    }
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  function close() {
    setOpen(false);
    setActive(null);
  }

  return (
    <div className="gateway-nav" ref={root}>
      <button
        className={`gateway-trigger ${open ? "is-open" : ""}`}
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => { setOpen((value) => !value); setActive(null); }}
      >
        <span className="gateway-trigger-mark"><i /><i /><i /></span>
        Gateway <span className="gateway-chevron">⌄</span>
      </button>

      {open && (
        <div className={`gateway-panel ${selected ? "has-selection" : ""}`} role="dialog" aria-label="DaizLab gateway">
          <div className="gateway-panel-top">
            <div>
              <span className="gateway-overline">DAIZLAB / THE ENTRY SYSTEM</span>
              <p>{selected ? "FOLLOW THE NEXT SIGNAL" : "WHERE WOULD YOU LIKE TO GO?"}</p>
            </div>
            <button className="gateway-close" type="button" aria-label="Close gateway" onClick={close}>×</button>
          </div>

          {!selected ? (
            <div className="gateway-stage">
              <div className="gateway-stage-heading">
                <span className="gateway-stage-index">01 / SELECT A DOMAIN</span>
                <span className="gateway-stage-hint">Three paths. One connected system.</span>
              </div>
              <div className="gateway-path-list">
                {groups.map((group) => (
                  <button className="gateway-path" type="button" key={group.id} onClick={() => setActive(group.id)}>
                    <span className="gateway-path-number">{group.number}</span>
                    <span className="gateway-path-copy"><strong>{group.title}</strong><small>{group.description}</small></span>
                    <span className="gateway-path-arrow">↗</span>
                  </button>
                ))}
              </div>
              <div className="gateway-panel-foot"><span className="gateway-live-dot" /> INTENT → DECISION → EXECUTION</div>
            </div>
          ) : (
            <div className="gateway-stage gateway-stage-detail">
              <button className="gateway-back" type="button" onClick={() => setActive(null)}>← ALL PATHS</button>
              <div className="gateway-stage-heading">
                <span className="gateway-stage-index">02 / {selected.number} — {selected.title.toUpperCase()}</span>
                <span className="gateway-stage-hint">{selected.description}</span>
              </div>
              <div className="gateway-destination-list">
                {selected.links.map((item, index) => (
                  <Link className="gateway-destination" href={item.href} key={item.label} onClick={close} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined}>
                    <span className="gateway-destination-number">{String(index + 1).padStart(2, "0")}</span>
                    <span className="gateway-destination-copy"><strong>{item.label}</strong><small>{item.detail}</small></span>
                    <span className="gateway-destination-arrow">↗</span>
                  </Link>
                ))}
              </div>
              <div className="gateway-panel-foot"><span>PATH SELECTED</span><button type="button" onClick={() => setActive(null)}>CHOOSE ANOTHER DOMAIN ↗</button></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
