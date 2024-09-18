import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

function Header({ className }) {
  return (
      <div className={className}>
        <div className="container-header">
            <div className="container-logo">
                <img src="./src/images/Logo.png" alt="logo" />
            </div>
          <ul>
            <li>
              <Link to="/" className="link">Home</Link>
            </li>

            <li>
              <Link to="/about" className="link">About</Link>
            </li>

            <li>
              <Link to="/cats" className="link">Cats</Link>
            </li>
          </ul>
        </div>
      </div>
  );
}

export default Header;
