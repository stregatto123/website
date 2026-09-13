import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import PageHero from "../components/PageHero";

export const metadata = {
  title: "Contatti | Ingrosso Alimentari MAIORI",
  description:
    "Richiedi un preventivo o il listino a Ingrosso Alimentari MAIORI: latticini, salumi e conserve per la ristorazione.",
};

export default function ContattiPage() {
  return (
    <>
      <PageHero
        eyebrow="Contatti"
        title="Parliamo del tuo fabbisogno."
        intro="Raccontaci che attività hai, quali prodotti ti servono e con che frequenza: prepariamo un preventivo dedicato con le disponibilità aggiornate."
      />

      <section className="bg-paper py-16 sm:py-20">
        <div className="shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <ContactInfo />
          <div className="lg:pt-1">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
