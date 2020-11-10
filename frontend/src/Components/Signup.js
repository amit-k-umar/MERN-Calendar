
import React, { useState } from "react";

import Modal from "react-modal";
import axios from 'axios'
import "../CSS/Signup.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width:"60vw"
  },
};
function Signup() {

 
  async function makePostRequest(e) {
    e.preventDefault()
    const params = {
        email,
        password
      }
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
    //let re=await axios.get('http://localhost:5000/');
    let re= await fetch(`http://localhost:5000/`)
    console.log(re);

    let res = await axios.post('http://localhost:5000/signup', {"email":email,"password":password});

    console.log(res.data);
}


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const [password,setPassword]=useState("")
  const [confirm_password,setconfirm_password]=useState("")
  const pass=(e)=>{
    setPassword(e.target.value);
  }
  const confirm_pass=(e)=>{
    setconfirm_password(e.target.value);
  }
  
  const handlesubmit=()=>{
  if(password!=confirm_password)
  alert("Password & Confirm password dont match, Try Again!");
  else closeModal();
  }

  const pc=(e)=>{
    setPassword(e.target.value);
    console.log(e.target.value);
    console.log(password);
  }
  const ec=(e)=>{
    setEmail(e.target.value);
    console.log(e.target.value);
    console.log(email);
  }

  return (
    <div className="signup">
      <button onClick={openModal}>Signup</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal} className="closeModal">
        &#x2716;
        </button>
        <form>
          <div className="signup_title">Signup</div>
          <p><i>Please fill in this form to create an account.</i></p>
          <div>
          <div className="signup_head">Email Address</div>
          <input  className="signup_input" type="email" placeholder="Enter Email" required onChange={ec}></input>
          <div className="signup_head">Password</div>
          <input  className="signup_input" type="password" placeholder="Enter Password" minLength="8" onChange={pass} maxLength="20" required></input>
          <div className="signup_head">Confirm Password</div>

          <input  className="signup_input" type="password" placeholder="Enter Password" required onChange={pc}></input>
          <button className="btn" onClick={makePostRequest}>Submit</button>

          </div>
        </form>
      </Modal>
    </div>
  );
}
export default Signup;
