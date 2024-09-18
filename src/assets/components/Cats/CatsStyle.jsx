import styled from "styled-components";
import Cats from "./Cats";
import 'primeicons/primeicons.css';

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
    box-shadow: 0px 0px 8px hsl(0, 0%, 71%);
    border-radius: 10px;
  }

  .cats:hover{
    scale: 1.1;
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

  .container-informations{
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

.pi-heart, .pi-heart-fill{
  position: absolute;
  bottom: 0;
  font-size: 1.7em;
  color: red;

}

.heart-icon{
  width: 10%;
  height: 10%;
  position: absolute;
  bottom: 5%;
}



`;
