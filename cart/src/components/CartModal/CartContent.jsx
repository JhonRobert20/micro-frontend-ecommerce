import { ITEMS } from "../../lib/constants";
import { motion } from "framer-motion";
import { textAnimation } from "./animations";
const CartContent = () => (
  <section className="flex flex-col items-start text-base gap-5 ">
    {ITEMS.map((item, idx) => (
      <motion.article key={idx} className="flex gap-3" {...textAnimation(idx)}>
        <img src={item.src} className="w-1/6 aspect-square" alt={item.title} />
        <div className="flex flex-col items-start">
          <span>{item.title}</span>
          <span>{item.price}</span>
        </div>
      </motion.article>
    ))}
  </section>
);

export default CartContent;
