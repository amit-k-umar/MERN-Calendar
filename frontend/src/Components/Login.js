import React from "react";
import Modal from "react-modal";
import "../CSS/Login.css";

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

// Modal.setAppElement('el')

function Login() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="login">
      <button onClick={openModal}>Login</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal} className="closeModal">&#x2716;</button>
        <form>
          <div className="login_title">Login</div>
          <div>
          <div className="login_head">Email Address</div>
          <input  className="login_input" type="email" placeholder="Enter Email" required></input>
          <div className="login_head">Password</div>
          <input  className="login_input" type="password" placeholder="Enter Password" required></input>
          <button className="btn">Submit</button>
          <div>forgot <a className="link" >password?</a></div>
          </div>
        </form>
      </Modal>
    </div>
  );
}
export default Login;
