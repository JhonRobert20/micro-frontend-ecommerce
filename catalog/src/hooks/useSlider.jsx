import React, { useState, useRef, useCallback, useMemo } from "react";

const useSlider = (initialSliderPercentage, slideMode) => {
  const [sliderXPercent, setSliderXPercent] = useState(initialSliderPercentage);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);

  const handleStart = useCallback(() => setIsDragging(true), [slideMode]);
  const handleEnd = useCallback(() => setIsDragging(false), [slideMode]);

  const handleMove = useCallback(
    (clientX) => {
      if (!sliderRef.current) return;
      if (slideMode === "hover" || (slideMode === "drag" && isDragging)) {
        const rect = sliderRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percent = (x / rect.width) * 100;
        requestAnimationFrame(() =>
          setSliderXPercent(Math.max(0, Math.min(100, percent)))
        );
      }
    },
    [slideMode, isDragging]
  );

  const handlers = useMemo(
    () => ({
      handleMouseDown: (e) => handleStart(),
      handleMouseUp: () => handleEnd(),
      handleMouseMove: (e) => handleMove(e.clientX),
      handleTouchStart: (e) => handleStart(),
      handleTouchEnd: () => handleEnd(),
      handleTouchMove: (e) => handleMove(e.touches[0].clientX),
    }),
    [handleStart, handleEnd, handleMove]
  );

  return { sliderXPercent, sliderRef, handlers };
};

export default useSlider;
