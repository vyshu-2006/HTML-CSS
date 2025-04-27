document.getElementById('signin-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    alert(`Signed in with Email: ${email}`);
});

document.getElementById('signup-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    alert(`Signed up with Username: ${username}, Email: ${email}`);
});