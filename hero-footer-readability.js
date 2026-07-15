(() => {
  const style = document.createElement('style');
  style.textContent = `
    .hero::after{
      content:"";
      position:absolute;
      inset:0;
      background:linear-gradient(90deg,rgba(247,241,229,.97) 0%,rgba(247,241,229,.9) 48%,rgba(247,241,229,.48) 72%,rgba(247,241,229,.08) 100%);
      pointer-events:none;
      z-index:0;
    }
    .hero>*:not(.real-sunflower){position:relative;z-index:2}
    .hero .eyebrow,
    .hero h1,
    .hero .hero-lead,
    .hero .hero-copy,
    .hero .scroll-note{
      max-width:min(760px,68vw);
    }
    .hero .hero-copy{
      color:#4f3c2a!important;
      text-shadow:0 1px 0 rgba(255,255,255,.72);
    }
    .hero h1,
    .hero .hero-lead{
      text-shadow:0 2px 18px rgba(255,255,255,.7);
    }

    footer.final.site-footer-ready::before,
    footer.final::before{
      content:"";
      position:absolute;
      inset:0;
      background:linear-gradient(90deg,rgba(247,241,229,.98) 0%,rgba(247,241,229,.94) 52%,rgba(247,241,229,.55) 76%,rgba(247,241,229,.08) 100%);
      pointer-events:none;
      z-index:0;
    }
    footer.final>*:not(.real-sunflower){position:relative;z-index:2}
    footer.final p,
    footer.final h2,
    footer.final .welcome,
    footer.final .eyebrow,
    footer.final .footer-inner,
    footer.final .footer-bottom{
      max-width:min(790px,70vw);
    }
    footer.final p{color:#3d3025!important;text-shadow:0 1px 0 rgba(255,255,255,.72)}
    footer.final h2{color:#211912!important;text-shadow:0 2px 18px rgba(255,255,255,.72)}

    @media(max-width:760px){
      .hero::after{
        background:linear-gradient(90deg,rgba(247,241,229,.98) 0%,rgba(247,241,229,.93) 58%,rgba(247,241,229,.55) 78%,rgba(247,241,229,.14) 100%);
      }
      .hero .eyebrow,
      .hero h1,
      .hero .hero-lead,
      .hero .hero-copy,
      .hero .scroll-note{
        max-width:86%!important;
      }
      .hero .hero-copy{
        background:rgba(255,250,241,.58);
        -webkit-backdrop-filter:blur(10px);
        backdrop-filter:blur(10px);
        border:1px solid rgba(255,255,255,.42);
        box-shadow:0 14px 34px rgba(73,51,23,.08);
        border-radius:20px;
        padding:16px 18px;
      }
      footer.final::before,
      footer.final.site-footer-ready::before{
        background:linear-gradient(90deg,rgba(247,241,229,.98) 0%,rgba(247,241,229,.95) 60%,rgba(247,241,229,.52) 82%,rgba(247,241,229,.12) 100%);
      }
      footer.final p,
      footer.final h2,
      footer.final .welcome,
      footer.final .eyebrow,
      footer.final .footer-inner,
      footer.final .footer-bottom{
        max-width:86%!important;
      }
      footer.final p{
        background:rgba(255,250,241,.58);
        -webkit-backdrop-filter:blur(10px);
        backdrop-filter:blur(10px);
        border:1px solid rgba(255,255,255,.42);
        box-shadow:0 14px 34px rgba(73,51,23,.08);
        border-radius:20px;
        padding:16px 18px;
      }
    }
  `;
  document.head.appendChild(style);
})();
