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
const USERS_STORAGE_KEY = 'marketplace_users';
const LAST_LOGGED_EMAIL_KEY = 'marketplace_last_email';

/**
 * Hash password using SHA-256
 */
async function hashPassword(password) {
    const enc = new TextEncoder();
    const data = enc.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Get all registered users from localStorage
 */
function getUsers() {
    try {
        const raw = localStorage.getItem(USERS_STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch (error) {
        console.error('Error reading users:', error);
        return [];
    }
}

/**
 * Save users to localStorage
 */
function saveUsers(users) {
    try {
        localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    } catch (error) {
        console.error('Error saving users:', error);
    }
}

/**
 * Initialize registration form
 */
document.addEventListener('DOMContentLoaded', async () => {
    const registerForm = document.getElementById('register-form');
    const emailInput = document.getElementById('register-email');
    const nameInput = document.getElementById('register-name');
    const passwordInput = document.getElementById('register-password');

    // Guard: Exit if form doesn't exist
    if (!registerForm) {
        console.warn('Register form not found');
        return;
    }

    // Prefill last used email (if any)
    try {
        const lastEmail = localStorage.getItem(LAST_LOGGED_EMAIL_KEY);
        if (lastEmail && emailInput) {
            emailInput.value = lastEmail;
        }
    } catch (error) {
        console.error('Error prefilling email:', error);
    }

    // Handle form submission
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = nameInput ? (nameInput.value || '').trim() : '';
        const email = emailInput ? (emailInput.value || '').trim().toLowerCase() : '';
        const password = passwordInput ? passwordInput.value : '';

        // Validation
        if (!name) {
            alert('❌ Please enter your full name.');
            return;
        }
        if (!email || !email.includes('@')) {
            alert('❌ Please enter a valid email address.');
            return;
        }
        if (!password || password.length < 6) {
            alert('❌ Password must be at least 6 characters.');
            return;
        }

        // Check if account already exists
        const users = getUsers();
        if (users.some(u => u.email === email)) {
            alert('❌ An account with this email already exists.');
            return;
        }

        try {
            // Hash password and create user
            const passHash = await hashPassword(password);
            const newUser = {
                id: Date.now(),
                name,
                email,
                passwordHash: passHash,
                createdAt: new Date().toISOString()
            };

            // Save user
            users.push(newUser);
            saveUsers(users);
            localStorage.setItem(LAST_LOGGED_EMAIL_KEY, email);

            alert(`✅ Registration successful for ${email}!\nRedirecting to login...`);
            
            // Clear form
            registerForm.reset();
            
            // Redirect to login
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 1000);

        } catch (error) {
            console.error('Registration error:', error);
            alert('❌ Registration failed. Please try again.');
        }
    });
});