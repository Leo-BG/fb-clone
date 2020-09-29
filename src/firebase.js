import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCD5iJDQS7qFihoh7Me4nYiJY6yinVEb40",
    authDomain: "facebook-clone-6d6b5.firebaseapp.com",
    databaseURL: "https://facebook-clone-6d6b5.firebaseio.com",
    projectId: "facebook-clone-6d6b5",
    storageBucket: "facebook-clone-6d6b5.appspot.com",
    messagingSenderId: "182759221119",
    appId: "1:182759221119:web:36c3c79d3c5b1ec5da1c4a",
    measurementId: "G-5271Q64T1B"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;