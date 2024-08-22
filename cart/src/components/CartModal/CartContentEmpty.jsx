import React from "react";
import { CartButton } from "./ButtonsModal";

const CartContentEmpty = () => {
  return (
    <div className="flex flex-col items-center w-full gap-5 text-center">
      <h2 className="text-2xl font-semibold">Tu carrito está vacío</h2>
      <p className="text-sm opacity-70">
        Explora nuestros productos y añade lo que más te guste.
      </p>
      <CartButton url={"/"} label="Comprar Vinos" />
      <CartButton url={"/"} label="Comprar Quesos" />
      <CartButton url={"/"} label="Comprar Embutido" />
    </div>
  );
};

export default CartContentEmpty;
