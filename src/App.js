import logo from '../logo.svg';
import '../App.css';
import Login from './pages/Login.js';
import Home from './pages/Home.js';
import Register from './pages/Register.js';
import { Route, Routes } from 'react-router-dom';


function App() {
  
  return (
     <Routes>
      <Route path = '/' element = {<Home />}></Route>
      <Route path = 'login' element = {<Login />}></Route>
      <Route path = 'register' element = {<Register />}></Route>
     </Routes>
  );
}

export default App;
