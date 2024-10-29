// Smooth scrolling when clicking navigation links
document.querySelectorAll('nav ul li a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Looping text effect for "Coder, Developer, Programmer"
const loopText = document.querySelector('.loop-text');
const words = ['Coder', 'Developer', 'Programmer'];
let index = 0;

setInterval(() => {
    loopText.textContent = words[index];
    index = (index + 1) % words.length;
}, 2000);

// Contact form handling (if needed)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const message = document.querySelector('textarea[name="message"]').value;
        
        // Simple alert for now (you can update this to handle form submission)
        alert(`Thank you, ${name}! Your message has been sent.`);
        
        // Clear the form after submission
        contactForm.reset();
    });
}
