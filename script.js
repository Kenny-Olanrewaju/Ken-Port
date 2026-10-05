/* =========================================================
   Kenny Olanrewaju — Alive Portfolio
   ========================================================= */

const PROJECTS = [
  {
    slug: "frameflux",
    title: "FrameFlux",
    kicker: "Wallpaper gallery",
    year: "2026",
    blurb: "A quiet 4K wallpaper gallery. Find one, download, done.",
    description:
      "FrameFlux is a curated wallpaper gallery for phones, laptops, and desktops. Hand-picked 4K stills, original-resolution downloads, a local save list, and a search that stays out of the way. Built as a product, not a dump of stock images.",
    highlights: [
      "Native-resolution 4K downloads, no compression theatre",
      "Device-local saved list — heart it, no account",
      "Search and collections that stay out of the picture",
    ],
    problem:
      "Wallpaper sites are usually noisy grids full of compression, ads, and account walls. Finding a clean 4K image and actually downloading it at full resolution felt harder than it should be.",
    solution:
      "FrameFlux keeps the path short: calm grid, honest assets, local saves without accounts, and downloads at native resolution. Motion and search stay quiet so the pictures do the talking.",
    tags: ["HTML", "CSS", "JavaScript"],
    filters: ["gallery"],
    href: "https://frameflux-r7fs.onrender.com/",
    repo: "https://github.com/Kenny-Olanrewaju/Frameflux",
    cover: "assets/projects/frameflux-cover.jpg",
    span: "span-4",
  },
  {
    slug: "top-picks",
    title: "Top Picks For You",
    kicker: "Streetwear shop",
    year: "2026",
    blurb: "Streetwear you’ll actually wear, plus a small luxury edit.",
    description:
      "A two-speed shop: Everyday essentials priced for rotation, and The Edit — a tight luxury rack. Product cards, a live offer countdown, and a cart you can actually fill. Commerce with a point of view.",
    highlights: [
      "Everyday + luxury dual catalogue",
      "Live offer countdown",
      "Working cart and product detail flow",
    ],
    problem:
      "Generic store templates treat every product the same and bury the cart. Streetwear needs attitude, but the buy flow still has to be obvious on a phone.",
    solution:
      "Split the catalogue into Everyday and The Edit, surface offers with a live countdown, and keep product → cart → detail as a real working path — not a static mock.",
    tags: ["HTML", "CSS", "JavaScript"],
    filters: ["commerce"],
    href: "https://top-picks-for-you.onrender.com/",
    repo: "https://github.com/Kenny-Olanrewaju/E-commerce",
    cover: "assets/projects/top-picks-cover.jpg",
    span: "span-2",
  },
  {
    slug: "sweet-crumbs",
    title: "Sweet Crumbs Bakery",
    kicker: "Bakery brand",
    year: "2026",
    blurb: "Freshly baked happiness, ordered from Lagos across Nigeria.",
    description:
      "A full bakery site with a menu, custom-cake flow, zone-based delivery across 36 states, cart, FAQs, and testimonials. Warm, readable, and built to take real orders — not just look tasty.",
    highlights: [
      "Custom cakes with honest lead times",
      "Zone-based delivery across 36 states + FCT",
      "Menu, FAQs, testimonials, and a working cart",
    ],
    problem:
      "Local bakeries often lean on Instagram alone. Customers needed a warm, readable place to browse the menu, request custom cakes, and understand delivery across Nigeria.",
    solution:
      "A full brand site with menu, custom-cake flow, zone-based delivery for 36 states + FCT, FAQs, testimonials, and a cart built to take real orders — not just look appetizing.",
    tags: ["HTML", "CSS", "JavaScript"],
    filters: ["brand", "commerce"],
    href: "https://sweet-crumbs-bakery-hft1.onrender.com/",
    repo: "https://github.com/Kenny-Olanrewaju/SweetCrumbsBakery",
    cover: "assets/projects/sweet-crumbs-cover.jpg",
    span: "span-3",
  },
  {
    slug: "image-gallery",
    title: "Luxe Grid",
    kicker: "Study",
    year: "2026",
    blurb: "A first-principles gallery — layout, rhythm, and looking.",
    description:
      "A lightweight image gallery exploring grid composition, hover states, and how photographs should feel on the web. Early work that still informs how I hang pictures in a browser.",
    highlights: [
      "Grid composition as the whole interface",
      "Hover states that teach looking, not clicking",
      "HTML and CSS, nothing extra in the way",
    ],
    problem:
      "Image grids online often prioritize clickbait overlays and infinite chrome. The question was how little UI a gallery needs while still feeling intentional.",
    solution:
      "A first-principles study: composition as the interface, hover states that teach looking, and pure HTML/CSS so nothing sits between the viewer and the picture.",
    tags: ["HTML", "CSS"],
    filters: ["gallery"],
    href: "https://luxe-grid.onrender.com/",
    repo: "https://github.com/Kenny-Olanrewaju/Luxe-grid",
    cover: "assets/projects/image-gallery-cover.jpg",
    span: "span-3",
  },
  {
    slug: "romeos-kicks",
    title: "Romeo's Kicks",
    kicker: "Footwear shop",
    year: "2026",
    blurb: "Premium sneakers and belts — order via WhatsApp.",
    description:
      "Romeo's Kicks is a commerce front for premium footwear and luxury belts in Nigeria. Curated sneakers and boots, handcrafted belts, authentic-guarantee messaging, and a cart that hands off cleanly to WhatsApp for real orders. Navy, gold, and black — built for the culture.",
    highlights: [
      "Shoe and belt catalogues with category filters",
      "Cart that orders via WhatsApp",
      "Authentic guarantee, delivery, and client reviews",
    ],
    problem:
      "Streetwear and luxury footwear sellers in Nigeria often rely on Instagram DMs alone. Customers needed a proper shop to browse kicks and belts, build a cart, and order without losing the fast WhatsApp close that already works.",
    solution:
      "A focused storefront with signature kicks and belt catalogues, clear trust signals, and a cart that routes checkout to WhatsApp. The site carries the brand — navy, gold, black — while keeping the buy path short and mobile-first.",
    tags: ["HTML", "CSS", "JavaScript"],
    filters: ["commerce", "brand"],
    href: "https://romeo-s-kicks.onrender.com/",
    repo: "https://github.com/Kenny-Olanrewaju/Romeo-s-Kicks",
    cover: "assets/projects/romeos-kicks-cover.jpg",
    span: "span-3",
  },
  {
    slug: "lakeshole-ventures",
    title: "Lakeshole Ventures",
    kicker: "Wellness commerce",
    year: "2026",
    blurb: "Miira wellness coffees and supplements — order via WhatsApp.",
    description:
      "Lakeshole Ventures is the storefront for authentic Miira wellness products in Nigeria: premium coffees, beauty and nutrition sachets from Revoobit. Colour-coded ranges, local saves, a working cart, and one-tap WhatsApp checkout so customers can browse and order without accounts or forms.",
    highlights: [
      "Eight Miira products across coffees, wellness, and beauty",
      "Colour-coded ranges and local saved list",
      "Cart that sends the order straight to WhatsApp",
    ],
    problem:
      "Wellness suppliers often rely on Instagram DMs and scattered price lists. Customers needed a clear place to compare Miira products, understand what each sachet is for, and place an order without jumping through forms or creating an account.",
    solution:
      "A focused product site with filterable ranges, honest pricing in Naira, device-local saves, and a cart that builds a WhatsApp message automatically. The path is short: pick products, send the order, confirm delivery — nationwide.",
    tags: ["HTML", "CSS", "JavaScript"],
    filters: ["commerce", "brand"],
    href: "https://lakeshole-ventures.onrender.com/",
    repo: "https://github.com/Kenny-Olanrewaju/Lakeshole-Ventures",
    cover: "lakeshole-cover.jpg",
    span: "span-3",
  },
];

