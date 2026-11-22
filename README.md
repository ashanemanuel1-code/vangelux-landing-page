# VANGELUX — Digital Brand Landing Page

A single-page digital business card for VANGELUX, opened from the QR code inside your packaging.
It is built with plain HTML, CSS and JavaScript and runs free on GitHub Pages: no server, no database, no login, no paid services.

```
vangelux-landing-page/
  index.html      ← the page content (text, links)
  style.css       ← colours, fonts, layout, animations
  script.js       ← fade-in effects, "Save contact" button, logo fallback
  README.md       ← this guide
  assets/
    logo.png      ← YOUR logo (you add this, see Part 2)
    portfolio.pdf ← your brand portfolio (a placeholder is included)
```

---

## Part 1 — Publish the page on GitHub Pages (free)

**1. Create a free GitHub account**
Go to **github.com** → **Sign up**. Choose your username carefully, because it becomes part of your website address.
Example: username `vangelux` gives the address `https://vangelux.github.io/vangelux-landing-page/`

**2. Create the repository**
- Click the **+** at the top right → **New repository**.
- Repository name: `vangelux-landing-page` (exactly this, all lowercase).
- Choose **Public**. (GitHub Pages is only free for public repositories.)
- Click **Create repository**.

**3. Upload the project files**
- On the new repository page, click **uploading an existing file** (or **Add file → Upload files**).
- Unzip the project on your computer first. Open the `vangelux-landing-page` folder and **drag everything inside it** (`index.html`, `style.css`, `script.js`, `README.md` and the `assets` folder) into the upload box.
  Important: `index.html` must be at the top level of the repository, not inside another folder.
- Scroll down and click **Commit changes**.

**4. Open repository Settings**: click the **Settings** tab (top of the repository).

**5. Select Pages**: in the left menu, click **Pages**.

**6. Choose Deploy from a branch**: under **Build and deployment → Source**, choose **Deploy from a branch**.

**7. Choose main and root**: under **Branch**, pick **main**, and next to it pick **/ (root)**.

**8. Save and wait**: click **Save**. Wait 1–3 minutes, then refresh the Pages screen.

**9. Open your website**
A box appears saying **"Your site is live at https://YOUR-USERNAME.github.io/vangelux-landing-page/"**. Click **Visit site**.
Open the same address on your phone to check it.

> All file links inside the page are relative (for example `assets/logo.png`), so they work correctly at the GitHub Pages project address. Do not rename the `assets` folder.

---

## Part 2 — Add your logo

1. Save your original logo as a **PNG** file named exactly **`logo.png`** (all lowercase).
   A transparent background with a square or near-square shape looks best (for example 600 × 600 px).
2. In your repository, open the **assets** folder → **Add file → Upload files** → drag in `logo.png` → **Commit changes**.
3. Wait about a minute and refresh the website.

Until `logo.png` is uploaded, the page shows the word **VANGELUX** in gold in its place, so the page never looks broken.

---

## Part 3 — Add your brand portfolio PDF

The **View our brand portfolio** button opens `assets/portfolio.pdf` in a new tab.
A branded "coming soon" placeholder PDF is included so the button works from day one.

**To replace it with your real portfolio:**
1. Export your portfolio as a PDF and name it exactly **`portfolio.pdf`**.
2. In your repository, open the **assets** folder → **Add file → Upload files** → drag in your `portfolio.pdf`.
   Because the name is the same, GitHub replaces the placeholder. Click **Commit changes**.
3. Wait a minute, then tap the button on the website.
   If your phone still shows the old file, close the tab and open it again (phones sometimes keep the old copy for a short time).

Tips:
- Keep the PDF under about **10 MB** so it opens quickly on mobile data. Under 25 MB is the most GitHub's website uploader accepts.
- If you would rather use a different file name, open `index.html`, find `assets/portfolio.pdf` (it appears once, on the portfolio button) and change it.

---

## Part 4 — QR code

The QR code must point to your **live** address from Part 1, step 9, for example:
`https://YOUR-USERNAME.github.io/vangelux-landing-page/`

**Option A (easiest):** send that exact address to Claude and ask for the QR code. You will get a high-resolution PNG and an SVG.

**Option B:** use any free QR generator website and follow these rules:
- Paste the **full** address, including `https://` and the final `/`.
- Choose a **static** QR code. Avoid "dynamic" or "trackable" QR codes: many free ones stop working after a trial period, which would break the codes already printed in your packaging.
- Download **SVG** (for the printer, it stays sharp at any size) and **PNG** at 1000 px or larger.
- Keep dark code on a light background, keep the white border (quiet zone) around it, and print it at least **2.5 cm × 2.5 cm**.

**Before printing in bulk:** scan the code with both an iPhone camera and an Android camera and confirm that it opens the page.

The printed QR code keeps working as long as the repository name and your GitHub username stay the same. You can change the page content at any time without reprinting.

---

## Part 5 — Editing the page later (no coding knowledge needed)

To edit any file on GitHub: open the file → click the **pencil icon** (Edit) → make the change → **Commit changes**. The website updates within about a minute.

| What to change | File | What to look for |
|---|---|---|
| Headlines, slogan, mission text, verse | `index.html` | The text itself (each section is labelled, e.g. `A. BRAND INTRODUCTION`) |
| Instagram / Facebook links | `index.html` | `instagram.com` / `facebook.com` |
| Email or WhatsApp | `index.html` **and** `script.js` | `mailto:` and `wa.me/` in index.html; the `CONTACT` block at the top of script.js (used by "Save contact") |
| Brand colours | `style.css` | The `:root` block at the very top |

WhatsApp links use the international number with no `+`, spaces or leading zero, e.g. `https://wa.me/94776271143`.

---

## Features
- Mobile-first, tested at phone, tablet and desktop widths; works on Android and iPhone.
- Large tap-friendly buttons for Instagram, Facebook, WhatsApp and email.
- **Save contact** button: downloads a contact card so customers can add VANGELUX to their phone in one tap.
- Smooth scrolling, subtle gold shimmer, gentle fade-in animations (automatically reduced for people who turn off motion in their phone settings).
- Fast: no frameworks; the only external files are free Google Fonts.
