import React,{useEffect,createContext}  from 'react'
import {useHistory} from 'react-router-dom'
import '../CSS/Landing.css'
import Logo from '../Images/logo512.png'
import SignIn from './SignIn'
// import SignUp from './SignUp'


function Landing() {
   
    const history = useHistory();
    useEffect(()=>{
      
      const user = JSON.parse(localStorage.getItem("user"))
      if(user){
        history.push('/')
      }else{
        
      }
    },[])


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
