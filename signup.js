document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.querySelector(".signupform");
    const signupButton = signupForm.querySelector(".signupbtn");

    signupForm.addEventListener("submit", async (event) => {
        event.preventDefault(); // Prevent default form submission

        const username = signupForm.username.value.trim();
        const firstName = signupForm.firstName.value.trim();
        const lastName = signupForm.lastName.value.trim();
        const dob = signupForm.dob.value;
        const email = signupForm.email.value.trim();
        const password = signupForm.password.value;
        const confirmPassword = signupForm.confirmPassword.value;

        // Basic validation
        if (!username || !firstName || !lastName || !dob || !email || !password || !confirmPassword) {
            alert("Please fill out all fields.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        // Simulate an asynchronous signup process (e.g., API call)
        const isSignedUp = await fakeSignup(username, firstName, lastName, dob, email, password);

        if (isSignedUp) {
            alert("Signup successful! Redirecting to the homepage...");
            window.location.href = "./homepage.html"; // Redirect to homepage
        } else {
            alert("Signup failed. Please try again.");
        }
    });

    // Simulated signup function (replace this with actual API call)
    async function fakeSignup(username, firstName, lastName, dob, email, password) {
        // Simulate a delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Simulate a successful signup logic (replace this with actual logic)
        // Here, you can add checks for existing usernames/emails if desired
        return true; // Change this to false to simulate a failed signup
    }
});
