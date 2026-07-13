export const metadata = {
  title: "Ingrosso Alimentari MAIORI",
  description:
    "Ingrosso alimentare: formaggi, salumi e conserve selezionate per bar, ristoranti, pizzerie e gastronomie.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Ingrosso Alimentari MAIORI",
    description: "Formaggi, salumi e conserve selezionate. Prezzi riservati ai professionisti.",
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
