import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Logged = React.createContext();

function Login({ className }) {
  const [username, setUsername] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  const handleUsername = (event) => {
    setUsername(event.target.value);
    localStorage.setItem("user", event.target.value);
  };

  const handleLogin = () => {
    setIsLogged(true);
    navigate("/cats");
  };

  return (
    <div className={className}>
      <div className="container">
        <div className="form-login">
          <div className="title">
            <h3>Login</h3>
          </div>

          <div className="container-input">
            <input
              type="text"
              placeholder="Name"
              required
              onChange={handleUsername}
            />
          </div>
          <div className="container-register">
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
