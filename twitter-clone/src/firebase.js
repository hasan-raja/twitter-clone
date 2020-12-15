import firebase from "firebase"
//import firebase from 'firebase/app'
// import 'firebase/database'
// import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAzcmCVm8Yd5HgKFuLl-dFfaPuQVKg6nTc",
    authDomain: "twitter-clone-ed28d.firebaseapp.com",
    projectId: "twitter-clone-ed28d",
    storageBucket: "twitter-clone-ed28d.appspot.com",
    messagingSenderId: "966083288509",
    appId: "1:966083288509:web:11a654200162445a57c6d4",
    measurementId: "G-J2W91P4N80"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
