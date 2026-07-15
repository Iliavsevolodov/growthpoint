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
      height:auto;
      margin:clamp(-18px,-1vw,-8px) 0;
      overflow:visible;
      pointer-events:none;
      z-index:3;
      line-height:0;
    }
    .sunflower-divider img{
      display:block;
      width:100%;
      height:auto;
      max-width:none;
      object-fit:contain;
      object-position:center;
      transform:none;
    }
    @media(max-width:760px){
      .sunflower-divider{
        width:100%;
        height:auto;
        margin:-8px 0;
        overflow:visible;
      }
      .sunflower-divider img{
        width:100%;
        height:auto;
        max-width:none;
        margin:0;
        object-fit:contain;
        transform:none;
      }
    }
  `;
  document.head.appendChild(style);
})();