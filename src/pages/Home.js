import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <div className="App-banner">
        <p>
          Home
        </p>
        <Link to='/login'>
          <button className = "Login-button">
          Login
          </button>
         </Link>
      </div>
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
