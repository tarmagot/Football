import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyDh4iGRIwqqO79qWrrGxR2iRqiSY9gOPcw",
  authDomain: "football-d936a.firebaseapp.com",
  databaseURL: "https://football-d936a-default-rtdb.firebaseio.com",
  projectId: "football-d936a",
  storageBucket: "football-d936a.appspot.com",
  messagingSenderId: "871590103442",
  appId: "1:871590103442:web:3e21212edba14dd273194b",
  measurementId: "G-WWB47C1L14",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export const db = firebase.database();
