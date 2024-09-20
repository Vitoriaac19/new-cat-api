import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header({ className }) {
  const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem("user");
  navigate("/login");
};

  return (
    <div className={className}>
      <div className="container-header">
        <div className="container-logo">
          <img src="./src/images/Logo.png" alt="logo" />
        </div>
        <ul>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="link">
              About
            </Link>
          </li>

          <li>
            <Link to="/cats" className="link">
              Cats
            </Link>
          </li>

          <div className="container-login">
            {" "}
            {localStorage.getItem("user") ? (
              <>
              <p>Welcome, {localStorage.getItem("user")}</p>
              <li>
                <button className="link" onClick={handleLogout}>
                  Logout
                </button>
              </li>
              </>
            ) : (
              <li>
                <Link to="/login" className="link">
                  Login
                </Link>
              </li>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Header;
