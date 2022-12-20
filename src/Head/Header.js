import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/imgs/logo1.webp";
import './Head.css'
const Header = () => {
  return (
    <div className="nav">
  
      <NavLink to="/">
        <img src={logo} alt="logo-img" className="logo" />
      </NavLink>
    
      <div className="navbar">
        <ul>
        <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/plans">Plans</NavLink>
          </li>
          <li>
            <NavLink  to="/about">About us</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
         
        </ul>
      </div>
    </div>
  );
};

export default Header;
