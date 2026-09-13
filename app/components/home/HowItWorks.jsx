import { ClipboardList, MessagesSquare, PhoneCall, Truck } from "lucide-react";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const steps = [
  {
    Icon: PhoneCall,
    title: "Primo contatto",
    text: "Ci scrivi dal modulo o ci chiami: raccogliamo tipologia di attività, volumi e frequenza.",
  },
  {
    Icon: ClipboardList,
    title: "Listino su misura",
    text: "Prepariamo un preventivo sulle referenze che ti interessano davvero. I prezzi sono riservati ai clienti.",
  },
  {
    Icon: MessagesSquare,
    title: "Referente dedicato",
    text: "Una sola persona segue il tuo account: ordini, disponibilità e novità di listino.",
  },
  {
    Icon: Truck,
    title: "Consegne programmate",
    text: "Definiamo insieme i giorni di consegna e manteniamo la continuità di fornitura.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-paper-2/70 py-20 sm:py-24">
      <div className="shell">
        <SectionHeading
          eyebrow="Come lavoriamo"
          title="Dal primo contatto alla consegna, senza passaggi inutili."
          intro="Un metodo semplice, pensato per chi in cucina non ha tempo da perdere."
        />

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ Icon, title, text }, i) => (
            <Reveal
              key={title}
              as="li"
              delay={i * 90}
              className="relative flex h-full flex-col rounded-card border border-line bg-surface p-6 shadow-soft"
            >
              <span
                aria-hidden="true"
                className="absolute right-5 top-5 font-display text-3xl font-bold text-line"
              >
                0{i + 1}
              </span>
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-100 text-brand-700">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-ink">{title}</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-ink-soft">{text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
