import React, { useState, useCallback, useRef } from "react";
import { cn } from "../../lib/utils/utils";
import screenShot from "../../assets/Screenshot.png";
import winebottle3 from "../../assets/winebottle3.jpg";
import ActionCardBtns from "../UI/ActionCardBtns.jsx";
import { addToCart, useLoggedIn } from "cart/useLoggedIn";

export const BlurImage = ({ src, hoverSrc, className, alt, ...rest }) => {
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
      src={isHovered ? hoverSrc : src}
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

const Card = () => {
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
    <div className="relative rounded-md bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start">
      <BlurImage
        src={screenShot}
        hoverSrc={winebottle3}
        alt={"screenShot"}
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="absolute top-[40%] right-9 ">
        <div className="flex flex-col gap-5">
          <ActionCardBtns
            onClick={handleAddToCart}
            iconPath="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
            label="Add to cart"
          />
          <ActionCardBtns
            onClick={handleAddToCart}
            iconPath="M7.00488 7.99966V5.99966C7.00488 3.23824 9.24346 0.999664 12.0049 0.999664C14.7663 0.999664 17.0049 3.23824 17.0049 5.99966V7.99966H20.0049C20.5572 7.99966 21.0049 8.44738 21.0049 8.99966V20.9997C21.0049 21.5519 20.5572 21.9997 20.0049 21.9997H4.00488C3.4526 21.9997 3.00488 21.5519 3.00488 20.9997V8.99966C3.00488 8.44738 3.4526 7.99966 4.00488 7.99966H7.00488ZM7.00488 9.99966H5.00488V19.9997H19.0049V9.99966H17.0049V11.9997H15.0049V9.99966H9.00488V11.9997H7.00488V9.99966ZM9.00488 7.99966H15.0049V5.99966C15.0049 4.34281 13.6617 2.99966 12.0049 2.99966C10.348 2.99966 9.00488 4.34281 9.00488 5.99966V7.99966Z"
            label="See product detail information"
          />
          <ActionCardBtns
            onClick={() => alert("Added to wishlist!")}
            iconPath="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"
            label="Add to wishlist"
          />
        </div>
      </div>

      <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
      <div className=" z-40 flex flex-col justify-between items-start">
        <p className="absolute top-9 left-9 bg-[#1C1C1C] px-3 rounded-md py-2 text-white text-sm md:text-base font-medium font-sans text-left">
          categoria
        </p>
        <div className="text-[#1C1C1C] absolute bottom-9 left-9 flex flex-col justify-end">
          <div className="w-[14rem-2.25rem] md:w-[calc(24rem-2.25rem-2.25rem-0.25rem)] flex justify-between items-baseline">
            <p className="text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2">
              titulo{" "}
            </p>
            <p className="text-base md:text-base font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2">
              precio{" "}
            </p>
          </div>

          <p className=" text-base md:text-base font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2">
            subtitulo{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
