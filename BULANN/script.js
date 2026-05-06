// Reveal Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Parallax Hero (Hanya di Desktop)
if (window.matchMedia("(min-width: 1024px)").matches) {
    document.addEventListener('mousemove', (e) => {
        const hero = document.querySelector('.hero');
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;
        hero.style.backgroundPosition = `calc(50% + ${x}px) calc(50% + ${y}px)`;
    });
}

// Initialize
loadQuiz();
