const usernameRegex = '^[a-zA-Z0-9]{6,10}$';

function validateSignupForm() {
    usernameRegex.test(document.getElementById('username').value) ? console.log("Username valid") : alert("Invalid Username");
}