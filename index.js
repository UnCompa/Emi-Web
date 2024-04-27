// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

const auth = getAuth(app);

const CreateButton = document.getElementById("buttonCreate");
CreateButton.addEventListener("click", function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const displayName = document.getElementById("displayName").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(function(userCredential) {
            // Signed up
            const user = userCredential.user;

            // Update the display name
            return user.updateProfile({
                displayName: displayName
            }).then(function() {
                console.log("Display name added successfully");
            }).catch(function(error) {
                console.error("Error adding display name:", error);
            });
        })
        .catch(function(error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
});



const LoginButton = document.getElementById("buttonLogin")
LoginButton.addEventListener("click", (e)=> {
    e.preventDefault()
    const email = document.getElementById("emailLogin").value
    console.log(email);
    const password = document.getElementById("passwordLogin").value
    console.log(password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage);
        // ..
      });
})