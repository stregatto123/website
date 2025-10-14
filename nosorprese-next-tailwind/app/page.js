'use client';
import { useMemo, useState } from "react";

/* ===== Assets map (smart detection for PNG/SVG) ===== */
// Funzione per costruire il percorso del logo.
// Supporta automaticamente sia .svg che .png nella cartella /public/logos
const getLogoPath = (name) => {
  const base = `/logos/${name.toLowerCase()}`;
  // prova .svg, poi .png; Next servirà il file disponibile
  return `${base}.svg`;
};

// Mappa brand con percorsi dinamici
const BRANDS = {
  // Telco esistenti
  TIM: getLogoPath("tim"),
  Vodafone: getLogoPath("vodafone"),
  Fastweb: getLogoPath("fastweb"),
  WindTre: getLogoPath("windtre"),
  // Energia esistenti
  "Enel Energia": getLogoPath("enel"),
  Edison: getLogoPath("edison"),
  Plenitude: getLogoPath("plenitude"),
  "A2A Energia": getLogoPath("a2a"),
  // Nuovi operatori telco
  Iliad: getLogoPath("iliad"),
  Tiscali: getLogoPath("tiscali"),
  Sky: getLogoPath("sky"),
  EOLO: getLogoPath("eolo"),
  PosteCasa: getLogoPath("postecasa"),
  Linkem: getLogoPath("linkem"),
  Aruba: getLogoPath("aruba"),
  // Nuovi operatori energia
  "E.ON": getLogoPath("eon"),
  ENGIE: getLogoPath("engie"),
  Acea: getLogoPath("acea"),
  "Hera Comm": getLogoPath("hera"),
  Iren: getLogoPath("iren"),
  Illumia: getLogoPath("illumia"),
  NeN: getLogoPath("nen"),
  Pulsee: getLogoPath("pulsee"),
  "Dolomiti Energia": getLogoPath("dolomiti"),
  "AGSM AIM": getLogoPath("agsm"),
};

/* ===== Utils ===== */
function addMonths(date, months) {
  const d = new Date(date.getTime());
  const targetMonth = d.getMonth() + months;
  d.setMonth(targetMonth);
  if (d.getMonth() !== ((targetMonth % 12) + 12) % 12) d.setDate(0);
  return d;
}

function formatDate(d) {
  if (!(d instanceof Date) || isNaN(d.getTime())) return "—";
  return d.toLocaleDateString("it-IT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

/* ===== UI ===== */
function BrandLogo({ src, alt }) {
  // fallback da .svg a .png e viceversa, già implementato in versione precedente
  const base = useMemo(() => src.replace(/\.(svg|png)$/i, ""), [src]);
  const [current, setCurrent] = useState(src);
  return (
    <div className="flex items-center gap-2">
      <img
        src={current}
        alt={alt}
        className="h-6 w-auto"
        onError={() => {
          if (current.toLowerCase().endsWith(".svg")) setCurrent(`${base}.png`);
          else if (current.toLowerCase().endsWith(".png")) setCurrent(`${base}.svg`);
        }}
      />
      <span className="font-semibold text-sm">{alt}</span>
    </div>
  );
}

function OfferCard({ logoName, logoSrc, title, price, promo, change }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <BrandLogo src={logoSrc} alt={logoName} />
        <span className="text-sm rounded-xl bg-blue-50 px-2 py-0.5">{title}</span>
      </div>
      <div className="mt-2 text-lg font-semibold">{price}</div>
      <div className="text-sm text-zinc-600">{promo}</div>
      <div className="mt-2 text-xs text-zinc-600">Quando cambiare: {change}</div>
    </div>
  );
}

function OfferCardDetailed({ logoName, logoSrc, title, price, promo, change }) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow transition">
      <div className="flex items-center justify-between">
        <BrandLogo src={logoSrc} alt={logoName} />
        <div className="text-lg font-semibold">{price}</div>
      </div>
      <div className="mt-2 text-sm text-zinc-700">{title} • {promo}</div>
      <div className="mt-3 flex items-center justify-between">
        <div className="text-sm text-zinc-600">
          Quando conviene cambiare:{" "}
          <span className="font-medium text-zinc-800">{change}</span>
        </div>
        <button className="rounded-xl border border-zinc-300 px-3 py-1.5 text-sm font-medium hover:border-zinc-400">
          Confronta
        </button>
      </div>
    </div>
  );
}

