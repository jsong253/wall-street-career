import React from "react";
import {Link, NavLink} from 'react-router-dom'
import './Header.css'

const activeStyle = ({isActive})=>{
	return {
		fontWeight: isActive? 'bold' : 'normal',
		color:isActive? 'purple' : 'blue',
    // textDecoration: isActive? 'none' : 'underline',
	}
}
// https://www.youtube.com/watch?v=UyHHmPvVEfI
// https://ultimatecourses.com/blog/active-navlink-inline-styles-with-react-router
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
            <NavLink stype={activeStyle} to="/home">Home</NavLink>
          </li>

          <li>
            <NavLink stype={activeStyle} to="/login">Login</NavLink>
          </li>

          <li>
            <NavLink stype={activeStyle} to="/signup">Signup</NavLink>
          </li>

          <li>
            <NavLink stype={activeStyle} to="/resetPassword">Reset Password</NavLink>
          </li>

          <li>
            <NavLink stype={activeStyle} to="/pricing">Pricing</NavLink>
          </li>
          
          <li>
            <NavLink stype={activeStyle} to="/courses">Courses</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}