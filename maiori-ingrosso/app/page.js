import ContactForm from "./components/ContactForm";
import { CATEGORIES } from "./lib/products";

function Step({ n, title, desc, icon }) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-2xl bg-amber-600 text-white grid place-content-center font-semibold">{n}</div>
        <div className="text-2xl" aria-hidden>{icon}</div>
      </div>
      <div className="mt-4 font-semibold">{title}</div>
      <div className="text-sm text-zinc-700">{desc}</div>
    </div>
  );
}

function ValueProp({ title, desc, icon }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5">
      <div className="text-2xl" aria-hidden>{icon}</div>
      <div className="mt-2 font-semibold">{title}</div>
      <div className="text-sm text-zinc-600">{desc}</div>
    </div>
  );
}

function ProductCard({ name, format }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-4">
      <div className="font-medium text-zinc-900">{name}</div>
      <div className="mt-1 text-sm text-zinc-600">{format}</div>
    </div>
  );
}

function CategorySection({ id, title, description, products }) {
  return (
    <div id={id} className="scroll-mt-24">
      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-1 text-sm text-zinc-600">{description}</p>
      <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((p) => (
          <ProductCard key={p.name} name={p.name} format={p.format} />
        ))}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-2xl bg-amber-600" />
            <span className="font-semibold tracking-tight">Ingrosso Alimentari MAIORI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#chi-siamo" className="hover:text-amber-700">Chi siamo</a>
            <a href="#prodotti" className="hover:text-amber-700">Prodotti</a>
            <a href="#come-funziona" className="hover:text-amber-700">Come funziona</a>
            <a href="#contatti" className="hover:text-amber-700">Contatti</a>
          </nav>
          <a href="#contatti" className="inline-flex items-center rounded-2xl bg-amber-600 px-4 py-2 text-white text-sm font-medium shadow-sm hover:bg-amber-700 transition">
            Richiedi il listino
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative" id="chi-siamo">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                Formaggi, salumi e conserve <span className="text-amber-700">per la tua attività.</span>
              </h1>
              <p className="mt-4 text-lg text-zinc-700">
                Ingrosso Alimentari MAIORI rifornisce bar, ristoranti, pizzerie e gastronomie con un ampio assortimento di prodotti selezionati, a prezzi riservati ai professionisti.
              </p>
              <div className="mt-6 flex gap-3">
                <a href="#contatti" className="rounded-2xl bg-amber-600 px-5 py-3 text-white font-medium shadow hover:bg-amber-700">Richiedi il listino</a>
                <a href="#prodotti" className="rounded-2xl border border-zinc-300 px-5 py-3 font-medium hover:border-zinc-400">Scopri i prodotti</a>
              </div>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <span className="inline-flex items-center gap-2 rounded-xl bg-amber-50 px-3 py-1 text-amber-800">🧀 Ampia gamma formaggi & salumi</span>
                <span className="inline-flex items-center gap-2 rounded-xl bg-zinc-100 px-3 py-1">📦 Prezzi riservati ai professionisti</span>
                <span className="inline-flex items-center gap-2 rounded-xl bg-zinc-100 px-3 py-1">🚚 Consegna diretta alla tua attività</span>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-medium text-zinc-700 mb-3">Solo alcune referenze del catalogo</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <ProductCard name="Mozzarella di Bufala Campana DOP" format="Busta 250 g" />
                  <ProductCard name="Prosciutto Crudo di Parma DOP" format="Stagionatura min. 14 mesi" />
                  <ProductCard name="Grana Padano DOP" format="1/16 spicchio, circa 1 kg" />
                  <ProductCard name="Pomodori Pelati" format="Cartone da 15 kg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Come funziona */}
      <section id="come-funziona" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Come funziona</h2>
          <p className="mt-2 text-zinc-700">Semplice, veloce, pensato per chi lavora nella ristorazione.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Step n={1} title="Richiedi il listino" desc="Compila il form o contattaci: ti inviamo il listino aggiornato con prezzi e disponibilità" icon="📋" />
            <Step n={2} title="Scegli i prodotti" desc="Valutiamo insieme le referenze più adatte alla tua attività" icon="🧾" />
            <Step n={3} title="Ordina e ricevi" desc="Organizziamo la consegna nella tua zona con puntualità" icon="🚚" />
          </div>
        </div>
      </section>

      {/* Prodotti */}
      <section id="prodotti" className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 space-y-14">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">I nostri prodotti</h2>
            <p className="mt-2 text-zinc-700">
              Una selezione del nostro assortimento. I prezzi sono riservati ai clienti:
              richiedi il listino completo con disponibilità e condizioni.
            </p>
          </div>
          {CATEGORIES.map((cat) => (
            <CategorySection key={cat.id} {...cat} />
          ))}
        </div>
      </section>

      {/* Perché sceglierci */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Perché sceglierci</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <ValueProp icon="🧀" title="Prodotti selezionati" desc="Formaggi, salumi e conserve DOP e di qualità artigianale" />
            <ValueProp icon="💶" title="Prezzi B2B" desc="Condizioni riservate ai professionisti della ristorazione" />
            <ValueProp icon="🚚" title="Consegna diretta" desc="Riforniamo bar, ristoranti, pizzerie e gastronomie" />
            <ValueProp icon="🤝" title="Assistenza dedicata" desc="Ti aiutiamo a scegliere le referenze giuste per il tuo menù" />
          </div>
        </div>
      </section>

      {/* Contatti */}
      <section id="contatti" className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Richiedi il listino</h2>
              <p className="mt-2 text-zinc-700">
                Lasciaci i tuoi dati: ti invieremo il listino prezzi aggiornato e ti aiuteremo a scegliere i prodotti più adatti alla tua attività.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Contatti diretti</h3>
              <ul className="mt-4 space-y-2 text-zinc-700 text-sm">
                <li>Telefono / WhatsApp: <span className="text-zinc-500">[Telefono da inserire]</span></li>
                <li>Email: <span className="text-zinc-500">[Email da inserire]</span></li>
                <li>Indirizzo / zona di consegna: <span className="text-zinc-500">[Indirizzo da inserire]</span></li>
                <li>Orari: <span className="text-zinc-500">[Orari da inserire]</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-2xl bg-amber-600" />
              <span className="font-semibold">Ingrosso Alimentari MAIORI</span>
            </div>
            <p className="mt-3 text-sm text-zinc-700">Formaggi, salumi e conserve per bar, ristoranti, pizzerie e gastronomie.</p>
          </div>
          <div className="text-sm">
            <div className="font-semibold mb-2">Contatti</div>
            <p>Telefono / WhatsApp: [Telefono da inserire]</p>
            <p>Email: [Email da inserire]</p>
            <p>Indirizzo: [Indirizzo da inserire]</p>
          </div>
          <div className="text-sm">
            <div className="font-semibold mb-2">Legale</div>
            <p>P.IVA: [P.IVA da inserire]</p>
            <p>Privacy • Cookie</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
