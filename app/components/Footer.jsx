import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "../lib/site";
import Logo from "./Logo";

const columns = [
  {
    title: "Navigazione",
    links: [
      { label: "Home", href: "/" },
      { label: "Chi siamo", href: "/chi-siamo" },
      { label: "Catalogo", href: "/catalogo" },
      { label: "Contatti", href: "/contatti" },
    ],
  },
  {
    title: "Categorie",
    links: [
      { label: "Latticini & Formaggi", href: "/catalogo?cat=latticini" },
      { label: "Salumi & Affettati", href: "/catalogo?cat=salumi" },
      { label: "Scatolame & Conserve", href: "/catalogo?cat=conserve" },
    ],
  },
];

const contacts = [
  { Icon: Phone, label: "Telefono", value: SITE.phone },
  { Icon: Mail, label: "Email", value: SITE.email },
  { Icon: Clock, label: "Orari", value: SITE.hours },
  { Icon: MapPin, label: "Zona servita", value: SITE.zone },
];

export default function Footer() {
  return (
    <footer className="on-dark relative isolate overflow-hidden bg-brand-900 text-white grain">
      <div
        aria-hidden="true"
        className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl"
      />
      <div className="shell relative z-10 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-xs font-sans text-sm leading-relaxed text-white/65">
              Ingrosso Alimentari MAIORI — fornitore B2B di latticini, salumi e
              conserve per pizzerie, ristoranti, bar e gastronomie.
            </p>
            <Link href="/contatti" className="btn-primary mt-7">
              Richiedi il listino
            </Link>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="eyebrow font-sans text-brass-soft">{col.title}</h2>
              <ul className="mt-4">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-[44px] items-center font-sans text-sm text-white/65 no-underline transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="eyebrow font-sans text-brass-soft">Contatti</h2>
            <dl className="mt-5 space-y-3.5">
              {contacts.filter(({ value }) => value).map(({ Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <Icon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                  <div className="font-sans text-sm">
                    <dt className="text-2xs font-bold uppercase tracking-eyebrow text-white/45">
                      {label}
                    </dt>
                    <dd className="mt-0.5 text-white/75">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 font-sans text-2xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name} — Tutti i diritti riservati
          </p>
          {(SITE.vat || SITE.address) && (
            <p>
              {[SITE.vat && `P.IVA: ${SITE.vat}`, SITE.address].filter(Boolean).join(" — ")}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
