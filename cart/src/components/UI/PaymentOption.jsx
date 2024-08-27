import React from "react";

const PaymentOption = ({ id, images, alt, checked }) => {
  return (
    <div className="flex items-center">
      <input
        type="radio"
        className="w-5 h-5 cursor-pointer"
        id={id}
        defaultChecked={checked}
      />
      <label htmlFor={id} className="ml-4 flex gap-2 cursor-pointer">
        {images.map((src, index) => (
          <img src={src} className="w-12" alt={alt} key={index} />
        ))}
      </label>
    </div>
  );
};

export default PaymentOption;
