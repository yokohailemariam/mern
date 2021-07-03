import firebase from "firebase/app";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCoGXGp1c7jbTX6cAiqFI3VQt_0Ek_LvP8",
  authDomain: "mern-9d149.firebaseapp.com",
  projectId: "mern-9d149",
  storageBucket: "mern-9d149.appspot.com",
  messagingSenderId: "665630441165",
  appId: "1:665630441165:web:ab0cf9bbcbb6af7e827384",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();

export { projectStorage };
