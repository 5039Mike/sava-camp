  // day tabs
  document.querySelectorAll('.day-tab').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.day-tab').forEach(b=>b.classList.remove('active'));
      document.querySelectorAll('.day-panel').forEach(p=>p.classList.remove('active'));
      btn.classList.add('active');
      document.querySelector('[data-day-panel="'+btn.dataset.day+'"]').classList.add('active');
    });
  });

  // faq accordion
  document.querySelectorAll('.faq-item').forEach(item=>{
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    q.addEventListener('click', ()=>{
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i=>{
        i.classList.remove('open');
        i.querySelector('.faq-a').style.maxHeight = null;
      });
      if(!isOpen){
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  // mobile menu (simple show/hide of nav links)
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelector('nav.links');
  menuToggle.addEventListener('click', ()=>{
    const isShown = navLinks.style.display === 'flex';
    navLinks.style.display = isShown ? 'none' : 'flex';
    navLinks.style.cssText += isShown ? '' : 'position:absolute; top:100%; left:0; right:0; background:#EDE6D2; flex-direction:column; padding:20px 28px; border-bottom:1px solid #B5A97B; gap:18px;';
  });
