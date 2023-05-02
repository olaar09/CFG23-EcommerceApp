import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Logo from './beaute_logo_lb.svg' 

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="header">
        <div className="nav-container"> 
        <img src={Logo} className="App-logo" alt="logo" /> 
          <NavLink exact to="/" className="nav-logo">
            Eyes, Lips, Face
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/products"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/cart"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;


/*import React from 'react';
import React, { useContext } from 'react';

function Header({ setPage }) {
  return (
    <header>
      <nav>
        <ul style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: 40 }}>
          <li>
          <a href="#" onClick={() => setPage('home')}>Home</a>
          </li>
          <li>
          <a href="#" onClick={() => setPage('products')}>Products</a>
          </li>
          <li>
          <a href="#" onClick={() => setPage('cart')}>Cart</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;*/

