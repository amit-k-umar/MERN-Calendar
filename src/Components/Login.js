
import React,{useState} from "react";
import Modal from "react-modal";
import axios from 'axios'
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

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalIsOpen, setIsOpen] = React.useState(false);

  async function makePostRequest(e) {
    e.preventDefault()
    const params = {
        email,
        password
      }
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
    //let re=await axios.get('http://localhost:5000/');
    let re= await fetch('http://localhost:5000/')
    console.log(re.body);

    let res = await axios.post('http://localhost:5000/signin', {"email":email,"password":password});

    console.log(res.data);
}

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
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
          <input  className="login_input" type="email" placeholder="Enter Email" required onChange={ec}></input>
          <div className="login_head">Password</div>
          <input  className="login_input" type="password" placeholder="Enter Password" required  onChange={pc}></input>
          <button className="btn" onClick={makePostRequest}>Submit</button>
          <div>forgot <a className="link" >password?</a></div>
          </div>
          <p>{ password,email}</p>
        </form>
      </Modal>
    </div>
  );
}
export default Login;


