import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import MotionProvider from "./components/MotionProvider";
import PageFade from "./components/PageFade";
import { RequestListProvider } from "./components/lista/RequestListProvider";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Ingrosso Alimentari MAIORI",
  description:
    "Ingrosso alimentare: formaggi, salumi e conserve selezionate per bar, ristoranti, pizzerie e gastronomie.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Ingrosso Alimentari MAIORI",
    description:
      "Formaggi, salumi e conserve selezionate. Prezzi riservati ai professionisti.",
    type: "website",
    locale: "it_IT",
  },
};

export const viewport = {
  themeColor: "#0C2B24",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={`${display.variable} ${sans.variable}`}>
      <body className="flex min-h-screen flex-col bg-paper">
        <a
          href="#contenuto"
          className="sr-only-focusable fixed left-4 top-4 z-[200] rounded-full bg-brand-900 px-5 py-3 text-sm font-bold text-white"
        >
          Salta al contenuto
        </a>
        <MotionProvider>
          <RequestListProvider>
            <Nav />
            <main id="contenuto" className="flex-1">
              <PageFade>{children}</PageFade>
            </main>
            <Footer />
          </RequestListProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
