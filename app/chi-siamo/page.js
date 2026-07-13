import ChiSiamo from "../components/ChiSiamo";

export const metadata = {
  title: "Chi Siamo | Ingrosso Alimentari MAIORI",
  description: "Ingrosso Alimentari MAIORI: latticini, salumi e conserve selezionate per bar, ristoranti, pizzerie e gastronomie.",
};

export default function ChiSiamoPage() {
  return (
    <div style={{ paddingTop: 80, background: "#FFFDF8" }}>
      <ChiSiamo standalone />
    </div>
  );
}
