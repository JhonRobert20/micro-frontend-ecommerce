import React from "react";
import { cn } from "../../lib/utils";

const SummaryRow = ({ label, value, isBold = false, className = "" }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between mb-2",
        isBold ? "font-bold" : ""
      )}
    >
      <span className={cn("text-base text-[#1c1c1c]", className)}>{label}</span>
      <span className="text-base text-[#1c1c1c]">{value}</span>
    </div>
  );
};

export default SummaryRow;
