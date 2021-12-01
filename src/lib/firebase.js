import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDO8i5IvwcrVVYBm2TKJlBgVDetkWl8S48",
  authDomain: "classroom-510d3.firebaseapp.com",
  projectId: "classroom-510d3",
  storageBucket: "classroom-510d3.appspot.com",
  messagingSenderId: "76388600528",
  appId: "1:76388600528:web:6997107f2b34da8b0eacd5",
  measurementId: "G-SL23LGMM7R"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
