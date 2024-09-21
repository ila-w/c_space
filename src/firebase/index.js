import firebase from 'firebase/compat/app';
import auth from 'firebase/compat/app';
import firestore from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyAPHShxE5f7taPEqTHHnV2URJXHjX69HcQ",
  authDomain: "cspace-database.firebaseapp.com",
  projectId: "cspace-database",
  storageBucket: "cspace-database.appspot.com",
  messagingSenderId: "1043752449182",
  appId: "1:1043752449182:web:869e57fabbfd8efad4b78f",
  measurementId: "G-R7LR77419B"
}


if (!firebase.app.length){
  firebase.initializeApp
}

export {firebase};