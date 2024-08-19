import React from "react";

export function ProductInfo({ name, price }) {
  return (
    <section className="flex justify-between pt-6 items-baseline">
      <p className="text-md">{name}</p>
      <span className="text-sm opacity-60">{formatCurrency(price)}</span>
    </section>
  );
}
