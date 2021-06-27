import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <img className="logo" src={logo} alt="logo" />
          <Link className="nav" to="/">
            Home
          </Link>
          <Link className="nav" to="/category">
            Category
          </Link>
          <Link className="nav" to="/profile">
            Profile
          </Link>
          <Link className="nav" to="/news">
            News
          </Link>
          <Link className="nav" to="/about">
            About Us
          </Link>
          <Link className="nav1" to="/about">
            Register
          </Link>
          <Link className="nav2" to="/about">
            Log in
          </Link>
        </Navbar>
      </div>
    );
  }
}
export default Header;
