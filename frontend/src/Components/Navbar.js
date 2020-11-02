import React from 'react'
import Login from './Login'
import Signup from './Signup'
import "../CSS/Navbar.css"

function Navbar() {
    return (
        <div className="nav">
            <div className="logo nav-left">
                <h4>LOGO</h4>
            </div>
            <div className="nav-right">
                <Login/>
                <Signup/>
            </div>
        </div>
    )
}

export default Navbar
