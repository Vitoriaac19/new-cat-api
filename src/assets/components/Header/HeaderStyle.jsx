import styled from "styled-components";
import Header from "./Header";

export const HeaderStyle = styled(Header)`
  .container-header {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 15vh;
    background-color: orange;
    color: white;
    box-shadow: 0px 0px 10px black;
  }

  .container-header ul {
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    height: 30%;
    right: 7%;
    top: 50%;
    transform: translateY(-50%);
    list-style: none;
  }
  .link {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 1.9rem;
    cursor: pointer;
    text-decoration: none;
    color: white;
  }

  .link:hover {
    text-decoration: underline;
  }

  .container-logo{
    display: flex;
    position: absolute;
    width: 20%;
    height: 65%;
    left: 5%;
    top: 50%;
    transform: translateY(-50%);
  }

  .container-logo img{
    width: 100%;
    height: 100%;
  }
`;
