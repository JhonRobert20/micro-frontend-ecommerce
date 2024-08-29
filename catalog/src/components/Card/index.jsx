import React, { useState, useCallback, useRef } from "react";
import { cn } from "../../lib/utils/utils";
import screenShot from "../../assets/copaMasVIno.jpeg";
import winebottle3 from "../../assets/ecommerceWIne.png";
import { addToCart, useLoggedIn } from "cart/useLoggedIn";

export const BlurImage = ({ src, hoverSrc, className, alt, ...rest }) => {
  console.log(src, hoverSrc, "---ABU");
  const [isLoading, setLoading] = useState(true);
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHovered(false);
  }, []);
  return (
    <img
      className={cn(
        "transition duration-300 object-cover",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      src={isHovered ? src : hoverSrc}
      loading="lazy"
      decoding="async"
      alt={alt || "Background of a beautiful view"}
      style={{
        filter: isLoading ? "blur(10px)" : "none",
        transition: "filter 300ms ease-out",
      }}
      {...rest}
    />
  );
};

const Card = ({ card }) => {
  const loggedIn = useLoggedIn();
  const quantity = 1;

  const handleAddToCart = () => {
    if (loggedIn) {
      addToCart(id, quantity);
    } else {
      alert("You need to be logged in to add items to the cart.");
    }
  };
  return (
    <div className="relative rounded-md bg-gray-50 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start">
      <BlurImage
        src={card.src}
        hoverSrc={card.hoverSrc}
        alt={"screenShot"}
        className="absolute inset-0 object-cover w-full h-full"
      />

      <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/10 via-transparent to-transparent z-30 pointer-events-none" />
      <p className="text-xl mx-auto absolute bottom-[1.5rem] right-1/2 translate-x-1/2 tracking-widest	">
        {card.title}
      </p>
    </div>
  );
};

export default Card;
