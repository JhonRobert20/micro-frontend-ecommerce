"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../lib/utils";
import slider_hero_section from "../../assets/slider.svg";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const CompareSlider = ({
  firstImage = "",
  secondImage = "",
  className,
  firstImageClassName,
  secondImageClassname,
  initialSliderPercentage = 50,
  slideMode = "drag",
}) => {
  const [sliderXPercent, setSliderXPercent] = useState(initialSliderPercentage);
  const [isDragging, setIsDragging] = useState(false);

  const sliderRef = useRef(null);

  //Activate isDragging
  const handleStart = useCallback(
    (clientX) => {
      setIsDragging(true);
    },
    [slideMode]
  );

  //Desactivate isDragging when the user stops dragging
  const handleEnd = useCallback(() => {
    setIsDragging(false);
  }, [slideMode]);

  //Calculate the position of the slider based on the position
  const handleMove = useCallback(
    (clientX) => {
      if (!sliderRef.current) return;
      if (slideMode === "hover" || (slideMode === "drag" && isDragging)) {
        const rect = sliderRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percent = (x / rect.width) * 100;
        requestAnimationFrame(() => {
          setSliderXPercent(Math.max(0, Math.min(100, percent)));
        });
      }
    },
    [slideMode, isDragging]
  );

  //Manage mouse events
  const handleMouseDown = useCallback(
    (e) => handleStart(e.clientX),
    [handleStart]
  );
  const handleMouseUp = useCallback(() => handleEnd(), [handleEnd]);
  const handleMouseMove = useCallback(
    (e) => handleMove(e.clientX),
    [handleMove]
  );

  //manage touchpad for mobile
  const handleTouchStart = useCallback(
    (e) => {
      handleStart(e.touches[0].clientX);
    },
    [handleStart]
  );

  const handleTouchEnd = useCallback(() => {
    handleEnd();
  }, [handleEnd]);

  const handleTouchMove = useCallback(
    (e) => {
      handleMove(e.touches[0].clientX);
    },
    [handleMove]
  );

  return (
    <div
      ref={sliderRef}
      className={cn("overflow-hidden", className)}
      style={{
        position: "relative",
        cursor: slideMode === "drag" ? "ew-resize" : "col-resize",
      }}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
    >
      <AnimatePresence initial={false}>
        {/* ------------------------------Slider-------------------------------------- */}
        <motion.div
          className="h-full w-px absolute top-0 m-auto z-30 "
          style={{
            left: `${sliderXPercent}%`,
            top: "0",
            zIndex: 40,
          }}
          transition={{ duration: 0 }}
        >
          <div className="w-0.5 h-full absolute top-1/2 -translate-y-1/2 left-0  z-20 bg-[#f7f3ed]" />
          <div className="w-10 h-1/2 [mask-image:radial-gradient(50px_at_left,white,transparent)] absolute top-1/2 -translate-y-1/2 left-0 z-10 opacity-100 " />
          <div className=" rounded-full ring-2 ring-slate-100 top-1/2 -translate-y-1/2 bg-[#f7f3ed] z-30 left-1/2 -translate-x-1/2 absolute flex items-center justify-center h-20 w-20 hover:scale-105">
            <ChevronLeft className="text-[#1C1C1C] w-4 h-4 absolute top-1/2 -translate-y-1/2 right-[70%] -translate-x-1/2 " />
            <ChevronRight className="text-[#1C1C1C] w-4 h-4 absolute top-1/2 -translate-y-1/2 right-[-10%] -translate-x-1/2 " />
            <div className="hover:scale-110 transition-transform duration-500 flex items-center justify-center rounded-full h-20 w-20">
              <img
                className="h-14 w-14 overflow-hidden rounded-full outline-none "
                src={slider_hero_section}
                draggable={false}
              />
            </div>
          </div>
        </motion.div>

        {/* ------------------------------FIRST IMAGE-------------------------------------- */}
      </AnimatePresence>
      <div className="overflow-hidden w-full h-full relative z-[19] pointer-events-none">
        <AnimatePresence initial={false}>
          {firstImage ? (
            <motion.div
              className={cn(
                "absolute inset-0 z-[19] rounded-2xl flex-shrink-0 w-full h-full select-none overflow-hidden",
                firstImageClassName
              )}
              // Partially cropped --> clipPath, only the left part is visible, according to sliderXPercent
              style={{
                clipPath: `inset(0 ${100 - sliderXPercent}% 0 0)`,
              }}
              transition={{ duration: 0 }}
            >
              <img
                alt="first image"
                src={firstImage}
                className={cn(
                  "absolute inset-0  z-[10] flex-shrink-0 w-full h-full select-none",
                  firstImageClassName
                )}
                draggable={false}
              />
              <button className="z-50 bg-[#f7f3ed] w-5 h-5 absolute top-0 right-0">
                Click
              </button>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      {/* ------------------------------SECOND IMAGE-------------------------------------- */}

      <AnimatePresence initial={false}>
        {secondImage ? (
          <motion.img
            className={cn(
              "absolute top-0 left-0 z-[18] w-full h-full select-none",
              secondImageClassname
            )}
            alt="second image"
            src={secondImage}
            draggable={false}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
};
