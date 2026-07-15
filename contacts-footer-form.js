(() => {
  const existingFooter = document.querySelector('footer.final');
  if (!existingFooter || document.querySelector('.contact-application')) return;

  const contactSection = document.createElement('section');
  contactSection.className = 'section contact-application';
  contactSection.innerHTML = `
    <div class="contact-shell">
      <div class="contact-copy reveal visible">
        <span class="chapter">19 / Следующий шаг</span>
        <h2>Присоединиться можно<br><em>в любой момент.</em></h2>
        <p class="contact-lead">У проекта нет фиксированных сроков и закрытых наборов. Можно прийти тогда, когда вы готовы начать, задать вопросы и спокойно познакомиться с системой.</p>
        <div class="contact-note">
          <strong>Без спешки и давления</strong>
          <span>Оставьте контакты — я свяжусь с вами и помогу понять, подходит ли вам проект.</span>
        </div>
        <div class="contact-links" aria-label="Контакты Ильи Всеволодова">
          <a href="https://vk.ru/ilyavsevolodov" target="_blank" rel="noopener noreferrer"><span>VK</span><b>Илья Всеволодов</b></a>
          <a href="https://www.instagram.com/ilya_vsevolodov?igsh=dG5tNHdqNW5zdTlo&utm_source=qr" target="_blank" rel="noopener noreferrer"><span>Instagram</span><b>@ilya_vsevolodov</b></a>
          <a href="https://telegram.me/ilya_mlm" target="_blank" rel="noopener noreferrer"><span>Telegram</span><b>@ilya_mlm</b></a>
        </div>
      </div>

      <form class="application-form reveal visible" novalidate>
        <div class="form-head">
          <span>Заявка на знакомство</span>
          <h3>Давайте начнём с короткого диалога</h3>
          <p>Заполните форму. После отправки текст заявки скопируется, и откроется Telegram Ильи — останется только вставить сообщение.</p>
        </div>

        <label>
          <span>Имя и фамилия</span>
          <input type="text" name="fullName" autocomplete="name" placeholder="Например, Анна Петрова" required>
        </label>

        <label>
          <span>Номер телефона</span>
          <input type="tel" name="phone" autocomplete="tel" inputmode="tel" placeholder="+7 900 000-00-00" required>
        </label>

        <fieldset>
          <legend>Удобный мессенджер</legend>
          <label class="messenger-option"><input type="radio" name="messenger" value="Telegram" checked><span>Telegram</span></label>
          <label class="messenger-option"><input type="radio" name="messenger" value="MAX"><span>MAX</span></label>
        </fieldset>

        <label class="consent-row">
          <input type="checkbox" name="consent" required>
          <span>Согласен(на) на обработку указанных данных для обратной связи.</span>
        </label>

        <button type="submit">Отправить заявку</button>
        <p class="form-status" role="status" aria-live="polite"></p>
      </form>
    </div>
  `;

  existingFooter.before(contactSection);

  existingFooter.classList.add('site-footer-ready');
  existingFooter.innerHTML = `
    <div class="footer-inner">
      <div>
        <span class="footer-kicker">ТОЧКА РОСТА</span>
        <h2>Новая глава может начаться с одного шага.</h2>
        <p>Система, наставничество, современные инструменты и среда для тех, кто готов двигаться вперёд.</p>
      </div>
      <nav class="footer-nav" aria-label="Контакты">
        <a href="https://vk.ru/ilyavsevolodov" target="_blank" rel="noopener noreferrer">VK</a>
        <a href="https://www.instagram.com/ilya_vsevolodov?igsh=dG5tNHdqNW5zdTlo&utm_source=qr" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://telegram.me/ilya_mlm" target="_blank" rel="noopener noreferrer">Telegram</a>
      </nav>
    </div>
    <div class="footer-bottom">
      <span>Илья Всеволодов</span>
      <span>Присоединиться можно в любой момент</span>
      <span>© ${new Date().getFullYear()}</span>
    </div>
  `;

  const form = contactSection.querySelector('.application-form');
  const status = contactSection.querySelector('.form-status');

  form?.addEventListener('submit', async (event) => {
    event.preventDefault();
    status.textContent = '';

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const fullName = String(data.get('fullName') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const messenger = String(data.get('messenger') || 'Telegram');
    const message = `Здравствуйте, Илья! Хочу познакомиться с проектом «Точка роста».\n\nИмя: ${fullName}\nТелефон: ${phone}\nУдобный мессенджер: ${messenger}`;

    try {
      await navigator.clipboard.writeText(message);
      status.textContent = 'Заявка скопирована. Сейчас откроется Telegram — вставьте сообщение в диалог.';
    } catch (error) {
      status.textContent = 'Откроется Telegram. Отправьте Илье имя, телефон и удобный мессенджер.';
    }

    form.querySelector('button[type="submit"]').textContent = 'Заявка подготовлена';
    setTimeout(() => window.open('https://telegram.me/ilya_mlm', '_blank', 'noopener,noreferrer'), 350);
  });

  const style = document.createElement('style');
  style.textContent = `
    .contact-application{position:relative;background:linear-gradient(145deg,#2c2118,#17110d);color:#fff8ec;overflow:hidden}
    .contact-application:before{content:"";position:absolute;width:520px;height:520px;border-radius:50%;right:-250px;top:-220px;border:1px solid rgba(244,185,30,.22);box-shadow:0 0 0 70px rgba(244,185,30,.035),0 0 0 140px rgba(244,185,30,.025)}
    .contact-shell{position:relative;z-index:1;max-width:1180px;margin:0 auto;display:grid;grid-template-columns:minmax(0,1fr) minmax(380px,.85fr);gap:clamp(34px,6vw,84px);align-items:start}
    .contact-copy .chapter{color:#f4b91e}
    .contact-copy h2{font-size:clamp(2.7rem,6vw,6rem);line-height:.98;margin:24px 0 28px;max-width:760px}
    .contact-copy h2 em{color:#f4b91e}
    .contact-lead{font-size:clamp(1.05rem,1.8vw,1.3rem);line-height:1.75;color:#e6dacb;max-width:700px}
    .contact-note{margin:34px 0;padding:24px 26px;border-left:5px solid #f4b91e;background:rgba(255,255,255,.055);display:grid;gap:8px}
    .contact-note strong{font-size:1.15rem}.contact-note span{color:#d7cbbb;line-height:1.6}
    .contact-links{display:grid;gap:10px}
    .contact-links a{display:flex;justify-content:space-between;gap:20px;align-items:center;padding:16px 18px;border:1px solid rgba(244,185,30,.25);color:#fff8ec;text-decoration:none;transition:background .25s ease,border-color .25s ease}
    .contact-links a:hover{background:rgba(244,185,30,.09);border-color:rgba(244,185,30,.65)}
    .contact-links span{color:#f4b91e;font-size:.76rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase}.contact-links b{font-weight:600;text-align:right}

    .application-form{background:#fffaf1;color:#2b2119;padding:clamp(28px,4vw,46px);box-shadow:0 28px 70px rgba(0,0,0,.28);display:grid;gap:20px}
    .form-head>span{font-size:.72rem;letter-spacing:.16em;text-transform:uppercase;color:#aa7414;font-weight:800}
    .form-head h3{font-size:clamp(1.9rem,3.4vw,3rem);line-height:1.06;margin:14px 0}
    .form-head p{color:#745f4a;line-height:1.65;margin:0 0 8px}
    .application-form>label{display:grid;gap:9px}.application-form>label>span,.application-form legend{font-size:.82rem;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:#6f573e}
    .application-form input[type="text"],.application-form input[type="tel"]{width:100%;box-sizing:border-box;border:1px solid rgba(117,83,39,.28);background:#fff;padding:16px 17px;font:inherit;color:#2b2119;outline:none;border-radius:0}
    .application-form input:focus{border-color:#c98b17;box-shadow:0 0 0 3px rgba(201,139,23,.12)}
    .application-form fieldset{border:0;padding:0;margin:0;display:flex;gap:10px;flex-wrap:wrap}.application-form legend{margin-bottom:10px}
    .messenger-option{position:relative}.messenger-option input{position:absolute;opacity:0;pointer-events:none}.messenger-option span{display:block;padding:12px 18px;border:1px solid rgba(117,83,39,.28);cursor:pointer;font-weight:700;background:#fff}.messenger-option input:checked+span{background:#f4b91e;border-color:#f4b91e;color:#241b13}
    .consent-row{grid-template-columns:20px 1fr!important;align-items:start;gap:10px!important}.consent-row input{margin-top:3px}.consent-row span{text-transform:none!important;letter-spacing:0!important;font-weight:500!important;line-height:1.5!important;color:#745f4a!important}
    .application-form button{border:0;background:#2b2119;color:#fff8ec;padding:17px 22px;font:inherit;font-weight:800;cursor:pointer;transition:transform .2s ease,background .2s ease}.application-form button:hover{background:#b77a12;transform:translateY(-2px)}
    .form-status{min-height:24px;margin:0;color:#8b651d;font-weight:700;line-height:1.45}

    .site-footer-ready{position:relative!important;min-height:0!important;padding:54px clamp(22px,5vw,72px) 24px!important;background:#120d0a!important;color:#fff8ec!important;text-align:left!important;overflow:hidden!important}
    .site-footer-ready .footer-inner{max-width:1180px;margin:0 auto;display:grid;grid-template-columns:minmax(0,1fr) auto;gap:40px;align-items:end}
    .footer-kicker{color:#f4b91e;font-size:.72rem;font-weight:800;letter-spacing:.16em}.site-footer-ready h2{font-size:clamp(2rem,4vw,4rem);line-height:1.02;max-width:780px;margin:16px 0}.site-footer-ready p{max-width:720px;color:#cdbfae;line-height:1.7}
    .footer-nav{display:grid;gap:12px;text-align:right}.footer-nav a{color:#fff8ec;text-decoration:none;font-weight:700}.footer-nav a:hover{color:#f4b91e}
    .footer-bottom{max-width:1180px;margin:46px auto 0;padding-top:20px;border-top:1px solid rgba(255,255,255,.12);display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;color:#9d8f80;font-size:.82rem}

    @media(max-width:860px){
      .contact-shell{grid-template-columns:1fr}.contact-application{padding-top:72px!important;padding-bottom:72px!important}.application-form{max-width:680px;width:100%;box-sizing:border-box}
      .site-footer-ready .footer-inner{grid-template-columns:1fr}.footer-nav{text-align:left;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.footer-nav a{padding:12px 0;border-top:1px solid rgba(255,255,255,.12)}
    }
    @media(max-width:560px){
      .contact-application{padding:58px 20px!important}.contact-copy h2{font-size:2.75rem}.contact-links a{align-items:flex-start;flex-direction:column;gap:6px}.contact-links b{text-align:left;overflow-wrap:anywhere}
      .application-form{padding:26px 20px}.application-form fieldset{display:grid;grid-template-columns:1fr 1fr}.messenger-option span{text-align:center}
      .site-footer-ready{padding:44px 20px 20px!important}.footer-nav{grid-template-columns:1fr}.footer-bottom{display:grid;gap:8px;margin-top:34px}
    }
  `;
  document.head.appendChild(style);
})();