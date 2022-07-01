import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAua07Klow_HF-Or9CPu1g2iLE8nOqYFjc",
    authDomain: "react-olx-e9c25.firebaseapp.com",
    projectId: "react-olx-e9c25",
    storageBucket: "react-olx-e9c25.appspot.com",
    messagingSenderId: "125436424003",
    appId: "1:125436424003:web:1078859c7faaf23e5249f6",
    measurementId: "G-LFN4V3RNQR"
  };
  
 export default firebase.initializeApp(firebaseConfig)