/* ---------- Theme ---------- */
const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");

function getPreferredTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "paper") return saved;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "paper" : "dark";
}
function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}
function toggleTheme() {
  setTheme(root.getAttribute("data-theme") === "dark" ? "paper" : "dark");
}
const themeToggleMobile = document.getElementById("themeToggleMobile");
setTheme(getPreferredTheme());
themeToggle?.addEventListener("click", toggleTheme);
themeToggleMobile?.addEventListener("click", toggleTheme);

/* ---------- Colour palette ---------- */
const PALETTES = ["teal", "ocean", "violet", "sunset", "rose"];
const paletteToggle = document.getElementById("paletteToggle");
const paletteMenu = document.getElementById("paletteMenu");
const paletteSwatches = document.querySelectorAll(".palette-swatch");
let paletteFadeTimer = 0;

function setPalette(name, animate) {
  if (PALETTES.indexOf(name) === -1) name = "teal";
  if (animate && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    root.classList.add("palette-fade");
    clearTimeout(paletteFadeTimer);
    paletteFadeTimer = setTimeout(function () { root.classList.remove("palette-fade"); }, 650);
  }
  if (name === "teal") root.removeAttribute("data-palette");
  else root.setAttribute("data-palette", name);
  try { localStorage.setItem("palette", name); } catch (e) {}
  paletteSwatches.forEach(function (s) {
    s.setAttribute("aria-pressed", s.dataset.palette === name ? "true" : "false");
  });
}
(function () {
  let saved = "teal";
  try { saved = localStorage.getItem("palette") || "teal"; } catch (e) {}
  setPalette(saved, false);
})();

function togglePaletteMenu(open) {
  if (!paletteMenu) return;
  paletteMenu.hidden = !open;
  paletteToggle.setAttribute("aria-expanded", open ? "true" : "false");
}
paletteToggle?.addEventListener("click", function () {
  togglePaletteMenu(paletteMenu.hidden);
});
paletteSwatches.forEach(function (s) {
  s.addEventListener("click", function () { setPalette(s.dataset.palette, true); });
});
document.addEventListener("click", function (e) {
  if (paletteMenu && !paletteMenu.hidden && !e.target.closest("#palette")) togglePaletteMenu(false);
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && paletteMenu && !paletteMenu.hidden) {
    togglePaletteMenu(false);
    paletteToggle.focus();
  }
});

