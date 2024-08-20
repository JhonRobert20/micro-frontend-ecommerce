import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { getProducts, getProductById } from "../data/products";
import CarouselCards from "../components/CarouselCards";
import { Carousel } from "../components/Carousel";

export default function HomeContent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <>
      <Card />
      {/* <CarouselCards /> */}
      {/* <Carousel autoPlay={true} showBtns={false} /> */}
    </>
  );
}
