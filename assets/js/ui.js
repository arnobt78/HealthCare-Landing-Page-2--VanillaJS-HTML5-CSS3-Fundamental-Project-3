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

function setupTabs() {
  const tabs = document.querySelectorAll("[data-tab-target]");
  if (!tabs.length) return;
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const group = tab.getAttribute("data-tab-group");
      const target = tab.getAttribute("data-tab-target");
      document.querySelectorAll(`[data-tab-group="${group}"]`).forEach((btn) => btn.classList.remove("is-active"));
      document.querySelectorAll(`[data-panel-group="${group}"]`).forEach((panel) => panel.classList.remove("is-active"));
      tab.classList.add("is-active");
      const panel = document.querySelector(`[data-panel="${target}"]`);
      if (panel) panel.classList.add("is-active");
    });
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
      q.querySelector("span").textContent = open ? "-" : "+";
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
