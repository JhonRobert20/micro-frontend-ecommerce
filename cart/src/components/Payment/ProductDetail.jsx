import React from "react";

const ProductDetail = ({ item, onRemove, onIncrease, onDecrease }) => {
  return (
    <div className="flex gap-4 w-full items-center mb-3.5 pb-3.5 border-b-[1px] border-[#1c1c1c28]">
      <div className="w-[64px] aspect-square flex items-center justify-center">
        <img
          className="h-10 w-10"
          src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg"
          alt={`${item.name} image`}
        />
      </div>
      <div className="flex justify-between w-full">
        <div className="flex flex-col">
          <p className="text-sm">{item.name}</p>
          <p className="text-xs">
            Cantidad <span className="font-semibold">{item.quantity}</span>
          </p>
        </div>
        <p className="text-sm">
          <span className="text-sm">{item.price}</span> €
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
