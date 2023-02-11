import logo from './logo.svg';
import './App.css';
import Login from './pages/Login.js';
import Home from './pages/Home.js';
import Register from './pages/Register.js';
import WritePost from './pages/WritePost.js';
import { Route, Routes, Link, Navigate , Router} from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';


function App() {

  return (
     <Routes>
      <Route path = '/' element = {<ProtectedRoutes><Home /></ProtectedRoutes>}/>
      <Route path = 'login' element = {<Login />}/>
      <Route path = 'register' element = {<Register />}/>
      <Route path = 'write-post' element = {<WritePost />}/>
     </Routes>
  );
}

export default App;
