import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../Carousel/Carousel";
import { CarouselStyle } from "../Carousel/CarouselStyle";

function Home({ className }) {
  const [images, setImages] = useState([]);

  const fetchCarousel = () => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=20", {
      method: "GET",
      headers: {
        "x-api-key":
          "live_5gWY3rUVde9PxS83gEBhgSvwNJM6YGDwwbeHCcPQQRmea8MxbzpQtEpcT32l6tt8",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setImages(result);
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    fetchCarousel();
  }, []);

  return (
    <>
      <CarouselStyle images={images} />
    </>
  );
}

export default Home;
