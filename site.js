/* =========================================================
   ENVIRA: SITE SETTINGS (edit once, every page updates)
   ========================================================= */
const ENVIRA = {
  email: 'contact@envira.org',
  partnershipsEmail: 'partnerships@envira.org',
  linkedin: '', instagram: '', youtube: '', github: '',
  applyLink: '',            // Google Form for ambassadors (blank = email)
  /* Home page opening: paste a YouTube video ID to play your own drone footage
     in place of the photo descent. https://www.youtube.com/watch?v=AbC123 -> 'AbC123' */
  introYouTubeId: ''
};

/* =========================================================
   PHOTO LIBRARY. All from Wikimedia Commons, used under their licenses and
   credited automatically in captions and the footer. Images load straight from Commons.
   To use your own photo, replace `file` with a local path like 'images/schools/x.jpg'.
   ========================================================= */
const PHOTOS = {
  delta:      { file: 'Meghna River sediment in the Bay of Bengal (MODIS 2019-11-24).jpg', by: 'NASA MODIS Land Rapid Response Team', lic: 'Public domain', cap: 'The Ganges–Brahmaputra delta from orbit', place: 'Bay of Bengal, Nov 2019' },
  paddyAir:   { file: 'Gajan, Burdwan, West Bengal, (IMG 7747).jpg', by: 'Sammya Brata', lic: 'CC BY-SA 4.0', cap: 'Paddy fields from above', place: 'Bardhaman, West Bengal' },
  village:    { file: 'Villages in Sundarban, South 24 Parganas 08.jpg', by: 'Pinakpani', lic: 'CC BY-SA 4.0', cap: 'A river village in the Sundarbans', place: 'South 24 Parganas' },
  village2:   { file: 'Villages in Sundarban, South 24 Parganas 04.jpg', by: 'Pinakpani', lic: 'CC BY-SA 4.0', cap: 'Thatched house on an embankment road', place: 'South 24 Parganas' },
  girls:      { file: 'Woman and Girl - Sukumari Village - Sundarban District - South of Kolkata - India (12346555163).jpg', by: 'Adam Jones', lic: 'CC BY-SA 2.0', cap: 'A woman and girl in Sukumari village', place: 'Sundarbans, West Bengal' },
  harvest:    { file: 'Field work (23613626326).jpg', by: 'juggadery', lic: 'CC BY-SA 2.0', cap: 'Harvesting rice', place: 'Satjelia island, Sundarbans' },
  plough:     { file: 'Ploughing with cattle in West Bengal.jpg', by: 'ILRI', lic: 'CC BY 2.0', cap: 'Ploughing with oxen', place: 'Kadmati village, West Bengal' },
  sunset:     { file: 'End of Winter. New plantation. Paddy field. Sunset (16527970625).jpg', by: 'Abhijit Kar Gupta', lic: 'CC BY 2.0', cap: 'New paddy at the end of winter', place: 'Ruppur, Nadia district' },
  flowers:    { file: 'Ride Paddy with Flowers - Sukumari Village - Sundarban District - South of Kolkata - India (12346868533).jpg', by: 'Adam Jones', lic: 'CC BY-SA 2.0', cap: 'Ripe paddy', place: 'Sukumari village, Sundarbans' },
  otters:     { file: 'Otter Fishermen Harbaria Sundarban NP Bangladesh banner.jpg', by: 'Hiroki Ogawa', lic: 'CC BY-SA 3.0', cap: 'Fishing in the mangrove channels', place: 'Sundarbans, Bangladesh side of the shared delta' },
  tigerRes:   { file: 'Sunderbans Tiger reserve india David Raju (6).jpg', by: 'David V. Raju', lic: 'CC BY-SA 4.0', cap: 'Working the mudflats', place: 'Sundarban Tiger Reserve, India' },
  jute:       { file: 'A jute farmer in the flooded fields of West Bengal.jpg', by: 'Shafi fotumcatcher', lic: 'CC BY-SA 4.0', cap: 'A jute farmer in flooded fields', place: 'West Bengal' },
  flood:      { file: 'Kalinagar Floods B.JPG', by: 'Soumyasch', lic: 'CC BY-SA 3.0', cap: 'Monsoon floodwater that stays for weeks', place: 'Kalinagar, West Bengal' },
  pond:       { file: 'A pond and its green surrounding.jpg', by: 'Billjones94', lic: 'CC BY-SA 4.0', cap: 'A village pond', place: 'West Bengal' },
  monsoon:    { file: 'Sundarban Landscape during monsoon 17.jpg', by: 'Kingshuk Mondal', lic: 'CC BY 4.0', cap: 'Monsoon over the Sundarbans', place: 'Sundarbans, West Bengal' },
  rain:       { file: 'India - Kolkata rainy street - 3811.jpg', by: 'Jorge Royan', lic: 'CC BY-SA 3.0', cap: 'A rainy evening in the city', place: 'Kolkata' },
  amphan:     { file: 'Post Cyclone Amphan situation of Shyambazar in Kolkata 04.jpg', by: 'Indrajit Das', lic: 'CC BY-SA 4.0', cap: 'The morning after Cyclone Amphan, May 2020', place: 'Shyambazar, Kolkata' },
  hooghly:    { file: 'Hooghly river from Princep Ghat during sunset, Kolkata 01.jpg', by: 'Slyronit', lic: 'CC BY-SA 4.0', cap: 'The Hooghly at sunset', place: 'Prinsep Ghat, Kolkata' },
  skyline:    { file: 'Kolkata Skyline From Vidyasagar Seti 2.jpg', by: 'Innocentbunny', lic: 'CC BY-SA 3.0', cap: 'Kolkata from Vidyasagar Setu', place: 'Kolkata' },
  ghats:      { file: 'The ghats of the Hooghly River in Kolkata, India.jpg', by: 'Vyacheslav Argenberg', lic: 'CC BY 4.0', cap: 'The ghats of the Hooghly', place: 'Kolkata' },
  schoolgirls:{ file: 'Village girls West Bengal.JPG', by: 'Ilya Mauter', lic: 'CC BY 3.0', cap: 'Girls on the way home', place: 'Navadwip, West Bengal' },
  townhall:   { file: 'Mt. Kisco Village Hall October 2013.jpg', by: 'Chris Pruitt', lic: 'CC BY-SA 3.0', cap: 'A village hall in Westchester County', place: 'Mount Kisco, New York' }
};
const isLocal = f => /^(images\/|\.\/)/.test(f);
const src = (k, w = 2000) => { const f = PHOTOS[k].file; return isLocal(f) ? f : 'https://commons.wikimedia.org/wiki/Special:FilePath/' + encodeURIComponent(f) + '?width=' + w; };
const pageOf = k => 'https://commons.wikimedia.org/wiki/File:' + encodeURIComponent(PHOTOS[k].file.replace(/ /g, '_'));

