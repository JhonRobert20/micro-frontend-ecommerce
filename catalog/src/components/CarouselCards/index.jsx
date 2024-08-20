import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MoveLeft, MoveRight } from "lucide-react";
import { cn } from "../../lib/utils/utils";
import Card from "../Card";

const CarouselCards = ({ data, initialScroll = 90 }) => {
  console.log(data, "----data");
  const items = data?.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  return (
    <div className="w-full">
      <div
        className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
        ref={carouselRef}
        onScroll={checkScrollability}
      >
        <div
          className={cn(
            "absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l"
          )}
        ></div>

        <div className={cn("flex justify-start gap-4", " mx-auto")}>
          {items.map((item, index) => (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: "easeOut",
                  once: true,
                },
              }}
              key={"card" + index}
              className="rounded-3xl"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex justify-end gap-2 mr-10">
        <button
          className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          <MoveLeft className="h-6 w-6 text-gray-500" />
        </button>
        <button
          className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          <MoveRight className="h-6 w-6 text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export default CarouselCards;
