import { motion } from "framer-motion";
import { Minus, Plus, Heart, Trash2 } from "lucide-react";
import { textAnimation } from "./animations";
import { cn } from "../../lib/utils";
const CartContentWithItems = ({
  items,
  increaseCartQuantity,
  decreaseCartQuantity,
  removeQuantity,
}) => {
  return (
    <>
      {items.map((item, idx) => (
        <motion.article
          key={item.id}
          className="flex gap-6 items-center  border-[#1c1c1c28] border-b-[1px] w-full pb-3"
          {...textAnimation(idx)}
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-28 aspect-square h-auto flex-shrink-0 rounded-sm"
          />
          <div className="flex flex-col gap-2">
            <span className="font-semibold">{item.name}</span>
            <div className="flex gap-4 items-center">
              <QuantityControl
                quantity={item.quantity}
                onIncrease={() => increaseCartQuantity(item.id)}
                onDecrease={() => decreaseCartQuantity(item.id)}
              />
              <span className="text-base font-semibold">{item.price}€</span>
            </div>
            <ActionButtons
              onAddToFavorites={() => removeQuantity(item.id)}
              onRemove={() => removeQuantity(item.id)}
            />
          </div>
        </motion.article>
      ))}
    </>
  );
};

export const QuantityControl = ({ quantity, onIncrease, onDecrease }) => (
  <div className="flex items-center border border-[#1c1c1c33] rounded-sm">
    <ControlButton
      onClick={onDecrease}
      className="rounded-l-sm border-r-[#1c1c1c33] hover:opacity-80"
    >
      <Minus className="w-4 aspect-square" />
    </ControlButton>
    <span className="text-base px-3">{quantity}</span>
    <ControlButton
      onClick={onIncrease}
      className="rounded-r-sm border-l-[#1c1c1c33] hover:opacity-80"
    >
      <Plus className="w-4 aspect-square" />
    </ControlButton>
  </div>
);

const ControlButton = ({
  onClick,
  children,
  className = "",
  disabled = false,
}) => (
  <button
    onClick={onClick}
    className={`cursor-pointer hover:opacity-100 bg-[#1c1c1c19] flex items-center px-1.5 py-1 ${className} border-[#1c1c1c] ${
      disabled ? "opacity-50 cursor-not-allowed" : ""
    }`}
    disabled={disabled}
  >
    {children}
  </button>
);

export const ActionButtons = ({
  onAddToFavorites,
  onRemove,
  showLabel = true,
}) => (
  <div className={cn("flex", showLabel ? "gap-5" : "gap-1")}>
    <ActionButton
      onClick={onAddToFavorites}
      icon={<Heart className="w-4 aspect-square" />}
      label={showLabel ? "Add To Favorites" : undefined}
    />
    <ActionButton
      onClick={onRemove}
      icon={<Trash2 className="w-4 aspect-square" />}
      label={showLabel ? "Remove" : undefined}
      className={"text-red-500 hover:text-[#f7f3ed]"}
    />
  </div>
);

const ActionButton = ({ onClick, icon, label, className }) => (
  <div className={cn("hover:text-[#f7f3ed]  cursor-pointer", className)}>
    <button
      onClick={onClick}
      className={cn("flex items-center gap-1", className)}
    >
      {icon}
      <span className="text-xs">{label}</span>
    </button>
  </div>
);

export default CartContentWithItems;
