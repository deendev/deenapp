document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector(".loginform");
    const loginButton = loginForm.querySelector(".loginbtn");
    let attemptCount = 0;
    const maxAttempts = 4;
    let isLocked = false;

    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault(); // Prevent default form submission

        if (isLocked) {
            alert("You are temporarily locked out due to multiple failed login attempts. Please try again later.");
            return;
        }

        const username = loginForm.username.value.trim();
        const password = loginForm.password.value;

        // Basic validation
        if (!username || !password) {
            alert("Please fill in both username and password.");
            return;
        }

        // Simulate an asynchronous login process (e.g., API call)
        const isAuthenticated = await fakeLogin(username, password);

        if (isAuthenticated) {
            alert("Login successful!");
            window.location.href = "./homepage.html"; // Redirect to homepage
        } else {
            attemptCount++;
            alert(`Login failed. Attempt ${attemptCount} of ${maxAttempts}.`);

            // Check if attempts exceed maximum allowed
            if (attemptCount >= maxAttempts) {
                isLocked = true;
                alert("You have exceeded the maximum number of login attempts. Please wait 30 seconds before trying again.");
                loginButton.disabled = true;

                // Lock out for 30 seconds
                setTimeout(() => {
                    isLocked = false;
                    loginButton.disabled = false;
                    attemptCount = 0; // Reset attempts after lockout period
                    alert("You can try logging in again.");
                }, 30000); // 30 seconds lockout
            }
        }
    });

    // Simulated login function (replace this with actual API call)
    async function fakeLogin(username, password) {
        // Simulate a delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Simulate authentication logic (replace this with actual logic)
        return username === "user" && password === "pass"; // Example credentials
    }
});

