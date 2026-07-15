(() => {
  const selectors = [
    '.icon-grid',
    '.skill-grid',
    '.inside-grid',
    '.two-col',
    '.tool-grid',
    '.benefits-grid',
    '.format-grid'
  ];

  const rails = selectors
    .flatMap((selector) => Array.from(document.querySelectorAll(selector)))
    .filter((rail, index, list) => list.indexOf(rail) === index)
    .filter((rail) => rail.children.length > 1 && !rail.closest('.contact-application'));

  rails.forEach((rail, railIndex) => {
    rail.classList.add('horizontal-card-rail');
    rail.setAttribute('tabindex', '0');
    rail.setAttribute('aria-label', 'Горизонтальная лента карточек');

    const section = rail.closest('section');
    if (!section || section.querySelector(`.card-rail-controls[data-rail="${railIndex}"]`)) return;

    const controls = document.createElement('div');
    controls.className = 'card-rail-controls';
    controls.dataset.rail = String(railIndex);
    controls.innerHTML = `
      <span class="card-rail-hint">Листайте карточки</span>
      <div class="card-rail-actions">
        <button type="button" class="card-rail-prev" aria-label="Предыдущая карточка">←</button>
        <span class="card-rail-count">01 / ${String(rail.children.length).padStart(2, '0')}</span>
        <button type="button" class="card-rail-next" aria-label="Следующая карточка">→</button>
      </div>`;

    rail.before(controls);

    const previous = controls.querySelector('.card-rail-prev');
    const next = controls.querySelector('.card-rail-next');
    const count = controls.querySelector('.card-rail-count');

    const cardStep = () => {
      const firstCard = rail.firstElementChild;
      if (!firstCard) return rail.clientWidth * 0.82;
      const gap = parseFloat(getComputedStyle(rail).columnGap || getComputedStyle(rail).gap || 18);
      return firstCard.getBoundingClientRect().width + gap;
    };

    const updateCount = () => {
      const step = cardStep();
      const current = Math.min(
        rail.children.length,
        Math.max(1, Math.round(rail.scrollLeft / Math.max(step, 1)) + 1)
      );
      count.textContent = `${String(current).padStart(2, '0')} / ${String(rail.children.length).padStart(2, '0')}`;
      previous.disabled = rail.scrollLeft <= 4;
      next.disabled = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 4;
    };

    previous.addEventListener('click', () => rail.scrollBy({ left: -cardStep(), behavior: 'smooth' }));
    next.addEventListener('click', () => rail.scrollBy({ left: cardStep(), behavior: 'smooth' }));
    rail.addEventListener('scroll', updateCount, { passive: true });
    rail.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        rail.scrollBy({ left: cardStep(), behavior: 'smooth' });
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        rail.scrollBy({ left: -cardStep(), behavior: 'smooth' });
      }
    });

    requestAnimationFrame(updateCount);
  });

  const style = document.createElement('style');
  style.textContent = `
    .horizontal-card-rail{
      display:flex!important;
      grid-template-columns:none!important;
      gap:18px!important;
      width:100%!important;
      max-width:100%!important;
      overflow-x:auto!important;
      overflow-y:visible!important;
      scroll-snap-type:x mandatory;
      scroll-padding-inline:2px;
      overscroll-behavior-inline:contain;
      -webkit-overflow-scrolling:touch;
      scrollbar-width:none;
      padding:10px 2px 28px!important;
      margin:0!important;
    }
    .horizontal-card-rail::-webkit-scrollbar{display:none}
    .horizontal-card-rail>*{
      flex:0 0 clamp(300px,32vw,390px)!important;
      width:auto!important;
      min-width:0!important;
      max-width:none!important;
      scroll-snap-align:start;
      scroll-snap-stop:always;
      opacity:1!important;
      visibility:visible!important;
      transform:none;
    }
    .horizontal-card-rail>*:hover{transform:translateY(-5px)!important}
    .card-rail-controls{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:18px;
      margin:0 0 12px;
    }
    .card-rail-hint{
      font-size:.72rem;
      font-weight:700;
      letter-spacing:.14em;
      text-transform:uppercase;
      color:#856638;
    }
    .card-rail-actions{display:flex;align-items:center;gap:10px}
    .card-rail-actions button{
      width:42px;
      height:42px;
      border-radius:50%;
      border:1px solid rgba(156,106,22,.32);
      background:rgba(255,250,241,.78);
      color:#2b2119;
      font-size:1.15rem;
      cursor:pointer;
      transition:.25s ease;
    }
    .card-rail-actions button:hover{background:#f4b91e;border-color:#f4b91e}
    .card-rail-actions button:disabled{opacity:.28;cursor:default}
    .card-rail-count{min-width:58px;text-align:center;font-size:.72rem;font-weight:700;letter-spacing:.08em;color:#725a3f}

    @media(max-width:760px){
      .horizontal-card-rail{
        width:calc(100% + 24px)!important;
        max-width:none!important;
        padding:8px 24px 24px 0!important;
        gap:14px!important;
      }
      .horizontal-card-rail>*{
        flex-basis:min(82vw,340px)!important;
      }
      .card-rail-controls{margin-bottom:8px}
      .card-rail-hint{font-size:.66rem;letter-spacing:.11em}
      .card-rail-actions button{width:38px;height:38px}
      .horizontal-card-rail>*:hover{transform:none!important}
    }
  `;
  document.head.appendChild(style);
})();