function EnergyCard({ provider, logoSrc, detail, annual, endPromo, recommend }) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow transition">
      <div className="flex items-center justify-between">
        <BrandLogo src={logoSrc} alt={provider} />
        <div className="text-lg font-semibold">Stima annua {annual}</div>
      </div>
      <div className="mt-2 text-sm text-zinc-700">{detail}</div>
      <div className="mt-3 flex items-center justify-between text-sm">
        <div className="text-zinc-600">
          Fine promo:{" "}
          <span className="font-medium text-zinc-800">{endPromo}</span>
        </div>
        <div className="text-zinc-600">
          Cambio consigliato:{" "}
          <span className="font-medium text-zinc-800">{recommend}</span>
        </div>
      </div>
      <div className="mt-4 flex gap-3">
        <button className="rounded-xl bg-blue-600 px-4 py-2 text-white text-sm font-medium hover:bg-blue-700">
          Visualizza risparmio
        </button>
        <button className="rounded-xl border border-zinc-300 px-4 py-2 text-sm font-medium hover:border-zinc-400">
          Confronta
        </button>
      </div>
    </div>
  );
}

function KPI({ label, value }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-gray-50 p-4">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-xs text-zinc-600">{label}</div>
    </div>
  );
}

function Review({ name, text, rating = 5 }) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="font-semibold">{name}</div>
        <div className="text-sm" aria-label={`Valutazione ${rating} su 5`}>
          {"★".repeat(Math.max(0, Math.min(5, rating)))}
          {"☆".repeat(Math.max(0, 5 - rating))}
        </div>
      </div>
      <p className="mt-2 text-sm text-zinc-700">{text}</p>
    </div>
  );
}

function Step({ n, title, desc, icon }) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-2xl bg-blue-600 text-white grid place-content-center font-semibold">
          {n}
        </div>
        <div className="text-2xl" aria-hidden>
          {icon}
        </div>
      </div>
      <div className="mt-4 font-semibold">{title}</div>
      <div className="text-sm text-zinc-700">{desc}</div>
    </div>
  );
}

