import React, { useState, useCallback } from "react";
import { cn } from "../../../lib/utils/utils.js";

const BlurImage = ({ src, hoverSrc, className, isHovered, alt, ...rest }) => {
  const [isLoading, setLoading] = useState(true);

  const handleLoad = () => setLoading(false);

  const currentSrc = isHovered ? src : hoverSrc;

  return (
    <img
      className={cn(
        "transition duration-300 object-cover",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={handleLoad}
      src={currentSrc}
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

export default BlurImage;
