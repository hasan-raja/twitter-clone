//import firebase from "firebase";
import firebase from 'firebase/app'
import 'firebase/database'
//import Post from './Post'

const firebaseConfig = {
    apiKey: "AIzaSyAzcmCVm8Yd5HgKFuLl-dFfaPuQVKg6nTc",
    authDomain: "twitter-clone-ed28d.firebaseapp.com",
    projectId: "twitter-clone-ed28d",
    storageBucket: "twitter-clone-ed28d.appspot.com",
    messagingSenderId: "966083288509",
    appId: "1:966083288509:web:11a654200162445a57c6d4",
    measurementId: "G-J2W91P4N80"
};

firebase.initializeApp(firebaseConfig);

//const db = firebaseApp.firestore();

// const db = firebase.database();

export const db = async (values)=>{
    // if(values!==null)
    // {
    //      var aj=0;
    //      aj++;
    // }
    //export const has=aj;
    const text=values.text;
    const user= firebase.database().ref('post/'+text)
    console.log(user);
  // console.log(values);
   const displayName=values.displayName;
   const username=values.username;
   const verified=values.verified;
   //const text=values.text;
   const image=values.image;
   const avatar=values.avatar;

    const snapShot = await user.get();
    //console.log(snapShot);
    if(snapShot.exists){
        try {
            await user.set({
                displayName,
                username,
                verified,
                text,
                image,
                avatar
            })
        }catch(er){
            console.log(er);
        }
    }
    
    
}

export default firebase;

// import firebase from "firebase";

// const firebaseConfig = {
//     apiKey: "AIzaSyAzcmCVm8Yd5HgKFuLl-dFfaPuQVKg6nTc",
//     authDomain: "twitter-clone-ed28d.firebaseapp.com",
//     projectId: "twitter-clone-ed28d",
//     storageBucket: "twitter-clone-ed28d.appspot.com",
//     messagingSenderId: "966083288509",
//     appId: "1:966083288509:web:11a654200162445a57c6d4",
//     measurementId: "G-J2W91P4N80"

// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();

// export default db;
