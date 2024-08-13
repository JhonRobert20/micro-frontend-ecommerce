import React, { useState, useEffect } from "react";

import { getProducts, getProductById } from "../data/products";
import { StoreProduct } from "./StoreProduct";
export default function HomeContent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <>
      <div className="my-10 grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-5">
        {products.map((product) => (
          <article key={product.id}>
            <StoreProduct {...product} />
          </article>
        ))}
      </div>
    </>
  );
}
