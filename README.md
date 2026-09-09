# Shiva Karki — Portfolio

A single-page portfolio site for a graphic designer, video editor & music producer.
Plain HTML/CSS/JS — no build step, no dependencies. Works straight on GitHub Pages.

## Files
- `index.html` — all content and structure
- `style.css` — design system (colors, type, layout, animation)
- `script.js` — mobile menu, scroll-triggered skill meters, active nav state

## What to swap out (all placeholder content)
1. **Hero** — name is already set. Edit the subhead sentence in `index.html` under `.hero-sub` if you want different wording.
2. **About** — the three paragraphs and the three numbered facts are placeholder copy. Rewrite with real bio details.
3. **Skills** — each bar has a `data-level="NN"` attribute (0–100). Change the number to match real skill level, and rename the `.meter-label` text for each skill.
4. **Projects** — each `.track` row is a placeholder project. For each one:
   - Change the title text and the tag/year text.
   - Replace `href="#"` with a real project link.
   - To use a real image instead of the colored "Add image" placeholder, replace the `<span class="track-thumb">` with an `<img>` tag pointing at your image file.
5. **Contact** — update the email address and the four social links (`Behance`, `Instagram`, `SoundCloud`, `Vimeo`) with real URLs.

## Colors & fonts (design tokens)
All colors and fonts are defined once at the top of `style.css` in `:root`:
```css
--bg: #0E0D0C;       /* background */
--fg: #F4F1EC;       /* main text */
--signal: #FF3864;   /* accent color used throughout */
--font-display: 'Bebas Neue', ...;  /* headline font */
--font-body: 'Inter', ...;          /* body font */
```
Change `--signal` to re-theme the whole site in one place.

## Running it locally
No build tools needed. Just open `index.html` in a browser, or serve the folder:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000`.

## Publishing on GitHub Pages
1. Create a new repository on GitHub (e.g. `portfolio`).
2. Push these three files to it:
   ```bash
   git init
   git add index.html style.css script.js README.md
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. On GitHub: go to **Settings → Pages**, set **Source** to the `main` branch, folder `/ (root)`, and save.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

## Notes
- Respects `prefers-reduced-motion` — animations are skipped for users who have that system setting on.
- Mobile nav collapses into a slide-in panel under ~720px width.
- The skill bars fill once, the moment they scroll into view.
