import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import "firebase/auth";

const firebaseConfig = firebase.initializeApp(
  // process.env.apiKey, 
  {
    apiKey: "AIzaSyBkswOectyT95YzzmojEjMxpHQfGmW62Gk",
  authDomain: "task-manager-78024.firebaseapp.com",
  projectId: "task-manager-78024",
  storageBucket: "task-manager-78024.appspot.com",
  messagingSenderId: "535310788591",
  appId: "1:535310788591:web:c39bd2349b6f24bf95381a",
  measurementId: "G-Y8T8819JWH",
});

export { firebaseConfig as firebase }; 

