import React, { useState } from "react";
import Modal from "react-modal";
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
          <input  className="signup_input" type="email" placeholder="Enter Email" required></input>
          <div className="signup_head">Password</div>
          <input  className="signup_input" type="password" placeholder="Enter Password" minLength="8" onChange={pass} maxLength="20" required></input>
          <div className="signup_head">Confirm Password</div>
          <input  className="signup_input" type="password" placeholder="Enter Password" minLength="8" onChange={confirm_pass} maxLength="20" required></input>
          <button className="btn" onClick={handlesubmit} >Submit</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
export default Signup;
