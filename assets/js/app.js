document.addEventListener('DOMContentLoaded', () => {
    // 1. Password Toggle
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePassword.classList.toggle('fa-eye-slash');
    });

    // 2. Login Logic & Loading Animation
    const loginForm = document.getElementById('loginForm');
    const loginBtn = document.getElementById('loginBtn');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Loading State
        loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Please wait...';
        loginBtn.disabled = true;

        setTimeout(() => {
            loginBtn.innerHTML = 'Login';
            loginBtn.disabled = false;
            alert("Login Successful! Redirecting to Dashboard...");
        }, 2000);
    });
});