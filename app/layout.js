import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dmsans",
  display: "swap",
});

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

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={`${playfair.variable} ${dmSans.variable}`}>
      <body style={{ background: "#FFFDF8", minHeight: "100vh" }}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
