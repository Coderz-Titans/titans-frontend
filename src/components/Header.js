import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';


export class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

                <Link to='/about'>About us</Link>
            </Navbar>
        )
    }
}

export default Header;
