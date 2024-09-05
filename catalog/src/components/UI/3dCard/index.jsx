import React from "react";
import CardContainer from "./CardContainer.jsx";
import CardItem from "./CardItem.jsx";
import { MouseEnterProvider } from "../../../context/MouseEnterContext.jsx";

function ThreeDCardDemo() {
  return (
    <MouseEnterProvider>
      <CardContainer className="inter-var">
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src="/assets/Fotografia-de-Producto-Ecommerce-Botellas-de-Vino-12-removebg-preview.png"
            height="1000"
            width="1000"
            className="h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardContainer>
    </MouseEnterProvider>
  );
}

export default ThreeDCardDemo;
