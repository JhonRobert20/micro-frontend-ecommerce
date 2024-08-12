import React, { useState, useEffect } from "react";

import { currency, getProducts, getProductById } from "./products";
import { addToCart, useLoggedIn } from "cart/cart";
import Header from "host/Header";

export default function HomeContent() {
  const loggedIn = useLoggedIn();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <>
      <Header />
      <div className="my-10 grid grid-cols-4 gap-5">
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="flex">
              <div className="flex-grow font-bold">
                <a>{product.name}</a>
              </div>
            </div>
            <div className="flex-end">{currency.format(product.price)}</div>
            <div className="text-sm mt-4">{product.description}</div>
            {loggedIn && (
              <div className="text-right mt-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700"
                  onClick={() => addToCart(product.id)}
                  id={`addtocart_${product.id}`}
                >
                  Add To Cart
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
