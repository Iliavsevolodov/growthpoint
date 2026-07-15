(() => {
  const imagePath = 'images/Photoroom_20260715_113746.png';

  const replaceFlower = (selector, className) => {
    const current = document.querySelector(selector);
    if (!current) return;

    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = '';
    img.setAttribute('aria-hidden', 'true');
    img.className = `real-sunflower ${className}`;
    current.replaceWith(img);
  };

  replaceFlower('.hero .hero-flower', 'hero-real-sunflower');
  replaceFlower('.final .final-flower', 'final-real-sunflower');

  const style = document.createElement('style');
  style.textContent = `
    .hero,.final{overflow:hidden!important}
    .real-sunflower{
      position:absolute;
      display:block;
      width:auto;
      height:auto;
      pointer-events:none;
      user-select:none;
      z-index:0;
      transform:scaleX(-1);
      transform-origin:50% 70%;
      filter:drop-shadow(0 22px 28px rgba(55,38,18,.18));
      animation:sunflowerSway 6.5s ease-in-out infinite;
      will-change:transform;
    }
    .hero-real-sunflower{
      right:-5vw;
      bottom:-9vh;
      width:min(49vw,690px);
      max-height:92%;
      object-fit:contain;
      object-position:right bottom;
    }
    .final-real-sunflower{
      right:-6vw;
      bottom:-15vh;
      width:min(44vw,610px);
      max-height:100%;
      object-fit:contain;
      object-position:right bottom;
      animation-delay:-2.2s;
    }
    .hero>*:not(.real-sunflower),.final>*:not(.real-sunflower){position:relative;z-index:1}
    @keyframes sunflowerSway{
      0%,100%{transform:scaleX(-1) rotate(-1deg) translateY(0)}
      50%{transform:scaleX(-1) rotate(1.4deg) translateY(-8px)}
    }
    @media(max-width:760px){
      .hero-real-sunflower{
        right:-26vw;
        bottom:-3vh;
        width:78vw;
        max-height:78%;
        opacity:.96;
      }
      .final-real-sunflower{
        right:-28vw;
        bottom:-5vh;
        width:75vw;
        max-height:82%;
        opacity:.96;
      }
    }
    @media(prefers-reduced-motion:reduce){
      .real-sunflower{animation:none!important;transform:scaleX(-1)!important}
    }
  `;
  document.head.appendChild(style);
})();
