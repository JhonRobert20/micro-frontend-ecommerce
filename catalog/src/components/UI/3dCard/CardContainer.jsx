import { cn } from "../../../lib/utils/utils.js";
import React, { useRef, useCallback, useMemo } from "react";
import { useMouseEnter } from "../../../context/MouseEnterContext.jsx";

const CardContainer = ({ children, className, containerClassName }) => {
  const containerRef = useRef(null);
  const { isMouseEntered, setIsMouseEntered } = useMouseEnter();

  const calculateRotation = useCallback((e, rect) => {
    const x = (e.clientX - rect.left - rect.width / 2) / 25;
    const y = (e.clientY - rect.top - rect.height / 2) / 25;
    return `rotateY(${x}deg) rotateX(${y}deg)`;
  }, []);

  const resetRotation = useCallback(() => `rotateY(0deg) rotateX(0deg)`, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      containerRef.current.style.transform = calculateRotation(e, rect);
    },
    [calculateRotation]
  );

  const handleMouseEnter = useCallback(() => {
    setIsMouseEntered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = resetRotation();
  }, [resetRotation]);

  const contextValue = useMemo(
    () => ({ isMouseEntered, setIsMouseEntered }),
    [isMouseEntered]
  );

  return (
    <div
      className={cn("flex items-center justify-center", containerClassName)}
      style={{
        perspective: "1000px",
      }}
    >
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn("transition-all duration-200 ease-linear", className)}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default CardContainer;
