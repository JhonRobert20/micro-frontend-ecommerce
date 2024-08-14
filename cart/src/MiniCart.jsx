import React, { useState, useEffect } from "react";

import DialogDemo from "./components/Modal/CartModal";
import { useShoppingCart } from "./hooks/hooks";

export default function MiniCart() {
  const { cartQuantity } = useShoppingCart();

  if (!cartQuantity) return null;

  return (
    <div className="container">
      <DialogDemo items={cartQuantity} />
    </div>
  );
}
