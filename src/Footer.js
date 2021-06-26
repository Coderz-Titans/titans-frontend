import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id='footer'>
            <Navbar.Brand>&copy; logo</Navbar.Brand>
            <Link to="/about">About Us</Link>

    </Navbar>
    )
  }
}
export default Footer;