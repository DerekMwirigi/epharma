// Import the functions you need from the SDKs you need
import firebase from "firebase";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXwE04xk85-W3U7GBUbtWfbvSYKAfHLfI",
  authDomain: "epharma-5d0e6.firebaseapp.com",
  projectId: "epharma-5d0e6",
  storageBucket: "epharma-5d0e6.appspot.com",
  messagingSenderId: "860712461802",
  appId: "1:860712461802:web:a865c7a5d3bcaf31263e93",
  measurementId: "G-YD1XFWX6F9"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(app);
db.settings({
  // host: "localhost:8080",
  // ssl: false,
  experimentalForceLongPolling: true,
});
export {db};
// export const tb_users = db.collection("users");
// export const tb_pharmacies = db.collection("pharmacies");

export { firebase};