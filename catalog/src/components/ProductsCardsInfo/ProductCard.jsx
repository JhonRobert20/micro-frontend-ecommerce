import React, { useState, useCallback } from "react";

import useHover from "../../hooks/useHover";
import CardInfoHovered from "../UI/HoverCard";
import BlurImage from "../UI/CardBlur";

const ProductCard = ({ card }) => {
  const { isHovered, ref } = useHover();

  return (
    <div
      ref={ref}
      className="relative rounded-md h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start"
    >
      <BlurImage
        src={card.src}
        hoverSrc={card.hoverSrc}
        alt="screenShot"
        className="absolute inset-0 object-cover w-full h-full"
        isHovered={isHovered}
      />
      <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/10 via-transparent to-transparent z-30 pointer-events-none" />
      <CardInfoHovered title={card.title} isHovered={isHovered} />
    </div>
  );
};

export default ProductCard;
