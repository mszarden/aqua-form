import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Drop, Flame, Waves, Wrench, ArrowRight } from "@phosphor-icons/react";
import { SiteShell } from "@/components/site/SiteShell";
import heroImg from "@/assets/hero-water.jpg";
import poolImg from "@/assets/pool.jpg";
import heatImg from "@/assets/heating.jpg";
import buildingImg from "@/assets/building.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GWT — Wassertechnik, Heizung, Therme" },
      { name: "description", content: "GWT Group: Komplettlösungen für Wasser- und Wärmetechnik. Planung, Errichtung, Service in Österreich und der Schweiz." },
      { property: "og:title", content: "GWT — Wassertechnik & Heizung" },
      { property: "og:description", content: "Ihr Partner für wassertechnische Anlagen seit Jahrzehnten." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteShell>
      <Hero />
      <Marquee />
      <Manifesto />
      <Disciplines />
      <Numbers />
      <Bento />
      <CTA />
    </SiteShell>
  );
}

function Hero() {
  return (
    <section className="relative mx-auto max-w-[1400px] px-5 md:px-10 pt-12 md:pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        <div className="lg:col-span-7 reveal" style={{ ["--i" as string]: 0 }}>
          <div className="flex items-center gap-3 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-ink pulse-dot" />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/60">
              Leobersdorf · Wien · Zürich
            </span>
          </div>
          <h1 className="display-xl text-[14vw] md:text-[8.4vw] lg:text-[7.2vw] text-ink">
            Wasser, das<br />
            <span className="italic font-light text-surf">verlässlich</span> fließt.
          </h1>
          <div className="mt-10 max-w-xl text-[15px] md:text-base text-ink/70 leading-relaxed">
            GWT Group plant, baut und betreut wassertechnische Anlagen —
            Trink‑ und Heizwasser, Schwimmbad, Therme, Fernwärme.
            Ein Ansprechpartner. Vom ersten Strich bis zur jährlichen Wartung.
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              to="/kontakt"
              className="group inline-flex items-center gap-2 bg-ink text-paper rounded-full pl-6 pr-2 py-3 text-sm font-medium hover:bg-ink/90 active:translate-y-[1px] transition"
            >
              Projekt anfragen
              <span className="grid place-items-center h-8 w-8 rounded-full bg-paper/15 group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight size={14} weight="bold" />
              </span>
            </Link>
            <Link
              to="/leistungen"
              className="inline-flex items-center gap-2 text-sm text-ink/80 hover:text-ink px-5 py-3"
            >
              Leistungen ansehen
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 reveal" style={{ ["--i" as string]: 2 }}>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden ink-shadow">
              <img
                src={heroImg}
                alt="Detail einer wassertechnischen Installation mit Edelstahlrohren und Messingventilen"
                className="h-full w-full object-cover"
                width={1600} height={1280}
              />
            </div>
            <div className="absolute -left-6 -bottom-6 glass rounded-3xl p-5 w-[260px] hidden md:block float-y">
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-ink/50">
                <span>Live · Anlage Süd</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 pulse-dot" />
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <Stat k="Vorlauf" v="62.4 °C" />
                <Stat k="Druck" v="3.18 bar" />
                <Stat k="Ø Härte" v="11.7 °dH" />
                <Stat k="Effizienz" v="94.7 %" />
              </div>
            </div>
            <div className="absolute -right-3 top-6 hidden md:flex items-center gap-2 bg-ink text-paper rounded-full px-4 py-2 text-[11px] font-mono tracking-widest float-y" style={{ animationDelay: "1.2s" }}>
              <span className="h-1.5 w-1.5 rounded-full bg-mist pulse-dot" /> SEIT 1991
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-widest text-ink/40 font-mono">{k}</div>
      <div className="font-mono text-ink text-[15px] mt-0.5">{v}</div>
    </div>
  );
}

