import { ITEMS } from "../../lib/constants";
import { motion } from "framer-motion";
import { textAnimation } from "./animations";
import { Trash2, Minus, Plus } from "lucide-react";

import { useShoppingCart } from "../../hooks/hooks";

const CartContent = () => {
  const { increaseCartQuantity, decreaseCartQuantity, removeQuantity, items } =
    useShoppingCart();

  return (
    <section className="flex flex-col items-start gap-6 text-base my-8 px-8 ">
      {items.map((item, idx) => (
        <motion.article
          key={idx}
          className="flex gap-6 items-center"
          {...textAnimation(idx)}
        >
          <img
            src={item.image}
            className="w-28 aspect-square flex-shrink-0 h-auto "
            alt={item.name}
          />
          <div className="flex flex-col items-start gap-2">
            <div className="flex flex-col items-start gap-1">
              <span>{item.name}</span>
              <span className="opacity-40 text-sm">{item.price}</span>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex items-center  border-[1px] border-[#1c1c1c44] rounded-sm">
                <Minus
                  onClick={() => decreaseCartQuantity(item.id)}
                  className="cursor-pointer aspect-square w-4 mx-2 my-1.5 opacity-20 hover:opacity-100"
                />
                <span className="text-base opacity-20">{item.quantity}</span>
                <Plus
                  onClick={() => increaseCartQuantity(item.id)}
                  className="cursor-pointer aspect-square w-4 mx-2 my-1.5 opacity-20 hover:opacity-100"
                />
              </div>
              <Trash2
                onClick={() => removeQuantity(item.id)}
                className="hover:text-[#f7f3ed] aspect-square w-5 cursor-pointer"
              />
            </div>
          </div>
        </motion.article>
      ))}
    </section>
  );
};

export default CartContent;
