var usernameRegex = new RegExp("^[a-zA-Z0-9]{6,10}$");
var emailRegex = new RegExp("^[a-zA-Z0-9-_]+@[a-zA-Z0-9-_]+\.+[a-zA-Z]$");
var mobileRegex = new RegExp("^[0-9]{10}$");
var passwordRegex = new RegExp("^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[@#$%!^&+_])(?=.{8,})");
var validationPassed = true;

function validateUsername() {
    if (!usernameRegex.test(document.getElementById("username").value)) {
        console.log("Invalid Username");
        validationPassed = false;
    }
}

function validateEmail() {
    if (!emailRegex.test(document.getElementById("email").value)) {
        console.log("Invalid Email");
        validationPassed = false;
    }
}

function validateMobile() {
    if (!mobileRegex.test(document.getElementById("mobile").value)) {
        console.log("Invalid Mobile");
        validationPassed = false;
    }

}

function validatePassword() {
    if (!passwordRegex.test(document.getElementById("password").value)) {
        console.log("Invalid Password");
        validationPassed = false;
    }

    if (document.getElementById("password").value !== document.getElementById("confirm_password").value) {
        console.log("Password do not Match")
        validationPassed = false;
    }
}
function validateSignupForm() {
    validateUsername();
    validateEmail();
    validateMobile();
    validatePassword();
    return validationPassed;
}


// function validateSignupForm() {
//     validate("username", usernameRegex);
//     validate("email", emailRegex);
//     validate("mobile", mobileRegex);
//     validate("password", passwordRegex);
//     validate("confirm_password", passwordRegex);
//     validatePassword();
//     return validationPassed;

// }
// function validatePassword() {
//     var matchPassword = (document.getElementById("password").value === document.getElementById("confirm_password"));
//     if (matchPassword === false) {
//         validationPassed = false;
//         logError(document.getElementById("confirm_password"), " * Passwords do not match");
//     }
// }

// function validate(id, regex) {
//     validationPassed = false;
//     var element = document.getElementById(id);
//     if (regex.test(element.value) === false) {
//         logError(element, " * Invalid");
//     }
// }

// function logError(element, text) {
//     // var newLine = document.createElement("br");
//     var errorElement = document.createElement("span");
//     var errorText = document.createTextNode(text);
//     // element.parentElement.appendChild(newLine);
//     if (element.parentElement.childElementCount <= 1) {
//         element.parentElement.appendChild(errorElement).appendChild(errorText);
//     }

//     setTimeout(() => {
//         // element.parentElement.removeChild(newLine);
//         element.parentElement.removeChild(errorElement);
//     }, 3000);

// }
