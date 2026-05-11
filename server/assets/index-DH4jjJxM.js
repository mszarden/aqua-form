import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Drop, Flame, Waves, Wrench } from "@phosphor-icons/react";
import { S as SiteShell } from "./SiteShell-E7Fzmrf6.js";
import { h as heroImg, b as buildingImg, a as heatImg, p as poolImg } from "./hero-water-DQzh4vkQ.js";
import "react";
function Home() {
  return /* @__PURE__ */ jsxs(SiteShell, { children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Marquee, {}),
    /* @__PURE__ */ jsx(Manifesto, {}),
    /* @__PURE__ */ jsx(Disciplines, {}),
    /* @__PURE__ */ jsx(Numbers, {}),
    /* @__PURE__ */ jsx(Bento, {}),
    /* @__PURE__ */ jsx(CTA, {})
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsx("section", { className: "relative mx-auto max-w-[1400px] px-5 md:px-10 pt-12 md:pt-20", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-end", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 reveal", style: {
      ["--i"]: 0
    }, children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-8", children: [
        /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-ink pulse-dot" }),
        /* @__PURE__ */ jsx("span", { className: "font-mono text-[11px] uppercase tracking-[0.22em] text-ink/60", children: "Leobersdorf · Wien · Zürich" })
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "display-xl text-[14vw] md:text-[8.4vw] lg:text-[7.2vw] text-ink", children: [
        "Wasser, das",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "italic font-light text-surf", children: "verlässlich" }),
        " fließt."
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 max-w-xl text-[15px] md:text-base text-ink/70 leading-relaxed", children: "GWT Group plant, baut und betreut wassertechnische Anlagen — Trink‑ und Heizwasser, Schwimmbad, Therme, Fernwärme. Ein Ansprechpartner. Vom ersten Strich bis zur jährlichen Wartung." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap items-center gap-3", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/kontakt", className: "group inline-flex items-center gap-2 bg-ink text-paper rounded-full pl-6 pr-2 py-3 text-sm font-medium hover:bg-ink/90 active:translate-y-[1px] transition", children: [
          "Projekt anfragen",
          /* @__PURE__ */ jsx("span", { className: "grid place-items-center h-8 w-8 rounded-full bg-paper/15 group-hover:rotate-45 transition-transform duration-300", children: /* @__PURE__ */ jsx(ArrowUpRight, { size: 14, weight: "bold" }) })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/leistungen", className: "inline-flex items-center gap-2 text-sm text-ink/80 hover:text-ink px-5 py-3", children: [
          "Leistungen ansehen",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-5 reveal", style: {
      ["--i"]: 2
    }, children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "aspect-[4/5] rounded-[2.5rem] overflow-hidden ink-shadow", children: /* @__PURE__ */ jsx("img", { src: heroImg, alt: "Detail einer wassertechnischen Installation mit Edelstahlrohren und Messingventilen", className: "h-full w-full object-cover", width: 1600, height: 1280 }) }),
      /* @__PURE__ */ jsxs("div", { className: "absolute -left-6 -bottom-6 glass rounded-3xl p-5 w-[260px] hidden md:block float-y", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-ink/50", children: [
          /* @__PURE__ */ jsx("span", { children: "Live · Anlage Süd" }),
          /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 pulse-dot" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-3 grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsx(Stat, { k: "Vorlauf", v: "62.4 °C" }),
          /* @__PURE__ */ jsx(Stat, { k: "Druck", v: "3.18 bar" }),
          /* @__PURE__ */ jsx(Stat, { k: "Ø Härte", v: "11.7 °dH" }),
          /* @__PURE__ */ jsx(Stat, { k: "Effizienz", v: "94.7 %" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "absolute -right-3 top-6 hidden md:flex items-center gap-2 bg-ink text-paper rounded-full px-4 py-2 text-[11px] font-mono tracking-widest float-y", style: {
        animationDelay: "1.2s"
      }, children: [
        /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-mist pulse-dot" }),
        " SEIT 1991"
      ] })
    ] }) })
  ] }) });
}
function Stat({
  k,
  v
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-widest text-ink/40 font-mono", children: k }),
    /* @__PURE__ */ jsx("div", { className: "font-mono text-ink text-[15px] mt-0.5", children: v })
  ] });
}
function Marquee() {
  const items = ["Trinkwasserinstallation", "Heizungsbau", "Fernwärme", "Schwimmbadtechnik", "Thermenplanung", "Wärmepumpen", "Sanitärtechnik", "Wartung & Service", "Energiekonzepte"];
  return /* @__PURE__ */ jsx("section", { className: "mt-24 md:mt-36 border-y border-ink/10 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "flex marquee whitespace-nowrap py-6", children: [...items, ...items].map((it, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-12 pr-12 text-ink/60", children: [
    /* @__PURE__ */ jsx("span", { className: "font-display text-2xl md:text-3xl tracking-tight", children: it }),
    /* @__PURE__ */ jsxs("span", { className: "font-mono text-[11px] text-ink/30", children: [
      "/",
      (i + 1).toString().padStart(2, "0")
    ] })
  ] }, i)) }) });
}
function Manifesto() {
  return /* @__PURE__ */ jsx("section", { className: "w-full bg-white mt-32 md:mt-44", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1400px] px-5 md:px-10 py-16 md:py-24 lg:py-28", children: [
    /* @__PURE__ */ jsx("div", { className: "font-mono text-[11px] uppercase tracking-[0.22em] text-ink/40 mb-10 reveal", style: {
      ["--i"]: 0
    }, children: "(01) Haltung" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-stretch", children: [
      /* @__PURE__ */ jsx("div", { className: "md:col-span-5 reveal", style: {
        ["--i"]: 1
      }, children: /* @__PURE__ */ jsxs("div", { className: "relative h-full min-h-[320px] rounded-[2rem] overflow-hidden ink-shadow", children: [
        /* @__PURE__ */ jsx("img", { src: buildingImg, alt: "Wassertechnische Installation an einem Gebäude", className: "absolute inset-0 h-full w-full object-cover", loading: "lazy" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-ink/30 via-transparent to-transparent" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-7 flex flex-col", children: [
        /* @__PURE__ */ jsxs("p", { className: "font-display text-3xl md:text-4xl lg:text-5xl tracking-tighter leading-[1.05] text-ink reveal", style: {
          ["--i"]: 3
        }, children: [
          "Eine Leitung ist kein Detail. Sie ist",
          /* @__PURE__ */ jsx("span", { className: "text-surf", children: " die Bedingung dafür" }),
          ", dass ein Gebäude funktioniert — leise, jeden Tag, jahrzehntelang."
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-auto pt-12 grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-ink/10 border-y border-ink/10", children: [["31 J.", "im Markt seit 1991, zwei Generationen"], ["AT · CH", "Standorte Leobersdorf & Zürich"], ["1 Partner", "Planung, Bau, Wartung — aus einer Hand"]].map(([k, v], idx) => /* @__PURE__ */ jsxs("div", { className: "py-8 md:px-6 first:md:pl-0 reveal", style: {
          ["--i"]: 10 + idx * 4
        }, children: [
          /* @__PURE__ */ jsx("div", { className: "font-display text-4xl text-surf tracking-tight", children: k }),
          /* @__PURE__ */ jsx("div", { className: "mt-3 text-ink/60 text-sm leading-relaxed", children: v })
        ] }, k)) })
      ] })
    ] })
  ] }) });
}
const SERVICES = [{
  icon: Drop,
  title: "Wasser­technik",
  body: "Trinkwasser, Brauchwasser, Druckerhöhung, Aufbereitung. Hygienisch, normgerecht, wartungsarm geplant."
}, {
  icon: Flame,
  title: "Heizung & Wärme",
  body: "Wärmepumpen, hydraulischer Abgleich, Fernwärmeanschluss. Energiekonzepte vom EFH bis zum Quartier."
}, {
  icon: Waves,
  title: "Schwimmbad & Therme",
  body: "Beckenbau, Filtertechnik, Wellness‑Installationen. Kommerziell und privat — bis hin zur Therme."
}, {
  icon: Wrench,
  title: "Service",
  body: "Wartungsverträge, Störungsdienst, Sanierung. Eigene Techniker, eigene Ersatzteillogistik."
}];
function Disciplines() {
  return /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-[1400px] px-5 md:px-10 mt-32 md:mt-44", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between gap-8 mb-12", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "font-mono text-[11px] uppercase tracking-[0.22em] text-ink/40 mb-4", children: "(02) Disziplinen" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl md:text-6xl tracking-tighter text-ink leading-none", children: [
          "Vier Gewerke,",
          /* @__PURE__ */ jsx("br", {}),
          "ein Verständnis."
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Link, { to: "/leistungen", className: "hidden md:inline-flex items-center gap-2 text-sm text-ink/70 hover:text-ink", children: [
        "Alle Leistungen ",
        /* @__PURE__ */ jsx(ArrowUpRight, { size: 14, weight: "bold" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10 rounded-[2rem] overflow-hidden border border-ink/10", children: SERVICES.map((s, i) => {
      const Icon = s.icon;
      return /* @__PURE__ */ jsxs(Link, { to: "/leistungen", className: "group bg-paper p-8 md:p-12 flex flex-col gap-6 min-h-[280px] hover:bg-mist/40 active:bg-mist/60 transition-colors", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx(Icon, { size: 28, weight: "duotone", className: "text-ink" }),
          /* @__PURE__ */ jsxs("span", { className: "font-mono text-[11px] text-ink/30", children: [
            "/0",
            i + 1
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-auto", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl md:text-3xl text-ink tracking-tight", children: s.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-ink/60 text-sm leading-relaxed max-w-md", children: s.body }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 inline-flex items-center gap-2 text-ink text-sm", children: [
            /* @__PURE__ */ jsxs("span", { className: "relative", children: [
              "Mehr erfahren",
              /* @__PURE__ */ jsx("span", { className: "absolute left-0 -bottom-0.5 h-px w-full bg-ink scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 origin-left transition-transform duration-300" })
            ] }),
            /* @__PURE__ */ jsx(ArrowRight, { size: 14, className: "group-hover:translate-x-1 group-active:translate-x-1 transition-transform" })
          ] })
        ] })
      ] }, s.title);
    }) })
  ] });
}
function Numbers() {
  return /* @__PURE__ */ jsx("section", { className: "w-full bg-white mt-32 md:mt-44", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1400px] px-5 md:px-10 py-16 md:py-24 grid md:grid-cols-12 gap-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "md:col-span-4", children: [
      /* @__PURE__ */ jsx("div", { className: "font-mono text-[11px] uppercase tracking-[0.22em] text-ink/40 mb-4", children: "(03) Bilanz" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl md:text-5xl tracking-tighter text-ink leading-[1.05]", children: [
        "Keine runden Zahlen.",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "italic text-surf", children: "Dafür echte." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-ink/60 text-sm max-w-sm leading-relaxed", children: "Statt geglätteter Marketingmetriken zeigen wir, was wirklich gemessen wurde — Stand Q1 2026." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "md:col-span-8 grid grid-cols-2 gap-px bg-ink/10 rounded-[2rem] overflow-hidden border border-ink/10", children: [["47 281 m³", "Rohrleitung verlegt"], ["1 247", "Anlagen unter Wartung"], ["94.7 %", "Anlagen­verfügbarkeit"], ["3.4 h", "Ø Reaktion im Service"]].map(([n, l]) => /* @__PURE__ */ jsxs("div", { className: "bg-white p-7 md:p-10", children: [
      /* @__PURE__ */ jsx("div", { className: "font-mono text-3xl md:text-4xl text-ink tracking-tight", children: n }),
      /* @__PURE__ */ jsx("div", { className: "mt-2 text-ink/55 text-[13px]", children: l })
    ] }, n)) }),
    /* @__PURE__ */ jsx("div", { className: "md:col-span-4 rounded-2xl overflow-hidden min-h-[220px]", children: /* @__PURE__ */ jsx("img", { src: heatImg, alt: "Heizungstechnik Detail", className: "h-full w-full object-cover", loading: "lazy" }) }),
    /* @__PURE__ */ jsxs("div", { className: "md:col-span-8 bg-ink text-paper rounded-[2rem] p-7 md:p-10 flex flex-col justify-between", children: [
      /* @__PURE__ */ jsx("div", { className: "font-mono text-[11px] uppercase tracking-widest text-paper/50", children: "Qualitätsindex" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-baseline gap-3 flex-wrap", children: [
        /* @__PURE__ */ jsxs("div", { className: "font-display text-5xl md:text-6xl tracking-tighter", children: [
          "9.6",
          /* @__PURE__ */ jsx("span", { className: "text-paper/40 text-2xl", children: "/10" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-paper/60 text-sm", children: "Kundenbewertungen 2025" })
      ] })
    ] })
  ] }) });
}
function Bento() {
  return /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-[1400px] px-5 md:px-10 mt-32 md:mt-44", children: [
    /* @__PURE__ */ jsx("div", { className: "font-mono text-[11px] uppercase tracking-[0.22em] text-ink/40 mb-4", children: "(04) Felder" }),
    /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-6xl tracking-tighter text-ink leading-none mb-12", children: "Was wir bauen." }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-5 md:auto-rows-[140px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-5 md:row-span-4 rounded-[2rem] overflow-hidden relative group min-h-[360px]", children: [
        /* @__PURE__ */ jsx("img", { src: poolImg, alt: "Wasseroberfläche eines Schwimmbads", className: "absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700", loading: "lazy", width: 1200, height: 1500 }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-ink/10" }),
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 p-8 md:p-10 text-paper flex flex-col justify-center md:justify-end", children: [
          /* @__PURE__ */ jsx("div", { className: "font-mono text-[11px] tracking-widest opacity-80 drop-shadow", children: "Schwimmbad · Therme" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-3xl md:text-5xl mt-2 tracking-tighter drop-shadow-md", children: "Becken, die ruhig bleiben." }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-paper/80 text-sm max-w-xs", children: "Filtration, UV‑Entkeimung, Wärmerückgewinnung — kommerziell und privat." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-4 md:row-span-2 rounded-[2rem] bg-ink text-paper p-8 md:p-10 flex flex-col gap-6 justify-center md:justify-between relative overflow-hidden min-h-[220px]", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -right-10 -top-10 h-40 w-40 rounded-full bg-surf/30 blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "font-mono text-[11px] uppercase tracking-widest opacity-60 relative", children: "Energie · live" }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "font-mono text-5xl md:text-4xl lg:text-6xl tracking-tight", children: "−38 %" }),
          /* @__PURE__ */ jsx("div", { className: "text-paper/60 text-xs md:text-[11px] lg:text-sm mt-2 max-w-xs leading-snug", children: "Verbrauch nach hydraulischem Abgleich, Referenzobjekt Mödling." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-3 md:row-span-2 rounded-[2rem] bg-mist text-ink p-8 md:p-7 flex flex-col gap-6 justify-center md:justify-between min-h-[220px]", children: [
        /* @__PURE__ */ jsx("div", { className: "font-mono text-[11px] uppercase tracking-widest text-ink/50", children: "Material" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-display text-2xl tracking-tight", children: "Edelstahl & Messing." }),
          /* @__PURE__ */ jsx("div", { className: "text-ink/60 text-xs mt-2", children: "Pressverbindungen — sauber im Trinkwassernetz." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-7 md:row-span-2 rounded-[2rem] overflow-hidden relative group min-h-[260px]", children: [
        /* @__PURE__ */ jsx("img", { src: heatImg, alt: "Heizungs-Steuerung mit Kupferleitungen", className: "absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700", loading: "lazy", width: 1200, height: 900 }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/30 to-transparent" }),
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 p-8 md:p-10 flex flex-col justify-center md:justify-end text-paper", children: [
          /* @__PURE__ */ jsx("div", { className: "font-mono text-[11px] tracking-widest opacity-80 drop-shadow", children: "Heizung · Service" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-3xl md:text-4xl mt-2 tracking-tighter max-w-md drop-shadow-md", children: "Wärme, die bleibt — auch im Februar." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-5 md:row-span-2 rounded-[2rem] overflow-hidden relative group min-h-[260px]", children: [
        /* @__PURE__ */ jsx("img", { src: buildingImg, alt: "Wärmepumpe an einem Wohnhaus", className: "absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700", loading: "lazy", width: 1200, height: 900 }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" }),
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 p-7 text-paper flex flex-col justify-center md:justify-end", children: [
          /* @__PURE__ */ jsx("div", { className: "font-mono text-[11px] tracking-widest opacity-80 drop-shadow", children: "Energiekonzepte" }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl md:text-3xl mt-2 tracking-tight max-w-xs drop-shadow-md", children: "Wärmepumpen für den Bestand." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-7 md:row-span-2 rounded-[2rem] bg-white border border-ink/10 p-8 md:p-10 flex flex-col gap-6 justify-center md:justify-between min-h-[220px]", children: [
        /* @__PURE__ */ jsx("div", { className: "font-mono text-[11px] uppercase tracking-widest text-ink/40", children: "Service · Niederösterreich" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "font-mono text-4xl md:text-5xl text-ink tracking-tight", children: "3.4 h" }),
            /* @__PURE__ */ jsx("div", { className: "text-ink/50 text-sm", children: "Ø Reaktionszeit" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-ink/60 text-sm mt-3 max-w-sm", children: "Eigene Techniker im 24 h‑Bereitschaftsdienst — kein Subunternehmer‑Roulette." })
        ] })
      ] })
    ] })
  ] });
}
function CTA() {
  return /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-[1400px] px-5 md:px-10 mt-32 md:mt-44", children: /* @__PURE__ */ jsxs("div", { className: "rounded-[2.5rem] bg-ink text-paper p-10 md:p-16 grid md:grid-cols-12 gap-10 items-end relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute -right-20 -top-20 h-80 w-80 rounded-full bg-surf/30 blur-3xl" }),
    /* @__PURE__ */ jsxs("div", { className: "md:col-span-7 relative", children: [
      /* @__PURE__ */ jsx("div", { className: "font-mono text-[11px] uppercase tracking-[0.22em] text-paper/50 mb-5", children: "(05) Anfrage" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl md:text-6xl tracking-tighter leading-[1.02]", children: [
        "Schicken Sie uns",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "italic text-mist", children: "Ihren Plan." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-md text-paper/70 text-sm leading-relaxed", children: "Wir antworten innerhalb eines Werktags mit einer ehrlichen Einschätzung — auch dann, wenn das Projekt nicht zu uns passt." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "md:col-span-5 relative flex flex-col gap-3", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/kontakt", className: "group inline-flex items-center justify-between bg-paper text-ink rounded-full pl-6 pr-2 py-3 text-sm font-medium hover:bg-mist active:translate-y-[1px] transition", children: [
        "Beratungsgespräch buchen",
        /* @__PURE__ */ jsx("span", { className: "grid place-items-center h-9 w-9 rounded-full bg-ink text-paper group-hover:rotate-45 transition-transform", children: /* @__PURE__ */ jsx(ArrowUpRight, { size: 14, weight: "bold" }) })
      ] }),
      /* @__PURE__ */ jsxs("a", { href: "mailto:office@gwt.at", className: "inline-flex items-center justify-between border border-paper/20 rounded-full pl-6 pr-5 py-3 text-sm text-paper/80 hover:border-paper/50 transition", children: [
        "office@gwt.at",
        /* @__PURE__ */ jsx("span", { className: "font-mono text-[11px] text-paper/40", children: "direkt schreiben" })
      ] })
    ] })
  ] }) });
}
export {
  Home as component
};
