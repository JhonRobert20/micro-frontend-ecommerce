import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SliderHandle = ({
  sliderXPercent,
  imgSlider,
  handleBorderColor = "border-skin-acent-hover",
  handleBackgroundColor = "bg-skin-button-acent",
  iconColor = "text-skin-decorative",
  lineColor = "bg-skin-decorative",
  transitionDuration = 0,
}) => {
  return (
    <motion.div
      className="h-full w-px absolute top-0 m-auto z-10"
      style={{
        left: `${sliderXPercent}%`,
        zIndex: 25,
      }}
      transition={{ duration: transitionDuration }}
    >
      {/* Central Vertical Line */}
      <div
        className={`w-[1px] h-full absolute top-1/2 -translate-y-1/2 left-0 ${lineColor}`}
      />

      {/* Radial Gradient Effect */}
      <div className="w-10 h-1/2 [mask-image:radial-gradient(50px_at_left,white,transparent)] absolute top-1/2 -translate-y-1/2 left-0 opacity-100 " />

      {/* Handle with Icons */}
      <div
        className={`rounded-full border-[1px] top-1/2 -translate-y-1/2 ${handleBackgroundColor} ${handleBorderColor} left-1/2 -translate-x-1/2 absolute flex items-center justify-center`}
      >
        <ChevronLeft
          className={`${iconColor} w-4 h-4 absolute top-1/2 -translate-y-1/2 right-[70%] -translate-x-1/2`}
        />
        <ChevronRight
          className={`${iconColor} w-4 h-4 absolute top-1/2 -translate-y-1/2 right-[-10%] -translate-x-1/2`}
        />
        <div className="hover:scale-110 transition-transform duration-500 flex items-center justify-center rounded-full h-20 w-20">
          <img
            className="h-14 w-14 overflow-hidden rounded-full outline-none"
            src={imgSlider}
            draggable={false}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SliderHandle;
