# Envira website: "Field Report" design

Static site for GitHub Pages with no build step. Upload everything in this folder to the root of your branch.

## Pages
- `index.html`: home. The opening is a real-photo descent (satellite → paddies → village → people)
- `research.html`: Research & Policy (tracks, Local Climate Action Plans, project index, collaborators)
- `education.html`: Education (NEET/JEE figures, the field lab, partner schools)
- `join.html`: Ambassador application
- `about.html` and `projects.html` redirect so old links keep working

## Design system
- Type: Instrument Serif (headlines), Newsreader (text), IBM Plex Mono (captions, labels). Loaded from Google Fonts.
- Colour: paper `#efe9dd`, ink `#1a1814`, one accent, clay red `#b2462a`.
- Every photo is a numbered figure with a caption and credit, like a printed field report.

## Settings: top of `site.js`
Emails, social links, the ambassador application link, and `introYouTubeId`.
Set `introYouTubeId` to play your own drone footage in place of the photo descent on the home page.

## Photos
22 photographs from Wikimedia Commons, each CC-licensed or public domain. They load straight from Commons
and are credited (author + license + link) in their caption and in the footer of every page that uses them.
The list is `PHOTOS` in `site.js`. To swap in your own photo, put it in `images/` and change that entry's
`file` to e.g. `images/schools/school-1.jpg` (and update `by`, `cap`, `place`).
Note: a few water scenes (`otters`) are from the Bangladesh side of the Sundarbans and are captioned that way.

## Partner schools
`education.html` has an empty slot for the first partner school's photo. Name schools only after they've agreed,
and get permission from the school and parents before posting photos of students.
