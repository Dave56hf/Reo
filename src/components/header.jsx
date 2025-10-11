import { useState } from "react";
import "./Header.css";
import Ethlogo from "../assets/4373172_ethereum_logo_logos_icon.png"; // adjust path

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header>
      <div className="o1">
        <img src={Ethlogo} alt="Logo" />
        <h2>Reo</h2>
      </div>

      {/* Hamburger menu */}
      <div className="hamburger" id="hamburger-menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation */}
      <ul className={`o2 ${isActive ? "active" : ""}`} id="nav-menu">
        <li>
          <a href="#showcase" onClick={() => setIsActive(false)}>
            Market
          </a>
        </li>
        <li>
          <a href="#aboutUs" onClick={() => setIsActive(false)}>
            Product
          </a>
        </li>
        <li>
          <a href="#howit" onClick={() => setIsActive(false)}>
            Education
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsActive(false)}>
            Community
          </a>
        </li>
      </ul>

      <div className="o3">
        <button type="button">Get Started</button>
      </div>
    </header>
  );
}
