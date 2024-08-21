import { ITEMS } from "../../lib/constants";
import { motion } from "framer-motion";
import { textAnimation } from "./animations";
import { Trash2, Minus, Plus } from "lucide-react";

import { useShoppingCart } from "../../hooks/hooks";

const CartContent = () => {
  const { increaseCartQuantity, decreaseCartQuantity, cartQuantity, items } =
    useShoppingCart();

  return (
    <section className="flex flex-col items-start gap-6 text-base my-8">
      {ITEMS.map((item, idx) => (
        <motion.article
          key={idx}
          className="flex gap-6 items-center"
          {...textAnimation(idx)}
        >
          <img
            src={item.src}
            className="w-28 aspect-square flex-shrink-0 h-auto "
            alt={item.title}
          />
          <div className="flex flex-col items-start gap-2">
            <div className="flex flex-col items-start gap-1">
              <span>{item.title}</span>
              <span className="opacity-40 text-sm">{item.price}</span>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex items-center  border-[1px] border-[#1C1C1C] opacity-20 rounded-sm">
                <Minus
                  onClick={decreaseCartQuantity}
                  className="cursor-pointer aspect-square w-4 mx-2 my-1.5"
                />
                <span className="text-base">{cartQuantity}</span>
                <Plus
                  onClick={increaseCartQuantity}
                  className="cursor-pointer aspect-square w-4 mx-2 my-1.5"
                />
              </div>
              <Trash2 className="hover:text-[#f7f3ed] aspect-square w-5 cursor-pointer" />
            </div>
          </div>
        </motion.article>
      ))}
    </section>
  );
};

export default CartContent;
