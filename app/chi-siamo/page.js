import ChiSiamo from "../components/ChiSiamo";
import PageHero from "../components/PageHero";
import HowItWorks from "../components/home/HowItWorks";
import CtaBand from "../components/home/CtaBand";
import products from "../lib/products";

export const metadata = {
  title: "Chi Siamo | Ingrosso Alimentari MAIORI",
  description:
    "Ingrosso Alimentari MAIORI: latticini, salumi e conserve selezionate per bar, ristoranti, pizzerie e gastronomie.",
};

export default function ChiSiamoPage() {
  const categories = Object.values(products);
  const totalProducts = categories.reduce(
    (acc, cat) => acc + cat.subcategories.reduce((a, s) => a + s.items.length, 0),
    0
  );
  const totalSubcategories = categories.reduce(
    (acc, cat) => acc + cat.subcategories.length,
    0
  );

  const numbers = [
    { value: totalProducts, label: "Referenze a catalogo" },
    { value: categories.length, label: "Linee di prodotto" },
    { value: totalSubcategories, label: "Famiglie merceologiche" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Chi siamo"
        title="Un fornitore, non un semplice catalogo."
        intro="Conosciamo il lavoro dietro un banco e dietro un forno. Per questo selezioniamo poche referenze per famiglia, ma affidabili, e le teniamo disponibili con continuità."
      >
        <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10">
          {numbers.map((n) => (
            <div key={n.label} className="bg-brand-900/80 px-4 py-5">
              <dt className="sr-only">{n.label}</dt>
              <dd>
                <span className="block font-display text-3xl font-bold text-brass">
                  {n.value}
                </span>
                <span className="mt-1.5 block font-sans text-2xs font-bold uppercase tracking-eyebrow text-white/50">
                  {n.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </PageHero>

      <ChiSiamo standalone />
      <HowItWorks />
      <CtaBand />
    </>
  );
}
