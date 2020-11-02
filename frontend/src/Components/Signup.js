import React from "react";
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
          SignUp
        </form>
      </Modal>
    </div>
  );
}
export default Signup;
