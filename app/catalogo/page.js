import { Suspense } from "react";
import Catalogo from "../components/catalogo/Catalogo";

export const metadata = {
  title: "Catalogo Prodotti | Ingrosso Alimentari MAIORI",
  description:
    "Oltre 100 referenze di latticini, salumi e conserve per la ristorazione. Prezzi riservati ai professionisti su richiesta.",
};

function CatalogoFallback() {
  return (
    <div className="on-dark bg-brand-900 pb-24 pt-[calc(var(--nav-h)+2.5rem)]">
      <div className="shell">
        <p className="font-sans text-sm text-white/60">Caricamento del catalogo…</p>
      </div>
    </div>
  );
}

export default function CatalogoPage() {
  return (
    <Suspense fallback={<CatalogoFallback />}>
      <Catalogo />
    </Suspense>
  );
}
