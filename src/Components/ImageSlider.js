import React from "react";
import Carousel from "react-elastic-carousel";
import YourComponent from "./YourComponent";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function ImageSlider() {
   const ImageSlider = {
     fontFamily: "sans-serif",
     display: "flex",
     alignItems: "center",
     justifyContent: "center",
     height: "100vh",
   };
  return (
    <>
     
      <div className={ImageSlider}>
        <Carousel breakPoints={breakPoints}>
          <YourComponent>One</YourComponent>
          <YourComponent>Two</YourComponent>
          <YourComponent>Three</YourComponent>
          <YourComponent>Four</YourComponent>
          <YourComponent>Five</YourComponent>
          <YourComponent>Six</YourComponent>
          <YourComponent>Seven</YourComponent>
          <YourComponent>Eight</YourComponent>
        </Carousel>
      </div>
    </>
  );
}

export default ImageSlider;
