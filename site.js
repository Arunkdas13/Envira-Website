/* =========================================================
   ENVIRA: SITE SETTINGS
   Edit this block once and every page updates.
   ========================================================= */
const ENVIRA = {
  email: 'contact@envira.org',
  partnershipsEmail: 'partnerships@envira.org',
  linkedin: '', instagram: '', youtube: '', github: '',
  applyLink: '',            // Google Form link for ambassadors (blank = email)

  /* HOME PAGE INTRO VIDEO: paste a YouTube video ID to replace the drone dive.
     For https://www.youtube.com/watch?v=AbC123xYz the ID is 'AbC123xYz'. */
  introYouTubeId: ''
};

/* =========================================================
   REAL PHOTOS: Wikimedia Commons (CC-licensed or public domain).
   Loaded straight from Commons and credited on the page + in the footer.
   To use your own photo, set `file` to a local path like 'images/schools/x.jpg'.
   ========================================================= */
const PHOTOS = {
  delta:      { file: 'Meghna River sediment in the Bay of Bengal (MODIS 2019-11-24).jpg', by: 'NASA MODIS', lic: 'Public domain', cap: 'The Ganges–Brahmaputra delta from orbit', place: 'Bay of Bengal' },
  paddyAir:   { file: 'Gajan, Burdwan, West Bengal, (IMG 7747).jpg', by: 'Sammya Brata', lic: 'CC BY-SA 4.0', cap: 'Paddy fields from above', place: 'Bardhaman, West Bengal' },
  village:    { file: 'Villages in Sundarban, South 24 Parganas 08.jpg', by: 'Pinakpani', lic: 'CC BY-SA 4.0', cap: 'A river village in the Sundarbans', place: 'South 24 Parganas' },
  village2:   { file: 'Villages in Sundarban, South 24 Parganas 04.jpg', by: 'Pinakpani', lic: 'CC BY-SA 4.0', cap: 'Thatched house on an embankment road', place: 'South 24 Parganas' },
  girls:      { file: 'Woman and Girl - Sukumari Village - Sundarban District - South of Kolkata - India (12346555163).jpg', by: 'Adam Jones', lic: 'CC BY-SA 2.0', cap: 'A woman and girl in Sukumari village', place: 'Sundarbans, West Bengal' },
  harvest:    { file: 'Field work (23613626326).jpg', by: 'juggadery', lic: 'CC BY-SA 2.0', cap: 'Harvesting rice', place: 'Satjelia island, Sundarbans' },
  plough:     { file: 'Ploughing with cattle in West Bengal.jpg', by: 'ILRI', lic: 'CC BY 2.0', cap: 'Ploughing with oxen', place: 'Kadmati village, West Bengal' },
  sunset:     { file: 'End of Winter. New plantation. Paddy field. Sunset (16527970625).jpg', by: 'Abhijit Kar Gupta', lic: 'CC BY 2.0', cap: 'New paddy at the end of winter', place: 'Ruppur, Nadia district' },
  jute:       { file: 'A jute farmer in the flooded fields of West Bengal.jpg', by: 'Shafi fotumcatcher', lic: 'CC BY-SA 4.0', cap: 'A jute farmer in flooded fields', place: 'West Bengal' },
  flood:      { file: 'Kalinagar Floods B.JPG', by: 'Soumyasch', lic: 'CC BY-SA 3.0', cap: 'Monsoon floodwater that stays for weeks', place: 'Kalinagar, West Bengal' },
  pond:       { file: 'A pond and its green surrounding.jpg', by: 'Billjones94', lic: 'CC BY-SA 4.0', cap: 'A village pond', place: 'West Bengal' },
  monsoon:    { file: 'Sundarban Landscape during monsoon 17.jpg', by: 'Kingshuk Mondal', lic: 'CC BY 4.0', cap: 'Monsoon over the Sundarbans', place: 'Sundarbans, West Bengal' },
  mudflats:   { file: 'Sunderbans Tiger reserve india David Raju (6).jpg', by: 'David V. Raju', lic: 'CC BY-SA 4.0', cap: 'Working the mudflats', place: 'Sundarban Tiger Reserve' },
  rain:       { file: 'India - Kolkata rainy street - 3811.jpg', by: 'Jorge Royan', lic: 'CC BY-SA 3.0', cap: 'A rainy evening', place: 'Kolkata' },
  amphan:     { file: 'Post Cyclone Amphan situation of Shyambazar in Kolkata 04.jpg', by: 'Indrajit Das', lic: 'CC BY-SA 4.0', cap: 'After Cyclone Amphan, May 2020', place: 'Shyambazar, Kolkata' },
  hooghly:    { file: 'Hooghly river from Princep Ghat during sunset, Kolkata 01.jpg', by: 'Slyronit', lic: 'CC BY-SA 4.0', cap: 'The Hooghly at sunset', place: 'Prinsep Ghat, Kolkata' },
  skyline:    { file: 'Kolkata Skyline From Vidyasagar Seti 2.jpg', by: 'Innocentbunny', lic: 'CC BY-SA 3.0', cap: 'Kolkata from Vidyasagar Setu', place: 'Kolkata' },
  ghats:      { file: 'The ghats of the Hooghly River in Kolkata, India.jpg', by: 'Vyacheslav Argenberg', lic: 'CC BY 4.0', cap: 'The ghats of the Hooghly', place: 'Kolkata' },
  schoolgirls:{ file: 'Village girls West Bengal.JPG', by: 'Ilya Mauter', lic: 'CC BY 3.0', cap: 'Girls on the way home', place: 'Navadwip, West Bengal' },
  townhall:   { file: 'Mt. Kisco Village Hall October 2013.jpg', by: 'Chris Pruitt', lic: 'CC BY-SA 3.0', cap: 'A village hall in Westchester County', place: 'Mount Kisco, New York' }
};
const isLocal = f => /^(images\/|\.\/)/.test(f);
const photoURL = (k, w = 1920) => isLocal(PHOTOS[k].file) ? PHOTOS[k].file : 'https://commons.wikimedia.org/wiki/Special:FilePath/' + encodeURIComponent(PHOTOS[k].file) + '?width=' + w;
const photoPage = k => 'https://commons.wikimedia.org/wiki/File:' + encodeURIComponent(PHOTOS[k].file.replace(/ /g, '_'));
const creditText = k => `${PHOTOS[k].cap}, ${PHOTOS[k].place}. Photo: ${PHOTOS[k].by} (${PHOTOS[k].lic})`;

