import React from "react";
import { cn } from "../lib/utils";
export default function HeaderSection({
  className,
  titleHeader,
  strongTitle,
  subtitleHeader,
  image = false,
  imgSrc,
}) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <span className="relative px-2">{subtitleHeader}</span>
      <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
        {titleHeader}
        <strong className=" font-bold">{strongTitle}</strong>
      </h2>
      {image && (
        <img
          src={imgSrc}
          className="w-24 order-0 lg:order-2"
          alt="Decoration"
        />
      )}
    </div>
  );
}
