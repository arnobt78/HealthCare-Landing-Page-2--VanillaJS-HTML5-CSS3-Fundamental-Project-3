import { navLinks } from "../data/site-data.js";

export function renderHeader(activePage) {
  const links = navLinks
    .map(
      (link) =>
        `<li><a class="${link.href === activePage ? "is-active" : ""}" href="${link.href}">${link.label}</a></li>`,
    )
    .join("");

  return `
    <header class="site-header">
      <div class="container nav-wrap">
        <a href="index.html" class="brand">
          <img src="public/favicon.ico" alt="Healthcare logo">
          <span>HealthCare Pro</span>
        </a>
        <button class="burger" type="button" aria-expanded="false" aria-label="Toggle navigation">
          <span></span><span></span><span></span>
        </button>
        <nav class="navbar-items">
          <ul class="nav">${links}</ul>
        </nav>
      </div>
    </header>
  `;
}

export function renderFooter() {
  const year = new Date().getFullYear();
  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <h3>HealthCare Pro</h3>
          <p>Educational showcase project built with vanilla HTML, CSS, and JavaScript.</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Email: hello@healthcarepro.com</p>
          <p>Phone: +1 (555) 201-2200</p>
        </div>
        <div>
          <h4>Address</h4>
          <p>Frankfurt, Germany</p>
          <p>Open Daily: 24/7 Emergency</p>
        </div>
      </div>
      <p class="copyright">Copyright ${year} HealthCare Pro</p>
    </footer>
  `;
}

export function serviceCard(item) {
  return `
    <article class="card reveal">
      <img class="card-image" src="${item.img}" alt="${item.title}" loading="lazy">
      <i class="fas ${item.icon}"></i>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <span class="badge">Trusted Care</span>
    </article>
  `;
}

export function tableRow(cols) {
  return `<tr>${cols.map((col) => `<td>${col}</td>`).join("")}</tr>`;
}

export function faqItem(item, idx) {
  return `
    <article class="faq-item reveal">
      <button class="faq-question" type="button" aria-expanded="false" data-faq="${idx}">
        ${item.q}
        <span>+</span>
      </button>
      <p class="faq-answer">${item.a}</p>
    </article>
  `;
}
