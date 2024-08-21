import React, { useEffect, useState } from "react";
import { jwt, addToCart } from "cart/cart";

const AddToCartButton = ({ id }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const subscription = jwt.subscribe((jwt) => setLoggedIn(!!jwt));
    return () => {
      subscription.unsubscribe();
    };
  }, []);
  return (
    <>
      {loggedIn && (
        <button
          onClick={() => addToCart(id)}
          className="bg-red-900 text-white py-2 px-5 rounded-md text-sm mt-5"
        >
          Add To Cart
        </button>
      )}
    </>
  );
};

export default AddToCartButton;
