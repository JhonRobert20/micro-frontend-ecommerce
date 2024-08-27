import { cn } from "../../../lib/utils";
import { useShoppingCart } from "../../../hooks/useShoppingCart";
import CartContentEmpty from "./CartContentEmpty";
import CartContentWithItems from "./CartContentWithItems";

const CartContent = () => {
  const { items, increaseCartQuantity, decreaseCartQuantity, removeQuantity } =
    useShoppingCart();

  return (
    <section
      className={cn(
        "flex flex-col gap-6 text-base px-8",
        items.length > 0
          ? "items-start my-8 "
          : "items-center h-[calc(100vh-56px)] justify-center"
      )}
    >
      {items.length > 0 ? (
        <CartContentWithItems
          items={items}
          increaseCartQuantity={increaseCartQuantity}
          decreaseCartQuantity={decreaseCartQuantity}
          removeQuantity={removeQuantity}
        />
      ) : (
        <CartContentEmpty />
      )}
    </section>
  );
};

export default CartContent;
