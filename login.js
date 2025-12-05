document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    // Prevent default form submission and simulate login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('login-email').value;
        const message = `Login attempt initiated for: ${email}. (In a real app, this would submit data)`;
        
        // Note: alert is used here for simple demonstration, but should be replaced 
        // with a custom modal in a full production environment.
        alert(message); 
    });
});