import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { ArrowUpRight } from "@phosphor-icons/react";
import poolImg from "@/assets/pool.jpg";
import heatImg from "@/assets/heating.jpg";
import buildingImg from "@/assets/building.jpg";
import heroImg from "@/assets/hero-water.jpg";

export const Route = createFileRoute("/projekte")({
  head: () => ({
    meta: [
      { title: "Projekte — GWT" },
      { name: "description", content: "Ausgewählte Referenzprojekte aus Wassertechnik, Heizung und Schwimmbad." },
      { property: "og:title", content: "Projekte — GWT" },
      { property: "og:description", content: "Ausgewählte Referenzen aus Österreich und der Schweiz." },
    ],
  }),
  component: Projekte,
});

const PROJECTS = [
  { year: "2025", place: "Baden bei Wien", type: "Therme", title: "Solbecken‑Sanierung Sauerhof", img: heroImg, kpi: "−42 % Energie" },
  { year: "2024", place: "Mödling", type: "Wohnbau", title: "Quartiersnetz mit Wärmepumpe", img: buildingImg, kpi: "118 WE" },
  { year: "2024", place: "Zürich", type: "Hotel", title: "Wellnessanlage Seedamm", img: poolImg, kpi: "780 m² Wasser" },
  { year: "2023", place: "Wiener Neustadt", type: "Industrie", title: "Prozesswärme Härterei", img: heatImg, kpi: "1.2 MW" },
  { year: "2023", place: "Wien 22", type: "Schule", title: "Hydraulischer Abgleich Bildungscampus", img: heatImg, kpi: "−38 % CO₂" },
  { year: "2022", place: "Leobersdorf", type: "Privat", title: "Edelstahl‑Außenbecken Villa K.", img: poolImg, kpi: "12 × 4 m" },
];

function Projekte() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-[1400px] px-5 md:px-10 pt-16 md:pt-24">
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/40 mb-5">Projekte</div>
        <h1 className="display-xl text-[12vw] md:text-[7vw] text-ink">
          Ausgewählte<br />
          <span className="italic font-light text-surf">Referenzen.</span>
        </h1>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 md:px-10 mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((p, i) => (
          <a
            key={p.title}
            href="#"
            className={`group rounded-[2rem] overflow-hidden border border-ink/10 bg-paper hover:bg-mist/30 transition-colors ${i % 3 === 0 ? "md:col-span-2" : ""}`}
          >
            <div className={`relative overflow-hidden ${i % 3 === 0 ? "aspect-[16/7]" : "aspect-[4/3]"}`}>
              <img src={p.img} alt={p.title} loading="lazy" width={1200} height={900} className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-5 left-5 flex gap-2">
                <span className="font-mono text-[10px] uppercase tracking-widest bg-paper/90 text-ink rounded-full px-3 py-1">{p.type}</span>
                <span className="font-mono text-[10px] uppercase tracking-widest bg-ink/80 text-paper rounded-full px-3 py-1">{p.year}</span>
              </div>
              <div className="absolute top-5 right-5 grid place-items-center h-10 w-10 rounded-full bg-paper text-ink group-hover:rotate-45 transition-transform">
                <ArrowUpRight size={16} weight="bold" />
              </div>
            </div>
            <div className="p-6 md:p-8 flex items-end justify-between gap-6">
              <div>
                <div className="font-mono text-[11px] text-ink/40 uppercase tracking-widest">{p.place}</div>
                <h3 className="font-display text-2xl md:text-3xl tracking-tighter text-ink mt-1">{p.title}</h3>
              </div>
              <div className="font-mono text-ink text-sm shrink-0">{p.kpi}</div>
            </div>
          </a>
        ))}
      </section>
    </SiteShell>
  );
}
