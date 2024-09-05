import React from "react";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";

const VideoPlayer = ({
  src,
  controls = false,
  autoPlay = true,
  loop = true,
  className = "",
}) => {
  const [videoRef, isVisible] = useIntersectionObserver({
    threshold: 0.1, // Trigger when 10% of the video is visible
  });

  return (
    <video
      ref={videoRef}
      className={`h-full w-full object-cover rounded-sm ${className}`}
      controls={controls}
      autoPlay={autoPlay && isVisible}
      loop={loop}
      src={isVisible ? src : ""}
      type="video/mp4"
      muted
    />
  );
};

export default VideoPlayer;
