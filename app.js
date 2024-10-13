// Google Sign-In
function onGoogleSignIn(googleUser) {
  const profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId());
  console.log("Name: " + profile.getName());
  console.log("Email: " + profile.getEmail());

  // Handle sign-in here (e.g., send data to your server)
  // For example: send profile info to your server
}

// Load the Google API
function startGoogleApp() {
  gapi.load("auth2", function () {
    gapi.auth2
      .init({
        client_id: "YOUR_GOOGLE_CLIENT_ID",
      })
      .then(() => {
        const googleButton = document.querySelector(".google");
        googleButton.addEventListener("click", () => {
          gapi.auth2.getAuthInstance().signIn().then(onGoogleSignIn);
        });
      });
  });
}

// Apple Sign-In
document.getElementById("apple-signin-btn").addEventListener("click", () => {
  AppleID.auth
    .signIn()
    .then((data) => {
      console.log(data); // Contains the user's data

      // Handle sign-in here (e.g., send data to your server)
    })
    .catch((error) => {
      console.error("Apple Sign-In error:", error);
    });
});

// Initialize Apple Sign-In
document.addEventListener("DOMContentLoaded", () => {
  AppleID.auth.init({
    clientId: "YOUR_APPLE_CLIENT_ID",
    scope: "name email",
    redirectURI: "YOUR_REDIRECT_URI",
    state: "state",
    usePopup: true, // Use a popup for authentication
  });
});

// Traditional login handling
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector(".loginform");

  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent default form submission

    const username = loginForm.username.value.trim();
    const password = loginForm.password.value;

    // Basic validation
    if (!username || !password) {
      alert("Please fill in both username and password.");
      return;
    }

    // Simulate a login process (you should replace this with your actual API call)
    const isAuthenticated = await fakeLogin(username, password);

    if (isAuthenticated) {
      alert("Login successful!");
      window.location.href = "./homepage.html"; // Redirect to homepage
    } else {
      alert("Login failed. Please check your username and password.");
    }
  });

  // Simulated login function (replace this with actual API call)
  async function fakeLogin(username, password) {
    // Simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simulate authentication logic (replace this with actual logic)
    return username === "user" && password === "pass"; // Example credentials
  }
});

// Load Google API when the page is ready
window.onload = startGoogleApp;
