(() => {
  const thesisImage = document.querySelector('.thesis .photo-frame img');
  if (thesisImage) {
    thesisImage.src = 'images/Photoroom_20260715_111945.png';
    thesisImage.alt = 'Подсолнух в коллажной бумажной эстетике';
    thesisImage.loading = 'eager';
    thesisImage.closest('.photo-frame')?.classList.add('collage-sunflower-frame');
  }

  const authors = document.querySelector('.authors');
  if (authors) {
    const familyPlaceholder = authors.querySelector('.family-photo');
    if (familyPlaceholder) {
      const img = document.createElement('img');
      img.src = 'assets/images/IMG_2240.png';
      img.alt = 'Илья и Тамуна';
      img.loading = 'lazy';
      familyPlaceholder.replaceWith(img);
      img.className = 'author-real-photo family-real-photo';
    }

    const cards = authors.querySelectorAll('.author-card');
    const photos = [
      { src: 'assets/images/D164A552-8B02-479C-85CA-EAB4B94DE6A2.png', alt: 'Тамуна Болквадзе' },
      { src: 'assets/images/05ACEF5F-1457-402E-84FB-97AB031F1A09.png', alt: 'Илья Всеволодов' }
    ];

    cards.forEach((card, index) => {
      const placeholder = card.querySelector('.photo-placeholder');
      const photo = photos[index];
      if (!placeholder || !photo) return;

      const img = document.createElement('img');
      img.src = photo.src;
      img.alt = photo.alt;
      img.loading = 'lazy';
      img.className = 'author-real-photo person-real-photo';
      placeholder.replaceWith(img);
    });
  }

  const style = document.createElement('style');
  style.textContent = `
    .family-visual{padding:0!important;overflow:hidden}
    .author-real-photo{display:block;width:100%;height:100%;object-fit:cover}
    .family-real-photo{min-height:430px;object-position:center}
    .author-card .person-real-photo{min-height:420px;object-position:center top}

    .thesis{padding-top:clamp(42px,5vw,72px)!important;padding-bottom:clamp(42px,5vw,72px)!important}
    .thesis .editorial-split{gap:clamp(24px,4vw,54px)!important;align-items:center!important}
    .collage-sunflower-frame{
      background:transparent!important;
      overflow:visible!important;
      border:0!important;
      outline:0!important;
      box-shadow:none!important;
      min-height:0!important;
      display:grid!important;
      place-items:center!important;
      padding:0!important;
      margin:0!important;
    }
    .collage-sunflower-frame::before,
    .collage-sunflower-frame::after{display:none!important;content:none!important}
    .collage-sunflower-frame img{
      width:min(100%,620px)!important;
      height:auto!important;
      aspect-ratio:auto!important;
      object-fit:contain!important;
      display:block!important;
      background:transparent!important;
      border:0!important;
      outline:0!important;
      box-shadow:none!important;
      filter:drop-shadow(0 18px 24px rgba(54,38,20,.2)) drop-shadow(0 7px 9px rgba(54,38,20,.12));
    }
    .collage-sunflower-frame .photo-label{left:3%!important;bottom:2%!important;z-index:2!important}

    @media(max-width:760px){
      .family-real-photo{min-height:360px}
      .author-card .person-real-photo{height:420px;min-height:0}
      .thesis{padding-top:28px!important;padding-bottom:34px!important}
      .thesis .editorial-split{gap:18px!important}
      .collage-sunflower-frame{margin:0!important}
      .collage-sunflower-frame img{
        width:min(86vw,500px)!important;
        filter:drop-shadow(0 13px 18px rgba(54,38,20,.18)) drop-shadow(0 5px 7px rgba(54,38,20,.1));
      }
      .collage-sunflower-frame .photo-label{left:2%!important;bottom:1%!important}
    }
  `;
  document.head.appendChild(style);
})();