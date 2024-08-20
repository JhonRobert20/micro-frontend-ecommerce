import React from "react";

export default function IconNavBtn({ onClick, ariaLabel, children, ...props }) {
  return (
    <button
      type="button"
      className="relative flex items-center justify-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1C1C1C]"
      aria-label={ariaLabel}
      aria-expanded="false"
      aria-haspopup="true"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
