document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        //Retrieve user input values
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        let isValid = true;
        const messages = [];
        
        //Validate user input
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Email must include both "@" and "." characters.');
        }

        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }
// Display feedback to the user
        feedbackDiv.style.display = "block";
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545";
        }
    });
});