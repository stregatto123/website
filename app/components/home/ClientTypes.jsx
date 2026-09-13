import { ChefHat, Coffee, Croissant, Pizza, Store, UtensilsCrossed } from "lucide-react";
import Reveal from "../Reveal";

const clients = [
  { Icon: Pizza, label: "Pizzerie" },
  { Icon: UtensilsCrossed, label: "Ristoranti" },
  { Icon: Coffee, label: "Bar & caffetterie" },
  { Icon: Store, label: "Gastronomie" },
  { Icon: ChefHat, label: "Rosticcerie" },
  { Icon: Croissant, label: "Paninoteche" },
];

export default function ClientTypes() {
  return (
    <section className="border-b border-line bg-paper-2/60 py-12">
      <div className="shell">
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
          <p className="eyebrow shrink-0 text-ink-soft lg:max-w-[11rem]">
            Riforniamo ogni giorno
          </p>
          <ul className="flex flex-1 flex-wrap gap-x-7 gap-y-4">
            {clients.map(({ Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5 whitespace-nowrap">
                <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-brand-500" />
                <span className="font-sans text-sm font-semibold text-ink">{label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
