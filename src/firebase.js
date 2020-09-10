import firebase from "firebase";
//convert to typescript later
const firebaseConfig = {
    apiKey: "AIzaSyBPlVqt1wb6bti6wrYvsu6l_6Og1gsL1es",
    authDomain: "facebook-clone-69f42.firebaseapp.com",
    databaseURL: "https://facebook-clone-69f42.firebaseio.com",
    projectId: "facebook-clone-69f42",
    storageBucket: "facebook-clone-69f42.appspot.com",
    messagingSenderId: "447799471806",
    appId: "1:447799471806:web:9cf6775bb95444597ab8ef",
    measurementId: "G-96FQQL273J"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const provider = new firebase.auth.GoogleAuthProvider() //google login service

export { auth, provider }
export default db
