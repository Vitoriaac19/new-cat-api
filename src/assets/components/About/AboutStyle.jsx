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
    height: 45vh;
    border: 1.5px solid orange;
    border-radius: 10px;
    box-shadow: 0px 0px 5px orange;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

h3{
    position: absolute;
    top: 4%;
    font-size: 2rem;
}

.container-p{
    width: 79%;
}

.container-p p{
    font-size: 1rem;
    line-height: 1.5rem;
}

`;