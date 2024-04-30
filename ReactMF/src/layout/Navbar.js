import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

const Navbar = ({ items }) => {
  return (
    <header className="navbar">
      <div className="navbar-brand">
        Praktická časť diplomovej práce "Mikrofrontendy"
      </div>

      <nav className="navbar-nav">
        {items.menuItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.link}
            className="nav-link"
            activeClassName="active"
          >
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
