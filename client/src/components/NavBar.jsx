import React from "react";
import Login from "./auth/Login";
import Register from "./auth/Register"

function NavBar() {
  return (
    <header className="primary-header">
      <div className="container">
        <div className="nav-wrapper">
          <a href="#">
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
          <Login/>
          <Register/>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
