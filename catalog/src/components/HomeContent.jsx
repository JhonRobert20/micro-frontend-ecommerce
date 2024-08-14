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
      <div className="my-10 grid lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 gap-3">
        {products.map((product) => (
          <article
            key={product.id}
            className="flex flex-col max-w-[300px] hover:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] p-6"
          >
            <StoreProduct {...product} />
          </article>
        ))}
      </div>
    </>
  );
}
