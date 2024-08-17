import React from "react";
import { Check } from "lucide-react";

export const FeatureList = () => {
  const features = [
    "High-quality, durable material",
    "5 year print guarantee",
    "Modern iPhone models supported",
  ];

  return (
    <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
      {features.map((feature, index) => (
        <li key={index} className="flex gap-1.5 items-center">
          <Check className="h-5 w-5 shrink-0 text-green-600" />
          {feature}
        </li>
      ))}
    </ul>
  );
};
