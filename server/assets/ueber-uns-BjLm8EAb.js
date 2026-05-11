import { jsxs, jsx } from "react/jsx-runtime";
import { S as SiteShell } from "./SiteShell-E7Fzmrf6.js";
import "@tanstack/react-router";
import "@phosphor-icons/react";
import "react";
const TEAM = [{
  name: "Magdalena Vorderegger",
  role: "Geschäftsführung",
  note: "Wassertechnik, Strategie"
}, {
  name: "Stefan Kühnert",
  role: "Technische Leitung",
  note: "Heizung & Energie"
}, {
  name: "Ruxandra Petrescu",
  role: "Projektleitung Schweiz",
  note: "GWT Swiss AG"
}, {
  name: "Matthias Ehrenberger",
  role: "Service & Wartung",
  note: "Bereitschaft Ost"
}];
const TIMELINE = [["1991", "Gründung als Spezialbetrieb für Trinkwasserinstallation in Leobersdorf."], ["2004", "Aufnahme der Wärmepumpen‑ und Fernwärme‑Sparte."], ["2012", "Erste Therme schlüsselfertig übergeben."], ["2018", "Gründung der GWT Swiss AG in Zürich."], ["2024", "Eigenes Anlagen‑Monitoring für Wartungskunden im Live‑Betrieb."]];
function UeberUns() {
  return /* @__PURE__ */ jsxs(SiteShell, { children: [
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-[1400px] px-5 md:px-10 pt-16 md:pt-24", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-12 gap-10 items-end", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-8", children: [
        /* @__PURE__ */ jsx("div", { className: "font-mono text-[11px] uppercase tracking-[0.22em] text-ink/40 mb-5", children: "Haltung" }),
        /* @__PURE__ */ jsxs("h1", { className: "display-xl text-[12vw] md:text-[7vw] text-ink", children: [
          "Familienbetrieb,",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "italic font-light text-surf", children: "zweite Generation." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "md:col-span-4 text-ink/65 text-sm leading-relaxed", children: "Wir sind ein Handwerksbetrieb, der gewachsen ist, weil Wasser ein dauerhaftes Thema ist. Nicht, weil wir das nächste Quartal optimieren wollten." })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-[1400px] px-5 md:px-10 mt-28", children: [
      /* @__PURE__ */ jsx("div", { className: "font-mono text-[11px] uppercase tracking-[0.22em] text-ink/40 mb-8", children: "(01) Geschichte" }),
      /* @__PURE__ */ jsx("ol", { className: "border-t border-ink/10", children: TIMELINE.map(([year, text]) => /* @__PURE__ */ jsxs("li", { className: "grid md:grid-cols-12 gap-6 py-7 border-b border-ink/10", children: [
        /* @__PURE__ */ jsx("div", { className: "md:col-span-2 font-mono text-ink text-xl tracking-tight", children: year }),
        /* @__PURE__ */ jsx("div", { className: "md:col-span-10 text-ink/75 text-[15px] md:text-lg leading-relaxed max-w-3xl", children: text })
      ] }, year)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-[1400px] px-5 md:px-10 mt-28", children: [
      /* @__PURE__ */ jsx("div", { className: "font-mono text-[11px] uppercase tracking-[0.22em] text-ink/40 mb-8", children: "(02) Personen" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/10 rounded-[2rem] overflow-hidden border border-ink/10", children: TEAM.map((p) => /* @__PURE__ */ jsxs("div", { className: "bg-paper p-6 md:p-8 min-h-[220px] flex flex-col", children: [
        /* @__PURE__ */ jsx("div", { className: "aspect-square w-16 rounded-full bg-mist grid place-items-center text-ink font-display text-xl", children: p.name.split(" ").map((n) => n[0]).slice(0, 2).join("") }),
        /* @__PURE__ */ jsxs("div", { className: "mt-auto", children: [
          /* @__PURE__ */ jsx("div", { className: "font-display text-lg text-ink tracking-tight leading-tight", children: p.name }),
          /* @__PURE__ */ jsx("div", { className: "text-ink/60 text-[13px] mt-1", children: p.role }),
          /* @__PURE__ */ jsx("div", { className: "font-mono text-[11px] text-ink/40 mt-1", children: p.note })
        ] })
      ] }, p.name)) })
    ] })
  ] });
}
export {
  UeberUns as component
};
