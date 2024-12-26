
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePassword(password) {
    const errors = [];

    if (password.length < 8) {
        errors.push("password must be atleast 8 character.")
    }
    if (!/[a-z]/.test(password)) {
        errors.push("password must contain atleast one lowercase letter.")
    }
    if (!/[A-Z]/.test(password)) {
        errors.push("password must contain atleast one uppercase letter.")
    }
    if (!/\d/.test(password)) {
        errors.push("password must contain atleast one number.")
    }
    if (!/[@$!%*?&]/.test(password)) {
        errors.push("password must contain atleast one special character.")
    }
    return errors;
}

document.getElementById("requestForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = document.querySelector(".email-input").value;
    const passwordInput = document.querySelector(".password-input").value;
    const emailErrorMessage = document.querySelector(".email-errormessage");
    const passwordErrorMessage = document.querySelector(".password-errormessage");

    emailErrorMessage.textContent = "";
    passwordErrorMessage.textContent = "";

    let isValid = true;

    if (!validateEmail(emailInput)) {
        emailErrorMessage.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    const passwordErrors = validatePassword(passwordInput); {
        if (passwordErrors.length > 0 ) {
            passwordErrorMessage.textContent = passwordErrors.join("");
            isValid = false;
        }
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
});