/* ---------- Lagos clock ---------- */
function updateLagosTime() {
  const el = document.getElementById("lagosTime");
  const greetEl = document.getElementById("greeting");
  if (!el) return;
  const lagos = new Date(new Date().toLocaleString("en-US", { timeZone: "Africa/Lagos" }));
  const h = lagos.getHours();
  const m = String(lagos.getMinutes()).padStart(2, "0");
  const hour12 = ((h + 11) % 12) + 1;
  const ampm = h >= 12 ? "PM" : "AM";
  el.textContent = `Lagos · ${hour12}:${m} ${ampm} WAT`;
  let g = "Open for freelance";
  if (h >= 5 && h < 12) g = "Good morning · Open for freelance";
  else if (h >= 12 && h < 17) g = "Good afternoon · Open for freelance";
  else if (h >= 17 && h < 22) g = "Good evening · Open for freelance";
  else g = "Still online · Open for freelance";
  if (greetEl) greetEl.textContent = g;
}
updateLagosTime();
setInterval(updateLagosTime, 30000);
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Scroll progress + nav ---------- */
const progressBar = document.getElementById("scrollProgress");
const header = document.getElementById("header");

function onScroll() {
  const doc = document.documentElement;
  const max = doc.scrollHeight - doc.clientHeight;
  if (progressBar) progressBar.style.width = `${max > 0 ? (doc.scrollTop / max) * 100 : 0}%`;
  if (header) header.classList.toggle("is-scrolled", doc.scrollTop > 24);

  let current = "";
  for (const id of ["work", "testimonials", "notes", "certification", "services", "process", "about", "contact", "faq"]) {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= 140) current = id;
  }
  document.querySelectorAll(".nav a").forEach((a) => {
    a.classList.toggle("is-active", a.dataset.section === current);
  });
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- Section reveal (two-phase) ----------
   1) Section enters viewport → content stays blank, pulse marker appears
   2) User scrolls past the pulse (section top crosses the pass-line)
   3) Only then the 1.6s delay starts → content reveals in full view
*/
const REVEAL_DELAY_MS = 1600;
const SECTION_IDS = ["work", "testimonials", "notes", "certification", "services", "skills", "process", "about", "faq", "contact"];
/** Section top must reach this fraction of the viewport height before the delay starts */
const PASS_LINE = 0.48;
const pendingSections = new Set();
const delayTimers = new WeakMap();

function revealSection(section) {
  if (!section || section.classList.contains("is-revealed")) return;
  section.classList.remove("is-pending-reveal", "is-awaiting-pass");
  section.classList.add("is-revealed");
  pendingSections.delete(section);

  section.querySelectorAll(".reveal").forEach(function (el, i) {
    setTimeout(function () {
      el.classList.add("is-visible");
    }, i * 90);
  });

  if (section.id === "skills") runSkillCounters();

  if (section.id === "work") {
    const grid = document.getElementById("projectsGrid");
    if (grid) {
      grid.classList.remove("is-waiting");
      grid.classList.add("is-ready");
      grid.querySelectorAll(".project-card").forEach(function (card, i) {
        card.style.animation = "none";
        void card.offsetWidth;
        card.style.animation = "";
        card.style.animationDelay = (0.05 + i * 0.08) + "s";
        setTimeout(function () {
          card.classList.add("is-in");
        }, 700 + i * 80);
      });
    }
  }
}

/** Phase 1: section entered — show pulse, keep content blank */
function markPending(section) {
  if (!section || section.classList.contains("is-revealed") || section.dataset.revealPending === "1") return;
  section.dataset.revealPending = "1";
  section.classList.add("is-pending-reveal", "is-awaiting-pass");
  pendingSections.add(section);
}

/** Phase 2: user scrolled past the pulse — start the delay, then reveal */
function commitPass(section) {
  if (!section || section.classList.contains("is-revealed")) return;
  if (section.dataset.revealCommitted === "1") return;
  section.dataset.revealCommitted = "1";
  section.classList.remove("is-awaiting-pass");
  // pulse stays until reveal finishes the delay
  var t = setTimeout(function () {
    section.classList.remove("is-pending-reveal");
    revealSection(section);
  }, REVEAL_DELAY_MS);
  delayTimers.set(section, t);
}

function checkPendingPasses() {
  if (!pendingSections.size) return;
  var vh = window.innerHeight || document.documentElement.clientHeight;
  var line = vh * PASS_LINE;
  pendingSections.forEach(function (section) {
    if (section.dataset.revealCommitted === "1") return;
    var top = section.getBoundingClientRect().top;
    // User has scrolled enough that the section top (and pulse) has moved above the pass-line
    if (top <= line) {
      commitPass(section);
    }
  });
}

// Enter early: as soon as any slice of the section is near the viewport
const sectionObs = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var section = entry.target;
      sectionObs.unobserve(section);
      markPending(section);
      // in case the section already sits above the pass-line (e.g. deep-link / fast scroll)
      checkPendingPasses();
    });
  },
  {
    threshold: 0,
    rootMargin: "0px 0px 15% 0px",
  }
);

SECTION_IDS.forEach(function (id) {
  var el = document.getElementById(id);
  if (el) sectionObs.observe(el);
});

window.addEventListener("scroll", checkPendingPasses, { passive: true });
window.addEventListener("resize", checkPendingPasses, { passive: true });

// Hero: instant, no delay
document.querySelectorAll(".hero .reveal").forEach(function (el) {
  el.classList.add("is-visible");
});

