document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    form.addEventListener("submit", function (event) {
    // Initialize an array to store error messages
    const errors = [];
    // Validation for name (minimum length of 3 characters)
    if (nameInput.value.length < 3) {
    errors.push("Name must be at least 3 characters long.");
    }
    // Validation for email (must be a valid email format)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
    errors.push("Please enter a valid email address.");
    }
    // Validation for message (minimum length of 3 words)
    if (messageInput.value.length < 6) {
    errors.push("Message must be at least 3 words long.");
    }
    // If there are errors, prevent form submission and display them
    if (errors.length > 0) {
    event.preventDefault(); // Prevent form submission
    alert(errors.join("\n"));} // Display error messages in an alert
