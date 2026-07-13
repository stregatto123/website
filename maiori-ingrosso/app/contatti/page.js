import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Contatti | Ingrosso Alimentari MAIORI",
  description: "Richiedi un preventivo o il listino prezzi a Ingrosso Alimentari MAIORI.",
};

export default function ContattiPage() {
  return (
    <div style={{ paddingTop: 80 }}>
      <ContactForm />
    </div>
  );
}
