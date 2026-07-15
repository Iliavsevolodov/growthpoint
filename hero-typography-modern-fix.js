(() => {
  const fontLink = document.createElement('link');
  fontLink.rel = 'stylesheet';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,500;1,600;1,700&family=Onest:wght@400;500;600;700;800;900&display=swap';
  document.head.appendChild(fontLink);

  const style = document.createElement('style');
  style.textContent = `
    :root{
      --display-font:"Onest",sans-serif;
      --body-font:"Onest",sans-serif;
      --accent-font:"Cormorant Garamond",serif;
    }

    body{
      font-family:var(--body-font)!important;
      font-optical-sizing:auto;
      font-feature-settings:"ss01" 1,"ss02" 1;
    }

    h1,h2,h3,.big-number,.welcome,.footer-kicker,.contact-note strong{
      font-family:var(--display-font)!important;
      font-weight:750!important;
      text-wrap:balance;
    }

    p,li,a,button,input,label,legend,small,span{
      font-family:var(--body-font);
    }

    .section h2 em,
    .hero h1 em,
    .manifest,
    .mini-quote,
    .quote-line,
    .goal-caption,
    .center-note,
    .paper-card blockquote,
    .gold-frame blockquote{
      font-family:var(--accent-font)!important;
      font-style:italic!important;
      font-weight:600!important;
      letter-spacing:-.035em!important;
      line-height:.92!important;
    }

    .hero{
      min-height:auto!important;
      justify-content:flex-start!important;
      padding-top:clamp(72px,8vh,112px)!important;
      padding-bottom:clamp(52px,7vh,84px)!important;
    }

    .hero .eyebrow{margin-top:0!important}

    .hero h1{
      font-size:clamp(4rem,12vw,10.5rem)!important;
      line-height:.78!important;
      letter-spacing:-.085em!important;
      margin:clamp(16px,2.4vh,26px) 0 clamp(22px,3.5vh,36px)!important;
      max-width:920px!important;
      font-weight:850!important;
    }

    .hero h1 em{
      font-size:1.08em;
      color:var(--gold)!important;
    }

    .hero-lead{
      font-size:clamp(1.15rem,2.5vw,2rem)!important;
      letter-spacing:-.035em!important;
      font-weight:650!important;
    }

    .hero-copy{
      font-size:clamp(.98rem,1.5vw,1.12rem)!important;
      line-height:1.72!important;
      font-weight:450!important;
    }

    .scroll-note{margin-top:clamp(28px,4vh,48px)!important}

    .eyebrow,.chapter{
      font-family:var(--body-font)!important;
      font-weight:750!important;
      letter-spacing:.17em!important;
    }

    h2{
      letter-spacing:-.072em!important;
      line-height:.91!important;
      font-weight:780!important;
    }

    h3{
      letter-spacing:-.035em!important;
      line-height:1.04!important;
    }

    p{letter-spacing:-.012em}

    @media(max-width:760px){
      .hero{
        min-height:auto!important;
        padding-top:56px!important;
        padding-bottom:48px!important;
        justify-content:flex-start!important;
      }

      .hero h1{
        font-size:clamp(3.35rem,17vw,5.6rem)!important;
        line-height:.76!important;
        letter-spacing:-.09em!important;
        margin:16px 0 24px!important;
      }

      .hero-lead{font-size:1.1rem!important;margin-bottom:10px!important}
      .hero-copy{font-size:.97rem!important;line-height:1.62!important;max-width:94%!important}
      .scroll-note{margin-top:28px!important}
      h2{font-size:clamp(2.25rem,11.5vw,3.9rem)!important;line-height:.92!important}
      .section{padding-left:24px!important;padding-right:24px!important}
    }
  `;
  document.head.appendChild(style);
})();