/**
 * Catalogo prodotti (estratto dal listino interno). Nessun prezzo:
 * i prezzi sono riservati ai clienti e vanno richiesti via contatto.
 */
import { COLORS } from "./colors";

const products = {
  latticini: {
    icon: "🥛",
    label: "Latticini & Formaggi",
    color: COLORS.gold,
    subcategories: [
      {
        title: "Mozzarelle per Pizza",
        items: [
          { name: "Mozzarella Fior di Latte Bocconcini", desc: "125 gr — Imbustati singolarmente", tags: ["125 gr", "Imbustati singolarment"], img: "/images/mozzarella-fette.png" },
          { name: "Mozzarella per Pizza Julienne (Latte UE Alta Qualità)", desc: "Bocce Vasca 4,5 Kg — Taglio fiammifero o spesso", tags: ["Bocce Vasca 4,5 Kg", "Taglio fiammifero o sp"], img: "/images/mozzarella-hero.png" },
          { name: "Mozzarella per Pizza Julienne (Latte Italia)", desc: "Vasca 3 Kg", tags: ["Vasca 3 Kg"], img: "/images/mozzarella-hero.png" },
          { name: "Mozzarella per Pizza Julienne (Taglio Napoli)", desc: "Latte UE · Vasca 3 Kg — Taglio più spesso per alte temperature", tags: ["Latte UE", "Taglio più spesso per "], img: "/images/mozzarella-hero.png" },
          { name: "Mozzarella Filoni Bayerland", desc: "Latte UE · Vasca 3 Kg — Linea competitiva", tags: ["Latte UE", "Linea competitiva"], img: "/images/mozzarella-fette.png" }]
      },
      {
        title: "Mozzarella di Bufala & Fior di Latte",
        items: [
          { name: "Mozzarella di Bufala Campana DOP (Aversana/Bocconcini)", desc: "Vasca 3 Kg", tags: ["Vasca 3 Kg"], img: "/images/bufala.png" },
          { name: "Mozzarella di Bufala Campana DOP", desc: "Busta 250g (pezzature 50g/250g)", tags: ["Busta 250g (pezzature 50"], img: "/images/bufala.png" },
          { name: "Fior di Latte Filoni (Latte UE)", desc: "Formato standard · 1 Kg", tags: ["Formato standard"], img: "/images/mozzarella-fette.png" },
          { name: "Mozzarella di Bufala Campana DOP", desc: "Busta 250g (pezzatura 125g)", tags: ["Busta 250g (pezzatura 12"], img: "/images/bufala.png" },
          { name: "Mozzarella di Bufala Campana DOP", desc: "2 pezzi da 125g per busta", tags: ["2 pezzi da 125g per bust"], img: "/images/bufala.png" },
          { name: "Filadolce per Pizza", desc: "Da specificare", tags: ["Da specificare"], img: "/images/mozzarella-hero.png" },
          { name: "Ciliegine di Mozzarella", desc: "In acqua", tags: ["In acqua"], img: "/images/mozzarella-fette.png" }]
      },
      {
        title: "Burrata, Stracciatella & Scamorze",
        items: [
          { name: "Burrata Vaccina", desc: "Singola 125 gr — In bicchierino", tags: ["Singola 125 gr", "In bicchierino"], img: "/images/burrata.png" },
          { name: "Stracciatella", desc: "250 gr", tags: ["250 gr"], img: "/images/stracciatella.png" },
          { name: "Scamorze Bianche Affumicate", desc: "Peso Variabile — Prodotto artigianale", tags: ["Peso Variabile", "Prodotto artigianale"], img: "/images/scamorza.png" },
          { name: "Provola Affumicata", desc: "1 Kg / 2 Kg", tags: ["1 Kg / 2 Kg"], img: "/images/scamorza.png" },
          { name: "Caciocavallo Stagionato Cremona", desc: "Circa 1,2 Kg — Forma intera", tags: ["Circa 1,2 Kg", "Forma intera"], img: "/images/scamorza.png" },
          { name: "Provola Silana DOP", desc: "1 Kg — Forma intera", tags: ["1 Kg", "Forma intera"], img: "/images/scamorza.png" }]
      },
      {
        title: "Formaggi Freschi",
        items: [
          { name: "Ricotta da Lavorazione", desc: "Sottovuoto · Circa 4/5 Kg — Ideale per ripieni", tags: ["Sottovuoto", "Ideale per ripieni"], img: "/images/mozzarella-fette.png" },
          { name: "Stracchino Panetto", desc: "1 Kg", tags: ["1 Kg"], img: "/images/mozzarella-fette.png" },
          { name: "Stracchino in Vasca", desc: "Vaschetta · Circa 2 Kg — Da lavorazione", tags: ["Vaschetta", "Da lavorazione"], img: "/images/mozzarella-fette.png" },
          { name: "Gorgonzola DOP 1/8", desc: "Sostenuta · Circa 1,5 Kg", tags: ["Sostenuta"], img: "/images/mozzarella-fette.png" }]
      },
      {
        title: "Formaggi Stagionati",
        items: [
          { name: "Gorgonzola Igorcreme 1/8", desc: "Più morbida · Circa 1,5 Kg", tags: ["Più morbida"], img: "/images/mozzarella-fette.png" },
          { name: "Edamer Intero", desc: "Circa 3 Kg", tags: ["Circa 3 Kg"], img: "/images/mozzarella-fette.png" },
          { name: "Edamer a Fette", desc: "Vaschetta 1 Kg — Pronto all'uso", tags: ["Vaschetta 1 Kg", "Pronto all'uso"], img: "/images/mozzarella-fette.png" },
          { name: "Brie", desc: "Forma · Circa 1 Kg", tags: ["Forma"], img: "/images/mozzarella-fette.png" },
          { name: "Taleggio DOP", desc: "Forma intera · Circa 2 Kg", tags: ["Forma intera"], img: "/images/mozzarella-fette.png" },
          { name: "Mascarpone", desc: "Vaschetta 500 gr", tags: ["Vaschetta 500 gr"], img: "/images/mozzarella-fette.png" },
          { name: "Grana Padano DOP 1/16", desc: "Spicchio · Circa 1 Kg", tags: ["Spicchio"], img: "/images/mozzarella-hero.png" },
          { name: "Grana Padano DOP a Scaglie", desc: "Vaschetta 500 gr — Pronto all'uso", tags: ["Vaschetta 500 gr", "Pronto all'uso"], img: "/images/mozzarella-hero.png" },
          { name: "Grana Padano DOP Grattugiato", desc: "Busta 1 Kg — 100% Grana Padano", tags: ["Busta 1 Kg", "100% Grana Padano"], img: "/images/mozzarella-hero.png" },
          { name: "Parmigiano Reggiano DOP 24 Mesi", desc: "Spicchio 1/8 · Circa 5 Kg — Alta stagionatura per cucina e taglieri", tags: ["Spicchio 1/8", "Alta stagionatura per "], img: "/images/mozzarella-hero.png" },
          { name: "Fontal ¼", desc: "Spicchio · Circa 3 Kg", tags: ["Spicchio"], img: "/images/mozzarella-fette.png" }]
      },
      {
        title: "Panna, Burro & Pecorini",
        items: [
          { name: "Panna da Cucina", desc: "Brik 200 ml", tags: ["Brik 200 ml"], img: "/images/mozzarella-fette.png" },
          { name: "Panna da Cucina", desc: "Brik 500 ml", tags: ["Brik 500 ml"], img: "/images/mozzarella-fette.png" },
          { name: "Burro", desc: "Panetto 1 Kg", tags: ["Panetto 1 Kg"], img: "/images/mozzarella-fette.png" },
          { name: "Formaggio Spalmabile", desc: "Secchiello/Vasca 1,5 Kg — Tipo \"Philadelphia\"", tags: ["Secchiello/Vasca 1,5 Kg", "Tipo \"Philadelphia\""], img: "/images/mozzarella-fette.png" },
          { name: "Panna da Montare UHT", desc: "Brik 1 Litro", tags: ["Brik 1 Litro"], img: "/images/mozzarella-fette.png" },
          { name: "Pecorino Sardo Dolce DOP", desc: "Giovane · Circa 1,8 Kg", tags: ["Giovane"], img: "/images/mozzarella-fette.png" },
          { name: "Pecorino Sardo Stagionato DOP", desc: "Semistagionato · Circa 3 Kg", tags: ["Semistagionato"], img: "/images/mozzarella-fette.png" }]
      }]
  },
  salumi: {
    icon: "🥩",
    label: "Salumi & Affettati",
    color: COLORS.tomato,
    subcategories: [
      {
        title: "Prosciutti Cotti",
        items: [
          { name: "Prosciutto Cotto Senza Cotenna", desc: "Solo Intero · Peso Variabile", tags: ["Solo Intero"], img: "/images/prosciutto-cotto.svg" },
          { name: "Prosciutto Cotto Senza Cotenna ½", desc: "Solo a metà · Peso Variabile", tags: ["Solo a metà"], img: "/images/prosciutto-cotto.svg" },
          { name: "Prosciutto Cotto Alta Resa", desc: "Intero · Peso Variabile — disponibile anche a metà", tags: ["Intero", "Disponibile anche a metà"], img: "/images/prosciutto-cotto.svg" },
          { name: "Prosciutto Cotto Standard", desc: "Intero · Peso Variabile", tags: ["Intero"], img: "/images/prosciutto-cotto.svg" },
          { name: "Prosciutto Cotto Standard ½", desc: "Solo a metà · Peso Variabile", tags: ["Solo a metà"], img: "/images/prosciutto-cotto.svg" },
          { name: "Prosciutto Cotto Scelto", desc: "Peso Variabile — Alta qualità", tags: ["Peso Variabile", "Alta qualità"], img: "/images/prosciutto-cotto.svg" },
          { name: "Prosciutto Cotto Lenta Cottura", desc: "Peso Variabile", tags: ["Peso Variabile"], img: "/images/prosciutto-cotto.svg" },
          { name: "Prosciutto Cotto Alta Qualità Naz.", desc: "Peso Variabile — Novità inserita", tags: ["Peso Variabile", "Novità inserita"], img: "/images/prosciutto-cotto.svg" }]
      },
      {
        title: "Prosciutti Crudi & Bresaola",
        items: [
          { name: "Prosciutto Crudo Standard", desc: "Peso Variabile — 100% Italiano", tags: ["Peso Variabile", "100% Italiano"], img: "/images/prosciutto-crudo.svg" },
          { name: "Prosciutto Crudo Standard Selezione", desc: "Crudo Mattonella · Circa 2 Kg — Zero scarto", tags: ["Crudo Mattonella", "Zero scarto"], img: "/images/prosciutto-crudo.svg" },
          { name: "Prosciutto Crudo di Parma DOP", desc: "Stag. min. 14 mesi · Circa 6/7 Kg — Pressato", tags: ["Stag. min. 14 mesi", "Pressato"], img: "/images/prosciutto-crudo.svg" },
          { name: "Prosciutto Crudo di Parma DOP Disossato", desc: "Marchio di tutela · Circa 6/7 Kg — Addobbo", tags: ["Marchio di tutela", "Addobbo"], img: "/images/prosciutto-crudo.svg" },
          { name: "Prosciutto Crudo di Parma DOP Selezione", desc: "Disossato Alta Qualità · Circa 7/8 Kg", tags: ["Disossato Alta Qualità"], img: "/images/prosciutto-crudo.svg" },
          { name: "Prosciutto Crudo Stagionatura 18 Mesi", desc: "Circa 7/8 Kg", tags: ["Circa 7/8 Kg"], img: "/images/prosciutto-crudo.svg" },
          { name: "Prosciutto Crudo Stagionatura 24 Mesi", desc: "Circa 7/8 Kg — Disossato · Riserva", tags: ["Circa 7/8 Kg", "Disossato · Riserva"], img: "/images/prosciutto-crudo.svg" },
          { name: "Bresaola Punta d'Anca", desc: "A metà sottovuoto · Circa 1,5 Kg — Alta qualità, ideale per carpacci", tags: ["A metà sottovuoto", "Alta qualità, ideale p"], img: "/images/bresaola.png" }]
      },
      {
        title: "Arrosti, Speck & Mortadella",
        items: [
          { name: "Arrosto di Tacchino", desc: "A metà sottovuoto · Peso Variabile — Leggero e delicato", tags: ["A metà sottovuoto", "Leggero e delicato"], img: "/images/salumi-misti.png" },
          { name: "Arrosto di Tacchino Lenta Cottura", desc: "Intero · Circa 3 Kg — Novità — maggiore morbidezza e resa", tags: ["Intero", "Novità — maggiore morb"], img: "/images/salumi-misti.png" },
          { name: "Speck ½", desc: "A metà sottovuoto · Circa 2 Kg", tags: ["A metà sottovuoto"], img: "/images/salumi-misti.png" },
          { name: "Mortadella con Pistacchi", desc: "A metà sottovuoto · Circa 1,5 Kg — Ricavata da forma da 3 Kg c.a.", tags: ["A metà sottovuoto", "Ricavata da forma da 3"], img: "/images/mortadella.svg" }]
      },
      {
        title: "Pancette & Salami",
        items: [
          { name: "Pancetta Arrotolata Artigianale", desc: "A metà sottovuoto · Peso Variabile — Rilegata a mano", tags: ["A metà sottovuoto", "Rilegata a mano"], img: "/images/pancetta.svg" },
          { name: "Pancetta Stesa Affumicata", desc: "A metà sottovuoto · Circa 1,2 Kg", tags: ["A metà sottovuoto"], img: "/images/pancetta.svg" },
          { name: "Salame Milano", desc: "A metà sottovuoto · Circa 1,4 Kg", tags: ["A metà sottovuoto"], img: "/images/salame.png" },
          { name: "Salame Crespone Casereccio", desc: "A metà sottovuoto · Circa 1,4 Kg", tags: ["A metà sottovuoto"], img: "/images/salame.png" },
          { name: "Salame Napoli", desc: "A metà sottovuoto · Circa 1 Kg", tags: ["A metà sottovuoto"], img: "/images/salame.png" },
          { name: "'Nduja", desc: "Sottovuoto · Circa 0,4 Kg — Tipica calabrese", tags: ["Sottovuoto", "Tipica calabrese"], img: "/images/salame.png" },
          { name: "Wurstel Puro Suino", desc: "Confezione 250 gr — Venduto al chilo", tags: ["Confezione 250 gr", "Venduto al chilo"], img: "/images/salumi-misti.png" },
          { name: "Wurstel Pollo e Tacchino", desc: "Confezione 250 gr — Venduto al chilo", tags: ["Confezione 250 gr", "Venduto al chilo"], img: "/images/salumi-misti.png" },
          { name: "Spianata Calabra Piccante", desc: "Sottovuoto · Circa 2 Kg — Linea competitiva", tags: ["Sottovuoto", "Linea competitiva"], img: "/images/salame.png" },
          { name: "Spianata Piccante", desc: "Sottovuoto · Circa 2 Kg — Alta qualità, stagionatura garantita", tags: ["Sottovuoto", "Alta qualità, stagiona"], img: "/images/salame.png" }]
      },
      {
        title: "Specialità & Carni Pronte",
        items: [
          { name: "Salame tipo Napoli Piccante", desc: "Sottovuoto · Circa 2 Kg", tags: ["Sottovuoto"], img: "/images/salame.png" },
          { name: "Salame tipo Napoli Piccante (fetta rotonda)", desc: "Sottovuoto · Circa 1 Kg — Prodotto a disponibilità periodica", tags: ["Sottovuoto", "Prodotto a disponibili"], img: "/images/salame.png" },
          { name: "Capocollo Piccante", desc: "Sottovuoto · Circa 1,7 Kg", tags: ["Sottovuoto"], img: "/images/salame.png" },
          { name: "Guanciale Nazionale", desc: "Sottovuoto · Circa 1,3 Kg", tags: ["Sottovuoto"], img: "/images/pancetta.svg" },
          { name: "Porchetta Trancio", desc: "Sottovuoto · Circa 2/3 Kg — Pronta all'uso", tags: ["Sottovuoto", "Pronta all'uso"], img: "/images/salumi-misti.png" },
          { name: "Manzo Stufato", desc: "Sottovuoto · Peso Variabile — Prodotto a disponibilità periodica", tags: ["Sottovuoto", "Su richiesta", "Prodotto a disponibili"], img: "/images/salumi-misti.png" },
          { name: "Roast-Beef", desc: "Sottovuoto · Circa 3 Kg", tags: ["Sottovuoto"], img: "/images/salumi-misti.png" },
          { name: "Carne Salada", desc: "Sottovuoto · Peso Variabile — Prodotto a disponibilità periodica", tags: ["Sottovuoto", "Su richiesta", "Prodotto a disponibili"], img: "/images/salumi-misti.png" },
          { name: "Carpaccio di Bresaola", desc: "Sottovuoto · Peso Variabile — Per taglieri e carpacci gourmet", tags: ["Sottovuoto", "Per taglieri e carpacc"], img: "/images/bresaola.png" },
          { name: "Guanciale Stagionato", desc: "A metà sottovuoto · Circa 1 Kg — Ideale per carbonara e amatriciana", tags: ["A metà sottovuoto", "Ideale per carbonara e"], img: "/images/pancetta.svg" }]
      }]
  },
  conserve: {
    icon: "🍅",
    label: "Scatolame & Conserve",
    color: COLORS.olive,
    subcategories: [
      {
        title: "Olive & Capperi",
        items: [
          { name: "Olive Nostraline Denocciolate", desc: "Secchio 5 Kg", tags: ["Secchio 5 Kg"], img: "/images/olive.svg" },
          { name: "Olive Nostraline", desc: "In salamoia con nocciolo · Secchio 5 Kg", tags: ["In salamoia con nocciolo"], img: "/images/olive.svg" },
          { name: "Olive Nostraline", desc: "In olio · Vaso 950 gr", tags: ["In olio"], img: "/images/olive.svg" },
          { name: "Olive Taggiasche", desc: "In olio · Vaso 1,5 Kg", tags: ["In olio"], img: "/images/olive.svg" },
          { name: "Capperi sotto Sale", desc: "Secchiello 1 Kg", tags: ["Secchiello 1 Kg"], img: "/images/olive.svg" }]
      },
      {
        title: "Funghi",
        items: [
          { name: "Funghi Champignon al Naturale", desc: "Latta · Peso Variabile", tags: ["Latta"], img: "/images/funghi.svg" },
          { name: "Funghi Champignon Trifolati", desc: "Busta prima scelta · Peso Variabile", tags: ["Busta prima scelta"], img: "/images/funghi.svg" },
          { name: "Funghi Porcini", desc: "Latta · Peso Variabile — Ideale per pizza", tags: ["Latta", "Ideale per pizza"], img: "/images/funghi.svg" },
          { name: "Funghi Porcini Selezione", desc: "Latta · Peso Variabile", tags: ["Latta"], img: "/images/funghi.svg" }]
      },
      {
        title: "Carciofi & Verdure",
        items: [
          { name: "Carciofi a Fettine al Naturale", desc: "Peso Variabile", tags: ["Peso Variabile"], img: "/images/carciofi.svg" },
          { name: "Carciofi a Spicchi in Olio", desc: "Busta · Peso Variabile", tags: ["Busta"], img: "/images/carciofi.svg" },
          { name: "Carciofi a Fettine Trifolati", desc: "Busta · Peso Variabile", tags: ["Busta"], img: "/images/carciofi.svg" }]
      },
      {
        title: "Pomodoro & Basi per Pizza",
        items: [
          { name: "Polpa di Pomodoro", desc: "6 latte da 2500gr · Cartone 15 Kg", tags: ["6 latte da 2500gr"], img: "/images/pomodori.svg" },
          { name: "Polpa di Pomodoro Bag", desc: "2 buste da 5 Kg · Cartone 10 Kg", tags: ["2 buste da 5 Kg"], img: "/images/pomodori.svg" },
          { name: "Pomodori Pelati Prima Scelta", desc: "6 latte da 2500gr · Cartone 15 Kg", tags: ["6 latte da 2500gr"], img: "/images/pomodori.svg" },
          { name: "Pomodori Pelati", desc: "6 latte da 2500gr · Cartone 15 Kg", tags: ["6 latte da 2500gr"], img: "/images/pomodori.svg" }]
      },
      {
        title: "Tonno & Acciughe",
        items: [
          { name: "Tonno in Latta", desc: "Olio di Oliva o Girasole · 80 gr", tags: ["Olio di Oliva o Girasole"], img: "/images/tonno.svg" },
          { name: "Tonno in Latta", desc: "600 gr", tags: ["600 gr"], img: "/images/tonno.svg" },
          { name: "Tonno in Latta", desc: "Olio di Oliva o Girasole · 1630 gr", tags: ["Olio di Oliva o Girasole"], img: "/images/tonno.svg" },
          { name: "Tonno Pinna Gialla", desc: "Olio di Oliva · 1730 gr", tags: ["Olio di Oliva"], img: "/images/tonno.svg" },
          { name: "Acciughe in Olio", desc: "Vaso vetro 720 gr", tags: ["Vaso vetro 720 gr"], img: "/images/tonno.svg" },
          { name: "Acciughe in Olio", desc: "Latta 700 gr", tags: ["Latta 700 gr"], img: "/images/tonno.svg" },
          { name: "Acciughe Élite Italia", desc: "Latta 680 gr — Prodotto di alta qualità", tags: ["Latta 680 gr", "Prodotto di alta quali"], img: "/images/tonno.svg" }]
      },
      {
        title: "Creme, Salse & Specialità",
        items: [
          { name: "Salsa Tartufata Scura", desc: "Vaso vetro 500 gr", tags: ["Vaso vetro 500 gr"], img: "/images/creme.svg" },
          { name: "Salsa Tartufata Chiara", desc: "Vaso vetro 500 gr", tags: ["Vaso vetro 500 gr"], img: "/images/creme.svg" },
          { name: "Crema di Porcini", desc: "Vaso vetro 500 gr", tags: ["Vaso vetro 500 gr"], img: "/images/creme.svg" },
          { name: "Friarielli", desc: "Vaso vetro", tags: ["Vaso vetro"], img: "/images/carciofi.svg" },
          { name: "Scarole alla Napoletana", desc: "Vaso vetro", tags: ["Vaso vetro"], img: "/images/scarola.jpg" },
          { name: "Pomodorini Rossi Semidried", desc: "Vaso vetro", tags: ["Vaso vetro"], img: "/images/pomodori.svg" },
          { name: "Pomodorini Gialli Semidried", desc: "Vaso vetro", tags: ["Vaso vetro"], img: "/images/pomodori.svg" }]
      }]
  },
};

export default products;
