import React from "react";
import { cn } from "../../lib/utils";

export default function Phone({ imgSrc, className, dark = false, ...props }) {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-10 overflow-hidden",
        className
      )}
      {...props}
    >
      <img
        className="pointer-events-none z-10 select-none"
        src={imgSrc}
        alt="imagen móvil"
      />
      {/* <div className="absolute -z-10 inset-0">
        <img
          src={winebottleImage}
          className="object-cover"
          alt="overlaying phone image "
        />
      </div> */}
    </div>
  );
}
