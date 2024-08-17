import React from "react";
import MaxWidthWrapper from "../UI/MaxWidthWrapper";
import winebottleImage from "../../assets/winebottle3.jpg";
import { UserReview } from "./UserReview";

export const CustomerReviewSection = () => {
  const reviews = [
    {
      review: `"The case feels durable and I even got a compliment on the design. Had the case for two and a half months now and the image is super clear, on the case I had before, the image started fading into yellow-ish color after a couple weeks. Love it."`,
      userName: "Jonathan",
    },
    {
      review: `"I usually keep my phone together with my keys in my pocket and that led to some pretty heavy scratchmarks on all of my last phone cases. This one, besides a barely noticeable scratch on the corner, looks brand new after about half a year. I dig it."`,
      userName: "Josh",
    },
  ];

  return (
    <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
      <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
        <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
          What our <span className="relative px-2">customers</span> say
        </h2>
        <img
          src={winebottleImage}
          className="w-24 order-0 lg:order-2"
          alt="Decoration"
        />
      </div>

      <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
        {reviews.map((review, index) => (
          <UserReview
            key={index}
            review={review.review}
            userName={review.userName}
            imgSrc={winebottleImage}
          />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};
