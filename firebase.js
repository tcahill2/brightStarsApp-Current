// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtCiZnQbKI6zLEdtlk3bpxdEtcmKuxUCU",
  authDomain: "testapp-7a0ae.firebaseapp.com",
  projectId: "testapp-7a0ae",
  storageBucket: "testapp-7a0ae.appspot.com",
  messagingSenderId: "140757375458",
  appId: "1:140757375458:web:4096386c9d8a7369a981bb",
  measurementId: "G-TQJK4MPSND"
};

// Initialize Firebase

if(!firebase.apps.length){

}

const app = initializeApp(firebaseConfig);