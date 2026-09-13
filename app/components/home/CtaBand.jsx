import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "../Reveal";

export default function CtaBand() {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-brand-900 text-white grain">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 hidden w-1/3 lg:block"
      >
        <img
          src="/images/pecorino.jpg"
          alt=""
          loading="lazy"
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/70 to-transparent" />
      </div>

      <div className="shell relative z-10 py-20 sm:py-24">
        <Reveal className="max-w-2xl">
          <p className="eyebrow eyebrow-rule text-brass">Richiedi il listino</p>
          <h2 className="mt-4 font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.12] text-white">
            Parliamo del tuo fabbisogno.
          </h2>
          <p className="mt-4 max-w-xl font-sans text-base leading-relaxed text-white/70">
            Raccontaci che attività hai e quali prodotti ti servono: ti
            rispondiamo con un preventivo dedicato e le disponibilità aggiornate.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contatti" className="btn bg-brass text-brand-900 hover:bg-brass-soft">
              Contattaci
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link href="/catalogo" className="btn-ghost-dark">
              Vedi il catalogo
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
