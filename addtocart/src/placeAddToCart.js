import React from "react";
import ReactDOM from "react-dom/client";
import AddToCart from "./AddToCart";

export default function placeAddToCart(el, id) {
  const root = ReactDOM.createRoot(el);
  root.render(<AddToCart id={id} />);
}
