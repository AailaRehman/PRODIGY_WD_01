window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const hamburger = document.getElementById('hamburger'); 
const navLinks = document.getElementById('nav-links'); 

hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('show');
});

document.querySelectorAll('.nav-item a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); 
        const targetElement = document.getElementById(targetId); 

        window.scrollTo({
            top: targetElement.offsetTop - 60, 
            behavior: 'smooth'
        });

        navLinks.classList.remove('show'); 
    });
});
