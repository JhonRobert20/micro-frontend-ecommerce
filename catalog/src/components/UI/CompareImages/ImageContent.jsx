import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils/utils.js";

const ImageContent = ({
  imageSrc,
  imageClassName,
  textContent,
  textPosition,
  buttonLabel,
  buttonOnClick,
  isClipped,
  sliderXPercent,
}) => (
  <motion.div
    className={cn(
      "absolute inset-0 w-full h-full select-none overflow-hidden",
      imageClassName
    )}
    // Partially cropped --> clipPath, only the left part is visible, according to sliderXPercent
    style={
      isClipped ? { clipPath: `inset(0 ${100 - sliderXPercent}% 0 0)` } : {}
    }
    transition={{ duration: 0 }}
  >
    <img
      src={imageSrc}
      alt="Slide Image"
      className="absolute inset-0 w-full h-full object-cover"
      draggable={false}
    />
    <div className={cn("absolute", textPosition)}>
      <p className="tracking-widest text-3xl leading-[3rem]">{textContent}</p>
      {buttonLabel && (
        <button
          onClick={buttonOnClick}
          className="py-4 px-8 mt-7 border-[1px] border-skin-decorative hover:border-skin-details rounded-sm bg-skin-details hover:bg-skin-decorative text-skin-base hover:text-skin-base-hover cursor-pointer tracking-widest"
        >
          {buttonLabel}
        </button>
      )}
    </div>
  </motion.div>
);

export default ImageContent;