// Project grid locked until work reveals
(function () {
  var grid = document.getElementById("projectsGrid");
  if (grid) grid.classList.add("is-waiting");
})();

// Safety: if someone parks without scrolling, eventually reveal
setTimeout(function () {
  SECTION_IDS.forEach(function (id) {
    var el = document.getElementById(id);
    if (!el || el.classList.contains("is-revealed")) return;
    if (el.dataset.revealCommitted !== "1") commitPass(el);
    else if (!el.classList.contains("is-revealed")) revealSection(el);
  });
}, 45000);

/* ---------- Skills: smooth gauge, odometer, typing + tilt ----------
   All motion is driven by the Web Animations API with one shared easing curve,
   so the browser animates it natively (no per-frame JavaScript). */
const SKILL_TICKS = 60;
const SKILL_R = 66;
const SKILL_CIRC = 2 * Math.PI * SKILL_R;
const SKILL_DUR = 1600;
const SKILL_CURVE = [0.22, 1, 0.36, 1];
const SKILL_EASING = "cubic-bezier(" + SKILL_CURVE.join(",") + ")";
const SKILL_REDUCE = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Inverse of the easing curve: "at what time is the animation X% complete?"
// Used so each tick mark lights up exactly when the ring reaches it.
const skillInvEase = (function () {
  const x1 = SKILL_CURVE[0], y1 = SKILL_CURVE[1], x2 = SKILL_CURVE[2], y2 = SKILL_CURVE[3];
  const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx;
  const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
  const X = function (t) { return ((ax * t + bx) * t + cx) * t; };
  const Y = function (t) { return ((ay * t + by) * t + cy) * t; };
  return function (progress) {
    let lo = 0, hi = 1;
    for (let i = 0; i < 28; i++) {
      const mid = (lo + hi) / 2;
      if (Y(mid) < progress) lo = mid; else hi = mid;
    }
    return X((lo + hi) / 2);
  };
})();

function buildColumn(col, items) {
  const inner = document.createElement("span");
  inner.className = "odo-col-inner";
  for (let n = 0; n < items; n++) {
    const d = document.createElement("span");
    d.textContent = String(n % 10);
    inner.appendChild(d);
  }
  col.appendChild(inner);
  return inner;
}

function setupSkillCard(card) {
  const target = Number(card.dataset.skill) || 0;
  const svgNS = "http://www.w3.org/2000/svg";
  const ticksG = card.querySelector(".skill-ticks");
  const arc = card.querySelector(".skill-arc");
  const arcGlow = card.querySelector(".skill-arc-glow");
  const headG = card.querySelector(".skill-head-g");
  const typeEl = card.querySelector(".skill-type");
  const typeLen = typeEl ? typeEl.textContent.length : 0;

  const tens = Math.floor(target / 10);
  const ones = target % 10;
  const SPINS = 2; // how many full turns the ones digit makes before landing
  const tensInner = buildColumn(card.querySelector('[data-odo="tens"]'), 10);
  const onesInner = buildColumn(card.querySelector('[data-odo="ones"]'), SPINS * 10 + 10);

  const ticks = [];
  for (let i = 0; i < SKILL_TICKS; i++) {
    const a = (i / SKILL_TICKS) * Math.PI * 2 - Math.PI / 2;
    const line = document.createElementNS(svgNS, "line");
    line.setAttribute("x1", (100 + Math.cos(a) * 82).toFixed(2));
    line.setAttribute("y1", (100 + Math.sin(a) * 82).toFixed(2));
    line.setAttribute("x2", (100 + Math.cos(a) * 92).toFixed(2));
    line.setAttribute("y2", (100 + Math.sin(a) * 92).toFixed(2));
    ticksG.appendChild(line);
    ticks.push(line);
  }
  const litCount = Math.floor((target / 100) * SKILL_TICKS);

  const endOffset = SKILL_CIRC * (1 - target / 100);
  const endOnes = -(SPINS * 10 + ones);
  const endTens = -tens;
  const endAngle = target * 3.6;

  let anims = [];
  let busy = false;
  let doneTimer = 0;

  function cancelAll() {
    anims.forEach(function (a) { a.cancel(); });
    anims = [];
    clearTimeout(doneTimer);
  }

  function showFinal() {
    arc.style.strokeDashoffset = endOffset;
    arcGlow.style.strokeDashoffset = endOffset;
    onesInner.style.transform = "translateY(" + endOnes + "em)";
    tensInner.style.transform = "translateY(" + endTens + "em)";
    headG.style.transform = "rotate(" + endAngle + "deg)";
    for (let i = 0; i < litCount; i++) ticks[i].classList.add("on");
    if (typeEl) typeEl.style.width = "auto";
    card.classList.add("is-playing", "is-done");
  }

  function play(delay) {
    cancelAll();
    card.classList.remove("is-playing", "is-done");

    // clear previous tick state without fading
    ticksG.classList.add("no-trans");
    ticks.forEach(function (t) { t.classList.remove("on"); t.style.transitionDelay = "0s"; });
    void ticksG.getBoundingClientRect();
    ticksG.classList.remove("no-trans");

    if (SKILL_REDUCE) { showFinal(); return; }

    busy = true;
    delay = delay || 0;
    const opts = { duration: SKILL_DUR, delay: delay, easing: SKILL_EASING, fill: "both" };

    // 1) ring (main arc + faint glow copy)
    [arc, arcGlow].forEach(function (el) {
      anims.push(el.animate(
        [{ strokeDashoffset: SKILL_CIRC }, { strokeDashoffset: endOffset }], opts));
    });
    // 2) glowing dot riding the end of the arc
    anims.push(headG.animate(
      [{ transform: "rotate(0deg)" }, { transform: "rotate(" + endAngle + "deg)" }], opts));
    // 3) odometer digits (same curve, so they land together with the ring)
    anims.push(onesInner.animate(
      [{ transform: "translateY(0em)" }, { transform: "translateY(" + endOnes + "em)" }], opts));
    anims.push(tensInner.animate(
      [{ transform: "translateY(0em)" }, { transform: "translateY(" + endTens + "em)" }], opts));

    // 4) tick marks: each lights up the moment the ring passes it
    for (let i = 0; i < litCount; i++) {
      const frac = Math.min(1, ((i + 1) / SKILL_TICKS) * 100 / target);
      ticks[i].style.transitionDelay = (delay + skillInvEase(frac) * SKILL_DUR).toFixed(0) + "ms";
      ticks[i].classList.add("on");
    }

    // 5) typed code line: pure CSS-width stepping, no text rewriting
    if (typeEl && typeLen) {
      anims.push(typeEl.animate(
        [{ width: "0ch" }, { width: typeLen + "ch" }],
        { duration: Math.min(1400, typeLen * 50), delay: delay + 250,
          easing: "steps(" + typeLen + ", end)", fill: "both" }));
    }

    card.classList.add("is-playing");
    doneTimer = setTimeout(function () {
      card.classList.remove("is-playing");
      card.classList.add("is-done");
      busy = false;
    }, delay + SKILL_DUR + 100);
  }

  card._skillPlay = play;
  card._skillCanReplay = function () { return !busy; };
}

