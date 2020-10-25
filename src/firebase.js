import firebase from "firebase";
//convert to typescript later
const firebaseConfig = {
    apiKey: "MY_FIREBASE_API_KEY",
    authDomain: "MY_FIREBASE_AUTH_DOMAIN",
    databaseURL: "MY_FIREBASE_DB_URL",
    projectId: "fMY_FIREBASE_PROJECT_ID",
    storageBucket: "MY_FIREBASE_STORAGE_BUCKET",
    messagingSenderId: "MY_FIREBASE_MESSAGING_SENDER_ID",
    appId: "MY_FIREBASE_APP_ID",
    measurementId: "MY_FIREBASE_MEASUREMENT_ID"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const provider = new firebase.auth.GoogleAuthProvider() //google login service

export { auth, provider }
export default db
