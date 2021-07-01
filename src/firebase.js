// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDiEkuVH-_tsM7nVkqDVSTjHsQSL3DRs2A",
    authDomain: "facebook-me-c5829.firebaseapp.com",
    projectId: "facebook-me-c5829",
    storageBucket: "facebook-me-c5829.appspot.com",
    messagingSenderId: "916782733474",
    appId: "1:916782733474:web:438e0888c68732d5ec5ffb",
    measurementId: "G-DSYGC1CPG1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth= firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export {auth, provider}
  export default db;