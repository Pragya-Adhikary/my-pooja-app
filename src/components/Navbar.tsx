import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src="/images/logo.png" alt="Pooja Booking" />
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <Link to="/home">
          <img src="/images/home.png" alt="Home" className="nav-icon" />
          Home
          </Link>
        </li>
        <li>
          <Link to="/poojas">
          <img src="/images/poojas.png" alt="Poojas" className="nav-icon" />
          Poojas
          </Link>
        </li>
        <li>
          <Link to="/pandits">
          <img src="/images/pandits.png" alt="Pandits" className="nav-icon" />
          Pandits
          </Link>
        </li>
        <li>
          <Link to="/aboutus">
          <img src="/images/aboutus.png" alt="About Us" className="nav-icon" />
          About Us
          </Link>
        </li>
      </ul>

      {/* Buttons */}
      <div className="nav-buttons">
        <button className="signup">Sign Up</button>
        <button className="signin">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
