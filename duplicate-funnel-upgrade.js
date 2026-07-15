(() => {
  const duplicate = document.querySelector('.duplicate');
  const funnel = document.querySelector('.funnel');

  if (duplicate) {
    const path = duplicate.querySelector('.dup-path');
    if (path) {
      path.innerHTML = `
        <article><b>01</b><i data-lucide="footprints"></i><div><h3>Учусь сама</h3><p>Осваиваю систему на практике и делаю первые действия.</p></div></article>
        <article><b>02</b><i data-lucide="trophy"></i><div><h3>Получаю результат</h3><p>Закрепляю навыки и вижу, какие действия действительно работают.</p></div></article>
        <article><b>03</b><i data-lucide="network"></i><div><h3>Создаю команду</h3><p>Нахожу своих людей и формирую первые сильные связи.</p></div></article>
        <article><b>04</b><i data-lucide="users-round"></i><div><h3>Запускаю партнёров</h3><p>Помогаю новичкам пройти тот же понятный путь без хаоса.</p></div></article>
        <article><b>05</b><i data-lucide="git-branch-plus"></i><div><h3>Передаю систему дальше</h3><p>Система начинает работать не только через меня, но и через команду.</p></div></article>`;
    }
  }

  if (funnel) {
    const list = funnel.querySelector('.funnel-list');
    if (list) {
      list.innerHTML = `
        <div class="funnel-intro"><span>Это не обещание результата</span><p>Это пример логики: чем шире круг новых знакомств, тем выше вероятность найти людей, которым действительно откликнется идея.</p></div>
        <div class="funnel-row visible" style="--w:100%"><strong>500–1000</strong><span>потенциал новой аудитории</span><small>люди, с которыми можно познакомиться через контент, сообщества и рекомендации</small></div>
        <div class="funnel-row visible" style="--w:82%"><strong>100</strong><span>новых знакомств и контактов</span><small>живые диалоги без давления и массового спама</small></div>
        <div class="funnel-row visible" style="--w:64%"><strong>10</strong><span>готовы познакомиться с идеей</span><small>задают вопросы и хотят узнать больше</small></div>
        <div class="funnel-row visible" style="--w:46%"><strong>1</strong><span>действительно включается</span><small>принимает решение действовать и проходит запуск</small></div>
        <div class="funnel-row final visible" style="--w:100%"><strong>5–10</strong><span>активных партнёров первой линии</span><small>формируются постепенно благодаря регулярной системной работе</small></div>`;
    }
  }

  const style = document.createElement('style');
  style.textContent = `
    .duplicate{overflow:hidden}
    .duplicate .dup-path{display:grid!important;grid-template-columns:repeat(5,minmax(0,1fr))!important;gap:0!important;overflow:visible!important;align-items:stretch!important;position:relative!important;padding:0!important}
    .duplicate .dup-path:before{content:"";position:absolute;left:8%;right:8%;top:48px;height:2px;background:linear-gradient(90deg,#d19924,#eed59a);z-index:0}
    .duplicate .dup-path article{position:relative;z-index:1;display:flex!important;flex-direction:column;align-items:flex-start;gap:14px;background:#fffaf1;border:1px solid rgba(190,132,24,.42);padding:24px 20px;min-width:0!important;min-height:250px}
    .duplicate .dup-path article+article{border-left:0}
    .duplicate .dup-path article>b{width:34px;height:34px;border-radius:50%;display:grid;place-items:center;background:#cf9119;color:#fff;font-size:.72rem;letter-spacing:.08em}
    .duplicate .dup-path article>svg{width:34px;height:34px;color:#c88b18;margin-top:8px}
    .duplicate .dup-path article h3{font-size:1.25rem;line-height:1.15;margin:0 0 10px}
    .duplicate .dup-path article p{font-size:.92rem;line-height:1.55;color:#725c45;margin:0}
    .duplicate>.manifest{max-width:920px;margin:48px auto 0!important;padding:30px 34px;border-left:5px solid #cf9119;background:rgba(255,250,241,.75);text-align:left!important;font-size:clamp(1.35rem,2.6vw,2.15rem)!important;line-height:1.4}

    .funnel .funnel-list{display:grid!important;gap:14px!important;max-width:1100px;margin:0 auto}
    .funnel-intro{padding:24px 26px;background:#f3e4c9;border:1px solid rgba(190,132,24,.3);margin-bottom:8px}
    .funnel-intro span{display:block;font-size:.72rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:#a66f12;margin-bottom:8px}
    .funnel-intro p{margin:0;color:#6b5540;line-height:1.65}
    .funnel .funnel-row{opacity:1!important;visibility:visible!important;transform:none!important;width:var(--w)!important;max-width:100%!important;margin:0!important;display:grid!important;grid-template-columns:minmax(120px,180px) minmax(0,1fr)!important;gap:4px 24px!important;align-items:center!important;background:#fffaf1!important;border:1px solid rgba(190,132,24,.28)!important;border-left:8px solid #efb51f!important;padding:22px 26px!important;color:#2b2119!important;min-height:118px!important;box-sizing:border-box!important}
    .funnel .funnel-row strong{grid-row:1 / span 2;font-size:clamp(2rem,4vw,3.5rem)!important;color:#c98b17!important;line-height:1!important;text-decoration:none!important}
    .funnel .funnel-row span{font-size:clamp(1.02rem,2vw,1.35rem)!important;font-weight:800!important;line-height:1.25!important;color:#2b2119!important}
    .funnel .funnel-row small{display:block!important;font-size:.88rem;line-height:1.5;color:#79634f}
    .funnel .funnel-row.final{width:100%!important;background:#2b2119!important;border-color:#2b2119!important;border-left-color:#f4b91e!important;color:#fff8ec!important;margin-top:12px!important}
    .funnel .funnel-row.final strong{color:#f4b91e!important}
    .funnel .funnel-row.final span{color:#fff8ec!important;font-size:clamp(1.25rem,2.7vw,1.8rem)!important}
    .funnel .funnel-row.final small{color:#dfd1bf!important}
    .funnel .small-note{max-width:920px;margin:28px auto 0!important;line-height:1.65!important;color:#7b654f!important}

    @media(max-width:860px){
      .duplicate .dup-path{grid-template-columns:1fr!important;gap:14px!important;padding-left:34px!important}
      .duplicate .dup-path:before{left:16px!important;right:auto!important;top:30px!important;bottom:30px!important;width:2px!important;height:auto!important;background:linear-gradient(180deg,#d19924,#eed59a)!important}
      .duplicate .dup-path article{min-height:0!important;border-left:1px solid rgba(190,132,24,.42)!important;display:grid!important;grid-template-columns:42px 38px 1fr!important;align-items:start!important;padding:22px 18px!important}
      .duplicate .dup-path article>b{margin-left:-48px;box-shadow:0 0 0 7px #f6efe2}
      .duplicate .dup-path article>svg{margin:2px 0 0}
      .duplicate .dup-path article h3{font-size:1.2rem}
      .duplicate>.manifest{margin-top:34px!important;padding:24px 22px!important}

      .funnel{padding-bottom:64px!important}
      .funnel .funnel-list{gap:12px!important}
      .funnel .funnel-row{width:100%!important;grid-template-columns:100px minmax(0,1fr)!important;padding:20px 18px!important;gap:5px 16px!important;min-height:0!important}
      .funnel .funnel-row strong{font-size:2rem!important}
      .funnel .funnel-row span{font-size:1rem!important}
      .funnel .funnel-row small{font-size:.8rem}
    }
    @media(max-width:480px){
      .duplicate .dup-path{padding-left:26px!important}
      .duplicate .dup-path:before{left:12px!important}
      .duplicate .dup-path article{grid-template-columns:34px 1fr!important;gap:10px 12px!important}
      .duplicate .dup-path article>b{grid-column:1;margin-left:-38px}
      .duplicate .dup-path article>svg{grid-column:1;grid-row:1;margin-left:2px}
      .duplicate .dup-path article>div{grid-column:2;grid-row:1 / span 2}
      .funnel .funnel-row{grid-template-columns:1fr!important}
      .funnel .funnel-row strong{grid-row:auto!important;margin-bottom:6px}
    }
  `;
  document.head.appendChild(style);

  if (window.lucide) window.lucide.createIcons();

  if (!document.querySelector('script[data-author-photos]')) {
    const photoScript = document.createElement('script');
    photoScript.src = 'authors-photos.js?v=authors-photos-20260715';
    photoScript.dataset.authorPhotos = 'true';
    document.body.appendChild(photoScript);
  }
})();