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
    .collage-sunflower-frame .photo-label{left:4%!important;bottom:3%!important;z-index:2!important}
    @media(max-width:760px){
      .family-real-photo{min-height:360px}
      .author-card .person-real-photo{height:420px;min-height:0}
      .collage-sunflower-frame img{
        width:min(92vw,540px)!important;
        filter:drop-shadow(0 13px 18px rgba(54,38,20,.18)) drop-shadow(0 5px 7px rgba(54,38,20,.1));
      }
    }
  `;
  document.head.appendChild(style);
})();
