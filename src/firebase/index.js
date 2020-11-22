import firebase from 'firebase';
import 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth' 

const firebaseConfig = {
    apiKey: "AIzaSyADmASBvrzcCg8_XW2OSdYjxzREHKXM-kE",
    authDomain: "reactworkshop-dd062.firebaseapp.com",
    databaseURL: "https://reactworkshop-dd062.firebaseio.com",
    projectId: "reactworkshop-dd062",
    storageBucket: "reactworkshop-dd062.appspot.com",
    messagingSenderId: "1020265985108",
    appId: "1:1020265985108:web:0bad70c644a1b9942f69c1",
    measurementId: "G-11GFZ4RP56"
  };

const firebaseApp =  firebase.initializeApp(firebaseConfig);

export default firebaseApp