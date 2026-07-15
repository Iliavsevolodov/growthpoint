(() => {
  const fontLink = document.createElement('link');
  fontLink.rel = 'stylesheet';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=Unbounded:wght@500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap';
  document.head.appendChild(fontLink);

  const style = document.createElement('style');
  style.textContent = `
    :root{--display-font:"Unbounded",sans-serif;--body-font:"DM Sans",sans-serif}
    body{font-family:var(--body-font)!important;font-optical-sizing:auto}
    h1,h2,h3,.big-number,.welcome,.footer-kicker,.contact-note strong{font-family:var(--display-font)!important}
    p,li,a,button,input,label,legend,small,span{font-family:var(--body-font)}
    .section h2 em,.hero h1 em,.manifest,.mini-quote,.quote-line,.goal-caption,.center-note{font-family:var(--body-font)!important;font-style:italic;font-weight:500!important;letter-spacing:-.035em}

    .hero{min-height:100svh!important;justify-content:flex-start!important;padding-top:clamp(112px,14vh,170px)!important;padding-bottom:clamp(52px,8vh,90px)!important}
    .hero .eyebrow{margin-top:0!important}
    .hero h1{font-size:clamp(3.45rem,12vw,10rem)!important;line-height:.82!important;letter-spacing:-.075em!important;margin:clamp(18px,3vh,32px) 0 clamp(24px,4vh,42px)!important;max-width:900px!important}
    .hero-lead{font-size:clamp(1.15rem,2.5vw,2rem)!important;letter-spacing:-.025em}
    .hero-copy{font-size:clamp(.98rem,1.5vw,1.12rem)!important;line-height:1.7!important}
    .scroll-note{margin-top:clamp(30px,5vh,54px)!important}

    .eyebrow,.chapter{font-family:var(--body-font)!important;font-weight:700!important;letter-spacing:.18em!important}
    h2{letter-spacing:-.065em!important;line-height:.96!important}
    .paper-card blockquote,.gold-frame blockquote{font-family:var(--body-font)!important;font-style:italic;font-weight:500}

    @media(max-width:760px){
      .hero{min-height:auto!important;padding-top:88px!important;padding-bottom:54px!important;justify-content:flex-start!important}
      .hero h1{font-size:clamp(3.35rem,18vw,5.7rem)!important;line-height:.78!important;margin:20px 0 28px!important}
      .hero-lead{font-size:1.12rem!important;margin-bottom:12px!important}
      .hero-copy{font-size:.98rem!important;line-height:1.62!important;max-width:92%!important}
      .scroll-note{margin-top:32px!important}
      h2{font-size:clamp(2.25rem,12vw,4rem)!important;line-height:.98!important}
      .section{padding-left:24px!important;padding-right:24px!important}
    }
  `;
  document.head.appendChild(style);
})();
