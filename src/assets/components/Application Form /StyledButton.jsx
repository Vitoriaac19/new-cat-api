import styled from "styled-components";

export const StyledButton = styled.button`
  position: relative;
  left: 50%;
  transform: translate(-50%);
  width: 80%;
  padding: 10px;
  margin-top: 10px;
  background-color: orange;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ff8c00;
  }
`;
