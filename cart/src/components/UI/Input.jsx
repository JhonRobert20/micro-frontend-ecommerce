import React from "react";

const Input = ({ placeholder, type = "text", className = "" }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`px-4 py-4 bg-white text-gray-800 w-full text-sm outline-none border-[1px] border-[#1c1c1c39] rounded-sm ${className}`}
    />
  );
};

export default Input;