function runSkillCounters() {
  document.querySelectorAll(".skill-card").forEach(function (card, i) {
    if (card._skillPlay) card._skillPlay(250 + i * 180);
  });
}

(function () {
  document.querySelectorAll(".skill-card").forEach(setupSkillCard);

  const canTilt = window.matchMedia("(hover: hover) and (pointer: fine)").matches && !SKILL_REDUCE;
  document.querySelectorAll(".skill-card").forEach(function (outer) {
    const card = outer.querySelector(".skill-card-inner");
    // One update per frame; layout rect read once per hover
    let rect = null, px = 0, py = 0, ticking = false;
    function applyMove() {
      ticking = false;
      if (!rect) return;
      const x = (px - rect.left) / rect.width;
      const y = (py - rect.top) / rect.height;
      card.style.setProperty("--mx", (x * 100).toFixed(1) + "%");
      card.style.setProperty("--my", (y * 100).toFixed(1) + "%");
      if (canTilt) {
        card.style.setProperty("--rx", ((x - 0.5) * 8).toFixed(2) + "deg");
        card.style.setProperty("--ry", ((0.5 - y) * 8).toFixed(2) + "deg");
      }
    }
    function replay() {
      if (outer.classList.contains("is-done") && outer._skillCanReplay()) outer._skillPlay(0);
    }
    card.addEventListener("pointerenter", function () {
      rect = card.getBoundingClientRect();
    });
    card.addEventListener("pointermove", function (e) {
      px = e.clientX; py = e.clientY;
      if (!ticking) { ticking = true; requestAnimationFrame(applyMove); }
    });
    card.addEventListener("pointerleave", function () {
      rect = null;
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    });
    card.addEventListener("click", replay);
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); replay(); }
    });
  });
})();

/* ---------- Count-up ---------- */
const countEl = document.querySelector("[data-count]");
if (countEl) {
  const obs = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        const target = Number(countEl.dataset.count);
        const start = performance.now();
        const dur = 1000;
        function frame(now) {
          const t = Math.min(1, (now - start) / dur);
          countEl.textContent = Math.round(target * (1 - Math.pow(1 - t, 3)));
          if (t < 1) requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
        obs.disconnect();
      }
    },
    { threshold: 0.4 }
  );
  obs.observe(countEl);
}

/* ---------- Custom cursor ---------- */
const cursor = document.getElementById("cursor");
const cursorLabel = cursor?.querySelector(".cursor-label");
let cx = 0, cy = 0, rx = 0, ry = 0;

if (cursor && window.matchMedia("(pointer: fine)").matches) {
  document.body.classList.add("has-custom-cursor");

  window.addEventListener("mousemove", (e) => {
    cx = e.clientX;
    cy = e.clientY;
  });

  function loopCursor() {
    rx += (cx - rx) * 0.18;
    ry += (cy - ry) * 0.18;
    cursor.style.transform = `translate(${rx}px, ${ry}px)`;
    const dot = cursor.querySelector(".cursor-dot");
    if (dot) dot.style.transform = `translate(calc(${cx - rx}px - 50%), calc(${cy - ry}px - 50%))`;
    requestAnimationFrame(loopCursor);
  }
  loopCursor();

  document.querySelectorAll("[data-cursor], a, button, .project-card").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("is-hover");
      if (cursorLabel) cursorLabel.textContent = el.dataset.cursor || "";
    });
    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("is-hover");
      if (cursorLabel) cursorLabel.textContent = "";
    });
  });
}

