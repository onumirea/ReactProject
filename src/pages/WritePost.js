import logo from '../logo.svg';
import '../App.css';
import Home from './Home.js';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { auth, logInWithEmailAndPassword} from "../firebase";
import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "../firebase"

function WritePost() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

  
function writeUserData( title, description) {
    const ref = collection(firestore, "posts") // Firebase creates this automatically
    let data = {
    title: title,
    description:description,
    likes:0
    }

    try {
    addDoc(ref, data)
    } catch(err) {
        console.log(err)
    }
  }
  
  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();
    writeUserData(title,description);
    console.log("e ok boss");
    }
  

  return (
    <div className="App">
      <div className="App-banner">
        <p>
          Make a post!
        </p>
        
      </div>
      <header className="App-header">
        <div className="form">
          <form onSubmit={handleSubmit} className="form">
            <div className="input-container">
              <label>Title </label>
              <input type="text" name="title" required
              value={title}
              onChange={(e) => setTitle(e.target.value)} />
              {renderErrorMessage("title")}
            </div>
            <div className="input-container">
              <label>Description </label>
              <input type="text"  className="input-container-big" name="desc" required 
              value={description}
              onChange={(e) => setDescription(e.target.value)}/>
              {renderErrorMessage("pass")}
            </div>
            <div className="button-container">
              <button className = "Login-button">
              Post
              </button>
            </div>
          </form>
        </div>
      </header>
    </div>
  );
}

export default WritePost;
