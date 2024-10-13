// app.js

// Load the Firebase Auth SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  OAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

// Your Firebase configuration
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

// Google Sign-In
document.getElementById("google-signin-btn").addEventListener("click", () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("Google Sign-In successful", result);
      // Handle successful sign-in
      window.location.href = "./homepage.html"; // Redirect to homepage
    })
    .catch((error) => {
      console.error("Error during Google sign-in:", error);
    });
});

// Apple Sign-In
document.getElementById("apple-signin-btn").addEventListener("click", () => {
  const appleProvider = new OAuthProvider("apple.com");
  signInWithPopup(auth, appleProvider)
    .then((result) => {
      console.log("Apple Sign-In successful", result);
      // Handle successful sign-in
      window.location.href = "./homepage.html"; // Redirect to homepage
    })
    .catch((error) => {
      console.error("Error during Apple sign-in:", error);
    });
});
