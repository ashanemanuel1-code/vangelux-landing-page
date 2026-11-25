/* =========================================================
   VANGELUX — Landing page script (plain JavaScript)
   You normally do NOT need to edit this file.
   ========================================================= */

// Lets the CSS know JavaScript is running (enables the fade-in effect).
document.documentElement.classList.add("js");

// ---------- Contact details used by the "Save contact" button ----------
// If your phone number or email changes, update it here AND in index.html.
const CONTACT = {
  name: "VANGELUX",
  phone: "+94776271143",
  email: "vangeluxclothing@gmail.com",
  instagram: "https://www.instagram.com/vangelux.co/",
  note: "WIN HEARTS. LIGHT NATIONS. GLORIFY THE KING."
};

// ---------- Logo: show the gold text logo if assets/logo.png is missing ----------
(function setupLogo() {
  const img = document.getElementById("brandLogo");
  const fallback = document.getElementById("logoFallback");
  if (!img || !fallback) return;

  const showFallback = () => {
    img.hidden = true;
    fallback.hidden = false;
  };
  img.addEventListener("error", showFallback);
  // Covers the case where the image failed before this script ran.
  if (img.complete && img.naturalWidth === 0) showFallback();
})();

// ---------- Fade sections in as they scroll into view ----------
(function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  items.forEach((el, i) => {
    // Small stagger so items in the same group appear one after another.
    el.style.transitionDelay = `${(i % 4) * 90}ms`;
    observer.observe(el);
  });
})();

// ---------- "Save contact" — downloads a contact card (.vcf) ----------
(function setupSaveContact() {
  const btn = document.getElementById("saveContact");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `FN:${CONTACT.name}`,
      `ORG:${CONTACT.name}`,
      `TEL;TYPE=CELL:${CONTACT.phone}`,
      `EMAIL:${CONTACT.email}`,
      `URL:${location.href.split("#")[0]}`,
      `NOTE:${CONTACT.note} | Instagram: ${CONTACT.instagram}`,
      "END:VCARD"
    ].join("\r\n");

    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "VANGELUX.vcf";
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);

    showToast("Contact card ready — open it to save");
  });
})();

// ---------- Photo gallery (no code editing needed) ----------
// Upload photos to the assets/gallery folder named 1.jpg, 2.jpg, 3.jpg ...
// The page finds them automatically, in number order, and stops at the
// first missing number. If there are no photos, the gallery stays hidden.
const GALLERY_FOLDER = "assets/gallery/";
const GALLERY_MAX = 30;
const GALLERY_TYPES = ["jpg", "jpeg", "png", "webp", "JPG", "JPEG", "PNG"];

function findPhoto(number) {
  return new Promise((resolve) => {
    let i = 0;
    const tryNext = () => {
      if (i >= GALLERY_TYPES.length) return resolve(null);
      const src = `${GALLERY_FOLDER}${number}.${GALLERY_TYPES[i++]}`;
      const img = new Image();
      img.onload = () => resolve(src);
      img.onerror = tryNext;
      img.src = src;
    };
    tryNext();
  });
}

(async function setupGallery() {
  const section = document.getElementById("gallery");
  const grid = document.getElementById("galleryGrid");
  if (!section || !grid) return;

  const photos = [];
  for (let n = 1; n <= GALLERY_MAX; n++) {
    const src = await findPhoto(n);
    if (!src) break;
    photos.push(src);
  }
  if (photos.length === 0) return;

  photos.forEach((src, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.setAttribute("aria-label", `Open photo ${i + 1}`);
    const img = document.createElement("img");
    img.src = src;
    img.alt = `VANGELUX photo ${i + 1}`;
    img.loading = "lazy";
    btn.appendChild(img);
    btn.addEventListener("click", () => openLightbox(src, img.alt));
    grid.appendChild(btn);
  });
  section.hidden = false;
  section.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
})();

// ---------- Full-screen photo viewer ----------
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = "";
}
if (lightbox) {
  lightbox.addEventListener("click", closeLightbox);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLightbox(); });
}

// ---------- Small pop-up message ----------
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.setAttribute("role", "status");
  toast.textContent = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("show"));
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 2600);
}

// ---------- Keep the footer year current ----------
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
