import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'

export class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <div>
                <link src='/about'/>
            </div>
            </Navbar>
        )
    }
}

export default Header;
