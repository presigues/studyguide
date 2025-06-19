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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const emailerror ="auth/email-already-exists";

const submit = document.getElementById('login-comfirm');
submit.addEventListener("click", function (e) {
    e.preventDefault();

    const email = document.getElementById('emaillog').value;
    const password = document.getElementById('passlog').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;     
            console.log(userCredential)
            window.location.href = "main.html";
            console.log("you are logged in as" + email);
             
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
        });

})

const create = document.getElementById('sign-comfirm');
create.addEventListener("click", function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;

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
                document.getElementById("email").style.borderColor = "red";
            }
            // ..
        });

})