import React from "react";
import {Link, NavLink} from 'react-router-dom'
import './Header.css'

const activeStyle = {
  color:"purple"
}
export default function Header() {
  return (
    <header className="">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">
              <img alt="toggle theme" src="/images/toggle-button.png" />
            </Link>
            
          </li>
          <li>
            <NavLink activeStype={activeStyle} to="/home">Home</NavLink>
          </li>

          <li>
            <NavLink activeStype={activeStyle} to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink activeStype={activeStyle} to="/signup">Signup</NavLink>
          </li>
          <li>
            <NavLink activeStype={activeStyle} to="/resetPassword">Reset Password</NavLink>
          </li>
          <li>
            <NavLink activeStype={activeStyle} to="/pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink activeStype={activeStyle} to="/courses">Courses</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}