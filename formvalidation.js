document.getElementById("requestForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

    const emailInput = document.querySelector(".email-input");
    const passwordInput = document.querySelector(".password-input");
    const emailError = document.querySelector(".email-errormessage");
    const passwordError = document.querySelector(".password-errormessage");

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    emailError.textContent = "";
    passwordError.textContent = "";

    if (!emailValue) {
        emailError.textContent = "Email is required.";
        emailInput.focus();
    } else if (!validateEmail(emailValue)) {
        emailError.textContent = "Please enter a valid email address.";
        emailInput.focus();
    }

    else if (!passwordValue) {
        passwordError.textContent = "Password is required.";
        passwordInput.focus();
    } else {
        const passwordErrors = validatePassword(passwordValue);
        if (passwordErrors.length > 0) {
            passwordError.textContent = passwordErrors.join(" ");
            passwordInput.focus();
        } else {
            alert("form submitted successfully");
        }
    }
});

function validatePassword(password) {
    const errors = [];

    if (password.length < 8) {
        errors.push("Password must be at least 8 characters.");
    }
    if (!/[a-z]/.test(password)) {
        errors.push("Password must contain at least one lowercase letter.");
    }
    if (!/[A-Z]/.test(password)) {
        errors.push("Password must contain at least one uppercase letter.");
    }
    if (!/\d/.test(password)) {
        errors.push("Password must contain at least one number.");
    }
    if (!/[@$!%*?&]/.test(password)) {
        errors.push("Password must contain at least one special character.");
    }
    return errors;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
