import styled from "styled-components";
import Cats from "./Cats";
import "primeicons/primeicons.css";

export const CatsStyle = styled(Cats)`
  .container-cats {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    margin-top: 50px;
  }

  .cats {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 15%;
    height: 30vh;
    margin: 10px;
    box-shadow: 0px 0px 8px hsl(0, 0%, 71%);
    border-radius: 10px;
    background-color: #f8cf83;
  }

  .cats:hover {
    scale: 1.1;
    transition: 0.8s ease;
  }

  .image {
    position: absolute;
    width: 80%;
    height: 50%;
    border-radius: 10px;
    top: 10%;
    box-shadow: 0px 0px 8px hsl(0, 0%, 71%);
  }

  .container-image {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .container-informations {
    position: absolute;
    width: 80%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 65%;
    line-height: 1.5rem;
    font-size: 1.2rem;
  }

  .pi-heart,
  .pi-heart-fill {
    position: absolute;
    bottom: 0;
    font-size: 1.7em;
    color: red;
  }

  .heart-icon {
    width: 10%;
    height: 10%;
    position: absolute;
    bottom: 15%;
    right: 20px;
  }

  .container-adopt {
    position: absolute;
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    bottom: 0;
  }

  .button {
    display: flex;
    position: absolute;
    width: 45%;
    height: 45%;
    left: 5%;
    bottom: 17%;
  }

  .button-adopt {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-color: orange;
    color: white;
    font-size: 1em;
    border: none;
  }

  .button-adopt:hover {
    background-color: white;
    color: orange;
  }
`;
