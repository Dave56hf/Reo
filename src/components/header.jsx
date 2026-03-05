import { useEffect, useState } from "react";
import "./Header.css";
import EthLogo from "../assets/4373172_ethereum_logo_logos_icon.png";

const navItems = [
  { label: "Market", href: "#showcase" },
  { label: "Product", href: "#about" },
  { label: "Education", href: "#how-it-works" },
  { label: "Community", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#showcase" onClick={closeMenu}>
        <img src={EthLogo} alt="Reo logo" />
        <h2>Reo</h2>
      </a>

      <button
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        type="button"
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        aria-controls="site-nav"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav>
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`} id="site-nav">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="cta-wrap">
        <a className="cta-button" href="#contact">
          Get Started
        </a>
      </div>
    </header>
  );
}
