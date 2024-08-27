import React from "react";
import SummaryRow from "./SummaryRow";

const CheckoutSummary = () => {
  return (
    <>
      <p className="text-xl font-semibold text-[#1c1c1c] mb-6 mt-4">Resumen</p>
      <div className="flex flex-col">
        <SummaryRow
          label="¿Tienes un código promocional?"
          value=""
          className="text-blue-500 hover:underline"
        />
        <SummaryRow label="Subtotal" value="$7,592.00" />
        <SummaryRow
          label="Gastos de envío y gestión estimados"
          value="Gratuito"
        />
        <SummaryRow label="Total" value="$8,191.00" isBold />
      </div>
    </>
  );
};

export default CheckoutSummary;
