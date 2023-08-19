document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); 
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
                if (email === 'your@email.com' && password === 'yourpassword') {
            alert('Login successful');
           
        } else {
            alert('Login failed. Please check your credentials.');
        }
    });
});



