import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyD6bz6G5gJPy25oY9RmSnAWEyf08yqAO9w",
  authDomain: "portfolio-aa6bc.firebaseapp.com",
  projectId: "portfolio-aa6bc",
  storageBucket: "portfolio-aa6bc.appspot.com",
  messagingSenderId: "15475591508",
  appId: "1:15475591508:web:e21c622717ed230f6c60c1",
};

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
