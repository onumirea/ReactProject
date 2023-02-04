import logo from '../logo.svg';
import '../App.css';
import Home from './Home.js';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();
    console.log("e ok boss");
  };

  return (
    <div className="App">
      <div className="App-banner">
        <p>
          Login
        </p>
        <Link to='/register'>
          <button className = "Login-button">
            Register
          </button>
         </Link>
      </div>
      <header className="App-header">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Email </label>
              <input type="email" name="email" className='Email-input' required />
              {renderErrorMessage("email")}
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass" required />
              {renderErrorMessage("pass")}
            </div>
            <div className="button-container">
              <button className = "Login-button">
              Login
              </button>
            </div>
          </form>
        </div>
      </header>
    </div>
  );
}

export default Login;
