import { Handshake, Leaf, PackageSearch } from "lucide-react";
import { cn } from "../lib/cn";
import Reveal from "./Reveal";

const values = [
  {
    Icon: Leaf,
    title: "Filiere selezionate",
    text: "Lavoriamo con caseifici e salumifici scelti, privilegiando costanza qualitativa e tracciabilità.",
  },
  {
    Icon: PackageSearch,
    title: "Assortimento da ristorazione",
    text: "Formati, pezzature e tagli pensati per la cucina professionale, non per lo scaffale.",
  },
  {
    Icon: Handshake,
    title: "Referente dedicato",
    text: "Una persona che conosce il tuo locale e risponde davvero. Nessun call center.",
  },
];

const gallery = [
  { src: "/images/bufala.png", className: "aspect-[4/5]" },
  { src: "/images/prosciutto-crudo.jpg", className: "aspect-[4/5] sm:mt-10" },
  { src: "/images/pecorino.jpg", className: "aspect-[4/3]" },
  { src: "/images/carciofi.jpg", className: "aspect-[4/3] sm:mt-10" },
];

export default function ChiSiamo({ standalone = false }) {
  return (
    <section
      id="chi-siamo"
      className={cn("py-20 sm:py-24", standalone ? "bg-paper" : "bg-paper-2/70")}
    >
      <div className="shell grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Mosaico fotografico */}
        <Reveal className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {gallery.map((img) => (
              <div
                key={img.src}
                className={cn(
                  "overflow-hidden rounded-2xl border border-line bg-surface shadow-soft",
                  img.className
                )}
              >
                <img
                  src={img.src}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="eyebrow eyebrow-rule text-accent">Chi siamo</p>
            <h2 className="mt-4 font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.12] tracking-[-0.01em] text-ink">
              Qualità che si sente,
              <span className="block italic text-brand-500">ad ogni consegna.</span>
            </h2>
            <p className="mt-6 font-sans text-base leading-relaxed text-ink-soft">
              Ingrosso Alimentari MAIORI nasce dalla passione per l&apos;eccellenza
              alimentare e dalla conoscenza diretta del mondo della ristorazione.
              Selezioniamo ogni referenza con cura: dai latticini freschi ai
              salumi stagionati, fino alle conserve di qualità.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-ink-soft">
              Un fornitore che conosce le tue esigenze e che sa cosa significa
              avere il banco pronto prima del servizio.
            </p>
          </Reveal>

          <ul className="mt-10 space-y-px overflow-hidden rounded-card border border-line bg-line">
            {values.map(({ Icon, title, text }, i) => (
              <Reveal
                key={title}
                as="li"
                delay={120 + i * 100}
                className="flex gap-4 bg-surface p-5"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand-700">
                  <Icon aria-hidden="true" className="h-[18px] w-[18px]" />
                </span>
                <div>
                  <h3 className="font-sans text-sm font-bold text-ink">{title}</h3>
                  <p className="mt-1 font-sans text-sm leading-relaxed text-ink-soft">
                    {text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
