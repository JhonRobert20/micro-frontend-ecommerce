import React from "react";
import Phone from "./Phone";
import winebottleImage from "../../assets/winebottle3.jpg";

export const RightSideHeroSection = () => {
  return (
    <div className="relative md:max-w-xl">
      <Phone className="w-64" imgSrc={winebottleImage} />
    </div>
  );
};
