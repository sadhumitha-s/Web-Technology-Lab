const form = document.getElementById("registerForm");

const fullName = document.getElementById("fullname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

// Show/Hide Password
document.getElementById("togglePassword").addEventListener("click", function () {
    if (password.type === "password") {
        password.type = "text";

        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");
    } else {
        password.type = "password";

        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");
    }
});

// Show/Hide Confirm Password
document.getElementById("toggleConfirm").addEventListener("click", function () {
    if (confirmPassword.type === "password") {
        confirmPassword.type = "text";

        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");
    } else {
        confirmPassword.type = "password";

        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");
    }
});

// Validation
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = fullName.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value;
    const confirmValue = confirmPassword.value;

    // Validation patterns
    const nameRegex = /^[A-Za-z ]+$/;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const phoneRegex = /^\d{10}$/;

    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    // 1. Name
    if (!nameRegex.test(name)) {
        alert("Full Name should contain only alphabets and spaces.");
        return;
    }

    // 2. Email
    if (!emailRegex.test(emailValue)) {
        alert("Please enter a valid email address.");
        return;
    }

    // 3. Phone
    if (!phoneRegex.test(phoneValue)) {
        alert("Phone Number should contain exactly 10 digits.");
        return;
    }

    // 4. Password
    if (!passwordRegex.test(passwordValue)) {
        alert(
            "Password must be at least 8 characters long and contain:\n\n" +
            "• One uppercase letter\n" +
            "• One lowercase letter\n" +
            "• One number\n" +
            "• One special character"
        );
        return;
    }

    // 5. Confirm Password
    if (passwordValue !== confirmValue) {
        alert("Passwords do not match.");
        return;
    }

    alert("Registration Successful!");

    window.location.href = "application.html";
});