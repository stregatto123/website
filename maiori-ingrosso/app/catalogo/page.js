import Catalogo from "../components/catalogo/Catalogo";

export const metadata = {
  title: "Catalogo Prodotti | Ingrosso Alimentari MAIORI",
  description: "Oltre 100 referenze di latticini, salumi e conserve per la ristorazione. Prezzi riservati ai professionisti su richiesta.",
};

export default function CatalogoPage() {
  return (
    <div style={{ paddingTop: 80 }}>
      <Catalogo />
    </div>
  );
}
