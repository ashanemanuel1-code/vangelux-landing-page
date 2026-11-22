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
  email: "ashanemanuel1@gmail.com",
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
