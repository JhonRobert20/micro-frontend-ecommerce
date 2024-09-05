import React from "react";
import VideoPlayer from "../UI/Video";
import ProductDetails from "./ProductDetails";

const ProductBanner = () => {
  return (
    <div className="flex h-80 md:h-[45rem] w-full items-center gap-1.5">
      <div className="w-1/2 h-full rounded-sm">
        <VideoPlayer src="/videos/vino_video.mp4" />
      </div>
      <ProductDetails />
    </div>
  );
};

export default ProductBanner;
