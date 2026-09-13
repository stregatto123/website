import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "../lib/site";
import Reveal from "./Reveal";

const contacts = [
  { Icon: Phone, label: "Telefono", value: SITE.phone },
  { Icon: Mail, label: "Email", value: SITE.email },
  { Icon: MapPin, label: "Zona di distribuzione", value: SITE.zone },
  { Icon: Clock, label: "Orari", value: SITE.hours },
];

const steps = [
  "Leggiamo la richiesta e capiamo di che attività si tratta.",
  "Prepariamo un preventivo sulle referenze che ti interessano.",
  "Concordiamo giorni di consegna e prima fornitura.",
];

export default function ContactInfo() {
  return (
    <div>
      <Reveal>
        <h2 className="font-display text-2xl font-bold leading-snug text-ink">
          Recapiti diretti
        </h2>
        <p className="mt-3 font-sans text-[0.9375rem] leading-relaxed text-ink-soft">
          Preferisci parlarne a voce? Chiamaci o scrivici: rispondiamo noi, non
          un call center.
        </p>
      </Reveal>

      <dl className="mt-7 space-y-px overflow-hidden rounded-card border border-line bg-line">
        {contacts.map(({ Icon, label, value }, i) => (
          <Reveal key={label} delay={80 + i * 70} className="flex gap-4 bg-surface p-5">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand-700">
              <Icon aria-hidden="true" className="h-[18px] w-[18px]" />
            </span>
            <div>
              <dt className="font-sans text-2xs font-bold uppercase tracking-eyebrow text-ink-soft">
                {label}
              </dt>
              <dd className="mt-1 font-sans text-[0.9375rem] font-semibold text-ink">
                {value}
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>

      <Reveal delay={160} className="mt-10">
        <h2 className="font-display text-xl font-bold text-ink">
          Cosa succede dopo
        </h2>
        <ol className="mt-5 space-y-4">
          {steps.map((step, i) => (
            <li key={step} className="flex gap-4">
              <span
                aria-hidden="true"
                className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent font-sans text-xs font-bold text-white"
              >
                {i + 1}
              </span>
              <span className="font-sans text-[0.9375rem] leading-relaxed text-ink-soft">
                {step}
              </span>
            </li>
          ))}
        </ol>
        <p className="mt-7 rounded-xl bg-paper-2 px-4 py-3.5 font-sans text-[0.8125rem] leading-relaxed text-ink-soft">
          I prezzi non sono pubblicati: sono riservati ai clienti professionali
          e vengono comunicati in fase di preventivo.
        </p>
      </Reveal>
    </div>
  );
}
