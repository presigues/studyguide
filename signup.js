// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI9-YmweMjdd0WehTB_8G0Ceer7PxMwu0",
  authDomain: "studyguide-8d514.firebaseapp.com",
  projectId: "studyguide-8d514",
  storageBucket: "studyguide-8d514.firebasestorage.app",
  messagingSenderId: "523206286983",
  appId: "1:523206286983:web:7f5563574499f6507d6222",
  measurementId: "G-J7KFW178WX"
};

const create = document.getElementById('sign-comfirm');
create.addEventListener("click", function (event) {
    event.preventDefault();

    const email = document.getElementById('sign-email').value;
    const password = document.getElementById('sign-pass').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Creating Account....");
            window.location.href = "main.html";
            
            // ...
        })

        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);

            if(errorMessage==emailerror) {
                const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            }
            // ..
        });

})