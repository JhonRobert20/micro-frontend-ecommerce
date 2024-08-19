import React from "react";

export default function ActionCardBtn({ onClick, iconPath, label }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="hover:bg-orange-200 hover:text-[#1C1C1C] rounded-full cursor-pointer p-1 text-[#1C1C1C]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="currentColor"
      >
        <path d={iconPath}></path>
      </svg>
    </button>
  );
}
