import React from "react";
import { ArrowUpRight, Heart, ShoppingBasket } from "lucide-react";
import LinkIcon from "host/LinkIcon";

export const ACTION_CARD_BTNS = [
  { icon: Heart, ariaLabel: "Guardar en favoritos" },
  { icon: ShoppingBasket, ariaLabel: "Añadir al carrito" },
  { icon: ArrowUpRight, ariaLabel: "Ver más detalles" },
];

const ActionCardBtns = () => {
  return (
    <div className="flex flex-col items-center gap-5 z-20">
      {ACTION_CARD_BTNS.map((btn) => (
        <LinkIcon
          key={btn.ariaLabel}
          href={"/"}
          IconComponent={btn.icon}
          ariaLabel={btn.icon}
          size="medium"
        />
      ))}
    </div>
  );
};

export default ActionCardBtns;
