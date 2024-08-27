import React from "react";
import ProductDetail from "./ProductDetail";
import CheckoutSummary from "./CheckoutSummary";
import { useShoppingCart } from "../../hooks/useShoppingCart";

const PaymentSummary = () => {
  const { items, increaseCartQuantity, decreaseCartQuantity, removeQuantity } =
    useShoppingCart();
  return (
    <div className="w-full ml-14 max-w-4xl">
      {items.map((item) => (
        <ProductDetail
          key={item.id}
          item={item}
          onRemove={removeQuantity}
          onIncrease={increaseCartQuantity}
          onDecrease={decreaseCartQuantity}
        />
      ))}
      <CheckoutSummary />
    </div>
  );
};

export default PaymentSummary;
