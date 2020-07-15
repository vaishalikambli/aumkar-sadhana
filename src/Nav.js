import React from "react";
import "./App.scss";

import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light main-menu"
      id="main-menu"
      aria-label="Main menu"
    >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav">
          <NavLink activeClassName="active" exact to="/">
            <li className="nav-item">Home</li>
          </NavLink>
          <NavLink to="/establishment" activeClassName="active">
            <li className="nav-item">Establishment</li>
          </NavLink>
          <NavLink to="/sufiscontribution" activeClassName="active">
            <li className="nav-item">Sufis Contribution</li>
          </NavLink>
          <NavLink to="/aaratisadhana" activeClassName="active">
            <li className="nav-item">Aarati Sadhana</li>
          </NavLink>
          <NavLink to="/aumkarsadhana" activeClassName="active">
            <li className="nav-item">Aumkar Sadhana</li>
          </NavLink>
          <NavLink to="/kamkaj" activeClassName="active">
            <li className="nav-item">Kamkaj</li>
          </NavLink>
          {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Events
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#">Calender</a>
                </div>
            </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
