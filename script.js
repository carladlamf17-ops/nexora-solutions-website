(() => {
  const body = document.body;
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#navigation');
  const closeMenu = () => {menu?.setAttribute('aria-expanded','false'); nav?.classList.remove('open');};
  menu?.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded',String(open));
    nav.classList.toggle('open',open);
  });
  nav?.addEventListener('click', e => {if(e.target.closest('a')) closeMenu();});
  document.addEventListener('keydown', e => {if(e.key === 'Escape') closeMenu();});
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const motion = document.querySelector('.motion-toggle');
  let manuallyPaused = false;
  let carouselTimer;
  const frames = [...document.querySelectorAll('.featured-frame')];
  const controls = [...document.querySelectorAll('[data-slide]')];
  const stage = document.querySelector('.hero-stage');
  let currentSlide = 0;
  let hovered = false;
  let focusWithin = false;
  function selectSlide(index){
    currentSlide = index;
    frames.forEach((frame,n)=>{
      const active = n===index;
      frame.classList.toggle('active',active);
      frame.inert = !active;
      frame.setAttribute('aria-hidden',String(!active));
      controls[n]?.setAttribute('aria-pressed',String(active));
    });
    const frame = frames[index];
    if(!frame) return;
    const phone = stage.querySelector('.phone-screen');
    const hasMobile = Boolean(frame.dataset.mobile);
    stage.classList.toggle('solo-screen',!hasMobile);
    phone.inert = !hasMobile;
    phone.setAttribute('aria-hidden',String(!hasMobile));
    if(hasMobile){
      const button = phone.querySelector('button');
      const image = button.querySelector('img');
      image.src = '/assets/screens/'+frame.dataset.mobile;
      image.alt = frame.dataset.project+' Android';
      image.width = Number(frame.dataset.mobileWidth);
      image.height = Number(frame.dataset.mobileHeight);
      button.dataset.caption = frame.dataset.mobileCaption;
      button.setAttribute('aria-label',frame.dataset.mobileCaption);
    }
    const label = stage.querySelector('.stage-label');
    label.href = frame.dataset.url;
    label.querySelector('span:nth-child(2)').replaceChildren(document.createTextNode(frame.dataset.project));
    const caption = document.createElement('small');
    caption.textContent = frame.dataset.caption;
    label.querySelector('span:nth-child(2)').append(caption);
    stage.querySelector('.window-bar>span:nth-child(2)').textContent = frame.dataset.project.toUpperCase();
  }
  function scheduleCarousel(){
    clearInterval(carouselTimer);
    if(frames.length && !reduced.matches && !manuallyPaused && !document.hidden && !hovered && !focusWithin){
      carouselTimer = setInterval(()=>selectSlide((currentSlide+1)%frames.length),8000);
    }
  }
  controls.forEach((button,n)=>button.addEventListener('click',()=>{selectSlide(n);scheduleCarousel();}));
  stage?.addEventListener('mouseenter',()=>{hovered=true;scheduleCarousel();});
  stage?.addEventListener('mouseleave',()=>{hovered=false;scheduleCarousel();});
  stage?.addEventListener('focusin',()=>{focusWithin=true;scheduleCarousel();});
  stage?.addEventListener('focusout',e=>{if(!stage.contains(e.relatedTarget)){focusWithin=false;scheduleCarousel();}});
  document.addEventListener('visibilitychange',scheduleCarousel);
  try {manuallyPaused = sessionStorage.getItem('nexora-motion') === 'paused';} catch {}
  function applyMotion() {
    const paused = reduced.matches || manuallyPaused;
    body.classList.toggle('motion-paused',paused);
    motion?.setAttribute('aria-pressed',String(paused));
    if(motion) motion.querySelector('span').textContent = paused ? motion.dataset.resume : motion.dataset.pause;
    motion?.classList.toggle('available',!reduced.matches && Boolean(document.querySelector('.hero,.reveal')));
    scheduleCarousel();
  }
  motion?.addEventListener('click',() => {
    manuallyPaused = !manuallyPaused;
    try {sessionStorage.setItem('nexora-motion',manuallyPaused?'paused':'running');} catch {}
    applyMotion();
  });
  reduced.addEventListener('change',applyMotion);
  applyMotion();
  const coverReplay = document.querySelector('.magazine-replay');
  if (coverReplay) {
    const coverSheet = coverReplay.previousElementSibling;
    coverReplay.hidden = false;
    coverReplay.addEventListener('click', () => {
      coverSheet.classList.remove('magazine-cover-playing');
      void coverSheet.offsetWidth;
      coverSheet.classList.add('magazine-cover-playing');
    });
  }
  const magazineIndex = document.querySelector('.magazine-index');
  if (magazineIndex) {
    const toggle = magazineIndex.querySelector('.magazine-index-toggle');
    const indexBody = magazineIndex.querySelector('#magazine-index-body');
    const currentLabel = magazineIndex.querySelector('.magazine-index-current');
    const indexHead = magazineIndex.querySelector('.magazine-index-head');
    const mobile = matchMedia('(max-width: 850px)');
    const entries = [...indexBody.querySelectorAll('ol a, a[href="#respuesta"]')]
      .map(link => ({link, article: document.getElementById(link.dataset.magazineSection || link.hash.slice(1))}));
    let active;
    let frame;
    function updateReadingIndex() {
      frame = undefined;
      const offset = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
      const readingLine = offset + (mobile.matches ? indexHead.offsetHeight : 0) + 20;
      let next;
      for (const entry of entries) {
        if (entry.article.getBoundingClientRect().top > readingLine) break;
        next = entry.link;
      }
      if (next === active) return;
      active?.removeAttribute('aria-current');
      active = next;
      active?.setAttribute('aria-current', 'location');
      currentLabel.textContent = active ? (active.querySelector('strong') || active).textContent.trim() : '';
      currentLabel.hidden = !active;
    }
    function queueIndexUpdate() {
      if (frame === undefined) frame = requestAnimationFrame(updateReadingIndex);
    }
    function setIndexExpanded(expanded) {
      indexBody.hidden = !expanded;
      toggle.setAttribute('aria-expanded', String(expanded));
      queueIndexUpdate();
    }
    function syncIndexLayout() {
      if (!mobile.matches && document.activeElement === toggle) entries[0].link.focus();
      toggle.hidden = !mobile.matches;
      if (mobile.matches && indexBody.contains(document.activeElement)) toggle.focus({preventScroll: true});
      setIndexExpanded(!mobile.matches);
    }
    magazineIndex.classList.add('magazine-index-ready');
    toggle.addEventListener('click', () => setIndexExpanded(indexBody.hidden));
    indexBody.addEventListener('click', event => {
      const link = event.target.closest('a');
      if (!mobile.matches || !link?.hash || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      toggle.focus({preventScroll: true});
      setIndexExpanded(false);
    });
    mobile.addEventListener('change', syncIndexLayout);
    window.addEventListener('scroll', queueIndexUpdate, {passive: true});
    window.addEventListener('resize', queueIndexUpdate);
    window.addEventListener('hashchange', queueIndexUpdate);
    window.addEventListener('load', queueIndexUpdate, {once: true});
    syncIndexLayout();
  }
  if('IntersectionObserver' in window && !reduced.matches){
    body.classList.add('motion-ready');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if(entry.isIntersecting){entry.target.classList.add('in-view'); observer.unobserve(entry.target);}
    }),{threshold:.12});
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
  const dialog = document.querySelector('.screen-dialog');
  let opener;
  if(dialog && typeof dialog.showModal === 'function') {
    document.querySelectorAll('.screen-open').forEach(button => button.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      if (button.matches('a')) event.preventDefault();
      opener = button;
      const source = button.querySelector('img');
      dialog.querySelector('img').src = source.src;
      dialog.querySelector('img').alt = source.alt;
      dialog.querySelector('p').textContent = button.dataset.caption;
      dialog.showModal(); body.classList.add('modal-open');
    }));
    dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', e => {if(e.target === dialog) dialog.close();});
    dialog.addEventListener('close', () => {body.classList.remove('modal-open'); opener?.focus({preventScroll:true});});
  }
})();
