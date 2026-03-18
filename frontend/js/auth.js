document.addEventListener('DOMContentLoaded', function() {
    // Form submission handling
    const loginForm = document.getElementById('loginForm');
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password');

    // Toggle password visibility
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });

    // Handle form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = passwordInput.value;
        const remember = document.getElementById('remember').checked;

        // Here you would typically make an API call to your backend
        // For demo purposes, we'll just redirect to the home page
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'index.html';
    });

    // Social login handlers
    document.querySelector('.google-btn').addEventListener('click', function() {
        // Implement Google login
        console.log('Google login clicked');
    });

    document.querySelector('.facebook-btn').addEventListener('click', function() {
        // Implement Facebook login
        console.log('Facebook login clicked');
    });

    // Sign up link handler
    document.getElementById('signupLink').addEventListener('click', function(e) {
        e.preventDefault();
        // Implement signup functionality or redirect to signup page
        console.log('Sign up clicked');
    });
});
