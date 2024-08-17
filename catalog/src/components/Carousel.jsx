import React, { useState, useEffect } from "react";

//habría que pasar images como props (sustituir images por props)

//añadir opacidad y transition a las images cuando se creen
export function Carousel(props) {
  const images = ["winebottle1.jpg", "image32.jpg", "image30.jpg"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    if (props.autoPlay || !props.showBtns) {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, images);
      }, 1000);
      return () => clearInterval(interval);
    }
  });

  const selectNewImage = (index, images, next = true) => {
    const condition = next
      ? selectedIndex < images.length - 1
      : selectedIndex > 0;
    const nextIndex = next
      ? condition
        ? selectedIndex + 1
        : 0
      : condition
      ? selectedIndex - 1
      : images.length - 1;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  const previous = () => {
    selectNewImage(selectedIndex, images, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, images);
  };

  return (
    <>
      <img
        className="max-w-[500px] w-full h-auto opacity-1 "
        src={require(`../assets/img/${selectedImage}`).default}
        alt="imagen"
      />
      {props.showBtns && (
        <>
          <button onClick={previous}>{"<"}</button>
          <button onClick={next}>{">"}</button>
        </>
      )}
    </>
  );
}
