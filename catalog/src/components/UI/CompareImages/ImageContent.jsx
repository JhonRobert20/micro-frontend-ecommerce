import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils/utils.js";
import Button from "host/Button";
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
        <Button
          onClick={() => console.log("Clicked")}
          variant="primary"
          size="large"
          ariaLabel={buttonLabel}
        >
          {buttonLabel}
        </Button>
      )}
    </div>
  </motion.div>
);

export default ImageContent;
