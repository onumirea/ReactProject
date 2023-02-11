// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, 
sendPasswordResetEmail, signOut, onAuthStateChanged } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, query, getDocs, collection, where, addDoc} from "@firebase/firestore"
import { createContext, useEffect, useState , useContext} from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  //apiKey: process.env.REACT_APP_apiKey,
  apiKey: "AIzaSyDHzaa9niL4uA0-plmuB4V2tAJnYXfTA9w",
  authDomain: "reactproject-74252.firebaseapp.com",
  projectId: "reactproject-74252",
  storageBucket: "reactproject-74252.appspot.com",
  messagingSenderId: "489016574379",
  appId: "1:489016574379:web:ec8b53dc842bf722ba52ee",
  measurementId: "G-CNZ5GS6DJX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log(auth);


const logInWithEmailAndPassword = async (email, password) => {
  try {
    var res = await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(firestore, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};
const UserContext = createContext();
export const AuthContextProvider = ({children}) =>{
  return(
    <UserContext.Provider>
      {children}
    </UserContext.Provider>
  ) 
}

export const UseAuth = () => {
  return(UserContext(UserContext))
}
export {
  auth,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
};
export const firestore = getFirestore(app)