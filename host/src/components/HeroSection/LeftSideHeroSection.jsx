import React from "react";
import { UserProfileImg } from "./UserProfileImg";
import { CustomerReviews } from "./CustomerReviews";
import { FeatureList } from "./FeatureList";
import winebottleImage from "../../assets/winebottle3.jpg";

export const LeftSideHeroSection = () => {
  const images = Array(5).fill(winebottleImage);

  return (
    <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
      <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
        Your Image on a{" "}
        <span className="bg-green-600 px-2 text-white">Custom</span> Phone Case
      </h1>
      <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
        Capture your favorite memories with your own,{" "}
        <span className="font-semibold">one-of-one</span> phone case. CaseCobra
        allows you to protect your memories, not just your phone case.
      </p>
      <FeatureList />
      <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
        <UserProfileImg images={images} />
        <CustomerReviews />
      </div>
    </div>
  );
};
