import React from 'react'
import '../CSS/Landing.css'
import Logo from '../Images/calendar-3-512.png'
import SignIn from './SignIn'
import SignUp from './SignUp'


function Landing() {
    const toggle = () =>{

    }
    return (
        <div className="landing">
            <div className="logo">
                <img src={Logo}/>
            </div>

            <div className="card">
                <SignIn/>
            </div>
        </div>
    )
}

export default Landing


