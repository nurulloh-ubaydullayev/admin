import "./Header.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <h1 className="header__heading">Admin Panel Clinics</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/admins/users">Admin users</NavLink>
            </li>

            <li>
              <NavLink to="/admins/orders">Admin orders</NavLink>
            </li>

            <li>
              <NavLink to="/admins/directions">Admin directions</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
