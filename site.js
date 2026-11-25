/* =========================================================
   ENVIRA: SITE SETTINGS
   Edit this block once and every page updates.
   ========================================================= */
const ENVIRA = {
  email: 'contact@envira.org',            // main contact email
  partnershipsEmail: 'partnerships@envira.org',
  linkedin: '',                            // e.g. 'https://www.linkedin.com/company/envira'
  instagram: '',                           // e.g. 'https://www.instagram.com/envira'
  youtube: '',                             // channel link
  github: '',                              // e.g. 'https://github.com/yourname'
  applyLink: '',                           // Google Form link for ambassadors (blank = email)

  /* HOME PAGE INTRO VIDEO
     Paste the ID of a YouTube video to replace the animated intro.
     For https://www.youtube.com/watch?v=AbC123xYz the ID is 'AbC123xYz'.
     Leave '' to use the built-in animated drone dive. */
  introYouTubeId: ''
};

/* =========================================================
   LANDSCAPE PHOTOS (Wikimedia Commons, loaded straight from Commons)
   Each is credited in the footer.
   ========================================================= */
const COMMONS = name => 'https://commons.wikimedia.org/wiki/Special:FilePath/' + encodeURIComponent(name) + '?width=1920';
const PHOTOS = {
  satellite: { file: 'Sundarbans.jpg', credit: 'NASA Earth Observatory (Landsat 7)', what: 'Sundarbans & Gangetic delta from orbit' },
  paddyKolkata: { file: 'Paddy_fields_on_the_outskirts_of_Kolkata.jpg', credit: 'Dr. Asim Kumar Chowdhury', what: 'Paddy fields outside Kolkata' },
  sundarbanVillage: { file: 'Villages_in_Sundarban,_South_24_Parganas_08.jpg', credit: 'Pinakpani', what: 'Village in the Sundarbans, South 24 Parganas' },
  bongaPaddy: { file: 'Bonga_paddy_feilds.jpg', credit: 'Supriyo2178', what: 'Paddy fields near Bongaon' }
};
const photoURL = key => COMMONS(PHOTOS[key].file);

