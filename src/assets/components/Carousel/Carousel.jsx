import React from "react";
import Slider from "react-slick";

function Carousel({ images, className }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  const slicedImages = images.slice(0, 10);

  return (
    <div className={className}>
      <Slider {...settings} className="slick-lis">
        {slicedImages && slicedImages.length > 0 ? (
          slicedImages.map((image, index) => (
            <div className="images-container" key={index}>
              <img src={image.url} alt={`cat-${index}`} className="images" />
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </Slider>
      <div className="container-question">
        <h2>Why adopting a kitty</h2>

        <div className="container-comments">
          <div className="depoiment">
            <h4>Cats are calm</h4>
            <p>
              Cats don't make loud noises like barking dogs, making them great
              for apartments or people who prefer quieter pets.
            </p>
          </div>
          <div className="depoiment">
            <h4>Cats are clean</h4>
            <p>
              Cats groom themselves frequently, keeping clean and reducing the
              need for regular baths or trips to the groomer.
            </p>
          </div>
          <div className="depoiment">
            <h4>Cats are independent</h4>
            <p>
              Cats can be left alone for a day or two as long as they have food
              and water, which makes them perfect for people with busy schedules
              or who travel occasionally.
            </p>
          </div>
          <div className="depoiment">
            <h4>Cats are affectionate and purr</h4>
            <p>
              Despite their independence, cats love affection and will often sit
              on your lap, purring to show their happiness and comfort in your
              presence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
