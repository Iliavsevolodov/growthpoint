// Mobile-first promo refinements and stronger project positioning
const goal = document.querySelector('.goal');
if (goal) {
  goal.innerHTML = `
    <span class="chapter reveal">05 / Главная цель</span>
    <div class="goal-card reveal">
      <div class="goal-icon"><i data-lucide="sprout"></i></div>
      <div class="big-number">5–10</div>
      <h2>активных партнёров<br>первой линии</h2>
      <p>Не случайные регистрации, а люди, близкие по взглядам, интересам и жизненным принципам. Те, кто готов действовать и способен стать началом собственной команды.</p>
      <div class="goal-caption">Понятная цель. Пошаговый путь. Система, которую можно повторить.</div>
    </div>`;
}

const contentLayout = document.querySelector('.content-layout');
if (contentLayout) {
  const wheel = contentLayout.querySelector('.content-wheel');
  if (wheel) {
    wheel.outerHTML = `
      <div class="content-map reveal">
        <div class="content-map-title"><i data-lucide="sun"></i><span>ТВОЙ ОБРАЗ</span></div>
        <div class="content-chips">
          <span>Личность</span><span>Ценности</span><span>Развитие</span>
          <span>Продукт</span><span>Команда</span><span>Результат</span>
        </div>
        <p>Контент складывается из понятных тем. Не нужно каждый день придумывать, что публиковать.</p>
      </div>`;
  }
}

const pains = document.querySelector('.pains');
if (pains) {
  pains.insertAdjacentHTML('afterend', `
    <section class="section reassurance">
      <div class="section-heading reveal">
        <span class="chapter">05 / Главное</span>
        <h2>Не нужно уметь всё.<br><em>Нужно начать с первого шага.</em></h2>
      </div>
      <div class="reassurance-grid">
        <article class="reassurance-card reveal"><i data-lucide="map"></i><h3>Есть понятный маршрут</h3><p>Не нужно самой придумывать, что делать дальше. Каждый новый навык разбираем последовательно: посмотрела, поняла, попробовала, получила обратную связь.</p></article>
        <article class="reassurance-card reveal"><i data-lucide="layers-3"></i><h3>От простого к новому</h3><p>Начинаем с базовых действий и постепенно добавляем видео, контент, ИИ и коммуникацию. Без прыжка в сложность.</p></article>
        <article class="reassurance-card reveal"><i data-lucide="hand-heart"></i><h3>Не остаёшься одна</h3><p>Вопросы, переписки, голосовые и первые видео можно разбирать. Ошибка здесь — не провал, а материал для следующего шага.</p></article>
        <article class="reassurance-card reveal"><i data-lucide="feather"></i><h3>Без сложной теории</h3><p>Короткие материалы, подкасты, примеры и готовые инструменты. Только то, что можно взять и применить в реальной работе.</p></article>
      </div>
      <div class="simple-path reveal">
        <span><b>1</b> Понять</span><i data-lucide="arrow-right"></i>
        <span><b>2</b> Повторить</span><i data-lucide="arrow-right"></i>
        <span><b>3</b> Попробовать</span><i data-lucide="arrow-right"></i>
        <span><b>4</b> Получить обратную связь</span><i data-lucide="arrow-right"></i>
        <span><b>5</b> Сделать увереннее</span>
      </div>
      <p class="reassurance-quote reveal">Справиться может каждая, кто готов учиться и делать небольшие действия регулярно. Здесь не ждут идеальности — здесь помогают выстроить навык.</p>
    </section>`);
}

