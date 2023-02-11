import logo from '../logo.svg';
import '../App.css';
import Home from './Home.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import {
  auth,
  registerWithEmailAndPassword
} from "../firebase";

function Register() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [name, setName] = useState("");
  //const [user, loading, error] = useAuthState(auth);
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };


  const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();
    if (password === confirm){
      register();
    }
    console.log(email,password,confirm,name);
  };
  return (
    <div className="App">
      <div className="App-banner">
        <p>
          Register
        </p>
      </div>
      <header className="App-header">
      <div className="form">
          <form onSubmit={handleSubmit} className="form">
            <div className="input-container">
              <label>Email </label>
              <input type="email" name="email" className='Email-input' required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>
              {renderErrorMessage("email")}
            </div>
            <div className="input-container">
              <label>Name </label>
              <input type="text" name="name" required 
              value={name}
              onChange={(e) => setName(e.target.value)}/>
              {renderErrorMessage("name")}
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass" required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}/>
              {renderErrorMessage("pass")}
            </div>
            <div className="input-container">
              <label>Confirm password </label>
              <input type="password" name="cofirm" required 
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}/>
              {renderErrorMessage("confirm")}
            </div>
            <div className="button-container">
                <button className = "Login-button">
                Register
                </button>
            </div>
          </form>
        </div>
      </header>
    </div>
  );
}

export default Register;
