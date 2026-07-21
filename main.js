gsap.registerPlugin(ScrollTrigger);

const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('theme-classic');
});

gsap.from('.title', {
  duration: 1.5,
  y: 50,
  opacity: 0,
  ease: 'power3.out',
  delay: 0.5
});

gsap.to('.card-3d', {
  scrollTrigger: {
    trigger: '.parallax-section',
    start: 'top center',
    end: 'bottom center',
    scrub: true
  },
  rotateX: 15,
  rotateY: -15,
  scale: 1.1,
  duration: 1
});