// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpHtg2vsUZEU52uiImlT3cp0uemfBijpk",
  authDomain: "quality-team-857ee.firebaseapp.com",
  projectId: "quality-team-857ee",
  storageBucket: "quality-team-857ee.appspot.com",
  messagingSenderId: "378728899236",
  appId: "1:378728899236:web:1a13bde80d804fd3f6bc31",
  measurementId: "G-WDTC6N17X4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);