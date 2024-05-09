import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

const Navbar = ({ items }) => {
  const menuItems = items && items.menuItems ? items.menuItems : [];

  return (
    <header className="navbar">
      <div className="navbar-brand">
        Layout in
        <svg
          width="100%"
          height="100%"
          viewBox="-10.5 -9.45 21 18.9"
          fill="#61dafb"
          xmlns="http://www.w3.org/2000/svg"
          className="mt-4 mb-3 text-link dark:text-link-dark w-24 lg:w-28 self-center text-sm me-0 flex origin-center transition-all ease-in-out"
          wiid="N153"
        >
          <circle cx="0" cy="0" r="2" fill="#61dafb" wiid="N154"></circle>
          <g stroke="#61dafb" strokeWidth="1" fill="none" wiid="N155">
            <ellipse rx="10" ry="4.5" wiid="N156"></ellipse>
            <ellipse
              rx="10"
              ry="4.5"
              transform="rotate(60)"
              wiid="N157"
            ></ellipse>
            <ellipse
              rx="10"
              ry="4.5"
              transform="rotate(120)"
              wiid="N158"
            ></ellipse>
          </g>
        </svg>
        React
      </div>

      <nav className="navbar-nav">
        {menuItems.map((item) => (
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
