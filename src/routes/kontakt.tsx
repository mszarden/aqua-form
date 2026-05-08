import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { useState } from "react";
import { ArrowUpRight, CheckCircle } from "@phosphor-icons/react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — GWT" },
      { name: "description", content: "Kontaktieren Sie GWT Group für wassertechnische Anlagen, Heizung, Schwimmbad und Service." },
      { property: "og:title", content: "Kontakt — GWT" },
      { property: "og:description", content: "Schreiben Sie uns. Wir antworten innerhalb eines Werktags." },
    ],
  }),
  component: Kontakt,
});

function Kontakt() {
  const [sent, setSent] = useState(false);
  return (
    <SiteShell>
      <section className="mx-auto max-w-[1400px] px-5 md:px-10 pt-16 md:pt-24">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/40 mb-5">Kontakt</div>
            <h1 className="display-xl text-[12vw] md:text-[7vw] text-ink">
              Sprechen Sie<br /><span className="italic font-light text-surf">mit uns.</span>
            </h1>
          </div>
          <div className="md:col-span-4 text-ink/65 text-sm leading-relaxed">
            Werktags innerhalb von 24 Stunden. In Akutfällen für
            Wartungskunden über die Bereitschafts‑Hotline rund um die Uhr.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 md:px-10 mt-20 md:mt-28 grid md:grid-cols-12 gap-10">
        <aside className="md:col-span-4 flex flex-col gap-6">
          <Block label="Standort AT" main="Hirtenberger Straße 1, 2544 Leobersdorf" sub="Mo–Fr · 07:30–17:00" />
          <Block label="Standort CH" main="GWT Swiss AG, Zürich" sub="Termine nach Vereinbarung" />
          <Block label="E‑Mail" main="office@gwt.at" link="mailto:office@gwt.at" />
          <Block label="LinkedIn" main="gwt-group-at" link="https://linkedin.com/company/gwt-group-at" />
        </aside>

        <div className="md:col-span-8 rounded-[2rem] border border-ink/10 bg-paper p-7 md:p-10">
          {sent ? (
            <div className="min-h-[420px] flex flex-col items-start justify-center">
              <CheckCircle size={36} weight="duotone" className="text-surf" />
              <h3 className="mt-4 font-display text-3xl md:text-4xl tracking-tighter text-ink">Danke. Eingegangen.</h3>
              <p className="mt-3 text-ink/60 text-sm max-w-md">
                Wir melden uns innerhalb eines Werktags bei Ihnen — meistens
                schneller. Bis dahin: schöner Tag noch.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-8 inline-flex items-center gap-2 text-sm text-ink/70 hover:text-ink"
              >
                Neue Anfrage <ArrowUpRight size={14} />
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="grid gap-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Name" name="name" placeholder="Magdalena Vorderegger" />
                <Field label="Unternehmen" name="company" placeholder="optional" required={false} />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="E‑Mail" name="email" type="email" placeholder="m.vorderegger@firma.at" />
                <Field label="Telefon" name="phone" type="tel" placeholder="+43 (0) 2256 847 1928" required={false} />
              </div>
              <div className="grid gap-2">
                <label className="font-mono text-[11px] uppercase tracking-widest text-ink/50">Worum geht es?</label>
                <div className="flex flex-wrap gap-2">
                  {["Wassertechnik", "Heizung", "Schwimmbad", "Service", "Anderes"].map((t) => (
                    <Chip key={t} label={t} />
                  ))}
                </div>
              </div>
              <div className="grid gap-2">
                <label htmlFor="msg" className="font-mono text-[11px] uppercase tracking-widest text-ink/50">Nachricht</label>
                <textarea
                  id="msg"
                  rows={5}
                  required
                  placeholder="Erzählen Sie uns kurz vom Projekt — Größenordnung, Zeitraum, Standort."
                  className="rounded-2xl border border-ink/15 bg-paper p-4 text-ink placeholder:text-ink/35 focus:outline-none focus:border-ink/60 transition-colors resize-none"
                />
                <p className="text-[11px] text-ink/45 mt-1">Wir verarbeiten Ihre Daten ausschließlich zur Beantwortung Ihrer Anfrage.</p>
              </div>
              <div className="flex items-center justify-between gap-4 pt-2">
                <div className="font-mono text-[11px] text-ink/40">Antwort &lt; 24 h werktags</div>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 bg-ink text-paper rounded-full pl-6 pr-2 py-3 text-sm font-medium hover:bg-ink/90 active:translate-y-[1px] transition"
                >
                  Anfrage senden
                  <span className="grid place-items-center h-8 w-8 rounded-full bg-paper/15 group-hover:rotate-45 transition-transform">
                    <ArrowUpRight size={14} weight="bold" />
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </SiteShell>
  );
}

function Block({ label, main, sub, link }: { label: string; main: string; sub?: string; link?: string }) {
  const Wrap: any = link ? "a" : "div";
  return (
    <Wrap href={link} className="rounded-[1.5rem] border border-ink/10 bg-paper p-6 hover:border-ink/30 transition-colors block">
      <div className="font-mono text-[11px] uppercase tracking-widest text-ink/40">{label}</div>
      <div className="mt-2 font-display text-lg text-ink tracking-tight">{main}</div>
      {sub && <div className="text-ink/55 text-[13px] mt-1">{sub}</div>}
    </Wrap>
  );
}

function Field({ label, name, type = "text", placeholder, required = true }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="font-mono text-[11px] uppercase tracking-widest text-ink/50">
        {label} {!required && <span className="text-ink/30 normal-case">(opt.)</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="rounded-full border border-ink/15 bg-paper px-5 py-3 text-ink placeholder:text-ink/35 focus:outline-none focus:border-ink/60 transition-colors"
      />
    </div>
  );
}

function Chip({ label }: { label: string }) {
  const [on, setOn] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOn((v) => !v)}
      className={`px-4 py-2 rounded-full text-sm border transition-colors ${
        on ? "bg-ink text-paper border-ink" : "bg-paper text-ink/70 border-ink/15 hover:border-ink/40"
      }`}
    >
      {label}
    </button>
  );
}