export default function Page() {
  const [start, setStart] = useState(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  });
  const [months, setMonths] = useState(12);
  const [bufferDays, setBufferDays] = useState(5);
  const [penalty, setPenalty] = useState(0);

  const resultDate = useMemo(() => {
    const s = new Date(start);
    if (isNaN(s.getTime())) return null;
    const end = addMonths(s, Number(months));
    const res = new Date(
      end.getTime() - bufferDays * 24 * 60 * 60 * 1000
    );
    return res;
  }, [start, months, bufferDays]);

  return (
    <div>
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-2xl bg-blue-500" />
            <span className="font-semibold tracking-tight">NoSorprese Broker</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#how" className="hover:text-blue-600">Come funziona</a>
            <a href="#telco" className="hover:text-blue-600">Fibra & FWA</a>
            <a href="#energy" className="hover:text-blue-600">Luce & Gas</a>
            <a href="#whyfree" className="hover:text-blue-600">Perché gratis</a>
            <a href="#contact" className="hover:text-blue-600">Contatti</a>
          </nav>
          <a href="#start" className="inline-flex items-center rounded-2xl bg-blue-600 px-4 py-2 text-white text-sm font-medium shadow-sm hover:bg-blue-700 transition">
            Inizia gratis
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                Sempre l’offerta migliore.{" "}
                <span className="text-blue-600">Per davvero.</span>
              </h1>
              <p className="mt-4 text-lg text-zinc-700">
                Bollette sotto controllo: confronto, attivazione e promemoria di cambio. Tu non pensi agli aumenti — ci penso io.
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href="#start"
                  className="rounded-2xl bg-blue-600 px-5 py-3 text-white font-medium shadow hover:bg-blue-700"
                >
                  Inizia gratis
                </a>
                <a
                  href="#how"
                  className="rounded-2xl border border-zinc-300 px-5 py-3 font-medium hover:border-zinc-400"
                >
                  Scopri come funziona
                </a>
              </div>
              <div className="mt-6 flex gap-3 text-sm">
                <span className="inline-flex items-center gap-2 rounded-xl bg-green-100 px-3 py-1 text-green-800">
                  ✅ Servizio gratuito
                </span>
                <span className="inline-flex items-center gap-2 rounded-xl bg-zinc-100 px-3 py-1">
                  🧭 Consulente indipendente
                </span>
                <span className="inline-flex items-center gap-2 rounded-xl bg-zinc-100 px-3 py-1">
                  🔒 Trasparenza incentivi
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-medium text-zinc-700 mb-3">
                  Anteprima card offerte (solo FISSA)
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <OfferCard
                    logoName="TIM"
                    logoSrc={BRANDS.TIM}
                    title="Fibra 1Gb"
                    price="€24,90/mese"
                    promo="Promo 12 mesi – poi €29,90"
                    change="11/10/2026"
                  />
                  <OfferCard
                    logoName="Vodafone"
                    logoSrc={BRANDS.Vodafone}
                    title="Fibra 2.5Gb"
                    price="€27,90/mese"
                    promo="Promo 24 mesi – router incluso"
                    change="07/09/2027"
                  />
                  <OfferCard
                    logoName="Fastweb"
                    logoSrc={BRANDS.Fastweb}
                    title="FWA 300Mb"
                    price="€22,95/mese"
                    promo="Promo 12 mesi – modem incluso"
                    change="02/04/2026"
                  />
                  <OfferCard
                    logoName="WindTre"
                    logoSrc={BRANDS.WindTre}
                    title="Fibra 1Gb"
                    price="€26,99/mese"
                    promo="Promo 12 mesi – poi €29,99"
                    change="15/06/2026"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Come funziona
          </h2>
          <p className="mt-2 text-zinc-700">
            4 step chiari dal primo check al monitoraggio continuo.
          </p>
          <div className="mt-8 grid md:grid-cols-4 gap-6">
            <Step
              n={1}
              title="Carica bollette"
              desc="PDF/JPG o rispondi a 6 domande"
              icon="🧾"
            />
            <Step
              n={2}
              title="Confronto offerte"
              desc="Scelte spiegate in italiano"
              icon="🔍"
            />
            <Step
              n={3}
              title="Piano cambio"
              desc="Data precisa prima della fine promo"
              icon="🗓️"
            />
            <Step
              n={4}
              title="Attivazione + monitoraggio"
              desc="Pratiche e promemoria automatici"
              icon="🤝"
            />
          </div>
        </div>
      </section>

      {/* Telco (only fixed) */}
      <section id="telco" className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Fibra & FWA
              </h2>
              <p className="mt-2 text-zinc-700">
                Verifico copertura reale e scelgo la soluzione migliore{" "}
                <strong>solo telefonia fissa</strong>.
              </p>
            </div>
            <a
              href="#start"
              className="hidden md:inline-flex rounded-2xl border border-zinc-300 px-4 py-2 font-medium hover:border-zinc-400"
            >
              Calcola quando cambiare
            </a>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Offerte base già esistenti */}
            <OfferCardDetailed
              logoName="TIM"
              logoSrc={BRANDS.TIM}
              title="Fibra 1Gb"
              price="€24,90/mese"
              promo="Promo 12 mesi – poi €29,90"
              change="11/10/2026"
            />
            <OfferCardDetailed
              logoName="Vodafone"
              logoSrc={BRANDS.Vodafone}
              title="Fibra 2.5Gb"
              price="€27,90/mese"
              promo="Promo 24 mesi – router incluso"
              change="07/09/2027"
            />
            <OfferCardDetailed
              logoName="Fastweb"
              logoSrc={BRANDS.Fastweb}
              title="FWA 300Mb"
              price="€22,95/mese"
              promo="Promo 12 mesi – modem incluso"
              change="02/04/2026"
            />
            {/* Nuove offerte telco */}
            <OfferCardDetailed
              logoName="Iliad"
              logoSrc={BRANDS.Iliad}
              title="Fibra 5Gb"
              price="€24,90/mese"
              promo="FTTH 5Gb – router incluso"
              change="—"
            />
            <OfferCardDetailed
              logoName="Tiscali"
              logoSrc={BRANDS.Tiscali}
              title="UltraFibra"
              price="€27,95/mese"
              promo="FTTH 1Gb – router incluso"
              change="—"
            />
            <OfferCardDetailed
              logoName="Sky"
              logoSrc={BRANDS.Sky}
              title="Sky WiFi"
              price="€29,90/mese"
              promo="FTTH 1Gb – router incluso"
              change="—"
            />
            <OfferCardDetailed
              logoName="EOLO"
              logoSrc={BRANDS.EOLO}
              title="FWA 30Mb"
              price="€24,90/mese"
              promo="FWA 30Mb – router incluso"
              change="—"
            />
            <OfferCardDetailed
              logoName="PosteCasa"
              logoSrc={BRANDS.PosteCasa}
              title="Ultraveloce"
              price="€26,90/mese"
              promo="FTTH 1Gb"
              change="—"
            />
            <OfferCardDetailed
              logoName="Linkem"
              logoSrc={BRANDS.Linkem}
              title="Home 50Mb"
              price="€19,90/mese"
              promo="FWA 50Mb"
              change="—"
            />
            <OfferCardDetailed
              logoName="Aruba"
              logoSrc={BRANDS.Aruba}
              title="Fibra 2.5Gb"
              price="€29,00/mese"
              promo="FTTH 2,5Gb"
              change="—"
            />
          </div>
        </div>
      </section>

      {/* Energy */}
      <section id="energy" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Luce & Gas
          </h2>
          <p className="mt-2 text-zinc-700">
            Fisso o indicizzato? Valuto consumi e ti propongo un piano per bloccare gli aumenti.
          </p>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {/* Offerte esistenti */}
            <EnergyCard
              provider="Enel Energia"
              logoSrc={BRANDS["Enel Energia"]}
              detail="PUN + 0,07 € / kWh"
              annual="€820"
              endPromo="02/2026"
              recommend="01/2026"
            />
            <EnergyCard
              provider="Edison"
              logoSrc={BRANDS.Edison}
              detail="Prezzo fisso 12 mesi"
              annual="€690"
              endPromo="12/2025"
              recommend="11/2025"
            />
            <EnergyCard
              provider="Plenitude"
              logoSrc={BRANDS.Plenitude}
              detail="Indicizzato PSV + spread"
              annual="€740"
              endPromo="—"
              recommend="Monitoraggio continuo"
            />
            <EnergyCard
              provider="A2A Energia"
              logoSrc={BRANDS["A2A Energia"]}
              detail="Fisso 12 mesi luce+gas"
              annual="€1.420 (dual)"
              endPromo="09/2026"
              recommend="08/2026"
            />
            <EnergyCard
              provider="Sorgenia"
              logoSrc={BRANDS.Sorgenia || BRANDS["A2A Energia"]}
              detail="Prezzo indicizzato"
              annual="€730"
              endPromo="—"
              recommend="Monitoraggio continuo"
            />
            <EnergyCard
              provider="NeN"
              logoSrc={BRANDS.NeN}
              detail="Fisso 36 mesi"
              annual="€780"
              endPromo="—"
              recommend="Monitoraggio continuo"
            />
            {/* Nuove offerte energia */}
            <EnergyCard
              provider="E.ON"
              logoSrc={BRANDS["E.ON"]}
              detail="PUN + 0,08 € / kWh"
              annual="€900"
              endPromo="—"
              recommend="Monitoraggio continuo"
            />
            <EnergyCard
              provider="ENGIE"
              logoSrc={BRANDS.ENGIE}
              detail="Tariffa indicizzata"
              annual="€850"
              endPromo="—"
              recommend="Monitoraggio continuo"
            />
            <EnergyCard
              provider="Acea"
              logoSrc={BRANDS.Acea}
              detail="Prezzo fisso 12 mesi"
              annual="€870"
              endPromo="11/2025"
              recommend="10/2025"
            />
            <EnergyCard
              provider="Hera Comm"
              logoSrc={BRANDS["Hera Comm"]}
              detail="Indice PUN + spread"
              annual="€890"
              endPromo="03/2026"
              recommend="02/2026"
            />
            <EnergyCard
              provider="Iren"
              logoSrc={BRANDS.Iren}
              detail="Fisso 12 mesi"
              annual="€880"
              endPromo="04/2026"
              recommend="03/2026"
            />
            <EnergyCard
              provider="Illumia"
              logoSrc={BRANDS.Illumia}
              detail="Fisso 12 mesi"
              annual="€860"
              endPromo="—"
              recommend="Monitoraggio continuo"
            />
            <EnergyCard
              provider="Pulsee"
              logoSrc={BRANDS.Pulsee}
              detail="Fisso 12 mesi"
              annual="€840"
              endPromo="—"
              recommend="Monitoraggio continuo"
            />
            <EnergyCard
              provider="Dolomiti Energia"
              logoSrc={BRANDS["Dolomiti Energia"]}
              detail="Fisso 12 mesi"
              annual="€880"
              endPromo="—"
              recommend="Monitoraggio continuo"
            />
            <EnergyCard
              provider="AGSM AIM"
              logoSrc={BRANDS["AGSM AIM"]}
              detail="Fisso 24 mesi"
              annual="€920"
              endPromo="—"
              recommend="Monitoraggio continuo"
            />
          </div>
        </div>
      </section>

      {/* Why Free */}
      <section id="whyfree" className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Perché è gratis
          </h2>
          <div className="mt-4 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-zinc-700">
              Il servizio è gratuito perché ricevo un{" "}
              <strong>gettone</strong> dagli operatori quando attivi un’offerta. Non paghi nulla e vedi comunque più alternative, con pro e contro chiari. La scelta finale è tua, senza vincoli.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-xl bg-green-100 px-3 py-1 text-green-800">
                ✅ Servizio gratuito
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl bg-zinc-100 px-3 py-1">
                🧭 Consulente indipendente
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl bg-zinc-100 px-3 py-1">
                🔒 Trasparenza incentivi
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      {/* ... mantieni il resto del file invariato (il modulo calcolatore e le recensioni) ... */}

      {/* Footer */}
      {/* ... mantieni invariato ... */}
    </div>
  );
}
