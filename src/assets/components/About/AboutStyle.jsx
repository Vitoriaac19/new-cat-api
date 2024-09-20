import styled from "styled-components";
import About from "./About";

export const AboutStyle = styled(About)`
.container-about{
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 40%;
    height: 40vh;
    border: 1px solid hsl(0,0%,70%);
    border-radius: 20px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
        


}

`;