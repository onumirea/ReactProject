import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom';
import { getDocs, collection} from "@firebase/firestore"
import { Route, Routes } from 'react-router-dom';
import { firestore } from "../firebase"
import { useState } from 'react';
import {Posts} from "../components/Posts.js"

function Home() {

  const [info , setInfo] = useState([]);
  const [likesList , setLikesList] = useState([0]);
  const [mostLiked , setMostLiked] = useState(0);
  const [addedLikes , setAddedikes] = useState(false);
  const [unlike , setUnlike] = useState(false);


  window.addEventListener('load', () => {
    Fetchdata();
  });

  const Fetchdata = async ()=>{
    const docRef = collection(firestore, "posts");
    
    getDocs(docRef)
    .then((querySnapshot) => {

      const newUserDataArray = querySnapshot.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }));

      setInfo(newUserDataArray);
    })
  }
 
  const pull_data = (data, liked) => {
    if(addedLikes == false || liked == true){
          setLikesList(current => [...current, data]);
          setAddedikes(true);
          liked = false;
        }
      }
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

        <h2>Most likes on a post: {Math.max(...likesList)}</h2>
        <Link to='write-post'>
          <button className = "button">Make a post!
          </button>
        </Link>
      {
        
        info.map((userData) => 
        
          <Posts
            title = {userData.title}
            description = {userData.description}
            likes = {userData.likes} 
            id = {userData.id} 
            func={pull_data}

            />

       )
             
      }

      </header>
    </div>
  );
}

export default Home;
