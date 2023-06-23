import React from "react";
import { Link, useLocation } from "react-router-dom";
import '../../../client/src/index.css';

function NavBar() {
  const location = useLocation();

   // Check if the current path is the Login page
   const isLoginPage = location.pathname === "/login";

  return (
    <header className="primary-header">
      <div className="container">
        <div className="nav-wrapper">
          <a href="/">
            <img className='mix-master-logo' src="/src/assets/images/mix-master-logo.png" alt="logo" />
          </a>
          <nav className="primary-navigation">
            <ul
              aria-label="Primary"
              role="list"
              className="nav-list"
              id="primary-navigation"
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/show-drink-list">Drinks</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </nav>
          {!isLoginPage && (
                <div>
                  <Link to="/login">
                    <button className="button">Login/Register</button>
                  </Link>
                </div>
              )}
        </div>
      </div>
    </header>
  );
}

export default NavBar;