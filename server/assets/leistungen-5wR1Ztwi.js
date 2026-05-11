import { jsxs, jsx } from "react/jsx-runtime";
import { S as SiteShell } from "./SiteShell-E7Fzmrf6.js";
import { CheckCircle } from "@phosphor-icons/react";
import "@tanstack/react-router";
import "react";
const BLOCKS = [{
  no: "01",
  title: "Wassertechnik",
  lead: "Trinkwasser-, Brauchwasser- und Abwassersysteme — hygienisch und normgerecht.",
  items: ["Trinkwasserinstallation nach ÖNORM B 2531", "Druckerhöhungs‑ und Verteilanlagen", "Wasseraufbereitung & Enthärtung", "Regenwasser‑ und Grauwassernutzung", "Hygienespülungen & Legionellenprophylaxe"]
}, {
  no: "02",
  title: "Heizung & Energie",
  lead: "Wärme erzeugen, verteilen, regeln. Vom Einfamilienhaus bis zum Quartier.",
  items: ["Wärmepumpen (Sole, Luft, Grundwasser)", "Hydraulischer Abgleich & Effizienz‑Audit", "Fernwärmeanschlüsse & Übergabestationen", "Pufferspeicher & Pelletsanlagen", "Smart‑Heating & MSR‑Technik"]
}, {
  no: "03",
  title: "Schwimmbad & Therme",
  lead: "Komplette Bäder — Becken, Filtertechnik, Wellness.",
  items: ["Privat‑ und Hotelbecken (Beton, Edelstahl, Folie)", "Filter‑, Dosier‑ und UV‑Technik", "Sauna, Dampfbad, Whirlpool", "Therme: Planung, Errichtung, Betrieb", "Sanierung & Modernisierung"]
}, {
  no: "04",
  title: "Service & Wartung",
  lead: "Eigene Techniker. Eigene Ersatzteile. Eigene Verantwortung.",
  items: ["Wartungsverträge mit fixierten Zeitfenstern", "24 h‑Störungsdienst (Ostösterreich)", "Sanierung von Bestands‑Anlagen", "Anlagen‑Monitoring & Reporting", "Energie‑ und Effizienzberatung"]
}];
function Leistungen() {
  return /* @__PURE__ */ jsxs(SiteShell, { children: [
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-[1400px] px-5 md:px-10 pt-16 md:pt-24", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-12 gap-10 items-end", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-8", children: [
        /* @__PURE__ */ jsx("div", { className: "font-mono text-[11px] uppercase tracking-[0.22em] text-ink/40 mb-5", children: "Leistungen" }),
        /* @__PURE__ */ jsxs("h1", { className: "display-xl text-[12vw] md:text-[7vw] text-ink", children: [
          "Was wir tun,",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "italic font-light text-surf", children: "und nichts darüber hinaus." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "md:col-span-4 text-ink/60 text-sm leading-relaxed max-w-sm", children: "Vier Disziplinen, die einander brauchen. Wir trennen sie nur, damit Ausschreibungen sauber bleiben — geplant wird immer zusammen." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-[1400px] px-5 md:px-10 mt-24 md:mt-36 space-y-px bg-ink/10 rounded-[2rem] overflow-hidden border border-ink/10", children: BLOCKS.map((b) => /* @__PURE__ */ jsxs("article", { className: "bg-paper grid md:grid-cols-12 gap-8 p-8 md:p-14", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "font-mono text-[11px] text-ink/40", children: [
          "/",
          b.no
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "mt-2 font-display text-3xl md:text-4xl tracking-tighter text-ink", children: b.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-ink/60 text-sm leading-relaxed max-w-sm", children: b.lead })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "md:col-span-8 grid sm:grid-cols-2 gap-x-8", children: b.items.map((it, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 py-4 border-b border-ink/10 last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0", style: {
        ["--i"]: i
      }, children: [
        /* @__PURE__ */ jsx(CheckCircle, { size: 18, weight: "duotone", className: "text-surf shrink-0 mt-0.5" }),
        /* @__PURE__ */ jsx("span", { className: "text-ink text-[15px]", children: it })
      ] }, it)) })
    ] }, b.no)) })
  ] });
}
export {
  Leistungen as component
};
