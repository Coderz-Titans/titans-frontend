import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>LOGO</Navbar.Brand>
        <Link to="/">Home</Link>
        <Link to="/category">Category</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/news">News</Link>
      </Navbar>
    );
  }
}
export default Header;