(function () {
  const page = document.body.dataset.page || '';
  const links = [['index.html', 'Home', 'home'], ['policy.html', 'Climate Policy', 'policy'], ['research.html', 'Research & Tools', 'research'], ['education.html', 'Education', 'education'], ['join.html', 'Join Us', 'join']];
  const apply = ENVIRA.applyLink || ('mailto:' + ENVIRA.email + '?subject=Envira%20Ambassador%20Application');
  const logo = () => `<a class="logo" href="index.html"><img src="images/logo-dark-mark.png" alt="Envira logo"><span class="word">ENVIRA</span><span class="div"></span><span class="sub">Research · Policy<br>Education</span></a>`;

  /* header */
  const hdr = document.createElement('header');
  hdr.className = 'hdr';
  hdr.innerHTML = `<div class="wrap">${logo()}<div class="hdr-right"><a class="hdr-link" href="policy.html">Climate Policy</a><a class="hdr-link" href="join.html">Join Us</a><button class="burger" aria-label="Open menu"><span></span><span></span><span></span></button></div></div>`;
  document.body.prepend(hdr);
  const onScroll = () => hdr.classList.toggle('solid', window.scrollY > 60);
  addEventListener('scroll', onScroll); onScroll();

  /* full-screen menu, with a real photo behind the contact column */
  const menu = document.createElement('div');
  menu.className = 'menu';
  menu.innerHTML = `<button class="close" aria-label="Close menu">×</button>
    <nav>${links.map(([h, t, k], i) => `<a href="${h}" class="${k === page ? 'active' : ''}"><small>0${i + 1}</small>${t}</a>`).join('')}</nav>
    <aside><div class="bg-photo" data-bg="hooghly"></div>
      <div><h4>Contact</h4><a href="mailto:${ENVIRA.email}">${ENVIRA.email}</a><a href="mailto:${ENVIRA.partnershipsEmail}">${ENVIRA.partnershipsEmail}</a></div>
      <div><h4>Where we work</h4>Kolkata &amp; rural West Bengal<br>Local communities in the United States</div>
      <div><h4>Get involved</h4><a href="${apply}">Apply as an Ambassador →</a></div>
    </aside>`;
  document.body.append(menu);
  const toggle = open => { menu.classList.toggle('open', open); document.body.style.overflow = open ? 'hidden' : ''; };
  hdr.querySelector('.burger').onclick = () => toggle(true);
  menu.querySelector('.close').onclick = () => toggle(false);
  addEventListener('keydown', e => e.key === 'Escape' && toggle(false));

  /* real photo figures: <figure class="fig" data-photo="key"> */
  document.querySelectorAll('figure.fig[data-photo]').forEach(fig => {
    const k = fig.dataset.photo; if (!PHOTOS[k]) return;
    const img = new Image();
    img.alt = PHOTOS[k].cap + ', ' + PHOTOS[k].place; img.className = 'loading'; img.loading = 'lazy';
    img.onload = () => img.classList.remove('loading');
    img.src = photoURL(k, fig.dataset.w || 1400);
    fig.prepend(img);
    if (!fig.hasAttribute('data-nocap')) {
      const c = document.createElement('figcaption');
      c.innerHTML = `<b>${PHOTOS[k].cap}</b><span>${PHOTOS[k].place} · Photo: ${PHOTOS[k].by}, ${PHOTOS[k].lic}</span>`;
      fig.append(c);
    }
  });

  /* full-bleed background photos (heroes, bands, sector halves) */
  document.querySelectorAll('[data-bg]').forEach(el => {
    const k = el.dataset.bg, url = photoURL(k), probe = new Image();
    probe.onload = () => { el.style.backgroundImage = `url("${url}")`; el.classList.add('bg-loaded'); };
    probe.src = url;
    const host = el.parentElement;
    if (host.matches('.hero, .band')) {
      const c = document.createElement('span'); c.className = 'photo-credit'; c.textContent = creditText(k); host.append(c);
    }
  });

  /* circular slideshows: <div class="orb" data-orb="key1,key2"> */
  document.querySelectorAll('.orb[data-orb]').forEach(orb => {
    orb.insertAdjacentHTML('beforeend', '<div class="orb-mark"><img src="images/logo-dark-mark.png" alt=""></div><div class="orb-cap"></div>');
    const slides = [], cap = orb.querySelector('.orb-cap');
    orb.dataset.orb.split(',').forEach(k => {
      const s = document.createElement('div'); s.className = 'slide'; s.dataset.k = k;
      const probe = new Image();
      probe.onload = () => { s.style.backgroundImage = `url("${photoURL(k, 1200)}")`; slides.push(s); orb.prepend(s); orb.classList.add('has-photo'); if (slides.length === 1) show(0); };
      probe.src = photoURL(k, 1200);
    });
    let i = 0;
    function show(n) { slides.forEach((s, j) => s.classList.toggle('on', j === n)); const p = PHOTOS[slides[n].dataset.k]; cap.textContent = p.cap + ' · ' + p.place; }
    setInterval(() => { if (slides.length > 1) { i = (i + 1) % slides.length; show(i); } }, 6000);
  });

  /* footer */
  const icon = {
    linkedin: '<svg viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.6 8.65 21 11.3 21 14.7V21h-4v-5.6c0-1.34-.02-3.06-1.86-3.06-1.87 0-2.15 1.46-2.15 2.96V21H9z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.8.07 3.25.15 4.77 1.7 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.22-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.13 15.6 2.12 15.2 2.12 12s.01-3.58.07-4.85C2.34 3.93 3.86 2.38 7.11 2.23 8.38 2.2 8.76 2.2 12 2.2zm0 4.86a4.94 4.94 0 100 9.88 4.94 4.94 0 000-9.88zm0 8.15a3.2 3.2 0 110-6.42 3.2 3.2 0 010 6.42zm5.13-9.5a1.15 1.15 0 100 2.3 1.15 1.15 0 000-2.3z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.6 15.6V8.4l6.2 3.6z"/></svg>',
    github: '<svg viewBox="0 0 24 24"><path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.26.8-.58v-2.03c-3.34.72-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.82.58A12 12 0 0012 .5z"/></svg>',
    mail: '<svg viewBox="0 0 24 24"><path d="M2 5h20v14H2zm2 2v.5l8 5 8-5V7zm16 10V9.85l-8 5-8-5V17z"/></svg>'
  };
  const social = ['linkedin', 'instagram', 'youtube', 'github'].map(k => `<a href="${ENVIRA[k] || '#'}" ${ENVIRA[k] ? 'target="_blank" rel="noopener"' : ''} aria-label="${k}">${icon[k]}</a>`).join('');
  const used = [...new Set([...document.querySelectorAll('[data-bg],[data-photo],[data-orb]')].flatMap(e => (e.dataset.bg || e.dataset.photo || e.dataset.orb).split(',')))].filter(k => PHOTOS[k] && !isLocal(PHOTOS[k].file));
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
        ${['linkedin', 'instagram'].filter(k => ENVIRA[k]).map(k => `<li><a href="${ENVIRA[k]}" target="_blank" rel="noopener">${k === 'linkedin' ? 'LinkedIn' : 'Instagram'}</a></li>`).join('')}
      </ul></div>
    </div>
    <div class="ftr-bottom"><span>© ${new Date().getFullYear()} Envira. All rights reserved.</span><span>Kolkata · West Bengal · New York</span></div>
    <p class="credits">Photographs via Wikimedia Commons: ${used.map(k => `<a href="${photoPage(k)}" target="_blank" rel="noopener">${PHOTOS[k].cap}</a> (${PHOTOS[k].by}, ${PHOTOS[k].lic})`).join(' · ')}</p>
  </div>`;
  document.body.append(ftr);

  document.querySelectorAll('[data-apply]').forEach(a => a.href = apply);
  document.querySelectorAll('[data-email]').forEach(a => a.href = 'mailto:' + ENVIRA.email);

  /* scroll reveal, bar fills, counters */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    el.classList.add('in');
    el.querySelectorAll('.bar-fill[data-w]').forEach(b => b.style.width = b.dataset.w);
    io.unobserve(el);
  }), { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();
