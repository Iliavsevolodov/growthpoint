(() => {
  const skills = document.querySelector('.skills');
  if (!skills) return;

  const grid = skills.querySelector('.skill-grid');
  if (!grid) return;

  grid.innerHTML = `
    <article class="skill visible"><b>01</b><i data-lucide="messages-square"></i><h3>Коммуникация</h3><p>Знакомиться, слышать человека, задавать вопросы и естественно переходить к предложению.</p></article>
    <article class="skill visible"><b>02</b><i data-lucide="mic-2"></i><h3>Голос и уверенность</h3><p>Записывать голосовые сообщения и видеокружочки, говорить спокойно, живо и убедительно.</p></article>
    <article class="skill visible"><b>03</b><i data-lucide="camera"></i><h3>Эстетичные фотографии</h3><p>Снимать красивые, живые и аккуратные фотографии на телефон: свет, композиция, ракурс, детали и обработка без сложной техники.</p></article>
    <article class="skill visible"><b>04</b><i data-lucide="heart"></i><h3>Жизненный контент</h3><p>Показывать повседневность, семью, работу, интересы и личную историю так, чтобы блог вызывал доверие и ощущение настоящего человека.</p></article>
    <article class="skill visible"><b>05</b><i data-lucide="clapperboard"></i><h3>Видео</h3><p>Работать с камерой, записывать короткие ролики, Stories, Reels и простые разговорные видео без страха и перегруза.</p></article>
    <article class="skill visible"><b>06</b><i data-lucide="scissors"></i><h3>Базовый монтаж</h3><p>Освоить понятное приложение для монтажа: обрезка, музыка, субтитры, переходы, скорость и сборка готового ролика.</p></article>
    <article class="skill visible"><b>07</b><i data-lucide="pen-tool"></i><h3>Контент-система</h3><p>Создавать посты, истории и видео не хаотично, а по понятным рубрикам, смыслам и задачам.</p></article>
    <article class="skill visible"><b>08</b><i data-lucide="brain-circuit"></i><h3>Искусственный интеллект</h3><p>Использовать ИИ для идей, текстов, сценариев, визуалов, контент-планов и экономии времени.</p></article>
    <article class="skill visible"><b>09</b><i data-lucide="user-round-check"></i><h3>Личный образ</h3><p>Формировать узнаваемую подачу человека, которому доверяют и за которым хочется идти.</p></article>
    <article class="skill visible"><b>10</b><i data-lucide="crown"></i><h3>Лидерство</h3><p>Запускать новых партнёров, поддерживать их и передавать систему дальше в команду.</p></article>`;

  const heading = skills.querySelector('.section-heading h2');
  if (heading) heading.innerHTML = 'Навыки для блога, жизни<br>и <em>своего направления</em>';

  const note = document.createElement('p');
  note.className = 'skills-extra-note';
  note.innerHTML = '<strong>Главная задача — не стать профессиональным фотографом или монтажёром.</strong> Вы научитесь создавать красивый, понятный и живой контент самостоятельно, используя телефон и доступные приложения.';
  grid.after(note);

  const style = document.createElement('style');
  style.textContent = `
    .skills .skill-grid{grid-template-columns:repeat(5,minmax(0,1fr))!important;gap:14px!important}
    .skills .skill{min-height:300px!important;padding:26px 22px!important;opacity:1!important;visibility:visible!important;transform:none!important}
    .skills .skill h3{font-size:1.22rem!important;line-height:1.15!important;margin-bottom:12px!important}
    .skills .skill p{font-size:.9rem!important;line-height:1.58!important}
    .skills-extra-note{max-width:920px;margin:34px auto 0;padding:24px 28px;border-left:4px solid #cf9119;background:rgba(255,250,241,.72);font-size:1rem;line-height:1.7;color:#624d39}
    .skills-extra-note strong{display:block;color:#261d14;margin-bottom:6px}
    @media(max-width:1100px){.skills .skill-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important}}
    @media(max-width:620px){
      .skills .skill-grid{grid-template-columns:1fr!important;gap:12px!important}
      .skills .skill{min-height:0!important;padding:24px 20px!important}
      .skills-extra-note{margin-top:24px;padding:20px 18px;font-size:.94rem}
    }
  `;
  document.head.appendChild(style);

  if (window.lucide) window.lucide.createIcons();
})();
