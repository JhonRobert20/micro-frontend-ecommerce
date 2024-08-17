import React, { useState, useEffect } from "react";

import { getProducts, getProductById } from "../data/products";
import { StoreProduct } from "./StoreProduct";
import { Carousel } from "./Carousel";
import { LoadMoreProducts } from "./LoadMoreProducts";
export default function HomeContent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <>
      <div className="my-10 flex justify-center">
        <div className="grid grid-cols-3 gap-1">
          {products.map((product) => (
            <article
              key={product.id}
              className="flex flex-col max-w-[300px] bg-[#F5EEE3] hover:bg-[#F7F3ED] hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] p-6"
            >
              <StoreProduct {...product} />
            </article>
          ))}
        </div>
      </div>
      <Carousel autoPlay showBtns={false} />
      {/* <LoadMoreProducts /> */}
    </>
  );
}
