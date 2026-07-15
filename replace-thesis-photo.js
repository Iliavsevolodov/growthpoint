(() => {
  const image = document.querySelector('.thesis .photo-frame img');
  if (!image) return;

  image.src = 'images/Photoroom_20260715_111945.png';
  image.alt = 'Подсолнух в коллажной бумажной эстетике';
  image.loading = 'eager';

  const frame = image.closest('.photo-frame');
  if (frame) frame.classList.add('collage-sunflower-frame');

  const style = document.createElement('style');
  style.textContent = `
    .collage-sunflower-frame{
      background:transparent!important;
      overflow:visible!important;
      border:none!important;
      box-shadow:none!important;
      min-height:0!important;
      display:grid!important;
      place-items:center!important;
      padding:0!important;
    }
    .collage-sunflower-frame img{
      width:min(100%,620px)!important;
      height:auto!important;
      aspect-ratio:auto!important;
      object-fit:contain!important;
      display:block!important;
      background:transparent!important;
      filter:drop-shadow(0 18px 24px rgba(54,38,20,.2)) drop-shadow(0 7px 9px rgba(54,38,20,.12));
    }
    .collage-sunflower-frame .photo-label{
      left:4%!important;
      bottom:3%!important;
      z-index:2!important;
    }
    @media(max-width:760px){
      .collage-sunflower-frame img{
        width:min(92vw,540px)!important;
        filter:drop-shadow(0 13px 18px rgba(54,38,20,.18)) drop-shadow(0 5px 7px rgba(54,38,20,.1));
      }
    }
  `;
  document.head.appendChild(style);
})();
