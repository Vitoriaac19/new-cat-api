import Carousel from "./Carousel";
import styled from "styled-components";

export const CarouselStyle = styled(Carousel)`
  .slick-list {
    width: 80%;
    height: 40vh;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  .images-container {
    display: flex !important;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40vh;
  }

  .images {
    max-width: 100%;
    max-height: 35vh;
    object-fit: contain;
    box-shadow: 0px 0px 10px hsl(0, 0%, 71%);
    border-radius: 10px;
  }

  .container-question {
    display: flex;
    position: absolute;
    width: 100%;
    height: 30vh;
    justify-content: center;
    align-items: center;
    bottom: 1%;

  }

  .container-question h2 {
    font-size: 2rem;
    position: absolute;
    top: -8%;
    left: 50%;
    transform: translate(-50%);
  }

  .container-comments {
    display: flex;
    flex-direction: row;
    position: absolute;
    width: 65%;
    height: 75%;
    left: 50%;
    transform: translate(-50%);
    gap: 25px;

  }

  .depoiment {
    width: 25%;
    height: 100%;
    border: 1.5px solid orange;
    border-radius: 10px;
    box-shadow: 0px 0px 5px orange;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 20px;
  }

  .depoiment h4 {
    font-size: 1.5rem;
  }

  .depoiment p {
    font-size: 1.2rem;
  }
`;
