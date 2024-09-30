document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    if (!passwordRegex.test(password)) {
        errorMessage.textContent = 'Password must be at least 8 characters long, contain one number, one uppercase letter, and one special character.';
        return;
    }
    
    // Simulate login validation
    if (username === 'user@example.com' && password === 'Password1!') {
        window.location.href = 'home.html';
    } else {
        errorMessage.textContent = 'Invalid login credentials.';
    }
});

const inputs = document.querySelectorAll('input');
const loginContainer = document.querySelector('.login-container');
const loginTitle = document.querySelector('h2');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        loginContainer.classList.add('active');
        loginTitle.classList.add('active');
    });

    input.addEventListener('blur', () => {
        loginContainer.classList.remove('active');
        loginTitle.classList.remove('active');
    });
});