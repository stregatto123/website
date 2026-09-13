"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PackageCheck, Truck, UserRound } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const collage = [
  { src: "/images/mozzarella-hero.png", alt: "", className: "col-span-2 aspect-[16/10]" },
  { src: "/images/salumi-misti.png", alt: "", className: "aspect-square" },
  { src: "/images/olive.jpg", alt: "", className: "aspect-square" },
];

export default function Hero({ totalProducts, totalCategories }) {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-brand-900 text-white grain">
      {/* Aloni luminosi di sfondo */}
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-brand-500/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-56 left-[-10rem] h-[30rem] w-[30rem] rounded-full bg-accent/15 blur-3xl"
      />

      <div className="shell relative z-10 grid items-center gap-14 pb-20 pt-[calc(var(--nav-h)+2.5rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-28 lg:pt-[calc(var(--nav-h)+5rem)]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="eyebrow eyebrow-rule text-brass">
            Ingrosso alimentare · Fornitura B2B
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-[clamp(2.5rem,6.4vw,4.25rem)] font-bold leading-[1.03] tracking-[-0.022em]"
          >
            L&apos;ingrediente giusto,
            <span className="block italic text-brass-soft">ogni volta.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl font-sans text-lg leading-relaxed text-white/72"
          >
            Latticini freschi, salumi selezionati e conserve di qualità per
            pizzerie, ristoranti, bar e gastronomie. Un assortimento costruito
            su ciò che serve davvero in cucina.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <Link href="/catalogo" className="btn bg-brass text-brand-900 hover:bg-brass-soft">
              Sfoglia il catalogo
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link href="/contatti" className="btn-ghost-dark">
              Richiedi preventivo
            </Link>
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-12 grid max-w-lg grid-cols-3 gap-px overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10"
          >
            {[
              { value: totalProducts, label: "Referenze" },
              { value: totalCategories, label: "Categorie" },
              { value: "1", label: "Referente dedicato" },
            ].map((stat) => (
              <div key={stat.label} className="bg-brand-900/80 px-4 py-5 backdrop-blur-sm">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-3xl font-bold text-brass">
                    {stat.value}
                  </span>
                  <span className="mt-1.5 block font-sans text-2xs font-bold uppercase tracking-eyebrow text-white/50">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Collage fotografico */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {collage.map((img, i) => (
              <div
                key={img.src}
                className={`${img.className} overflow-hidden rounded-2xl ring-1 ring-white/15`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  fetchPriority={i === 0 ? "high" : undefined}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-3 grid gap-2 rounded-2xl bg-white/[0.07] p-4 ring-1 ring-white/10 sm:mt-4 sm:grid-cols-3">
            {[
              { Icon: PackageCheck, label: "Assortimento completo" },
              { Icon: Truck, label: "Consegne programmate" },
              { Icon: UserRound, label: "Nessun call center" },
            ].map(({ Icon, label }) => (
              <p
                key={label}
                className="flex items-center gap-2.5 font-sans text-[0.8125rem] text-white/75"
              >
                <Icon aria-hidden="true" className="h-4 w-4 shrink-0 text-brass" />
                {label}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
