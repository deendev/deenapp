// signup.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYeXEeWuTXDnIj1ch-yUaQuzq1BktcdiI",
  authDomain: "deenauth-f2020.firebaseapp.com",
  projectId: "deenauth-f2020",
  storageBucket: "deenauth-f2020.appspot.com",
  messagingSenderId: "843567714686",
  appId: "1:843567714686:web:df1ecf1e2f1aaa0009a32f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Signup form submission
document.querySelector(".signupform").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Get form values
  const username = document.getElementById("username").value;
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const dob = document.getElementById("dob").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Validate password confirmation
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  // Create a new user with email and password
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("User signed up: ", user);

      // Optionally, you can store additional user information in the database here

      // Redirect to homepage after successful signup
      window.location.href = "./homepage.html"; // Redirect to homepage
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error during sign-up: ", errorCode, errorMessage);
      alert("Error during sign-up: " + errorMessage);
    });
});
