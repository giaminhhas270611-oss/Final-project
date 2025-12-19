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

const USERS_STORAGE_KEY = 'marketplace_users';
const LAST_LOGGED_EMAIL_KEY = 'marketplace_last_email';
const CURRENT_USER_KEY = 'marketplace_current_user';

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
 * Check if user is already logged in
 */
function checkExistingSession() {
    try {
        const currentUser = sessionStorage.getItem(CURRENT_USER_KEY);
        if (currentUser) {
            const user = JSON.parse(currentUser);
            console.log(`User ${user.email} already logged in. Redirecting...`);
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 500);
            return true;
        }
    } catch (error) {
        console.error('Error checking session:', error);
    }
    return false;
}

/**
 * Initialize login form
 */
document.addEventListener('DOMContentLoaded', async () => {
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('login-email');
    const passwordInput = document.getElementById('login-password');

    // Guard: Exit if form doesn't exist
    if (!loginForm) {
        console.warn('Login form not found');
        return;
    }

    // Check if already logged in
    if (checkExistingSession()) {
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
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = emailInput ? (emailInput.value || '').trim().toLowerCase() : '';
        const password = passwordInput ? passwordInput.value : '';

        // Validation
        if (!email || !email.includes('@')) {
            alert('❌ Please enter a valid email address.');
            return;
        }
        if (!password) {
            alert('❌ Please enter your password.');
            return;
        }

        try {
            // Get users and find matching account
            const users = getUsers();
            const user = users.find(u => u.email === email);

            if (!user) {
                alert('❌ No account found for that email.');
                return;
            }

            // Hash input password and compare
            const passHash = await hashPassword(password);
            if (passHash !== user.passwordHash) {
                alert('❌ Incorrect password.');
                return;
            }

            // Successful login: store user in sessionStorage
            const sessionUser = {
                id: user.id,
                email: user.email,
                name: user.name,
                loggedAt: new Date().toISOString()
            };
            sessionStorage.setItem(CURRENT_USER_KEY, JSON.stringify(sessionUser));
            localStorage.setItem(LAST_LOGGED_EMAIL_KEY, user.email);

            alert(`✅ Login successful!\nWelcome back, ${user.name}!`);
            
            // Clear form
            loginForm.reset();
            
            // Redirect to store
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);

        } catch (error) {
            console.error('Login error:', error);
            alert('❌ Login failed. Please try again.');
        }
    });
});