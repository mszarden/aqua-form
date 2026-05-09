import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";
import { useState } from "react";
import logoUrl from "@/assets/gwt-logo.png";

const NAV = [
  { to: "/", label: "Übersicht" },
  { to: "/leistungen", label: "Leistungen" },
  { to: "/projekte", label: "Projekte" },
  { to: "/ueber-uns", label: "Haltung" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 pt-5">
        <div className="glass rounded-full flex items-center justify-between pl-6 pr-2 py-2">
          <Link to="/" className="flex items-center gap-2.5 group" aria-label="GWT — Startseite">
            <img src={logoUrl} alt="GWT" className="h-7 md:h-8 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center gap-1 text-[13px]">
            {NAV.map((n) => {
              const active = path === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`relative px-3.5 py-2 transition-colors ${
                    active ? "text-ink" : "text-ink/65 hover:text-ink"
                  }`}
                >
                  {n.label}
                  <span
                    className={`pointer-events-none absolute left-3.5 right-3.5 -bottom-0.5 h-[2px] bg-ink rounded-full origin-left transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-2">
            <Link
              to="/kontakt"
              className="hidden md:inline-flex items-center gap-1.5 bg-ink text-paper rounded-full pl-4 pr-2 py-2 text-[13px] font-medium hover:bg-ink/90 active:scale-[0.98] transition"
            >
              Beratung
              <span className="grid place-items-center h-6 w-6 rounded-full bg-paper/15">
                <ArrowUpRight size={12} weight="bold" />
              </span>
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menü"
              className="md:hidden grid place-items-center h-10 w-10 rounded-full bg-ink text-paper"
            >
              {open ? <X size={16} weight="bold" /> : <List size={16} weight="bold" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden mt-2 glass rounded-3xl p-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-2xl text-ink/80 hover:bg-ink/5"
              >
                {n.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-32 bg-noir text-paper">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <img src={logoUrl} alt="GWT" className="h-10 w-auto mb-6 brightness-0 invert" />
          <div className="font-display text-3xl tracking-tighter leading-none">
            Wasser braucht<br />
            <span className="text-mist italic">Handwerk.</span>
          </div>
          <p className="mt-6 text-paper/60 text-sm max-w-sm leading-relaxed">
            GWT Holding GmbH plant, errichtet und wartet wassertechnische
            Systeme — von der Privatdusche bis zum Fernwärmenetz.
          </p>
        </div>
        <div className="md:col-span-3 text-sm">
          <div className="text-paper/40 uppercase text-[11px] tracking-[0.18em] mb-4">Standort</div>
          <div className="text-paper/80 leading-relaxed">
            Hirtenberger Straße 1<br />
            2544 Leobersdorf<br />
            Niederösterreich, AT
          </div>
        </div>
        <div className="md:col-span-2 text-sm">
          <div className="text-paper/40 uppercase text-[11px] tracking-[0.18em] mb-4">Kontakt</div>
          <a href="mailto:office@gwt.at" className="text-paper hover:text-mist transition">office@gwt.at</a>
          <div className="text-paper/55 mt-1 font-mono text-[12px]">UID‑geprüft · ISO 9001</div>
        </div>
        <div className="md:col-span-2 text-sm">
          <div className="text-paper/40 uppercase text-[11px] tracking-[0.18em] mb-4">Folgen</div>
          <a href="https://linkedin.com/company/gwt-group-at" className="text-paper hover:text-mist transition">LinkedIn</a>
          <Link to="/kontakt" className="block mt-1 text-paper/60 hover:text-paper">Datenschutz</Link>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-5 flex items-center justify-between font-mono text-[11px] text-paper/45">
          <span>© {new Date().getFullYear()} GWT Holding GmbH</span>
          <span>AT · CH — 47.823 m³ verlegt</span>
        </div>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] grain bg-background text-foreground">
      <SiteHeader />
      <main>{children ?? <Outlet />}</main>
      <SiteFooter />
    </div>
  );
}
