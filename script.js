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
    stage.classList.toggle('featuring-mobile',frame.dataset.project==='Ferrearca');
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
    document.querySelectorAll('.screen-open').forEach(button => button.addEventListener('click', () => {
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
