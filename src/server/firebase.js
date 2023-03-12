// import firebase from "firebase/compat/app";
// import "firebase/compat/database";

// const firebaseConfig = {
//     apiKey:"AIzaSyBiSRhNa7hM2dqbAhL6VV9RtJh70M6ghbE",
//     databaseURL:"https://zomeetup-default-rtdb.asia-southeast1.firebasedatabase.app/",
// };

// firebase.initializeApp(firebaseConfig);

// let dbRef = firebase.database().ref();

// export const userName = prompt("What's your name?");

// const urlParams = new URLSearchParams(window.location.search);
// const roomId = urlParams.get("id");

// if (roomId) {
//   dbRef = dbRef.child(roomId);
// } else {
//   dbRef = dbRef.push();
//   window.history.replaceState(null, "Meet", "?id=" + dbRef.key);
// }

// export default dbRef;

import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
import { child } from 'firebase/database';
import { push } from 'firebase/database';

const firebaseConfig = {
    apiKey:"AIzaSyBiSRhNa7hM2dqbAhL6VV9RtJh70M6ghbE",
    databaseURL:"https://zomeetup-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);
let dbRef = ref(db);

export const userName = prompt("What's your name?");

const urlParams = new URLSearchParams(window.location.search);
const roomId = urlParams.get("id");

if (roomId) {
  dbRef = child(dbRef, roomId);
} else {
  dbRef = push(dbRef);
  window.history.replaceState(null, "Meet", "?id=" + dbRef.key);
}

export default dbRef;
