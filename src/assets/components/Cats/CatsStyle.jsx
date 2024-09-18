import styled from "styled-components";
import Cats from "./Cats";

export const CatsStyle = styled(Cats)`
  .container-cats {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
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
    border: 1px solid black;
    border-radius: 10px;
  }

  .image {
    position: absolute;
    width: 80%;
    height: 50%;
    border: 1px solid black;
    border-radius: 10px;
    top: 10%;
  }

  .container-image {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .container-informations{
    position: absolute;
    width: 80%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 55%;
    line-height: 1.5rem;
    font-size: 1.2rem;
  }
`;
