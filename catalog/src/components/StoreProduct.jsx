import { addToCart, useLoggedIn } from "cart/cart";
import { formatCurrency } from "../lib/utils/formatCurrency";

function ActionIcon({ onClick, iconPath, label }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="hover:bg-orange-200 rounded-full cursor-pointer p-1"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="currentColor"
      >
        <path d={iconPath}></path>
      </svg>
    </button>
  );
}

function ProductInfo({ name, price }) {
  return (
    <section className="flex justify-between pt-6 items-baseline">
      <p className="text-md">{name}</p>
      <span className="text-sm opacity-60">{formatCurrency(price)}</span>
    </section>
  );
}

export function StoreProduct({ image, name, price, id, type }) {
  const loggedIn = useLoggedIn();
  const quantity = 1;

  const handleAddToCart = () => {
    if (loggedIn) {
      addToCart(id, quantity);
    } else {
      alert("You need to be logged in to add items to the cart.");
    }
  };
  return (
    <>
      <section className="flex items-center justify-end relative">
        <span className="absolute top-0 left-0 bg-[#800000] px-2 py-1.5 text-white rounded-sm text-xs">
          {type}
        </span>
        <img
          src={image}
          alt={`${name} product image`}
          className="object-cover"
        />
        <div className="flex flex-col gap-5">
          <ActionIcon
            onClick={handleAddToCart}
            iconPath="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
            label="Add to cart"
          />
          <ActionIcon
            onClick={handleAddToCart}
            iconPath="M7.00488 7.99966V5.99966C7.00488 3.23824 9.24346 0.999664 12.0049 0.999664C14.7663 0.999664 17.0049 3.23824 17.0049 5.99966V7.99966H20.0049C20.5572 7.99966 21.0049 8.44738 21.0049 8.99966V20.9997C21.0049 21.5519 20.5572 21.9997 20.0049 21.9997H4.00488C3.4526 21.9997 3.00488 21.5519 3.00488 20.9997V8.99966C3.00488 8.44738 3.4526 7.99966 4.00488 7.99966H7.00488ZM7.00488 9.99966H5.00488V19.9997H19.0049V9.99966H17.0049V11.9997H15.0049V9.99966H9.00488V11.9997H7.00488V9.99966ZM9.00488 7.99966H15.0049V5.99966C15.0049 4.34281 13.6617 2.99966 12.0049 2.99966C10.348 2.99966 9.00488 4.34281 9.00488 5.99966V7.99966Z"
            label="See product detail information"
          />
          <ActionIcon
            onClick={() => alert("Added to wishlist!")}
            iconPath="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"
            label="Add to wishlist"
          />
        </div>
      </section>
      <ProductInfo name={name} price={price} />
    </>
  );
}
