import React from "react";
import { Link, NavLink } from "react-router-dom";

const navigation = [
  { label: "Tiles", to: "/tiles" },
  { label: "Grouting & Epoxy", to: "/grouting" },
  { label: "Cleaning", to: "/cleaning" },
  { label: "About Us", to: "/about" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="site-header">
      <button
        className={`menu-toggle${isMenuOpen ? " is-open" : ""}`}
        type="button"
        aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
        aria-controls="site-navigation"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
      >
        <span className="menu-toggle-icon" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      <Link className="brand" to="/" aria-label="MK Tiles home">
        <span className="brand-mark" aria-hidden="true">MK</span>
        <span className="brand-name">Tiles</span>
        <span className="brand-name">Fitters</span>
      </Link>

      <nav
        className={`site-nav${isMenuOpen ? " is-open" : ""}`}
        id="site-navigation"
        aria-label="Main navigation"
      >
        {navigation.map((item, index) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => (isActive ? "is-active" : "")}
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="nav-tab-number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            {item.label}
          </NavLink>
        ))}
      </nav>
      <Link className="button nav-work" to="/#services">
        View Our Work
      </Link>
    </header>
  );
}
