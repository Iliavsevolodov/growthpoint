(() => {
  const imagePath = 'images/copy_3275D9C4-C427-47B8-AF06-B98D3E6A0D9D.png';
  const targets = [
    document.querySelector('.skills'),
    document.querySelector('.ai-section'),
    document.querySelector('.launch')
  ].filter(Boolean);

  targets.forEach((section, index) => {
    if (section.previousElementSibling?.classList.contains('sunflower-divider')) return;
    const divider = document.createElement('div');
    divider.className = `sunflower-divider sunflower-divider-${index + 1}`;
    divider.setAttribute('aria-hidden', 'true');
    divider.innerHTML = `<img src="${imagePath}" alt="">`;
    section.before(divider);
  });

  const style = document.createElement('style');
  style.textContent = `
    .sunflower-divider{
      position:relative;
      width:100%;
      height:clamp(92px,13vw,170px);
      margin:clamp(-30px,-2vw,-12px) 0;
      overflow:hidden;
      pointer-events:none;
      z-index:3;
    }
    .sunflower-divider img{
      display:block;
      width:100%;
      height:100%;
      object-fit:cover;
      object-position:center;
      transform:scale(1.03);
    }
    .sunflower-divider-2 img{object-position:center 56%}
    .sunflower-divider-3 img{object-position:center 44%}
    @media(max-width:760px){
      .sunflower-divider{
        height:92px;
        margin:-14px 0;
      }
      .sunflower-divider img{
        width:150%;
        max-width:none;
        margin-left:-25%;
      }
    }
  `;
  document.head.appendChild(style);
})();