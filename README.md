# VANGELUX — Digital Brand Landing Page

A single-page digital business card for VANGELUX, opened from the QR code inside your packaging.
It tells customers the brand story, mission and values, links to Instagram, Facebook, WhatsApp and email,
and lets them save VANGELUX to their phone contacts in one tap.

Built with plain HTML, CSS and JavaScript. Runs free on GitHub Pages: no server, no database, no login, no paid services.

**Your live address:** https://ashanemanuel1-code.github.io/vangelux-landing-page/

```
vangelux-landing-page/
  index.html        ← the page text and links
  style.css         ← colours, fonts, layout, animations
  script.js         ← Save contact button, photo gallery, animations
  README.md         ← this guide
  assets/
    logo.png        ← your VANGELUX logo (white, for dark backgrounds)
    icon.png        ← small icon for browser tabs / phone home screen
    og-image.jpg    ← preview picture when the link is shared on WhatsApp/Facebook
    portfolio.pdf   ← your brand portfolio
    gallery/        ← put photos here (1.jpg, 2.jpg, 3.jpg ...) — see Part 4
```

---

## Your "admin panel" = your GitHub repository

There is no separate admin login. GitHub itself is where you manage the page:
- **Add or replace a file** (photo, logo, PDF): open the folder → **Add file → Upload files** → drag the file in → **Commit changes**.
- **Delete a file**: click the file → **…** menu (top right) → **Delete file** → **Commit changes**.
- **Edit text**: click the file → ✏️ pencil icon → change → **Commit changes**.

The live website updates by itself about 1 minute after each change. It also works from your phone's browser at github.com.

---

## Part 1 — Publish the page on GitHub Pages (first time only)

1. Go to your repository: `github.com/ashanemanuel1-code/vangelux-landing-page`
2. Click **Add file → Upload files** (or "uploading an existing file" if the repository is empty).
3. On your computer, open the unzipped `vangelux-landing-page` folder, press **Ctrl + A**, and **drag everything inside it** into the upload box.
   `index.html` must be at the top level, not inside another folder.
   If you uploaded an older version before, the new files replace the old ones with the same name.
4. Click **Commit changes**.
5. Click **⚙️ Settings → Pages**.
6. **Source:** Deploy from a branch → **Branch:** `main` and `/ (root)` → **Save**.
7. Wait 1–3 minutes, refresh, and click **Visit site**.

> If the `assets` folder didn't upload, open the repository, click **Add file → Upload files**, drag the `assets` folder itself in, and commit again.

---

## Part 2 — Logo

Your logo is already included as `assets/logo.png`. It is the white version, made for the dark website background.
To change it later, upload a new PNG named exactly `logo.png` into the `assets` folder.

---

## Part 3 — Brand portfolio PDF

Your *VANGELUX Professional Brand Portfolio 2026* is already included as `assets/portfolio.pdf`.
The **View our brand portfolio** button opens it in a new tab.

To update it: export the new version as a PDF, name it exactly `portfolio.pdf`, and upload it into the `assets` folder.
It replaces the old one. Keep it under about 10 MB so it opens quickly on mobile data.

---

## Part 4 — Adding photos (gallery)

The page has a **Gallery** section that stays **hidden until you add photos**, so you can add pictures whenever you are ready.

**To add photos:**
1. Name your photos with numbers: `1.jpg`, `2.jpg`, `3.jpg` … (`.png` or `.webp` also work).
2. In your repository, open **assets → gallery**.
3. Click **Add file → Upload files**, drag the photos in, and click **Commit changes**.
4. Wait about a minute and refresh the website. The gallery appears automatically, in number order. Tapping a photo opens it full screen.

**Rules:**
- Numbers must have **no gaps**. If you have 1, 2 and 4, only 1 and 2 show. Rename 4 to 3.
- To change the order, rename the files.
- To remove a photo, delete it and rename the others so there is no gap.
- Up to 30 photos. Square or portrait photos look best.
- Resize photos to about **1200–1600 px wide** before uploading (WhatsApp-compressed photos are fine), so the page stays fast.

> The `gallery` folder contains a small file named `HOW-TO-ADD-PHOTOS.txt`. Leave it there: it keeps the folder visible on GitHub (GitHub hides empty folders).

---

## Part 5 — QR code

The QR code must point to: **https://ashanemanuel1-code.github.io/vangelux-landing-page/**

- Ask Claude for the QR code once the site is live (PNG and SVG).
- If you use a free QR website instead, choose a **static** QR code (not "dynamic"/"trackable", because those can stop working after a free trial).
- Print at least **2.5 cm × 2.5 cm**, with dark code on a light background and a white border around it.
- Test with an iPhone and an Android camera before printing in bulk.

The printed QR code keeps working as long as your GitHub username and the repository name stay the same. You can change anything on the page without reprinting.

---

## Part 6 — Editing text and links

| What to change | File | What to look for |
|---|---|---|
| Headline, story, mission, values, verses | `index.html` | The text itself (each section is labelled, e.g. `OUR STORY`) |
| Instagram / Facebook links | `index.html` | `instagram.com` / `facebook.com` |
| Email or WhatsApp | `index.html` **and** `script.js` | `mailto:` and `wa.me/` in index.html; the `CONTACT` block at the top of script.js (used by Save contact) |
| Brand colours | `style.css` | The `:root` block at the very top |

WhatsApp links use the international number with no `+`, spaces or leading zero, e.g. `https://wa.me/94776271143`.
