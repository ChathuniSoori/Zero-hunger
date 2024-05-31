document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

const goToTopButton = document.getElementById('go-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        goToTopButton.style.display = 'block';
    } else {
        goToTopButton.style.display = 'none';
    }
});

goToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
