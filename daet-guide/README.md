# Daet, Camarines Norte: a local field guide

A static website (HTML, CSS, JavaScript, no build step) with spots, events, stories, travel guides and forums for Daet.

## Edit the content

Everything lives in `data.js`. The hero counters (Beaches, Local stories, Travel guides) are counted from those lists automatically.
Entries marked `sample: true` show a "Sample" badge. Replace them with real content and remove the flag.

## Run it

Open `index.html` in a browser, or run `python3 -m http.server` in this folder.

## Show it on your portfolio

The portfolio at github.com/jancarluz/deleonportfolio lists your public repos that have the GitHub topic `portfolio`.

1. Push this folder to a new public repo, for example `daet-guide`.
2. On the repo page, open the About gear and add the topic `portfolio`.
3. Add a short description, and a Website URL if you publish it with GitHub Pages (Settings, Pages). It becomes the "Live site" link.
4. `preview.png` in the repo root is used as the project thumbnail.

New pushes appear on the portfolio within about 10 minutes, with no portfolio redeploy.

## Notes

- Sign in and Create account are a front-end demo. The name is stored in this browser only. Real accounts and forums need a backend.
- `assets/hero.jpg` was cropped from a screenshot. Swap in a higher resolution photo of the same monument for a sharper hero.
