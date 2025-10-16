"use client";

import { useEffect, useState } from "react";

/**
 * Display a showcase of offers grouped by category.
 * Reads the offers from `/offers.json` at runtime. To update offers,
 * modify the JSON file without changing this component.
 */
export default function Showcase({ brandMap }) {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch("/offers.json")
      .then((res) => res.json())
      .then((data) => setOffers(data))
      .catch(() => setOffers([]));
  }, []);

  const telco = offers.filter(
    (o) => o.category === "fiber" || o.category === "fwa"
  );
  const energy = offers.filter(
    (o) =>
      o.category === "electricity" ||
      o.category === "gas" ||
      o.category === "dual"
  );

  return (
    <div className="grid lg:grid-cols-2 gap-8 mt-8">
      <div>
        <h3 className="text-lg font-semibold">Fibra &amp; FWA</h3>
        <div className="mt-4 grid sm:grid-cols-2 gap-4">
          {telco.map((o) => (
            <div key={o.id} className="rounded-2xl border p-4 bg-white">
              <div className="flex items-center justify-between">
                <img
                  src={brandMap[o.brand] || ''}
                  alt={o.brand}
                  className="h-6 w-auto"
                />
                <div className="font-semibold">
                  €{o.price_month.toFixed(2)}/mese
                </div>
              </div>
              <div className="mt-1 text-sm text-zinc-700">{o.title}</div>
              {o.promo_months ? (
                <div className="text-xs text-zinc-600">
                  Promo {o.promo_months} mesi
                </div>
              ) : null}
              {o.notes ? (
                <div className="text-xs text-zinc-600">{o.notes}</div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Luce &amp; Gas</h3>
        <div className="mt-4 grid sm:grid-cols-2 gap-4">
          {energy.map((o) => (
            <div key={o.id} className="rounded-2xl border p-4 bg-white">
              <div className="flex items-center justify-between">
                <img
                  src={brandMap[o.brand] || ''}
                  alt={o.brand}
                  className="h-6 w-auto"
                />
                <div className="font-semibold">
                  da €{o.price_month.toFixed(2)}/mese*
                </div>
              </div>
              <div className="mt-1 text-sm text-zinc-700">{o.title}</div>
              {o.notes ? (
                <div className="text-xs text-zinc-600">{o.notes}</div>
              ) : null}
            </div>
          ))}
        </div>
        <div className="text-xs text-zinc-500 mt-2">
          *stima indicativa, varia per consumi
        </div>
      </div>
    </div>
  );
}