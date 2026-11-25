/* =========================================================
   ENVIRA — SITE SETTINGS
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
     Example: for https://www.youtube.com/watch?v=AbC123xYz, the ID is 'AbC123xYz'.
     Leave '' to use the built-in animated drone dive. */
  introYouTubeId: ''
};

/* ---------- shared navbar + footer ---------- */
(function () {
  const page = document.body.dataset.page || '';
  const links = [
    ['index.html', 'Home', 'home'],
    ['research.html', 'Research & Policy', 'research'],
    ['education.html', 'Education', 'education'],
    ['join.html', 'Join Us', 'join']
  ];
  const darkHero = document.body.dataset.darkhero === 'true';
  const apply = ENVIRA.applyLink || ('mailto:' + ENVIRA.email + '?subject=Envira%20Ambassador%20Application');

  const nav = document.createElement('nav');
  nav.className = 'navbar' + (darkHero ? ' on-dark' : '');
  nav.innerHTML = `
    <div class="nav-inner">
      <a class="brand" href="index.html"><img src="images/logo-light-mark.png" alt="Envira logo">Envira</a>
      <ul class="nav-links">${links.map(([h, t, k]) => `<li><a href="${h}" class="${k === page ? 'active' : ''}">${t}</a></li>`).join('')}</ul>
      <a class="nav-cta" href="join.html">Become an Ambassador</a>
      <button class="menu-btn" aria-label="Menu"><span></span><span></span><span></span></button>
    </div>`;
  document.body.prepend(nav);
  nav.querySelector('.menu-btn').addEventListener('click', () => nav.querySelector('.nav-links').classList.toggle('open'));
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40 || !darkHero);
  window.addEventListener('scroll', onScroll); onScroll();

  const icon = {
    linkedin: '<svg viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.6 8.65 21 11.3 21 14.7V21h-4v-5.6c0-1.34-.02-3.06-1.86-3.06-1.87 0-2.15 1.46-2.15 2.96V21H9z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.8.07 3.25.15 4.77 1.7 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.22-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.13 15.6 2.12 15.2 2.12 12s.01-3.58.07-4.85C2.34 3.93 3.86 2.38 7.11 2.23 8.38 2.2 8.76 2.2 12 2.2zm0 4.86a4.94 4.94 0 100 9.88 4.94 4.94 0 000-9.88zm0 8.15a3.2 3.2 0 110-6.42 3.2 3.2 0 010 6.42zm5.13-9.5a1.15 1.15 0 100 2.3 1.15 1.15 0 000-2.3z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.6 15.6V8.4l6.2 3.6z"/></svg>',
    github: '<svg viewBox="0 0 24 24"><path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.26.8-.58v-2.03c-3.34.72-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.82.58A12 12 0 0012 .5z"/></svg>',
    mail: '<svg viewBox="0 0 24 24"><path d="M2 5h20v14H2zm2 2v.5l8 5 8-5V7zm16 10V9.85l-8 5-8-5V17z"/></svg>'
  };
  const social = ['linkedin', 'instagram', 'youtube', 'github']
    .map(k => `<a href="${ENVIRA[k] || '#'}" ${ENVIRA[k] ? 'target="_blank" rel="noopener"' : ''} aria-label="${k}">${icon[k]}</a>`).join('');

  const foot = document.createElement('footer');
  foot.className = 'footer';
  foot.innerHTML = `
    <div class="wrap">
      <div class="foot-grid">
        <div>
          <div class="foot-brand"><img src="images/logo-dark-mark.png" alt="">Envira</div>
          <p>Driving Global Sustainability, One Solution at a Time. Climate research, policy tools and education — from rural West Bengal to your local town hall.</p>
          <div class="socials">${social}<a href="mailto:${ENVIRA.email}" aria-label="email">${icon.mail}</a></div>
        </div>
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
      <div class="foot-bottom"><span>&copy; ${new Date().getFullYear()} Envira. All rights reserved.</span><span>Research · Policy · Education</span></div>
    </div>`;
  document.body.append(foot);

  /* apply buttons anywhere on the page */
  document.querySelectorAll('[data-apply]').forEach(a => a.href = apply);
  document.querySelectorAll('[data-email]').forEach(a => { a.href = 'mailto:' + ENVIRA.email; if (!a.textContent.trim()) a.textContent = ENVIRA.email; });

  /* photo slots: show a labeled placeholder until the image file exists */
  document.querySelectorAll('.photo img').forEach(img => {
    const slot = img.closest('.photo');
    const ph = document.createElement('div');
    ph.className = 'ph';
    ph.innerHTML = `<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-8 8"/></svg><b>${img.alt || 'Add photo'}</b><code>${img.getAttribute('src')}</code>`;
    slot.append(ph);
    const miss = () => slot.classList.add('missing');
    if (img.complete && img.naturalWidth === 0) miss();
    img.addEventListener('error', miss);
  });

  /* scroll reveal + bar fills + counters */
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
    const end = parseFloat(el.dataset.count), dec = (el.dataset.count.split('.')[1] || '').length;
    const suf = el.dataset.suffix || '', t0 = performance.now(), dur = 1800;
    (function tick(t) {
      const p = Math.min(1, (t - t0) / dur), v = end * (1 - Math.pow(1 - p, 3));
      el.textContent = v.toFixed(dec) + suf;
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
  }
})();

/* ---------- drifting particle field for dark inner-page heroes ---------- */
function envField(canvas, color) {
  const ctx = canvas.getContext('2d');
  let w, h, pts;
  function size() {
    w = canvas.width = canvas.offsetWidth * devicePixelRatio;
    h = canvas.height = canvas.offsetHeight * devicePixelRatio;
    pts = Array.from({ length: 70 }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35 }));
  }
  size(); addEventListener('resize', size);
  (function loop() {
    ctx.clearRect(0, 0, w, h);
    for (const p of pts) {
      p.x = (p.x + p.vx + w) % w; p.y = (p.y + p.vy + h) % h;
      ctx.fillStyle = color; ctx.beginPath(); ctx.arc(p.x, p.y, 1.8 * devicePixelRatio, 0, 7); ctx.fill();
    }
    ctx.strokeStyle = color; ctx.lineWidth = .6 * devicePixelRatio;
    for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
      const a = pts[i], b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
      if (d < 140 * devicePixelRatio) { ctx.globalAlpha = 1 - d / (140 * devicePixelRatio); ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(loop);
  })();
}
document.querySelectorAll('canvas[data-field]').forEach(c => envField(c, c.dataset.field));
