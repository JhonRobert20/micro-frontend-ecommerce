import React from "react";
import { Star } from "lucide-react";

export const CustomerReviews = () => (
  <div className="flex flex-col justify-between items-center sm:items-start">
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, index) => (
        <Star key={index} className="h-4 w-4 text-green-600 fill-green-600" />
      ))}
    </div>
    <p>
      <span className="font-semibold">1.250</span> happy customers
    </p>
  </div>
);