function Marquee() {
  const items = [
    "Trinkwasserinstallation",
    "Heizungsbau",
    "Fernwärme",
    "Schwimmbadtechnik",
    "Thermenplanung",
    "Wärmepumpen",
    "Sanitärtechnik",
    "Wartung & Service",
    "Energiekonzepte",
  ];
  return (
    <section className="mt-24 md:mt-36 border-y border-ink/10 overflow-hidden">
      <div className="flex marquee whitespace-nowrap py-6">
        {[...items, ...items].map((it, i) => (
          <div key={i} className="flex items-center gap-12 pr-12 text-ink/60">
            <span className="font-display text-2xl md:text-3xl tracking-tight">{it}</span>
            <span className="font-mono text-[11px] text-ink/30">/{(i + 1).toString().padStart(2, "0")}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="w-full bg-white mt-32 md:mt-44">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-16 md:py-24 lg:py-28 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-3">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/40 reveal" style={{ ["--i" as string]: 0 }}>
            (01) Haltung
          </div>
        </div>
        <div className="md:col-span-9">
          <p className="font-display text-3xl md:text-5xl lg:text-6xl tracking-tighter leading-[1.05] text-ink reveal" style={{ ["--i" as string]: 1 }}>
            Eine Leitung ist kein Detail. Sie ist
            <span className="text-surf"> die Bedingung dafür</span>, dass ein
            Gebäude funktioniert — leise, jeden Tag, jahrzehntelang.
          </p>
          <div className="mt-12 grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-ink/10 border-y border-ink/10">
            {[
              ["31 J.", "im Markt seit 1991, zwei Generationen"],
              ["AT · CH", "Standorte Leobersdorf & Zürich"],
              ["1 Partner", "Planung, Bau, Wartung — aus einer Hand"],
            ].map(([k, v], idx) => (
              <div
                key={k}
                className="py-8 md:px-8 first:md:pl-0 reveal"
                style={{ ["--i" as string]: 6 + idx * 2 }}
              >
                <div className="font-display text-4xl text-surf tracking-tight">{k}</div>
                <div className="mt-3 text-ink/60 text-sm leading-relaxed">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    icon: Drop,
    title: "Wasser­technik",
    body: "Trinkwasser, Brauchwasser, Druckerhöhung, Aufbereitung. Hygienisch, normgerecht, wartungsarm geplant.",
  },
  {
    icon: Flame,
    title: "Heizung & Wärme",
    body: "Wärmepumpen, hydraulischer Abgleich, Fernwärmeanschluss. Energiekonzepte vom EFH bis zum Quartier.",
  },
  {
    icon: Waves,
    title: "Schwimmbad & Therme",
    body: "Beckenbau, Filtertechnik, Wellness‑Installationen. Kommerziell und privat — bis hin zur Therme.",
  },
  {
    icon: Wrench,
    title: "Service",
    body: "Wartungsverträge, Störungsdienst, Sanierung. Eigene Techniker, eigene Ersatzteillogistik.",
  },
];

function Disciplines() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 md:px-10 mt-32 md:mt-44">
      <div className="flex items-end justify-between gap-8 mb-12">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/40 mb-4">(02) Disziplinen</div>
          <h2 className="font-display text-4xl md:text-6xl tracking-tighter text-ink leading-none">
            Vier Gewerke,<br />ein Verständnis.
          </h2>
        </div>
        <Link to="/leistungen" className="hidden md:inline-flex items-center gap-2 text-sm text-ink/70 hover:text-ink">
          Alle Leistungen <ArrowUpRight size={14} weight="bold" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10 rounded-[2rem] overflow-hidden border border-ink/10">
        {SERVICES.map((s, i) => {
          const Icon = s.icon;
          return (
            <article
              key={s.title}
              className="group bg-paper p-8 md:p-12 flex flex-col gap-6 min-h-[280px] hover:bg-mist/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <Icon size={28} weight="duotone" className="text-ink" />
                <span className="font-mono text-[11px] text-ink/30">/0{i + 1}</span>
              </div>
              <div className="mt-auto">
                <h3 className="font-display text-2xl md:text-3xl text-ink tracking-tight">{s.title}</h3>
                <p className="mt-3 text-ink/60 text-sm leading-relaxed max-w-md">{s.body}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-ink text-sm">
                  <span className="relative">
                    Mehr erfahren
                    <span className="absolute left-0 -bottom-0.5 h-px w-full bg-ink scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                  </span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Numbers() {
  return (
    <section className="w-full bg-white mt-32 md:mt-44">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-16 md:py-24 grid md:grid-cols-12 gap-10">
        {/* Row 1: intro + stats */}
        <div className="md:col-span-4">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/40 mb-4">(03) Bilanz</div>
          <h2 className="font-display text-4xl md:text-5xl tracking-tighter text-ink leading-[1.05]">
            Keine runden Zahlen.<br />
            <span className="italic text-surf">Dafür echte.</span>
          </h2>
          <p className="mt-6 text-ink/60 text-sm max-w-sm leading-relaxed">
            Statt geglätteter Marketingmetriken zeigen wir, was wirklich
            gemessen wurde — Stand Q1 2026.
          </p>
        </div>
        <div className="md:col-span-8 grid grid-cols-2 gap-px bg-ink/10 rounded-[2rem] overflow-hidden border border-ink/10">
          {[
            ["47 281 m³", "Rohrleitung verlegt"],
            ["1 247", "Anlagen unter Wartung"],
            ["94.7 %", "Anlagen­verfügbarkeit"],
            ["3.4 h", "Ø Reaktion im Service"],
          ].map(([n, l]) => (
            <div key={n} className="bg-white p-7 md:p-10">
              <div className="font-mono text-3xl md:text-4xl text-ink tracking-tight">{n}</div>
              <div className="mt-2 text-ink/55 text-[13px]">{l}</div>
            </div>
          ))}
        </div>
        {/* Row 2: photo + Qualitätsindex aligned */}
        <div className="md:col-span-4 rounded-2xl overflow-hidden min-h-[220px]">
          <img
            src={heatImg}
            alt="Heizungstechnik Detail"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="md:col-span-8 bg-ink text-paper rounded-[2rem] p-7 md:p-10 flex flex-col justify-between">
          <div className="font-mono text-[11px] uppercase tracking-widest text-paper/50">Qualitätsindex</div>
          <div className="mt-3 flex items-baseline gap-3 flex-wrap">
            <div className="font-display text-5xl md:text-6xl tracking-tighter">9.6<span className="text-paper/40 text-2xl">/10</span></div>
            <div className="text-paper/60 text-sm">Kundenbewertungen 2025</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Bento() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 md:px-10 mt-32 md:mt-44">
      <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/40 mb-4">(04) Felder</div>
      <h2 className="font-display text-4xl md:text-6xl tracking-tighter text-ink leading-none mb-12">
        Was wir bauen.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-[140px]">
        {/* Tall hero pool — left side */}
        <div className="md:col-span-5 md:row-span-4 rounded-[2rem] overflow-hidden relative group">
          <img src={poolImg} alt="Wasseroberfläche eines Schwimmbads" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={1200} height={1500} />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-ink/10" />
          <div className="absolute bottom-0 left-0 p-8 md:p-10 text-paper">
            <div className="font-mono text-[11px] tracking-widest opacity-80 drop-shadow">Schwimmbad · Therme</div>
            <h3 className="font-display text-3xl md:text-5xl mt-2 tracking-tighter drop-shadow-md">Becken, die ruhig bleiben.</h3>
            <p className="mt-3 text-paper/80 text-sm max-w-xs">Filtration, UV‑Entkeimung, Wärmerückgewinnung — kommerziell und privat.</p>
          </div>
        </div>
        {/* Top right metric */}
        <div className="md:col-span-4 md:row-span-2 rounded-[2rem] bg-ink text-paper p-8 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-surf/30 blur-3xl" />
          <div className="font-mono text-[11px] uppercase tracking-widest opacity-60 relative">Energie · live</div>
          <div className="relative">
            <div className="font-mono text-5xl md:text-6xl tracking-tight">−38 %</div>
            <div className="text-paper/60 text-sm mt-2 max-w-xs">Verbrauch nach hydraulischem Abgleich, Referenzobjekt Mödling.</div>
          </div>
        </div>
        {/* Top right small — material */}
        <div className="md:col-span-3 md:row-span-2 rounded-[2rem] bg-mist text-ink p-7 flex flex-col justify-between">
          <div className="font-mono text-[11px] uppercase tracking-widest text-ink/50">Material</div>
          <div>
            <div className="font-display text-2xl tracking-tight">Edelstahl & Messing.</div>
            <div className="text-ink/60 text-xs mt-2">Pressverbindungen — sauber im Trinkwassernetz.</div>
          </div>
        </div>
        {/* Heating photo — middle right */}
        <div className="md:col-span-7 md:row-span-2 rounded-[2rem] overflow-hidden relative group">
          <img src={heatImg} alt="Heizungs-Steuerung mit Kupferleitungen" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={1200} height={900} />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/30 to-transparent" />
          <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end text-paper">
            <div className="font-mono text-[11px] tracking-widest opacity-80 drop-shadow">Heizung · Service</div>
            <h3 className="font-display text-3xl md:text-4xl mt-2 tracking-tighter max-w-md drop-shadow-md">Wärme, die bleibt — auch im Februar.</h3>
          </div>
        </div>
        {/* Building / Wärmepumpe */}
        <div className="md:col-span-5 md:row-span-2 rounded-[2rem] overflow-hidden relative group">
          <img src={buildingImg} alt="Wärmepumpe an einem Wohnhaus" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={1200} height={900} />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
          <div className="absolute bottom-0 p-7 text-paper">
            <div className="font-mono text-[11px] tracking-widest opacity-80 drop-shadow">Energiekonzepte</div>
            <h3 className="font-display text-2xl md:text-3xl mt-2 tracking-tight max-w-xs drop-shadow-md">Wärmepumpen für den Bestand.</h3>
          </div>
        </div>
        {/* Bottom — service stat */}
        <div className="md:col-span-7 md:row-span-2 rounded-[2rem] bg-white border border-ink/10 p-8 md:p-10 flex flex-col justify-between">
          <div className="font-mono text-[11px] uppercase tracking-widest text-ink/40">Service · Niederösterreich</div>
          <div>
            <div className="flex items-baseline gap-3">
              <div className="font-mono text-4xl md:text-5xl text-ink tracking-tight">3.4 h</div>
              <div className="text-ink/50 text-sm">Ø Reaktionszeit</div>
            </div>
            <div className="text-ink/60 text-sm mt-3 max-w-sm">
              Eigene Techniker im 24 h‑Bereitschaftsdienst — kein
              Subunternehmer‑Roulette.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 md:px-10 mt-32 md:mt-44">
      <div className="rounded-[2.5rem] bg-ink text-paper p-10 md:p-16 grid md:grid-cols-12 gap-10 items-end relative overflow-hidden">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-surf/30 blur-3xl" />
        <div className="md:col-span-7 relative">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/50 mb-5">(05) Anfrage</div>
          <h2 className="font-display text-4xl md:text-6xl tracking-tighter leading-[1.02]">
            Schicken Sie uns<br />
            <span className="italic text-mist">Ihren Plan.</span>
          </h2>
          <p className="mt-6 max-w-md text-paper/70 text-sm leading-relaxed">
            Wir antworten innerhalb eines Werktags mit einer ehrlichen
            Einschätzung — auch dann, wenn das Projekt nicht zu uns passt.
          </p>
        </div>
        <div className="md:col-span-5 relative flex flex-col gap-3">
          <Link
            to="/kontakt"
            className="group inline-flex items-center justify-between bg-paper text-ink rounded-full pl-6 pr-2 py-3 text-sm font-medium hover:bg-mist active:translate-y-[1px] transition"
          >
            Beratungsgespräch buchen
            <span className="grid place-items-center h-9 w-9 rounded-full bg-ink text-paper group-hover:rotate-45 transition-transform">
              <ArrowUpRight size={14} weight="bold" />
            </span>
          </Link>
          <a
            href="mailto:office@gwt.at"
            className="inline-flex items-center justify-between border border-paper/20 rounded-full pl-6 pr-5 py-3 text-sm text-paper/80 hover:border-paper/50 transition"
          >
            office@gwt.at
            <span className="font-mono text-[11px] text-paper/40">direkt schreiben</span>
          </a>
        </div>
      </div>
    </section>
  );
}
