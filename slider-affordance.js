(() => {
  const section = document.querySelector('.transformation');
  const slider = section?.querySelector('.transform-grid');
  if (!section || !slider) return;

  const slides = [...slider.children];
  if (slides.length < 2) return;

  section.classList.add('has-clear-slider');
  slider.setAttribute('tabindex', '0');
  slider.setAttribute('aria-label', 'Листайте карточки пути роста');

  const controls = document.createElement('div');
  controls.className = 'transform-slider-controls';
  controls.innerHTML = `
    <div class="transform-slider-hint">
      <span>ЛИСТАЙТЕ КАРТОЧКИ</span>
      <i data-lucide="move-horizontal" aria-hidden="true"></i>
    </div>
    <div class="transform-slider-status" aria-live="polite">
      <strong>01</strong><span>/ ${String(slides.length).padStart(2, '0')}</span>
    </div>
    <div class="transform-slider-progress" aria-hidden="true"><i></i></div>
    <div class="transform-slider-buttons">
      <button type="button" class="transform-prev" aria-label="Предыдущая карточка"><i data-lucide="arrow-left"></i></button>
      <button type="button" class="transform-next" aria-label="Следующая карточка"><i data-lucide="arrow-right"></i></button>
    </div>`;

  slider.insertAdjacentElement('beforebegin', controls);

  const current = controls.querySelector('.transform-slider-status strong');
  const progress = controls.querySelector('.transform-slider-progress i');
  const prev = controls.querySelector('.transform-prev');
  const next = controls.querySelector('.transform-next');

  const nearestIndex = () => {
    const left = slider.scrollLeft;
    let best = 0;
    let distance = Infinity;
    slides.forEach((slide, index) => {
      const d = Math.abs(slide.offsetLeft - left - slider.offsetLeft);
      if (d < distance) {
        distance = d;
        best = index;
      }
    });
    return best;
  };

  const update = () => {
    const index = nearestIndex();
    current.textContent = String(index + 1).padStart(2, '0');
    progress.style.width = `${((index + 1) / slides.length) * 100}%`;
    prev.disabled = index === 0;
    next.disabled = index === slides.length - 1;
  };

  const go = (direction) => {
    const index = nearestIndex();
    const target = Math.max(0, Math.min(slides.length - 1, index + direction));
    slides[target].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  };

  prev.addEventListener('click', () => go(-1));
  next.addEventListener('click', () => go(1));
  slider.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
  slider.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') { event.preventDefault(); go(1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); go(-1); }
  });

  const style = document.createElement('style');
  style.textContent = `
    .transform-slider-controls{display:grid;grid-template-columns:auto auto 1fr auto;align-items:center;gap:18px;margin:0 0 26px}
    .transform-slider-hint{display:flex;align-items:center;gap:10px;font-size:.72rem;font-weight:800;letter-spacing:.14em;color:var(--gold)}
    .transform-slider-hint svg{width:22px;height:22px;animation:sliderHint 1.8s ease-in-out infinite}
    .transform-slider-status{display:flex;align-items:baseline;gap:5px;white-space:nowrap}.transform-slider-status strong{font-size:1.45rem;color:var(--ink)}.transform-slider-status span{font-size:.78rem;color:var(--brown)}
    .transform-slider-progress{height:3px;background:rgba(43,33,25,.14);overflow:hidden}.transform-slider-progress i{display:block;height:100%;width:${100 / slides.length}%;background:var(--gold);transition:width .3s ease}
    .transform-slider-buttons{display:flex;gap:8px}.transform-slider-buttons button{width:44px;height:44px;border:1px solid var(--gold);background:var(--paper);color:var(--ink);display:grid;place-items:center;cursor:pointer}.transform-slider-buttons button:disabled{opacity:.28;cursor:default}.transform-slider-buttons svg{width:19px;height:19px}
    .has-clear-slider .transform-grid{display:flex!important;gap:18px!important;overflow-x:auto!important;scroll-snap-type:x mandatory;padding:0 max(34px,8vw) 18px 0!important;scrollbar-width:none;-webkit-overflow-scrolling:touch}
    .has-clear-slider .transform-grid::-webkit-scrollbar{display:none}
    .has-clear-slider .transform-grid>article{flex:0 0 min(82vw,520px)!important;scroll-snap-align:start;min-width:0}
    @keyframes sliderHint{0%,100%{transform:translateX(0)}50%{transform:translateX(7px)}}
    @media(max-width:680px){
      .transform-slider-controls{grid-template-columns:1fr auto;gap:12px;margin-bottom:18px}
      .transform-slider-hint{font-size:.66rem}.transform-slider-status{justify-self:end}.transform-slider-progress{grid-column:1/-1}.transform-slider-buttons{display:none}
      .has-clear-slider .transform-grid{padding-right:16vw!important;gap:14px!important}
      .has-clear-slider .transform-grid>article{flex-basis:82vw!important}
    }
    @media(prefers-reduced-motion:reduce){.transform-slider-hint svg{animation:none}}
  `;
  document.head.appendChild(style);

  update();
  if (window.lucide) window.lucide.createIcons();

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      observer.disconnect();
      window.setTimeout(() => {
        slider.scrollBy({ left: Math.min(70, slider.clientWidth * 0.16), behavior: 'smooth' });
        window.setTimeout(() => slider.scrollTo({ left: 0, behavior: 'smooth' }), 650);
      }, 650);
    }, { threshold: .45 });
    observer.observe(section);
  }
})();