(function () {
  const page = document.body.dataset.page || '';
  const links = [
    ['index.html', 'Home', 'home'],
    ['research.html', 'Research & Policy', 'research'],
    ['education.html', 'Education', 'education'],
    ['join.html', 'Join Us', 'join']
  ];
  const apply = ENVIRA.applyLink || ('mailto:' + ENVIRA.email + '?subject=Envira%20Ambassador%20Application');
  const logo = (cls = '') => `<a class="logo ${cls}" href="index.html"><img src="images/logo-dark-mark.png" alt="Envira logo"><span class="word">ENVIRA</span><span class="div"></span><span class="sub">Research · Policy<br>Education</span></a>`;

  /* header */
  const hdr = document.createElement('header');
  hdr.className = 'hdr';
  hdr.innerHTML = `<div class="wrap">${logo()}<div class="hdr-right"><a class="hdr-link" href="join.html">Join Us</a><button class="burger" aria-label="Open menu"><span></span><span></span><span></span></button></div></div>`;
  document.body.prepend(hdr);
  const onScroll = () => hdr.classList.toggle('solid', window.scrollY > 60);
  addEventListener('scroll', onScroll); onScroll();

  /* full-screen menu */
  const menu = document.createElement('div');
  menu.className = 'menu';
  menu.innerHTML = `<button class="close" aria-label="Close menu">×</button>
    <nav>${links.map(([h, t, k], i) => `<a href="${h}" class="${k === page ? 'active' : ''}"><small>0${i + 1}</small>${t}</a>`).join('')}</nav>
    <aside>
      <div><h4>Contact</h4><a href="mailto:${ENVIRA.email}">${ENVIRA.email}</a><a href="mailto:${ENVIRA.partnershipsEmail}">${ENVIRA.partnershipsEmail}</a></div>
      <div><h4>Where we work</h4>Kolkata &amp; rural West Bengal<br>Local communities in the United States</div>
      <div><h4>Get involved</h4><a href="${apply}">Apply as an Ambassador →</a></div>
    </aside>`;
  document.body.append(menu);
  const toggle = open => { menu.classList.toggle('open', open); document.body.style.overflow = open ? 'hidden' : ''; };
  hdr.querySelector('.burger').onclick = () => toggle(true);
  menu.querySelector('.close').onclick = () => toggle(false);
  addEventListener('keydown', e => e.key === 'Escape' && toggle(false));

  /* footer */
  const icon = {
    linkedin: '<svg viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.6 8.65 21 11.3 21 14.7V21h-4v-5.6c0-1.34-.02-3.06-1.86-3.06-1.87 0-2.15 1.46-2.15 2.96V21H9z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.8.07 3.25.15 4.77 1.7 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.22-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.13 15.6 2.12 15.2 2.12 12s.01-3.58.07-4.85C2.34 3.93 3.86 2.38 7.11 2.23 8.38 2.2 8.76 2.2 12 2.2zm0 4.86a4.94 4.94 0 100 9.88 4.94 4.94 0 000-9.88zm0 8.15a3.2 3.2 0 110-6.42 3.2 3.2 0 010 6.42zm5.13-9.5a1.15 1.15 0 100 2.3 1.15 1.15 0 000-2.3z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.6 15.6V8.4l6.2 3.6z"/></svg>',
    github: '<svg viewBox="0 0 24 24"><path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.26.8-.58v-2.03c-3.34.72-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.82.58A12 12 0 0012 .5z"/></svg>',
    mail: '<svg viewBox="0 0 24 24"><path d="M2 5h20v14H2zm2 2v.5l8 5 8-5V7zm16 10V9.85l-8 5-8-5V17z"/></svg>'
  };
  const social = ['linkedin', 'instagram', 'youtube', 'github']
    .map(k => `<a href="${ENVIRA[k] || '#'}" ${ENVIRA[k] ? 'target="_blank" rel="noopener"' : ''} aria-label="${k}">${icon[k]}</a>`).join('');
  const ftr = document.createElement('footer');
  ftr.className = 'ftr';
  ftr.innerHTML = `<div class="wrap">
    <div class="ftr-grid">
      <div>${logo()}<p>Driving Global Sustainability, One Solution at a Time. Climate research, policy tools and education, from rural West Bengal to your local town hall.</p>
        <div class="socials">${social}<a href="mailto:${ENVIRA.email}" aria-label="email">${icon.mail}</a></div></div>
      <div><h4>Explore</h4><ul>${links.map(([h, t]) => `<li><a href="${h}">${t}</a></li>`).join('')}</ul></div>
      <div><h4>Live Tools</h4><ul>
        <li><a href="https://carbon-arbitrage.streamlit.app/" target="_blank" rel="noopener">Carbon Arbitrage</a></li>
        <li><a href="https://decarbonization-policy-final.streamlit.app/" target="_blank" rel="noopener">Decarbonization Policy</a></li>
        <li><a href="https://arunlandfillmethanefinal.streamlit.app/" target="_blank" rel="noopener">Landfill Methane</a></li>
        <li><a href="https://us-county-hiddenchampions-saf-pilot-v1.streamlit.app/" target="_blank" rel="noopener">Climate Tech Networks</a></li>
        <li><a href="https://drive.google.com/file/d/1mZivHKf5g9Bf-9r10wjyDVkcw150IDR6/view" target="_blank" rel="noopener">Climate Finance Paper</a></li>
      </ul></div>
      <div><h4>Contact</h4><ul>
        <li><a href="mailto:${ENVIRA.email}">${ENVIRA.email}</a></li>
        <li><a href="mailto:${ENVIRA.partnershipsEmail}">${ENVIRA.partnershipsEmail}</a></li>
        <li><a href="${apply}">Apply as an Ambassador</a></li>
        ${ENVIRA.linkedin ? `<li><a href="${ENVIRA.linkedin}" target="_blank" rel="noopener">LinkedIn</a></li>` : ''}
        ${ENVIRA.instagram ? `<li><a href="${ENVIRA.instagram}" target="_blank" rel="noopener">Instagram</a></li>` : ''}
      </ul></div>
    </div>
    <div class="ftr-bottom"><span>© ${new Date().getFullYear()} Envira. All rights reserved.</span><span>Kolkata · West Bengal · New York</span></div>
    <p class="credits">Landscape photos via Wikimedia Commons: ${Object.values(PHOTOS).map(p => `<a href="https://commons.wikimedia.org/wiki/File:${encodeURIComponent(p.file)}" target="_blank" rel="noopener">${p.what} (${p.credit})</a>`).join(' · ')}</p>
  </div>`;
  document.body.append(ftr);

  document.querySelectorAll('[data-apply]').forEach(a => a.href = apply);
  document.querySelectorAll('[data-email]').forEach(a => a.href = 'mailto:' + ENVIRA.email);

  /* photo slots: your local file first, then a Commons photo (data-commons), then a labeled placeholder */
  document.querySelectorAll('.photo img').forEach(img => {
    const slot = img.closest('.photo');
    const ph = document.createElement('div');
    ph.className = 'ph';
    ph.innerHTML = `<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-8 8"/></svg><b>${img.alt || 'Add photo'}</b><code>${img.getAttribute('src')}</code>`;
    slot.append(ph);
    const miss = () => {
      const k = img.dataset.commons;
      if (k && !img.dataset.tried) { img.dataset.tried = 1; img.src = photoURL(k); const c = document.createElement('span'); c.className = 'credit-tag'; c.textContent = PHOTOS[k].what + ' · ' + PHOTOS[k].credit; slot.append(c); return; }
      slot.classList.add('missing'); slot.querySelector('.credit-tag')?.remove();
    };
    if (img.complete && img.naturalWidth === 0) miss();
    img.addEventListener('error', miss);
  });

  /* monochrome / full-bleed background photos */
  document.querySelectorAll('[data-bg]').forEach(el => {
    const url = photoURL(el.dataset.bg), probe = new Image();
    probe.onload = () => { el.style.backgroundImage = `url("${url}")`; el.classList.add('bg-loaded'); };
    probe.src = url;
  });

  /* circular slideshows: <div class="orb" data-orb="paddyKolkata,sundarbanVillage"> */
  document.querySelectorAll('.orb[data-orb]').forEach(orb => {
    orb.insertAdjacentHTML('beforeend', '<div class="orb-mark"><img src="images/logo-dark-mark.png" alt=""></div><div class="orb-cap"></div>');
    const keys = orb.dataset.orb.split(','), slides = [], cap = orb.querySelector('.orb-cap');
    keys.forEach(k => {
      const s = document.createElement('div'); s.className = 'slide'; s.dataset.k = k;
      const probe = new Image();
      probe.onload = () => { s.style.backgroundImage = `url("${photoURL(k)}")`; slides.push(s); orb.prepend(s); orb.classList.add('has-photo'); if (slides.length === 1) show(0); };
      probe.src = photoURL(k);
    });
    let i = 0;
    function show(n) { slides.forEach((s, j) => s.classList.toggle('on', j === n)); cap.textContent = PHOTOS[slides[n].dataset.k].what; }
    setInterval(() => { if (slides.length > 1) { i = (i + 1) % slides.length; show(i); } }, 6000);
  });

  /* scroll reveal, bar fills, counters */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    el.classList.add('in');
    el.querySelectorAll('.bar-fill[data-w]').forEach(b => b.style.width = b.dataset.w);
    el.querySelectorAll('[data-count]').forEach(countUp);
    io.unobserve(el);
  }), { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  function countUp(el) {
    const end = parseFloat(el.dataset.count), dec = (el.dataset.count.split('.')[1] || '').length, t0 = performance.now();
    (function tick(t) { const p = Math.min(1, (t - t0) / 1800); el.firstChild.textContent = (end * (1 - Math.pow(1 - p, 3))).toFixed(dec); if (p < 1) requestAnimationFrame(tick); })(t0);
  }
})();