/* ---------- PS5 ambient particles: fewer, larger, faster ---------- */
(function initShimmer() {
  const canvas = document.getElementById("shimmer");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let particles = [];
  let raf;
  let heroVisible = true;
  // Particle glow follows the active palette (read from CSS, refreshed when it changes)
  let accentRGB = "143, 212, 196";
  function readAccent() {
    const v = getComputedStyle(document.documentElement).getPropertyValue("--accent-rgb").trim();
    if (v) accentRGB = v;
  }
  readAccent();
  new MutationObserver(readAccent).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme", "data-palette"],
  });
  let W = 0, H = 0;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    W = rect.width;
    H = rect.height;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(W * dpr);
    canvas.height = Math.floor(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    spawn();
  }

  function spawn() {
    // Desktop: fewer large orbs. Mobile: smaller, subtler, fewer for a calm feel.
    const mobile = W < 768;
    const count = mobile
      ? Math.round(Math.min(28, Math.max(16, (W * H) / 28000)))
      : Math.round(Math.min(65, Math.max(40, (W * H) / 18000)));
    particles = Array.from({ length: count }, function () { return makeParticle(true); });
  }

  function makeParticle(randomY) {
    const mobile = W < 768;
    const depth = Math.random();
    // Mobile: ~1.2–5px soft points. Desktop: ~3–15px orbs.
    const size = mobile
      ? 1.2 + depth * 2.4 + Math.random() * 1.2
      : 3 + depth * 8 + Math.random() * 4;
    const speed = mobile
      ? 0.22 + (1 - depth) * 0.55
      : 0.45 + (1 - depth) * 1.1;
    const angle = -Math.PI / 2 + (Math.random() - 0.5) * (mobile ? 0.9 : 1.2);
    return {
      x: Math.random() * W,
      y: randomY ? Math.random() * H : H + size,
      r: size,
      vx: Math.cos(angle) * speed * (0.25 + Math.random() * 0.45),
      vy: Math.sin(angle) * speed - (mobile ? 0.18 : 0.35) - Math.random() * (mobile ? 0.22 : 0.4),
      a: mobile ? 0.1 + (1 - depth) * 0.28 : 0.18 + (1 - depth) * 0.5,
      tw: Math.random() * Math.PI * 2,
      ts: mobile ? 0.012 + Math.random() * 0.018 : 0.02 + Math.random() * 0.03,
      depth: depth,
      mobile: mobile,
    };
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const isPaper = document.documentElement.getAttribute("data-theme") === "paper";

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.tw += p.ts;

      if (p.x < -30) p.x = W + 30;
      if (p.x > W + 30) p.x = -30;
      if (p.y < -30) {
        particles[i] = makeParticle(false);
        particles[i].y = H + particles[i].r;
        continue;
      }
      if (p.y > H + 30) p.y = -30;

      const twinkle = 0.55 + 0.45 * Math.sin(p.tw);
      const alpha = p.a * twinkle;

      // core
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      if (isPaper) {
        ctx.fillStyle = "rgba(" + accentRGB + ", " + (alpha * 0.5) + ")";
      } else {
        // soft cool light — PS5 ambient
        ctx.fillStyle = "rgba(190, 220, 235, " + alpha + ")";
      }
      ctx.fill();

      // bokeh glow — tighter + quieter on mobile
      var halo = p.mobile ? p.r * 2.6 : p.r * 4;
      var grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, halo);
      if (isPaper) {
        grd.addColorStop(0, "rgba(" + accentRGB + ", " + (alpha * (p.mobile ? 0.12 : 0.18)) + ")");
        grd.addColorStop(1, "rgba(" + accentRGB + ", 0)");
      } else {
        grd.addColorStop(0, "rgba(170, 215, 230, " + (alpha * (p.mobile ? 0.16 : 0.28)) + ")");
        grd.addColorStop(0.45, "rgba(" + accentRGB + ", " + (alpha * (p.mobile ? 0.05 : 0.08)) + ")");
        grd.addColorStop(1, "rgba(100, 160, 200, 0)");
      }
      ctx.beginPath();
      ctx.arc(p.x, p.y, halo, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();
    }
    raf = requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener("resize", function () {
    cancelAnimationFrame(raf);
    resize();
    if (heroVisible) draw();
  });
  // Stop drawing the hero particles while they are off-screen (big scroll-performance win)
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      heroVisible = entries[0].isIntersecting;
      cancelAnimationFrame(raf);
      if (heroVisible) draw();
    }).observe(canvas);
  }
})();

/* ---------- Projects ---------- */
const grid = document.getElementById("projectsGrid");
let activeFilter = "all";