(function () {
  const page = document.body.dataset.page;
  const apply = ENVIRA.applyLink || 'mailto:' + ENVIRA.email + '?subject=Envira%20Ambassador%20Application';
  const nav = [['research.html', 'Research & Policy', 'research'], ['education.html', 'Education', 'education'], ['join.html', 'Join', 'join']];

  /* masthead */
  const mast = document.createElement('header');
  mast.className = 'mast';
  mast.innerHTML = `<div class="mast-in">
      <a class="word" href="index.html"><img src="images/logo-light-mark.png" alt="">Envira</a>
      <span class="mono issue">Field Report · Kolkata — Sundarbans — Westchester</span>
      <nav class="mono">${nav.map(([h, t, k]) => `<a href="${h}" ${k === page ? 'aria-current="page"' : ''}>${t}</a>`).join('')}<a class="apply" href="${apply}">Apply ↗</a></nav>
      <button class="menu-btn mono" aria-label="Open menu">Menu</button>
    </div>`;
  document.body.prepend(mast);
  const sheet = document.createElement('div');
  sheet.className = 'sheet';
  sheet.innerHTML = `<header><span class="word">Envira</span><button class="mono">Close</button></header>
    <nav><a href="index.html"><span>00</span>Home</a>${nav.map(([h, t], i) => `<a href="${h}"><span>0${i + 1}</span>${t.replace(' & Policy', '')}</a>`).join('')}</nav>
    <p class="mono"><a href="mailto:${ENVIRA.email}">${ENVIRA.email}</a></p>`;
  document.body.append(sheet);
  mast.querySelector('.menu-btn').onclick = () => sheet.classList.add('open');
  sheet.querySelector('button').onclick = () => sheet.classList.remove('open');

  /* figures: <figure data-photo="key"> gets the image + an auto-numbered caption with credit */
  let n = 0;
  document.querySelectorAll('figure[data-photo]').forEach(fig => {
    const k = fig.dataset.photo, p = PHOTOS[k];
    if (!p) return;
    let box = fig.querySelector('.img');
    if (!box) { box = document.createElement('div'); box.className = 'img'; fig.prepend(box); }
    const img = new Image();
    img.alt = p.cap + ', ' + p.place; img.className = 'loading'; img.decoding = 'async';
    if (!fig.hasAttribute('data-eager')) img.loading = 'lazy';
    img.onload = () => img.classList.remove('loading');
    img.onerror = () => fig.classList.add('nophoto');
    img.src = src(k, fig.dataset.w || 2000);
    box.append(img);
    if (!fig.hasAttribute('data-nocap')) {
      n++;
      const cap = document.createElement('figcaption');
      cap.className = 'mono';
      cap.innerHTML = `<b>Fig. ${String(n).padStart(2, '0')}</b><span>${p.cap} — ${p.place}. Photo: <a href="${pageOf(k)}" target="_blank" rel="noopener">${p.by}</a>, ${p.lic}.</span>`;
      fig.append(cap);
    }
  });

  /* project index: a small photo follows the cursor on hover (desktop) */
  const peek = document.createElement('div'); peek.className = 'peek'; peek.innerHTML = '<img alt="">';
  document.body.append(peek);
  document.querySelectorAll('[data-peek]').forEach(row => {
    row.addEventListener('mouseenter', () => { peek.firstChild.src = src(row.dataset.peek, 600); peek.classList.add('on'); });
    row.addEventListener('mouseleave', () => peek.classList.remove('on'));
    row.addEventListener('mousemove', e => { peek.style.left = e.clientX + 'px'; peek.style.top = e.clientY + 'px'; });
  });

  /* footer */
  const used = [...new Set([...document.querySelectorAll('[data-photo],[data-peek],[data-frames]')].flatMap(e => (e.dataset.photo || e.dataset.peek || e.dataset.frames).split(',')))].filter(k => PHOTOS[k] && !isLocal(PHOTOS[k].file));
  const foot = document.createElement('footer');
  foot.className = 'foot';
  foot.innerHTML = `<div class="big">Envira</div>
    <div class="cols">
      <div><h4>Mission</h4><p style="max-width:34ch">Driving Global Sustainability, One Solution at a Time. Climate research, policy tools and classrooms, from rural West Bengal to our own town halls.</p></div>
      <div><h4>Sections</h4><ul><li><a href="index.html">Home</a></li>${nav.map(([h, t]) => `<li><a href="${h}">${t}</a></li>`).join('')}</ul></div>
      <div><h4>Live tools</h4><ul>
        <li><a href="https://carbon-arbitrage.streamlit.app/" target="_blank" rel="noopener">Carbon Arbitrage</a></li>
        <li><a href="https://decarbonization-policy-final.streamlit.app/" target="_blank" rel="noopener">Decarbonization Policy</a></li>
        <li><a href="https://arunlandfillmethanefinal.streamlit.app/" target="_blank" rel="noopener">Landfill Methane</a></li>
        <li><a href="https://us-county-hiddenchampions-saf-pilot-v1.streamlit.app/" target="_blank" rel="noopener">Climate Tech Networks</a></li>
        <li><a href="https://drive.google.com/file/d/1mZivHKf5g9Bf-9r10wjyDVkcw150IDR6/view" target="_blank" rel="noopener">Climate Finance paper</a></li></ul></div>
      <div><h4>Contact</h4><ul>
        <li><a href="mailto:${ENVIRA.email}">${ENVIRA.email}</a></li>
        <li><a href="mailto:${ENVIRA.partnershipsEmail}">${ENVIRA.partnershipsEmail}</a></li>
        <li><a href="${apply}">Apply as an Ambassador</a></li>
        ${['linkedin', 'instagram', 'youtube', 'github'].filter(k => ENVIRA[k]).map(k => `<li><a href="${ENVIRA[k]}" target="_blank" rel="noopener">${k[0].toUpperCase() + k.slice(1)}</a></li>`).join('')}</ul></div>
    </div>
    <div class="credits">Photographs on this page, via Wikimedia Commons: ${used.map(k => `<a href="${pageOf(k)}" target="_blank" rel="noopener">${PHOTOS[k].cap}</a> (${PHOTOS[k].by}, ${PHOTOS[k].lic})`).join(' · ')}</div>
    <div class="bottom mono"><span>© ${new Date().getFullYear()} Envira</span><span>Kolkata · New York</span></div>`;
  document.body.append(foot);

  document.querySelectorAll('[data-apply]').forEach(a => a.href = apply);
  document.querySelectorAll('[data-email]').forEach(a => a.href = 'mailto:' + ENVIRA.email);

  /* quiet reveals + meters */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in');
    e.target.querySelectorAll('.meter i[data-w]').forEach(m => m.style.width = m.dataset.w);
    io.unobserve(e.target);
  }), { threshold: .12 });
  document.querySelectorAll('.rv').forEach(el => io.observe(el));

  /* home: the descent (orbit -> fields -> village -> people), or a YouTube film */
  const d = document.querySelector('.descent');
  if (d) {
    if (ENVIRA.introYouTubeId) {
      const id = ENVIRA.introYouTubeId;
      d.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&playsinline=1&rel=0&modestbranding=1" allow="autoplay; encrypted-media" title="Envira film"></iframe>`;
    } else {
      const keys = d.dataset.frames.split(','), labels = d.dataset.labels.split('|');
      d.innerHTML = keys.map(k => `<div class="frame"><img src="${src(k, 1800)}" alt="${PHOTOS[k].cap}"></div>`).join('') +
        `<div class="ticks">${keys.map(() => '<i></i>').join('')}</div><div class="hud"><div><div class="mono" id="dPlace"></div><div class="alt" id="dAlt"></div></div><div class="mono" id="dBy" style="text-align:right;max-width:40%"></div></div>`;
      const frames = [...d.querySelectorAll('.frame')], ticks = [...d.querySelectorAll('.ticks i')];
      let i = 0;
      const show = () => {
        frames.forEach((f, j) => f.classList.toggle('on', j === i));
        ticks.forEach((t, j) => t.classList.toggle('on', j === i));
        const p = PHOTOS[keys[i]];
        d.querySelector('#dAlt').textContent = labels[i];
        d.querySelector('#dPlace').textContent = p.place;
        d.querySelector('#dBy').textContent = 'Photo: ' + p.by;
        i = (i + 1) % frames.length;
      };
      show(); setInterval(show, 6500);
    }
  }
})();
