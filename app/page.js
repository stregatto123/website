import Hero from "./components/Hero";
import ChiSiamo from "./components/ChiSiamo";
import ClientTypes from "./components/home/ClientTypes";
import CategoryShowcase from "./components/home/CategoryShowcase";
import HowItWorks from "./components/home/HowItWorks";
import CtaBand from "./components/home/CtaBand";
import products from "./lib/products";

export default function Page() {
  const categories = Object.values(products);
  const totalProducts = categories.reduce(
    (acc, cat) => acc + cat.subcategories.reduce((a, s) => a + s.items.length, 0),
    0
  );

  return (
    <>
      <Hero totalProducts={totalProducts} totalCategories={categories.length} />
      <ClientTypes />
      <CategoryShowcase />
      <ChiSiamo />
      <HowItWorks />
      <CtaBand />
    </>
  );
}
