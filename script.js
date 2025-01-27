// Smooth scrolling when the "Scroll to Details" button is clicked
document.querySelector('.scroll-btn').addEventListener('click', () => {
  document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' });
});

// Adding fade-in effect when elements come into view
const fadeIns = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

fadeIns.forEach((element) => {
  observer.observe(element);
});
