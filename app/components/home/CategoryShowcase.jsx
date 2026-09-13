import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import products from "../../lib/products";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

/** Copertine e sottotitoli editoriali per le tre macro-categorie. */
const covers = {
  latticini: {
    img: "/images/burrata.png",
    blurb: "Mozzarelle per pizza, bufala DOP, burrate, paste filate e stagionati.",
  },
  salumi: {
    img: "/images/prosciutto-crudo.jpg",
    blurb: "Cotti, crudi DOP, bresaole, arrosti, pancette e salami artigianali.",
  },
  conserve: {
    img: "/images/pomodori.jpg",
    blurb: "Pomodoro, olive, funghi, carciofi, tonno, acciughe e creme gourmet.",
  },
};

export default function CategoryShowcase() {
  const entries = Object.entries(products);

  return (
    <section className="bg-paper py-20 sm:py-24">
      <div className="shell">
        <SectionHeading
          eyebrow="Le nostre linee"
          title="Tre famiglie di prodotto, un solo interlocutore."
          intro="Ogni referenza è scelta per resa in cucina, costanza di fornitura e rapporto qualità-prezzo. I prezzi sono riservati ai clienti professionali e si richiedono in fase di preventivo."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {entries.map(([key, cat], i) => {
            const count = cat.subcategories.reduce((a, s) => a + s.items.length, 0);
            const cover = covers[key];
            return (
              <Reveal key={key} delay={i * 110}>
                <Link
                  href={`/catalogo?cat=${key}`}
                  className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface no-underline shadow-soft transition-shadow duration-300 hover:shadow-lifted"
                >
                  <div className="relative aspect-[5/3] overflow-hidden">
                    <img
                      src={cover.img}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                    />
                    <span
                      className="absolute left-4 top-4 rounded-full px-3 py-1 font-sans text-2xs font-bold uppercase tracking-[0.1em] text-white backdrop-blur-sm"
                      style={{ backgroundColor: cat.color }}
                    >
                      {count} referenze
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-bold leading-snug text-ink">
                      {cat.label}
                    </h3>
                    <p className="mt-2.5 flex-1 font-sans text-sm leading-relaxed text-ink-soft">
                      {cover.blurb}
                    </p>
                    <span
                      className="mt-5 inline-flex items-center gap-1.5 font-sans text-2xs font-bold uppercase tracking-[0.1em]"
                      style={{ color: cat.color }}
                    >
                      Vedi i prodotti
                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
