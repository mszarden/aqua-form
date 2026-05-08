import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    meta: [
      { title: "Haltung — GWT" },
      { name: "description", content: "GWT Group: Familienbetrieb in zweiter Generation, spezialisiert auf wassertechnische Anlagen in Österreich und der Schweiz." },
      { property: "og:title", content: "Haltung — GWT" },
      { property: "og:description", content: "Wer wir sind und warum wir es so tun, wie wir es tun." },
    ],
  }),
  component: UeberUns,
});

const TEAM = [
  { name: "Magdalena Vorderegger", role: "Geschäftsführung", note: "Wassertechnik, Strategie" },
  { name: "Stefan Kühnert", role: "Technische Leitung", note: "Heizung & Energie" },
  { name: "Ruxandra Petrescu", role: "Projektleitung Schweiz", note: "GWT Swiss AG" },
  { name: "Matthias Ehrenberger", role: "Service & Wartung", note: "Bereitschaft Ost" },
];

const TIMELINE = [
  ["1991", "Gründung als Spezialbetrieb für Trinkwasserinstallation in Leobersdorf."],
  ["2004", "Aufnahme der Wärmepumpen‑ und Fernwärme‑Sparte."],
  ["2012", "Erste Therme schlüsselfertig übergeben."],
  ["2018", "Gründung der GWT Swiss AG in Zürich."],
  ["2024", "Eigenes Anlagen‑Monitoring für Wartungskunden im Live‑Betrieb."],
];

function UeberUns() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-[1400px] px-5 md:px-10 pt-16 md:pt-24">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/40 mb-5">Haltung</div>
            <h1 className="display-xl text-[12vw] md:text-[7vw] text-ink">
              Familienbetrieb,<br />
              <span className="italic font-light text-surf">zweite Generation.</span>
            </h1>
          </div>
          <p className="md:col-span-4 text-ink/65 text-sm leading-relaxed">
            Wir sind ein Handwerksbetrieb, der gewachsen ist, weil Wasser
            ein dauerhaftes Thema ist. Nicht, weil wir das nächste Quartal
            optimieren wollten.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 md:px-10 mt-28">
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/40 mb-8">(01) Geschichte</div>
        <ol className="border-t border-ink/10">
          {TIMELINE.map(([year, text]) => (
            <li key={year} className="grid md:grid-cols-12 gap-6 py-7 border-b border-ink/10">
              <div className="md:col-span-2 font-mono text-ink text-xl tracking-tight">{year}</div>
              <div className="md:col-span-10 text-ink/75 text-[15px] md:text-lg leading-relaxed max-w-3xl">{text}</div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 md:px-10 mt-28">
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/40 mb-8">(02) Personen</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/10 rounded-[2rem] overflow-hidden border border-ink/10">
          {TEAM.map((p) => (
            <div key={p.name} className="bg-paper p-6 md:p-8 min-h-[220px] flex flex-col">
              <div className="aspect-square w-16 rounded-full bg-mist grid place-items-center text-ink font-display text-xl">
                {p.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
              </div>
              <div className="mt-auto">
                <div className="font-display text-lg text-ink tracking-tight leading-tight">{p.name}</div>
                <div className="text-ink/60 text-[13px] mt-1">{p.role}</div>
                <div className="font-mono text-[11px] text-ink/40 mt-1">{p.note}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
