import { useShoppingCart } from "../../../hooks/useShoppingCart";
import FooterWithItems from "./FooterWithItems";

const ModalFooter = () => {
  const { cartQuantity, cartTotalPrice } = useShoppingCart();

  if (cartQuantity === 0) return null;

  return <FooterWithItems cartTotalPrice={cartTotalPrice} />;
};

export default ModalFooter;
