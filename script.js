const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

const slider = document.querySelector('[data-slider]');
const slides = slider ? [...slider.querySelectorAll('.slide')] : [];
const dots = document.querySelector('.dots');

if (slider && dots && slides.length) {
  slides.forEach((slide, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.setAttribute('aria-label', `Показать слайд ${index + 1}`);
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      slide.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    });
    dots.appendChild(dot);
  });

  const dotButtons = [...dots.querySelectorAll('button')];
  const slideObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const index = slides.indexOf(entry.target);
      slides.forEach((item) => item.classList.remove('active'));
      dotButtons.forEach((item) => item.classList.remove('active'));
      entry.target.classList.add('active');
      dotButtons[index]?.classList.add('active');
    });
  }, { root: slider, threshold: 0.65 });

  slides.forEach((slide) => slideObserver.observe(slide));
}

const petalsContainer = document.querySelector('.petals');
if (petalsContainer && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  for (let i = 0; i < 9; i += 1) {
    const petal = document.createElement('i');
    petal.style.cssText = `
      position: fixed;
      z-index: -1;
      top: -30px;
      left: ${Math.random() * 100}vw;
      width: ${10 + Math.random() * 14}px;
      height: ${22 + Math.random() * 20}px;
      border-radius: 90% 10% 80% 20%;
      background: rgba(245, 189, 33, ${0.15 + Math.random() * 0.22});
      transform: rotate(${Math.random() * 180}deg);
      animation: petalFall ${14 + Math.random() * 15}s linear ${Math.random() * -20}s infinite;
    `;
    petalsContainer.appendChild(petal);
  }

  const style = document.createElement('style');
  style.textContent = `
    @keyframes petalFall {
      from { transform: translate3d(0,-10vh,0) rotate(0deg); }
      to { transform: translate3d(12vw,115vh,0) rotate(430deg); }
    }
  `;
  document.head.appendChild(style);
}