function renderProjects() {
  if (!grid) return;
  const list =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.filters.includes(activeFilter));

  grid.innerHTML = list
    .map(
      (p) => `
    <article class="project-card ${p.span || ""}" data-slug="${p.slug}" data-cursor="View" tabindex="0" role="button" aria-label="View ${p.title}">
      <img src="${p.cover}" alt="${p.title}" loading="lazy" />
      <span class="view-hint">View</span>
      <div class="project-overlay">
        <p class="project-kicker">${p.kicker}</p>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-year">${p.year}</p>
      </div>
    </article>`
    )
    .join("");

  grid.querySelectorAll(".project-card").forEach((card, i) => {
    card.classList.remove("is-in");
    if (grid.classList.contains("is-ready")) {
      card.style.animation = "none";
      void card.offsetWidth;
      card.style.animation = "";
      card.style.animationDelay = (0.05 + i * 0.07) + "s";
      setTimeout(function () { card.classList.add("is-in"); }, 750 + i * 70);
    }

    card.addEventListener("click", () => openModal(card.dataset.slug));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(card.dataset.slug);
      }
    });
    if (cursor) {
      card.addEventListener("mouseenter", () => {
        cursor.classList.add("is-hover");
        if (cursorLabel) cursorLabel.textContent = "View";
      });
      card.addEventListener("mouseleave", () => {
        cursor.classList.remove("is-hover");
        if (cursorLabel) cursorLabel.textContent = "";
      });
    }
  });
}

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    activeFilter = btn.dataset.filter;
    renderProjects();
  });
});
renderProjects();

/* ---------- Modal ---------- */
const modal = document.getElementById("projectModal");
const modalContent = document.getElementById("modalContent");

function openModal(slug) {
  const p = PROJECTS.find((x) => x.slug === slug);
  if (!p || !modal || !modalContent) return;

  modalContent.innerHTML = `
    <img class="modal-cover" src="${p.cover}" alt="${p.title}" />
    <div class="modal-body">
      <p class="modal-kicker">${p.kicker} · ${p.year}</p>
      <h2 class="modal-title" id="modalTitle">${p.title}</h2>
      <p class="modal-blurb">${p.description}</p>
      <ul class="modal-highlights">
        ${p.highlights.map((h) => `<li>${h}</li>`).join("")}
      </ul>
      <div class="modal-actions">
        <a href="${p.href}" target="_blank" rel="noopener" class="btn btn-lg btn-primary">
          Visit live site
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
        </a>
        <a href="${p.repo}" target="_blank" rel="noopener" class="btn btn-lg btn-ghost">GitHub</a>
      </div>
      <div class="modal-ps">
        <div class="modal-ps-block">
          <h3>Problem</h3>
          <p>${p.problem}</p>
        </div>
        <div class="modal-ps-block">
          <h3>Solution</h3>
          <p>${p.solution}</p>
        </div>
      </div>
      <div class="modal-tags">
        ${p.tags.map((t) => `<span class="modal-tag">${t}</span>`).join("")}
      </div>
      <div class="modal-nav">
        <button type="button" class="btn btn-sm btn-ghost" data-proj-nav="-1">← Previous</button>
        <button type="button" class="btn btn-sm btn-ghost" data-proj-nav="1">Next →</button>
      </div>
    </div>
  `;
  modal.hidden = false;
  modalContent.querySelectorAll("[data-proj-nav]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const dir = Number(btn.getAttribute("data-proj-nav"));
      const i = PROJECTS.findIndex(function (x) { return x.slug === p.slug; });
      const next = PROJECTS[(i + dir + PROJECTS.length) % PROJECTS.length];
      openModal(next.slug);
    });
  });
  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (!modal) return;
  modal.hidden = true;
  document.body.style.overflow = "";
}

function isProjectModalOpen() {
  return modal && !modal.hidden;
}

// Close via X, backdrop, or any [data-close] (works even when clicking the SVG inside the button)
if (modal) {
  modal.addEventListener("click", function (e) {
    if (e.target.closest("[data-close]")) {
      e.preventDefault();
      e.stopPropagation();
      closeModal();
    }
  });

  // Direct bind on the static close button (survives content re-renders)
  var projectCloseBtn = modal.querySelector(".modal-close");
  if (projectCloseBtn) {
    projectCloseBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      closeModal();
    });
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && isProjectModalOpen()) {
    e.preventDefault();
    closeModal();
  }
});

/* ---------- Smooth anchors ---------- */
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href")?.slice(1);
    const el = id && document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});


/* ---------- Toast ---------- */
const toastEl = document.getElementById("toast");
let toastTimer;
function showToast(msg) {
  if (!toastEl) return;
  toastEl.hidden = false;
  toastEl.textContent = msg;
  requestAnimationFrame(function () { toastEl.classList.add("is-show"); });
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () {
    toastEl.classList.remove("is-show");
    setTimeout(function () { toastEl.hidden = true; }, 300);
  }, 2200);
}

/* ---------- Copy email / phone ---------- */
const EMAIL = "kennycool202421@gmail.com";
const PHONE_DISPLAY = "09049357967";
const PHONE_E164 = "+2349049357967";

function copyText(value, successMsg, chip) {
  function done() {
    showToast(successMsg);
    if (chip) {
      chip.classList.add("is-copied");
      setTimeout(function () { chip.classList.remove("is-copied"); }, 1600);
    }
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(value).then(done).catch(function () {
      showToast("Couldn’t copy — try long-press instead");
    });
  } else {
    showToast("Couldn’t copy — try long-press instead");
  }
}

