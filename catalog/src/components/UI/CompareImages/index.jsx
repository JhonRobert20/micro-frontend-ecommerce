import React from "react";
import { AnimatePresence } from "framer-motion";
import { cn } from "../../../lib/utils/utils.js";
import SliderHandle from "../Slider";
import ImageContent from "./ImageContent";
import useSlider from "../../../hooks/useSlider";
import slider_hero_section from "../../../../public/assets/slider.svg";

const CompareImages = ({
  firstImage = "",
  secondImage = "",
  className,
  firstImageClassName,
  secondImageClassName,
  initialSliderPercentage = 50,
  slideMode = "drag",
}) => {
  const { sliderXPercent, sliderRef, handlers } = useSlider(
    initialSliderPercentage,
    slideMode
  );

  const firstImageTextContent = (
    <>
      Elige el <strong>vino</strong> y <strong>embutido</strong> <br />
      perfecto para tu celebración
    </>
  );

  const secondImageTextContent = (
    <>
      Que no se acabe la fiesta: repón <br />
      tu <strong>vino</strong> y <strong>embutidos</strong> favoritos
    </>
  );

  return (
    <div
      ref={sliderRef}
      className={cn("overflow-hidden relative", className)}
      style={{ cursor: slideMode === "drag" ? "ew-resize" : "col-resize" }}
      onMouseMove={handlers.handleMouseMove}
      onMouseDown={handlers.handleMouseDown}
      onMouseUp={handlers.handleMouseUp}
      onTouchStart={handlers.handleTouchStart}
      onTouchEnd={handlers.handleTouchEnd}
      onTouchMove={handlers.handleTouchMove}
    >
      <AnimatePresence initial={false}>
        <SliderHandle
          sliderXPercent={sliderXPercent}
          imgSlider={slider_hero_section}
          handleBackgroundColor={"bg-skin-button-acent"}
          iconColor={"text-skin-base"}
          lineColor={"bg-skin-button-acent-hover"}
          transitionDuration={0}
        />
      </AnimatePresence>

      <div className="w-full h-full relative">
        <AnimatePresence initial={false}>
          {firstImage && (
            <ImageContent
              imageSrc={firstImage}
              imageClassName={firstImageClassName}
              textContent={firstImageTextContent}
              textPosition="top-[3rem] right-[7rem] text-end"
              buttonLabel="Comprar Ahora"
              buttonOnClick={() => console.log("Comprar Ahora clicked")}
              isClipped={true}
              sliderXPercent={sliderXPercent}
            />
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence initial={false}>
        {secondImage && (
          <ImageContent
            imageSrc={secondImage}
            imageClassName={secondImageClassName}
            textContent={secondImageTextContent}
            textPosition="top-[3rem] right-[7rem] text-end"
            buttonLabel="Comprar Ahora"
            buttonOnClick={() => console.log("Comprar Ahora clicked")}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default CompareImages;
