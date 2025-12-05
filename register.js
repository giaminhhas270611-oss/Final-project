document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');

    // Prevent default form submission and simulate registration
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('register-email').value;
        const message = `Registration attempt initiated for: ${email}. (In a real app, this would submit data)`;

        // Note: alert is used here for simple demonstration, but should be replaced 
        // with a custom modal in a full production environment.
        alert(message);
        
        // Normally, success would redirect the user to login or dashboard:
        // window.location.href = '/login.html'; 
    });
});