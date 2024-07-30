// JavaScript for interactive elements

// Example: Adding a click event to the navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example: Simple form validation
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
    } else {
        alert('Thank you for your message!');
        // Here you can add code to actually send the form data
    }
});