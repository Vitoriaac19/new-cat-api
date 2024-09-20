import styled from "styled-components";
import Login from "./Login";

export const LoginStyle = styled(Login)`
.container {
  position: absolute;
  width: 25%;
  height: 15%;
  border: 1px solid hsl(0, 0%, 71%);
  box-shadow: 1px 1px 1px hsl(0, 0%, 71%);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.form-login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.title {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 12%;
  color: orange;
  text-align: center;
  font-size: 2em;
  top: 8%;
}

.title h3{
    color: orange;
}

.container-input {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100%;
  top: 30%;
}

.container-input input {
  justify-content: center;
  width: 80%;
  height: 35px;
  padding-left: 15px;
  outline: none;
  border: 1px solid hsl(0, 0%, 71%);
}

.container-button {
  position: absolute;
  top: 73%;
  width: 25%;
  height: 8%;
}

.container-button button {
  width: 100%;
  height: 100%;
  font-size: 1.2em;
  color: white;
  background-color: var(--primary-color);
  border-radius: 20px;
  border: none;
}

.container-button button:hover {
  background-color: hsl(287, 34%, 59%);
  cursor: pointer;
}

.container-register {
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 6%;
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 10%;
  gap: 50px;
}
.container-register button {
  text-decoration: none;
  color: orange;
  border: none;
  background-color: transparent;
  font-size: 1.1em;
}

.container-register button:hover {
  color: hsl(287, 34%, 59%);
  cursor: pointer;
}

`;