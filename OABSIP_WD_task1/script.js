// Show/Hide Password
document.getElementById("togglePassword").addEventListener("click", function () {
    let passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
});

// Check Password Strength
function checkStrength() {
    let password = document.getElementById("password").value;
    let strengthMessage = document.getElementById("strength-message");
    
    let strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let mediumRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

    if (strongRegex.test(password)) {
        strengthMessage.innerText = "Strong - Great! Your password is secure.";
        strengthMessage.style.color = "green";
    } else if (mediumRegex.test(password)) {
        strengthMessage.innerText = "Medium - Consider adding special characters or increasing length.";
        strengthMessage.style.color = "orange";
    } else {
        strengthMessage.innerText = "Weak - Try using a mix of letters, numbers, and special characters.";
        strengthMessage.style.color = "red";
    }
}

