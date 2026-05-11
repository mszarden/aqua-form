import { jsxs, jsx } from "react/jsx-runtime";
import { S as SiteShell } from "./SiteShell-E7Fzmrf6.js";
import { useState } from "react";
import { CheckCircle, ArrowUpRight } from "@phosphor-icons/react";
import "@tanstack/react-router";
function Kontakt() {
  const [sent, setSent] = useState(false);
  return /* @__PURE__ */ jsxs(SiteShell, { children: [
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-[1400px] px-5 md:px-10 pt-16 md:pt-24", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-12 gap-10 items-end", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-8", children: [
        /* @__PURE__ */ jsx("div", { className: "font-mono text-[11px] uppercase tracking-[0.22em] text-ink/40 mb-5", children: "Kontakt" }),
        /* @__PURE__ */ jsxs("h1", { className: "display-xl text-[12vw] md:text-[7vw] text-ink", children: [
          "Sprechen Sie",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "italic font-light text-surf", children: "mit uns." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "md:col-span-4 text-ink/65 text-sm leading-relaxed", children: "Werktags innerhalb von 24 Stunden. In Akutfällen für Wartungskunden über die Bereitschafts‑Hotline rund um die Uhr." })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-[1400px] px-5 md:px-10 mt-20 md:mt-28 grid md:grid-cols-12 gap-10", children: [
      /* @__PURE__ */ jsxs("aside", { className: "md:col-span-4 flex flex-col gap-6", children: [
        /* @__PURE__ */ jsx(Block, { label: "Standort AT", main: "Hirtenberger Straße 1, 2544 Leobersdorf", sub: "Mo–Fr · 07:30–17:00" }),
        /* @__PURE__ */ jsx(Block, { label: "Standort CH", main: "GWT Swiss AG, Zürich", sub: "Termine nach Vereinbarung" }),
        /* @__PURE__ */ jsx(Block, { label: "E‑Mail", main: "office@gwt.at", link: "mailto:office@gwt.at" }),
        /* @__PURE__ */ jsx(Block, { label: "LinkedIn", main: "gwt-group-at", link: "https://linkedin.com/company/gwt-group-at" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "md:col-span-8 rounded-[2rem] border border-ink/10 bg-paper p-7 md:p-10", children: sent ? /* @__PURE__ */ jsxs("div", { className: "min-h-[420px] flex flex-col items-start justify-center", children: [
        /* @__PURE__ */ jsx(CheckCircle, { size: 36, weight: "duotone", className: "text-surf" }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 font-display text-3xl md:text-4xl tracking-tighter text-ink", children: "Danke. Eingegangen." }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-ink/60 text-sm max-w-md", children: "Wir melden uns innerhalb eines Werktags bei Ihnen — meistens schneller. Bis dahin: schöner Tag noch." }),
        /* @__PURE__ */ jsxs("button", { onClick: () => setSent(false), className: "mt-8 inline-flex items-center gap-2 text-sm text-ink/70 hover:text-ink", children: [
          "Neue Anfrage ",
          /* @__PURE__ */ jsx(ArrowUpRight, { size: 14 })
        ] })
      ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        setSent(true);
      }, className: "grid gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsx(Field, { label: "Name", name: "name", placeholder: "Magdalena Vorderegger" }),
          /* @__PURE__ */ jsx(Field, { label: "Unternehmen", name: "company", placeholder: "optional", required: false })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsx(Field, { label: "E‑Mail", name: "email", type: "email", placeholder: "m.vorderegger@firma.at" }),
          /* @__PURE__ */ jsx(Field, { label: "Telefon", name: "phone", type: "tel", placeholder: "+43 (0) 2256 847 1928", required: false })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx("label", { className: "font-mono text-[11px] uppercase tracking-widest text-ink/50", children: "Worum geht es?" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: ["Wassertechnik", "Heizung", "Schwimmbad", "Service", "Anderes"].map((t) => /* @__PURE__ */ jsx(Chip, { label: t }, t)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "msg", className: "font-mono text-[11px] uppercase tracking-widest text-ink/50", children: "Nachricht" }),
          /* @__PURE__ */ jsx("textarea", { id: "msg", rows: 5, required: true, placeholder: "Erzählen Sie uns kurz vom Projekt — Größenordnung, Zeitraum, Standort.", className: "rounded-2xl border border-ink/15 bg-paper p-4 text-ink placeholder:text-ink/35 focus:outline-none focus:border-ink/60 transition-colors resize-none" }),
          /* @__PURE__ */ jsx("p", { className: "text-[11px] text-ink/45 mt-1", children: "Wir verarbeiten Ihre Daten ausschließlich zur Beantwortung Ihrer Anfrage." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4 pt-2", children: [
          /* @__PURE__ */ jsx("div", { className: "font-mono text-[11px] text-ink/40", children: "Antwort < 24 h werktags" }),
          /* @__PURE__ */ jsxs("button", { type: "submit", className: "group inline-flex items-center gap-2 bg-ink text-paper rounded-full pl-6 pr-2 py-3 text-sm font-medium hover:bg-ink/90 active:translate-y-[1px] transition", children: [
            "Anfrage senden",
            /* @__PURE__ */ jsx("span", { className: "grid place-items-center h-8 w-8 rounded-full bg-paper/15 group-hover:rotate-45 transition-transform", children: /* @__PURE__ */ jsx(ArrowUpRight, { size: 14, weight: "bold" }) })
          ] })
        ] })
      ] }) })
    ] })
  ] });
}
function Block({
  label,
  main,
  sub,
  link
}) {
  const Wrap = link ? "a" : "div";
  return /* @__PURE__ */ jsxs(Wrap, { href: link, className: "rounded-[1.5rem] border border-ink/10 bg-paper p-6 hover:border-ink/30 transition-colors block", children: [
    /* @__PURE__ */ jsx("div", { className: "font-mono text-[11px] uppercase tracking-widest text-ink/40", children: label }),
    /* @__PURE__ */ jsx("div", { className: "mt-2 font-display text-lg text-ink tracking-tight", children: main }),
    sub && /* @__PURE__ */ jsx("div", { className: "text-ink/55 text-[13px] mt-1", children: sub })
  ] });
}
function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = true
}) {
  return /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
    /* @__PURE__ */ jsxs("label", { htmlFor: name, className: "font-mono text-[11px] uppercase tracking-widest text-ink/50", children: [
      label,
      " ",
      !required && /* @__PURE__ */ jsx("span", { className: "text-ink/30 normal-case", children: "(opt.)" })
    ] }),
    /* @__PURE__ */ jsx("input", { id: name, name, type, placeholder, required, className: "rounded-full border border-ink/15 bg-paper px-5 py-3 text-ink placeholder:text-ink/35 focus:outline-none focus:border-ink/60 transition-colors" })
  ] });
}
function Chip({
  label
}) {
  const [on, setOn] = useState(false);
  return /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setOn((v) => !v), className: `px-4 py-2 rounded-full text-sm border transition-colors ${on ? "bg-ink text-paper border-ink" : "bg-paper text-ink/70 border-ink/15 hover:border-ink/40"}`, children: label });
}
export {
  Kontakt as component
};
