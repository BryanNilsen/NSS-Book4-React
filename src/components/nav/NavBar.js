import React from 'react';
import { NavLink, withRouter } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {

  const handleLogout = () => {
    sessionStorage.clear()
    localStorage.clear()
  }

  return (
    <header>
      <h1 className="site-title">
        Student Kennels
        <br />
        <small>Loving care when you're not there.</small>
      </h1>
      <nav>
        <ul className="container">
          <li>
            <NavLink className="nav-link" exact activeClassName="selectedLink" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" exact activeClassName="selectedLink" to="/animals">
              Animals
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" exact activeClassName="selectedLink" to="/locations">
              Locations
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" exact activeClassName="selectedLink" to="/employees">
              Employees
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" exact activeClassName="selectedLink" to="/owners">
              Owners
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" exact onClick={handleLogout} to="/login">
              Log Out
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(NavBar);