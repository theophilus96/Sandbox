// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAgzmxpDh4ODinOUaUjpU1VUiNsmBtpuMo",
  authDomain: "sandbox-d017b.firebaseapp.com",
  databaseURL: "https://sandbox-d017b.firebaseio.com",
  projectId: "sandbox-d017b",
  storageBucket: "sandbox-d017b.appspot.com",
  messagingSenderId: "228495965155",
  appId: "1:228495965155:web:2f36ead8ba6b039b253ed6",
  measurementId: "G-RX43388RND",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
