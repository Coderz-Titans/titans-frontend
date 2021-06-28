import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import logo from "./images/logo.png";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          id="footer"
        >
          <img className="logo" src={logo} alt="logo" />
          <Link to="/about">About Us</Link>{" "}
        <h1 className="groubName">CODERZ-TITANS</h1>
        <h3 className="tel">Tel:0962111222888</h3>
          <p>
            {" "}
            <FaGithub />
            <FaInstagram />
            <FaTwitter />
            <FaFacebook />
          </p>
        </Navbar>
      </div>
    );
  }
}
export default Footer;
