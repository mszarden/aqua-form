import { jsxs, jsx } from "react/jsx-runtime";
import { S as SiteShell } from "./SiteShell-E7Fzmrf6.js";
import { ArrowUpRight } from "@phosphor-icons/react";
import { h as heroImg, b as buildingImg, p as poolImg, a as heatImg } from "./hero-water-DQzh4vkQ.js";
import "@tanstack/react-router";
import "react";
const PROJECTS = [{
  year: "2025",
  place: "Baden bei Wien",
  type: "Therme",
  title: "Solbecken‑Sanierung Sauerhof",
  img: heroImg,
  kpi: "−42 % Energie"
}, {
  year: "2024",
  place: "Mödling",
  type: "Wohnbau",
  title: "Quartiersnetz mit Wärmepumpe",
  img: buildingImg,
  kpi: "118 WE"
}, {
  year: "2024",
  place: "Zürich",
  type: "Hotel",
  title: "Wellnessanlage Seedamm",
  img: poolImg,
  kpi: "780 m² Wasser"
}, {
  year: "2023",
  place: "Wiener Neustadt",
  type: "Industrie",
  title: "Prozesswärme Härterei",
  img: heatImg,
  kpi: "1.2 MW"
}, {
  year: "2023",
  place: "Wien 22",
  type: "Schule",
  title: "Hydraulischer Abgleich Bildungscampus",
  img: heatImg,
  kpi: "−38 % CO₂"
}, {
  year: "2022",
  place: "Leobersdorf",
  type: "Privat",
  title: "Edelstahl‑Außenbecken Villa K.",
  img: poolImg,
  kpi: "12 × 4 m"
}];
function Projekte() {
  return /* @__PURE__ */ jsxs(SiteShell, { children: [
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-[1400px] px-5 md:px-10 pt-16 md:pt-24", children: [
      /* @__PURE__ */ jsx("div", { className: "font-mono text-[11px] uppercase tracking-[0.22em] text-ink/40 mb-5", children: "Projekte" }),
      /* @__PURE__ */ jsxs("h1", { className: "display-xl text-[12vw] md:text-[7vw] text-ink", children: [
        "Ausgewählte",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "italic font-light text-surf", children: "Referenzen." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-[1400px] px-5 md:px-10 mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-6", children: PROJECTS.map((p, i) => /* @__PURE__ */ jsxs("a", { href: "#", className: `group rounded-[2rem] overflow-hidden border border-ink/10 bg-paper hover:bg-mist/30 transition-colors ${i % 3 === 0 ? "md:col-span-2" : ""}`, children: [
      /* @__PURE__ */ jsxs("div", { className: `relative overflow-hidden ${i % 3 === 0 ? "aspect-[16/7]" : "aspect-[4/3]"}`, children: [
        /* @__PURE__ */ jsx("img", { src: p.img, alt: p.title, loading: "lazy", width: 1200, height: 900, className: "absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" }),
        /* @__PURE__ */ jsxs("div", { className: "absolute top-5 left-5 flex gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest bg-paper/90 text-ink rounded-full px-3 py-1", children: p.type }),
          /* @__PURE__ */ jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest bg-ink/80 text-paper rounded-full px-3 py-1", children: p.year })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-5 right-5 grid place-items-center h-10 w-10 rounded-full bg-paper text-ink group-hover:rotate-45 transition-transform", children: /* @__PURE__ */ jsx(ArrowUpRight, { size: 16, weight: "bold" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-6 md:p-8 flex items-end justify-between gap-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-mono text-[11px] text-ink/40 uppercase tracking-widest", children: p.place }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl md:text-3xl tracking-tighter text-ink mt-1", children: p.title })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "font-mono text-ink text-sm shrink-0", children: p.kpi })
      ] })
    ] }, p.title)) })
  ] });
}
export {
  Projekte as component
};
