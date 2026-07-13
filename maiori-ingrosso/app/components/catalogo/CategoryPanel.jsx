"use client";

import { useInView } from "../../lib/useInView";
import SubCategoryBlock from "./SubCategoryBlock";

export default function CategoryPanel({ data, isActive, onOpenModal }) {
  const [ref, inView] = useInView();

  if (!isActive) return null;

  return (
    <div ref={ref} style={{ padding: "40px 0 20px", opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)", transition: "all 0.6s" }}>
      {data.subcategories.map((sub, si) => (
        <SubCategoryBlock
          key={si} sub={sub} accentColor={data.color}
          inView={inView} subIndex={si} onOpenModal={onOpenModal}
        />
      ))}
    </div>
  );
}
