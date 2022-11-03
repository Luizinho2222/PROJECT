import firebase from 'firebase';

// adicione SDK do Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLGW08TrHUicXNpB_eszdM60hjvR5V5Zc",
  authDomain: "voteapp-1b147.firebaseapp.com",
  databaseURL: "https://voteapp-1b147-default-rtdb.firebaseio.com",
  projectId: "voteapp-1b147",
  storageBucket: "voteapp-1b147.appspot.com",
  messagingSenderId: "796695868557",
  appId: "1:796695868557:web:345411186d3af419fedec4",
  measurementId: "G-Y97HPGGXTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();