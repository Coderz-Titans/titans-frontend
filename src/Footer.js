import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
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
          <div className="links">
            <Link className="footerLink1 footeritem" to="/about">
              ABOUT US
            </Link>{" "}
            <Link className="footerLink2 footeritem" to="/about">
              CONTACT US
            </Link>{" "}
          </div>

          <p className="frinds">LET'S BE FRIENDS!</p>

          <div className="socialMedia">
            <p className="intagram">
              {" "}
              <FaInstagram />
            </p>
            <p className="twitter">
              {" "}
              <FaTwitter />
            </p>
            <p className="facebook">
              {" "}
              <FaFacebook />
            </p>
          </div>
          <div className="h6">
            <h6>&copy;2021</h6>
          </div>
        </Navbar>
      </div>
    );
  }
}
export default Footer;
