import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = ({ items }) => {
  console.log("items", items);
  return (
    <header className="navbar">
      <div className="navbar-brand">
        Praktická časť diplomovej práce "Mikrofrontendy"
      </div>

      <nav className="navbar-nav">
        <Link to="/react" className="nav-link">
          <span>React</span>
        </Link>
        <Link to="/angular" className="nav-link">
          <span>Angular</span>
        </Link>
        <Link to="/vue" className="nav-link">
          <span>Vue</span>
        </Link>
        <Link to="/svelte" className="nav-link">
          <span>Svelte</span>
        </Link>
        <Link to="/all" className="nav-link">
          <span>All</span>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
