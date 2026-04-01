function setupMobileNav() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navbar-items");
  if (!burger || !nav) return;

  burger.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(isOpen));
  });
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 },
  );

  items.forEach((item) => io.observe(item));
}

function setupParallax() {
  const parallax = document.querySelectorAll("[data-parallax]");
  if (!parallax.length) return;

  const update = () => {
    const y = window.scrollY;
    parallax.forEach((el) => {
      const speed = Number(el.getAttribute("data-parallax")) || 0.12;
      el.style.transform = `translateY(${y * speed}px)`;
    });
  };

  window.addEventListener("scroll", update, { passive: true });
  update();
}

function setupRipple() {
  const buttons = document.querySelectorAll(".ripple-btn");
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const rect = button.getBoundingClientRect();
      const ripple = document.createElement("span");
      ripple.className = "ripple";
      ripple.style.left = `${event.clientX - rect.left}px`;
      ripple.style.top = `${event.clientY - rect.top}px`;
      button.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove());
    });
  });
}

/** Switch visible tab panel + sync aria-selected on tab buttons */
function activateTab(group, target) {
  document.querySelectorAll(`[data-tab-group="${group}"]`).forEach((btn) => {
    btn.classList.remove("is-active");
    if (btn.getAttribute("role") === "tab") btn.setAttribute("aria-selected", "false");
  });
  document.querySelectorAll(`[data-panel-group="${group}"]`).forEach((panel) => panel.classList.remove("is-active"));

  const tab = document.querySelector(`[data-tab-group="${group}"][data-tab-target="${target}"]`);
  if (tab) {
    tab.classList.add("is-active");
    if (tab.getAttribute("role") === "tab") tab.setAttribute("aria-selected", "true");
  }
  const panel = document.querySelector(`[data-panel-group="${group}"][data-panel="${target}"]`);
  if (panel) panel.classList.add("is-active");
}

const tabAutoplayTimers = new Map();

function clearTabAutoplay(group) {
  const id = tabAutoplayTimers.get(group);
  if (id != null) window.clearInterval(id);
  tabAutoplayTimers.delete(group);
}

/** Rotate panels on an interval; pauses when user prefers reduced motion */
function startTabAutoplay(group) {
  const wrap = document.querySelector(`.tabs[data-tab-autoplay="${group}"]`);
  if (!wrap) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  clearTabAutoplay(group);

  const targets = Array.from(
    document.querySelectorAll(`button[data-tab-group="${group}"][data-tab-target]`),
  ).map((b) => b.getAttribute("data-tab-target"));

  if (targets.length < 2) return;

  const ms = Number(wrap.getAttribute("data-tab-interval")) || 5500;

  const tick = () => {
    const active = document.querySelector(`button[data-tab-group="${group}"].is-active`);
    const cur = active?.getAttribute("data-tab-target");
    let i = targets.indexOf(cur);
    if (i < 0) i = 0;
    activateTab(group, targets[(i + 1) % targets.length]);
  };

  tabAutoplayTimers.set(group, window.setInterval(tick, ms));
}

function setupTabs() {
  const tabs = document.querySelectorAll("[data-tab-target]");
  if (!tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const group = tab.getAttribute("data-tab-group");
      const target = tab.getAttribute("data-tab-target");
      activateTab(group, target);

      if (document.querySelector(`.tabs[data-tab-autoplay="${group}"]`)) {
        clearTabAutoplay(group);
        startTabAutoplay(group);
      }
    });
  });

  document.querySelectorAll(".tabs[data-tab-autoplay]").forEach((el) => {
    const group = el.getAttribute("data-tab-autoplay");
    if (group) startTabAutoplay(group);
  });
}

function setupDropdown() {
  const triggers = document.querySelectorAll("[data-dropdown-trigger]");
  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const target = trigger.getAttribute("data-dropdown-trigger");
      const menu = document.querySelector(`[data-dropdown="${target}"]`);
      if (menu) menu.classList.toggle("is-open");
    });
  });
}

function setupFaq() {
  const questions = document.querySelectorAll(".faq-question");
  questions.forEach((q) => {
    q.addEventListener("click", () => {
      const root = q.closest(".faq-item");
      if (!root) return;
      const answer = root.querySelector(".faq-answer");
      if (!answer) return;
      const open = root.classList.toggle("is-open");
      q.setAttribute("aria-expanded", String(open));
      const toggle = q.querySelector(".faq-toggle");
      if (toggle) toggle.textContent = open ? "-" : "+";
    });
  });
}

export function initUI() {
  setupMobileNav();
  setupReveal();
  setupParallax();
  setupRipple();
  setupTabs();
  setupDropdown();
  setupFaq();
}
