export const metadata = {
  title: "NoSorprese Broker",
  description: "Fibra, FWA, Luce & Gas senza sorprese. Consulente indipendente.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "NoSorprese Broker",
    description: "Sempre l’offerta migliore. Per davvero.",
    type: "website",
  },
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className="min-h-screen bg-gray-50 text-zinc-900 antialiased">
        {children}
      </body>
    </html>
  );
}
