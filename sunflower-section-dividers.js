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
      isolation:isolate;
    }
    .sunflower-divider img{
      display:block;
      width:100%;
      height:auto;
      max-width:none;
      object-fit:contain;
      object-position:center;
      transform:none;
      filter:
        drop-shadow(0 -8px 10px rgba(62,45,24,.15))
        drop-shadow(0 10px 12px rgba(62,45,24,.24))
        drop-shadow(0 18px 26px rgba(62,45,24,.13));
      will-change:filter;
    }
    .sunflower-divider:after{
      content:"";
      position:absolute;
      left:4%;
      right:4%;
      bottom:4%;
      height:18%;
      border-radius:50%;
      background:rgba(63,45,24,.14);
      filter:blur(20px);
      z-index:-1;
      opacity:.55;
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
        filter:
          drop-shadow(0 -5px 7px rgba(62,45,24,.13))
          drop-shadow(0 7px 9px rgba(62,45,24,.22))
          drop-shadow(0 12px 18px rgba(62,45,24,.12));
      }
      .sunflower-divider:after{
        left:7%;
        right:7%;
        bottom:3%;
        height:16%;
        filter:blur(14px);
        opacity:.48;
      }
    }
  `;
  document.head.appendChild(style);
})();