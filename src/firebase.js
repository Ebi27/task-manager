import firebase from 'firebase/app';
import 'firebase/firestore';






const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBkswOectyT95YzzmojEjMxpHQfGmW62Gk",
  authDomain: "task-manager-78024.firebaseapp.com",
  projectId: "task-manager-78024",
  storageBucket: "task-manager-78024.appspot.com",
  messagingSenderId: "535310788591",
  appId: "1:535310788591:web:c39bd2349b6f24bf95381a",
  measurementId: "G-Y8T8819JWH",
});

export { firebaseConfig as firebase }; 