import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBSecZ_cAfVwNwpMiO25mRrz6oWFZJetUU",
    authDomain: "slack-clone-77bf7.firebaseapp.com",
    projectId: "slack-clone-77bf7",
    storageBucket: "slack-clone-77bf7.appspot.com",
    messagingSenderId: "812629422174",
    appId: "1:812629422174:web:93fe65bc6ecf71e76604cf",
    measurementId: "G-5KVZET8YD8"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db