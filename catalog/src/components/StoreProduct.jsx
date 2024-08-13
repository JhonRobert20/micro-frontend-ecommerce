import { addToCart, useLoggedIn } from "cart/cart";
import { formatCurrency } from "../lib/utils/formatCurrency";

export function StoreProduct({ image, name, price, description, id }) {
  const loggedIn = useLoggedIn();
  const quantity = 1;
  return (
    <>
      <img width={200} src={image} alt={name} className="object-cover" />
      <div className="flex flex-col">
        <div className="flex justify-between items-baseline mb-4">
          <span className="text-xs">{name}</span>
          <span className=" text-xs">{formatCurrency(price)}</span>
        </div>
        <span className="text-sm">{description}</span>
      </div>
      {loggedIn && (
        <div className="text-right mt-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            onClick={() => addToCart(id)}
            aria-label={`Add ${name} to cart`}
            id={`addtocart_${id}`}
          >
            Add To Cart
          </button>
        </div>
      )}
    </>
  );
}