const copyEmailBtn = document.getElementById("copyEmailBtn");
const copyPhoneBtn = document.getElementById("copyPhoneBtn");
if (copyEmailBtn) {
  copyEmailBtn.addEventListener("click", function () {
    copyText(EMAIL, "Email copied", copyEmailBtn);
  });
}
if (copyPhoneBtn) {
  copyPhoneBtn.addEventListener("click", function () {
    copyText(PHONE_DISPLAY, "Number copied", copyPhoneBtn);
  });
}

/* ---------- Back to top ---------- */
const backTop = document.getElementById("backTop");
function updateBackTop() {
  if (!backTop) return;
  const show = window.scrollY > 500;
  backTop.hidden = false;
  backTop.classList.toggle("is-visible", show);
}
window.addEventListener("scroll", updateBackTop, { passive: true });
updateBackTop();
if (backTop) {
  backTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ---------- Keyboard shortcuts: E = email, G = GitHub ---------- */
document.addEventListener("keydown", function (e) {
  if (e.target.matches("input, textarea, [contenteditable]")) return;
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  if (e.key === "g" || e.key === "G") {
    window.open("https://github.com/Kenny-Olanrewaju", "_blank", "noopener");
  }
  if (e.key === "e" || e.key === "E") {
    window.location.href = "mailto:kennycool202421@gmail.com";
  }
});


/* ---------- FAQ: one open at a time ---------- */
document.querySelectorAll(".faq-item").forEach(function (item) {
  item.addEventListener("toggle", function () {
    if (item.open) {
      document.querySelectorAll(".faq-item").forEach(function (other) {
        if (other !== item) other.open = false;
      });
    }
  });
});

/* ---------- Notes modal ---------- */
const NOTES = {
  type: {
    title: "Start with the words",
    kicker: "Note",
    body: [
      "People decide what a site is about in a few seconds — usually on a phone. If the headline and supporting text are unclear, colour and animation won’t fix that.",
      "I set text sizes and hierarchy early: what is the main message, what supports it, what can wait. One typeface for interface text, one for stronger headlines, then stop adding more fonts.",
      "A useful test: cover the images. If you can still understand the page, the writing and type are doing their job."
    ]
  },
  states: {
    title: "Plan for the messy path",
    kicker: "Note",
    body: [
      "Not everyone follows the perfect path. Carts sit empty, networks stall, forms fail. Those moments are part of the product, not an afterthought.",
      "Before launch I check the awkward cases: empty lists, error messages, keyboard-only use, and how the site looks in light and dark themes.",
      "Small motion is fine when it shows what changed. If it doesn’t help someone understand the page, it doesn’t need to be there."
    ]
  },
  quiet: {
    title: "Keep the interface calm",
    kicker: "Note",
    body: [
      "A calm interface is easier to trust. One accent colour, photographs that look real, and movement only when it explains a change.",
      "When every element tries to stand out, the important actions get lost. Fewer competing signals make the next step obvious — whether someone is ordering a cake or downloading a wallpaper.",
      "Quiet design isn’t empty design. It’s focus."
    ]
  }
};

const noteModal = document.getElementById("noteModal");
const noteContent = document.getElementById("noteContent");

function openNote(id) {
  const note = NOTES[id];
  if (!note || !noteModal || !noteContent) return;
  noteContent.innerHTML =
    '<p class="note-kicker">' + note.kicker + "</p>" +
    '<h2 id="noteTitle">' + note.title + "</h2>" +
    '<div class="note-prose">' +
    note.body.map(function (p) { return "<p>" + p + "</p>"; }).join("") +
    "</div>";
  noteModal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeNote() {
  if (!noteModal) return;
  noteModal.hidden = true;
  document.body.style.overflow = "";
}

document.querySelectorAll(".note-card").forEach(function (card) {
  card.addEventListener("click", function () {
    openNote(card.getAttribute("data-note"));
  });
  card.setAttribute("tabindex", "0");
  card.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openNote(card.getAttribute("data-note"));
    }
  });
});

if (noteModal) {
  noteModal.addEventListener("click", function (e) {
    if (e.target.closest("[data-close-note]")) {
      e.preventDefault();
      e.stopPropagation();
      closeNote();
    }
  });
  var noteCloseBtn = noteModal.querySelector(".modal-close");
  if (noteCloseBtn) {
    noteCloseBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      closeNote();
    });
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && noteModal && !noteModal.hidden) {
    e.preventDefault();
    closeNote();
  }
});

/* ---------- Mobile nav ---------- */
(function () {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("primaryNav");
  if (!toggle || !nav) return;

  function setOpen(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  toggle.addEventListener("click", function () {
    setOpen(!nav.classList.contains("is-open"));
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setOpen(false);
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("is-open")) setOpen(false);
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) setOpen(false);
  });
})();


/* ---------- Certificate lightbox ---------- */
(function () {
  const modal = document.getElementById("certModal");
  if (!modal) return;
  let lastFocus = null;

  function open(trigger) {
    lastFocus = trigger || document.activeElement;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    const closeBtn = modal.querySelector(".modal-close");
    if (closeBtn) closeBtn.focus();
  }
  function close() {
    modal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  document.querySelectorAll("[data-open-cert]").forEach(function (el) {
    el.addEventListener("click", function () { open(el); });
  });
  modal.addEventListener("click", function (e) {
    if (e.target.closest("[data-close-cert]")) close();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.hidden) close();
  });
})();