const style = document.createElement('style');
style.textContent = `
.goal{background:transparent;color:var(--ink);padding-top:90px;padding-bottom:90px}.goal .chapter{color:var(--brown);display:block;text-align:left;margin-bottom:28px}.goal-card{position:relative;max-width:980px;margin:auto;padding:clamp(42px,7vw,90px);background:linear-gradient(145deg,#fffaf1,#f4e8cd);border:1px solid rgba(206,144,22,.38);box-shadow:var(--shadow);text-align:left;overflow:hidden}.goal-card:after{content:"";position:absolute;width:360px;height:360px;border-radius:50%;right:-170px;top:-170px;border:1px solid rgba(206,144,22,.3);box-shadow:0 0 0 55px rgba(244,185,30,.08),0 0 0 110px rgba(244,185,30,.05)}.goal-icon{width:64px;height:64px;display:grid;place-items:center;border-radius:50%;background:var(--yellow);margin-bottom:36px}.goal-icon svg{width:30px;height:30px}.goal .big-number{font-size:clamp(5rem,15vw,10rem);line-height:.8;margin:0 0 28px;color:var(--gold)}.goal h2{font-size:clamp(2.2rem,5vw,4.8rem);margin:0 0 28px;max-width:800px}.goal p{color:var(--brown);margin:0;max-width:720px}.goal-caption{font-family:"Playfair Display",serif;font-style:italic;font-size:clamp(1.3rem,2.5vw,2rem);color:var(--gold);margin-top:38px;max-width:760px}.content-map{min-height:460px;background:var(--paper);border:1px solid rgba(206,144,22,.35);padding:clamp(30px,5vw,58px);box-shadow:var(--shadow);display:flex;flex-direction:column;justify-content:center;position:relative;overflow:hidden}.content-map:after{content:"";position:absolute;width:250px;height:250px;border:1px solid rgba(206,144,22,.2);border-radius:50%;right:-110px;bottom:-110px}.content-map-title{display:flex;align-items:center;gap:18px;font-size:clamp(1.8rem,4vw,3.4rem);font-weight:800}.content-map-title svg{width:46px;height:46px;color:var(--gold)}.content-chips{display:flex;flex-wrap:wrap;gap:12px;margin:38px 0}.content-chips span{padding:12px 16px;background:var(--yellow);font-weight:800;transform:none!important;animation:none!important}.content-map p{color:var(--brown);line-height:1.7;max-width:500px}.reassurance{background:linear-gradient(180deg,rgba(255,250,241,.2),rgba(244,185,30,.08))}.reassurance-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}.reassurance-card{background:var(--paper);border:1px solid rgba(206,144,22,.25);padding:38px;min-height:270px}.reassurance-card svg{width:40px;height:40px;color:var(--gold);margin-bottom:28px}.reassurance-card h3{font-size:1.5rem;margin:0 0 16px}.reassurance-card p{color:var(--brown);line-height:1.7;margin:0}.simple-path{display:flex;align-items:center;gap:12px;margin:60px 0 45px;overflow-x:auto;padding:10px 0}.simple-path span{min-width:max-content;padding:16px 20px;border:1px solid var(--gold);background:var(--paper);font-weight:700}.simple-path span b{color:var(--gold);margin-right:8px}.simple-path>svg{min-width:22px;color:var(--gold)}.reassurance-quote{font-family:"Playfair Display",serif;font-style:italic;font-size:clamp(1.5rem,3vw,2.5rem);line-height:1.4;max-width:920px;margin:0 auto;text-align:center}
@media(max-width:680px){.goal{padding:64px 20px}.goal-card{padding:38px 26px;min-height:0}.goal-card:after{width:220px;height:220px;right:-130px;top:-130px}.goal-icon{width:54px;height:54px;margin-bottom:30px}.goal .big-number{font-size:5.4rem;margin-bottom:24px}.goal h2{font-size:2.15rem;line-height:1.03}.goal p{font-size:1rem;line-height:1.7}.goal-caption{font-size:1.35rem}.content-layout{grid-template-columns:1fr!important;gap:28px!important}.content-map{min-height:0;padding:34px 26px}.content-map-title{font-size:2rem}.content-map-title svg{width:36px;height:36px}.content-chips{margin:28px 0 24px}.content-chips span{font-size:.88rem;padding:10px 12px}.reassurance-grid{grid-template-columns:1fr}.reassurance-card{min-height:0;padding:30px 26px}.simple-path{display:grid;grid-template-columns:1fr;margin:42px 0 38px;overflow:visible}.simple-path span{min-width:0;width:100%}.simple-path>svg{transform:rotate(90deg);margin:auto}.reassurance-quote{text-align:left;font-size:1.6rem}}
`;
document.head.appendChild(style);

if (window.lucide) window.lucide.createIcons();

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
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
    dot.addEventListener('click', () => slide.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' }));
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
  }, { root: slider, threshold: 0.62 });
  slides.forEach((slide) => slideObserver.observe(slide));
}

const petalsContainer = document.querySelector('.petals');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (petalsContainer && !reducedMotion) {
  for (let i = 0; i < 8; i += 1) {
    const petal = document.createElement('i');
    petal.style.cssText = `position:fixed;z-index:-1;top:-30px;left:${Math.random()*100}vw;width:${10+Math.random()*12}px;height:${22+Math.random()*18}px;border-radius:90% 10% 80% 20%;background:rgba(244,185,30,${0.12+Math.random()*0.18});transform:rotate(${Math.random()*180}deg);animation:petalFall ${16+Math.random()*16}s linear ${Math.random()*-24}s infinite;`;
    petalsContainer.appendChild(petal);
  }
  const petalStyle = document.createElement('style');
  petalStyle.textContent = `@keyframes petalFall{from{transform:translate3d(0,-10vh,0) rotate(0deg)}to{transform:translate3d(10vw,115vh,0) rotate(430deg)}}`;
  document.head.appendChild(petalStyle);
}