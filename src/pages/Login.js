import logo from '../logo.svg';
import '../App.css';
import Home from './Home.js';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { auth, logInWithEmailAndPassword} from "../firebase";
import ls from 'local-storage';

function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

  const handleSubmit = (event) => {
    var ls = require('local-storage');
    // Prevent page reload
    event.preventDefault();
    console.log("authBefore",isAuthenticated);
    var res = logInWithEmailAndPassword(email, password)
    setIsAuthenticated (true);
    ls.set('isAuthenticated', isAuthenticated);
    console.log("authAfter",isAuthenticated);
    }
  

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
         <Link to='/'>
          <button className = "Login-button">
            Home
          </button>
         </Link>
      </div>
      <header className="App-header">
        <div className="form">
          <form onSubmit={handleSubmit} className="form">
            <div className="input-container">
              <label>Email </label>
              <input type="email" name="email" className='Email-input' required
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
              {renderErrorMessage("email")}
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass" required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}/>
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
