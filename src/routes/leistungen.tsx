import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { CheckCircle } from "@phosphor-icons/react";

export const Route = createFileRoute("/leistungen")({
  head: () => ({
    meta: [
      { title: "Leistungen — GWT" },
      { name: "description", content: "Wassertechnik, Heizung, Schwimmbad und Service: Ein Überblick über die Leistungen der GWT Group." },
      { property: "og:title", content: "Leistungen — GWT" },
      { property: "og:description", content: "Vier Disziplinen, ein Verständnis. Ein Überblick." },
    ],
  }),
  component: Leistungen,
});

const BLOCKS = [
  {
    no: "01",
    title: "Wassertechnik",
    lead: "Trinkwasser-, Brauchwasser- und Abwassersysteme — hygienisch und normgerecht.",
    items: [
      "Trinkwasserinstallation nach ÖNORM B 2531",
      "Druckerhöhungs‑ und Verteilanlagen",
      "Wasseraufbereitung & Enthärtung",
      "Regenwasser‑ und Grauwassernutzung",
      "Hygienespülungen & Legionellenprophylaxe",
    ],
  },
  {
    no: "02",
    title: "Heizung & Energie",
    lead: "Wärme erzeugen, verteilen, regeln. Vom Einfamilienhaus bis zum Quartier.",
    items: [
      "Wärmepumpen (Sole, Luft, Grundwasser)",
      "Hydraulischer Abgleich & Effizienz‑Audit",
      "Fernwärmeanschlüsse & Übergabestationen",
      "Pufferspeicher & Pelletsanlagen",
      "Smart‑Heating & MSR‑Technik",
    ],
  },
  {
    no: "03",
    title: "Schwimmbad & Therme",
    lead: "Komplette Bäder — Becken, Filtertechnik, Wellness.",
    items: [
      "Privat‑ und Hotelbecken (Beton, Edelstahl, Folie)",
      "Filter‑, Dosier‑ und UV‑Technik",
      "Sauna, Dampfbad, Whirlpool",
      "Therme: Planung, Errichtung, Betrieb",
      "Sanierung & Modernisierung",
    ],
  },
  {
    no: "04",
    title: "Service & Wartung",
    lead: "Eigene Techniker. Eigene Ersatzteile. Eigene Verantwortung.",
    items: [
      "Wartungsverträge mit fixierten Zeitfenstern",
      "24 h‑Störungsdienst (Ostösterreich)",
      "Sanierung von Bestands‑Anlagen",
      "Anlagen‑Monitoring & Reporting",
      "Energie‑ und Effizienzberatung",
    ],
  },
];

function Leistungen() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-[1400px] px-5 md:px-10 pt-16 md:pt-24">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/40 mb-5">Leistungen</div>
            <h1 className="display-xl text-[12vw] md:text-[7vw] text-ink">
              Was wir tun,<br />
              <span className="italic font-light text-surf">und nichts darüber hinaus.</span>
            </h1>
          </div>
          <div className="md:col-span-4 text-ink/60 text-sm leading-relaxed max-w-sm">
            Vier Disziplinen, die einander brauchen. Wir trennen sie nur,
            damit Ausschreibungen sauber bleiben — geplant wird immer
            zusammen.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 md:px-10 mt-24 md:mt-36 space-y-px bg-ink/10 rounded-[2rem] overflow-hidden border border-ink/10">
        {BLOCKS.map((b) => (
          <article key={b.no} className="bg-paper grid md:grid-cols-12 gap-8 p-8 md:p-14">
            <div className="md:col-span-4">
              <div className="font-mono text-[11px] text-ink/40">/{b.no}</div>
              <h2 className="mt-2 font-display text-3xl md:text-4xl tracking-tighter text-ink">{b.title}</h2>
              <p className="mt-4 text-ink/60 text-sm leading-relaxed max-w-sm">{b.lead}</p>
            </div>
            <ul className="md:col-span-8 grid sm:grid-cols-2 gap-x-8">
              {b.items.map((it, i) => (
                <li
                  key={it}
                  className="flex items-start gap-3 py-4 border-b border-ink/10 last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0"
                  style={{ ["--i" as string]: i }}
                >
                  <CheckCircle size={18} weight="duotone" className="text-surf shrink-0 mt-0.5" />
                  <span className="text-ink text-[15px]">{it}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </SiteShell>
  );
}
