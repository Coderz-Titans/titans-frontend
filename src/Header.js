import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import { withAuth0 } from "@auth0/auth0-react";
import Logout from "./components/Logout";
import LoginButton from "./components/LoginButton";


class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <header>
        <Navbar id="navbar">
          <img className="logo" src={logo} alt="logo" />

          <Link className="nav" to="/">
            Home
          </Link>
          <Link className="nav" to="/category">
            Category
          </Link>

          {/* <Link className="nav" to="/news">
            News
          </Link> */}

          {isAuthenticated && (
            <>
              <Link className="nav" to="/profile">
                Profile
              </Link>
            </>
          )}

          <Link className="nav" to="/about">
            About Us
          </Link>

          {isAuthenticated ? <Logout /> : <LoginButton />}
        </Navbar>
      </header>
    );
  }
}
export default withAuth0(Header);

