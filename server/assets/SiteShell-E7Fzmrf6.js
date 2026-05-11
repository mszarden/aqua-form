import { jsxs, jsx } from "react/jsx-runtime";
import { Outlet, useRouterState, Link } from "@tanstack/react-router";
import { ArrowUpRight, X, List } from "@phosphor-icons/react";
import { useState } from "react";
const logoUrl = "/aqua-form/assets/gwt-logo-oa1Y5HUD.png";
const NAV = [
  { to: "/", label: "Übersicht" },
  { to: "/leistungen", label: "Leistungen" },
  { to: "/projekte", label: "Projekte" },
  { to: "/ueber-uns", label: "Haltung" },
  { to: "/kontakt", label: "Kontakt" }
];
function SiteHeader() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-40", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1400px] px-5 md:px-10 pt-5", children: [
    /* @__PURE__ */ jsxs("div", { className: "glass rounded-full flex items-center pl-3 md:pl-4 pr-2 py-2 gap-4 w-full", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center shrink-0", "aria-label": "GWT — Startseite", children: /* @__PURE__ */ jsx("img", { src: logoUrl, alt: "GWT", className: "h-14 md:h-16 w-auto drop-shadow-sm" }) }),
      /* @__PURE__ */ jsx("nav", { className: "hidden md:flex flex-1 items-center justify-center gap-1 text-[13px]", children: NAV.map((n) => {
        const active = path === n.to;
        return /* @__PURE__ */ jsxs(
          Link,
          {
            to: n.to,
            className: `relative px-3.5 py-2 transition-colors ${active ? "text-ink" : "text-ink/65 hover:text-ink"}`,
            children: [
              n.label,
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: `pointer-events-none absolute left-3.5 right-3.5 -bottom-0.5 h-[2px] bg-ink rounded-full origin-left transition-transform duration-300 ${active ? "scale-x-100" : "scale-x-0"}`
                }
              )
            ]
          },
          n.to
        );
      }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 ml-auto md:ml-0 shrink-0", children: [
        /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/kontakt",
            className: "hidden md:inline-flex items-center gap-1.5 bg-ink text-paper rounded-full pl-4 pr-2 py-2 text-[13px] font-medium hover:bg-ink/90 active:scale-[0.98] transition",
            children: [
              "Beratung",
              /* @__PURE__ */ jsx("span", { className: "grid place-items-center h-6 w-6 rounded-full bg-paper/15", children: /* @__PURE__ */ jsx(ArrowUpRight, { size: 12, weight: "bold" }) })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setOpen((v) => !v),
            "aria-label": "Menü",
            className: "md:hidden grid place-items-center h-10 w-10 rounded-full bg-ink text-paper",
            children: open ? /* @__PURE__ */ jsx(X, { size: 16, weight: "bold" }) : /* @__PURE__ */ jsx(List, { size: 16, weight: "bold" })
          }
        )
      ] })
    ] }),
    open && /* @__PURE__ */ jsx("div", { className: "md:hidden mt-2 glass rounded-3xl p-4 flex flex-col gap-1", children: NAV.map((n) => /* @__PURE__ */ jsx(
      Link,
      {
        to: n.to,
        onClick: () => setOpen(false),
        className: "px-4 py-3 rounded-2xl text-ink/80 hover:bg-ink/5",
        children: n.label
      },
      n.to
    )) })
  ] }) });
}
function SiteFooter() {
  return /* @__PURE__ */ jsxs("footer", { className: "mt-32 bg-noir text-paper", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1400px] px-5 md:px-10 py-16 grid gap-12 md:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsx("img", { src: logoUrl, alt: "GWT", className: "h-14 w-auto mb-6 drop-shadow-sm" }),
        /* @__PURE__ */ jsxs("div", { className: "font-display text-3xl tracking-tighter leading-none", children: [
          "Wasser braucht",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-mist italic", children: "Handwerk." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-paper/60 text-sm max-w-sm leading-relaxed", children: "GWT Holding GmbH plant, errichtet und wartet wassertechnische Systeme — von der Privatdusche bis zum Fernwärmenetz." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-3 text-sm", children: [
        /* @__PURE__ */ jsx("div", { className: "text-paper/40 uppercase text-[11px] tracking-[0.18em] mb-4", children: "Standort" }),
        /* @__PURE__ */ jsxs("div", { className: "text-paper/80 leading-relaxed", children: [
          "Hirtenberger Straße 1",
          /* @__PURE__ */ jsx("br", {}),
          "2544 Leobersdorf",
          /* @__PURE__ */ jsx("br", {}),
          "Niederösterreich, AT"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2 text-sm", children: [
        /* @__PURE__ */ jsx("div", { className: "text-paper/40 uppercase text-[11px] tracking-[0.18em] mb-4", children: "Kontakt" }),
        /* @__PURE__ */ jsx("a", { href: "mailto:office@gwt.at", className: "text-paper hover:text-mist transition", children: "office@gwt.at" }),
        /* @__PURE__ */ jsx("div", { className: "text-paper/55 mt-1 font-mono text-[12px]", children: "UID‑geprüft · ISO 9001" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2 text-sm", children: [
        /* @__PURE__ */ jsx("div", { className: "text-paper/40 uppercase text-[11px] tracking-[0.18em] mb-4", children: "Folgen" }),
        /* @__PURE__ */ jsx("a", { href: "https://linkedin.com/company/gwt-group-at", className: "text-paper hover:text-mist transition", children: "LinkedIn" }),
        /* @__PURE__ */ jsx(Link, { to: "/kontakt", className: "block mt-1 text-paper/60 hover:text-paper", children: "Datenschutz" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-paper/10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1400px] px-5 md:px-10 py-5 flex items-center justify-between font-mono text-[11px] text-paper/45", children: [
      /* @__PURE__ */ jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " GWT Holding GmbH"
      ] }),
      /* @__PURE__ */ jsx("span", { children: "AT · CH — 47.823 m³ verlegt" })
    ] }) })
  ] });
}
function SiteShell({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-[100dvh] grain bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(SiteHeader, {}),
    /* @__PURE__ */ jsx("main", { children: children ?? /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(SiteFooter, {})
  ] });
}
export {
  SiteShell as S
};
