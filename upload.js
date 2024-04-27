// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import {getStorage, ref} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-storage.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyBRuhmGV1GqNzHAYpIhfnzJSrCBzeAjy30",
  authDomain: "emi-web-f96bd.firebaseapp.com",
  projectId: "emi-web-f96bd",
  storageBucket: "emi-web-f96bd.appspot.com",
  messagingSenderId: "899760115540",
  appId: "1:899760115540:web:cea505c53a72d26f6402c1",
  measurementId: "G-NQVEDZPWB9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)