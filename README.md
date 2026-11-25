# Envira website

Static site for GitHub Pages. No build step: upload everything in this folder to the root of your branch.

## Pages
- `index.html`: home, with the animated drone-dive intro
- `research.html`: Research & Policy (Local Climate Action Plans, projects, collaborators)
- `education.html`: Education (West Bengal schools, NEET/JEE context, field-lab program)
- `join.html`: Ambassador application
- `about.html` and `projects.html` only redirect, so old links keep working

## Edit once, update everywhere: `site.js`
The top of `site.js` holds the settings: emails, LinkedIn/Instagram/YouTube/GitHub links,
an application form link, and **`introYouTubeId`**.
The navbar and footer (with all contact links) are built from it on every page.

### Using a YouTube video for the intro
1. Upload your drone footage to YouTube (Unlisted is fine).
2. Copy the ID from the URL: `https://www.youtube.com/watch?v=AbC123xYz` → `AbC123xYz`
3. In `site.js` set `introYouTubeId: 'AbC123xYz'`.
The video plays muted, on loop, full-screen behind the headline. Leave it `''` to keep the animation.

## Adding real photos
Drop JPGs with these exact names into `images/schools/`. Until a file exists, the site shows a labeled placeholder.
| File | Where it shows |
|---|---|
| `images/schools/village.jpg` | Wide banner photo of the village/region (landscape) |
| `images/schools/school-1.jpg` | Partner school 1 |
| `images/schools/school-2.jpg` | Partner school 2 |
| `images/schools/students.jpg` | Students at work |

Then edit the captions ("Partner School 1 — Village, District") in `education.html`.
Get permission from the school and parents before posting photos of students.

## Things to update before sharing
- Replace `contact@envira.org` / `partnerships@envira.org` in `site.js` if those inboxes don't exist yet.
- Add social links in `site.js` (blank links are hidden from the footer list).
