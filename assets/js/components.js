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
      <div class="nav-wrap">
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
  return `
    <section class="footer-banner">
      <div class="footer-banner__visual" role="img" aria-label="Healthcare team working together">
        <div class="footer-banner__inner container">
          <div class="footer-banner__content">
            <h2>Your Health, Our Ongoing Commitment</h2>
            <p>From preventive checkups to specialist support, our teams work together to deliver clear guidance, compassionate care, and better outcomes for every patient.</p>
          </div>
        </div>
      </div>
    </section>
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <h3>HealthCare Pro</h3>
          <p>Educational showcase project built with vanilla HTML, CSS, and JavaScript.</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Email: info@email.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div>
          <h4>Address</h4>
          <p>123 Main St, Anytown, USA</p>
          <p>Open Daily: 24/7 Emergency</p>
        </div>
      </div>
      <div class="container copyright-wrap">
        <p class="copyright">&copy; ${new Date().getFullYear()}. All rights reserved.</p>
      </div>
    </footer>
  `;
}

/**
 * Service card. Pass linkHref (e.g. "services.html") to wrap in a link for featured/home grids.
 */
export function serviceCard(item, options = {}) {
  const { linkHref } = options;
  const body = `
      <img class="card-image" src="${item.img}" alt="${item.title}" loading="lazy">
      <div class="service-card-head">
        <i class="fas ${item.icon}"></i>
        <h3>${item.title}</h3>
      </div>
      <p>${item.desc}</p>
      <span class="badge">Trusted Care</span>
  `;
  if (linkHref) {
    return `
      <a href="${linkHref}" class="card-link ripple-btn reveal">
        <span class="card card--interactive">${body}</span>
      </a>
    `;
  }
  return `<article class="card card--interactive reveal">${body}</article>`;
}

/** Department page grid — mirrors service card layout (image, icon+title, text, badge). */
export function departmentShowcaseCard(item) {
  const body = `
      <img class="card-image" src="${item.img}" alt="${item.title} department" loading="lazy">
      <div class="service-card-head">
        <i class="fas ${item.icon}"></i>
        <h3>${item.title}</h3>
      </div>
      <p>${item.desc}</p>
      <span class="badge">${item.badge}</span>
  `;
  return `<article class="card card--interactive reveal" data-dept-category="${item.category}">${body}</article>`;
}

/** Rich department row for the home “Availability” grid (not a plain table). */
export function departmentCard(dept) {
  return `
    <article class="department-card reveal" role="listitem">
      <div class="department-card__icon" aria-hidden="true">
        <i class="fas ${dept.icon}"></i>
      </div>
      <div class="department-card__body">
        <h3 class="department-card__title">${dept.name}</h3>
        <p class="department-card__meta"><i class="fas fa-user-md" aria-hidden="true"></i> ${dept.team}</p>
        <span class="department-card__badge"><i class="fas fa-clock" aria-hidden="true"></i> ${dept.availability}</span>
      </div>
    </article>
  `;
}

export function tableRow(cols) {
  return `<tr>${cols.map((col) => `<td>${col}</td>`).join("")}</tr>`;
}

export function faqItem(item, idx) {
  const badgeMarkup = item.badge ? `<span class="badge faq-question-badge">${item.badge}</span>` : "";
  return `
    <article class="faq-item reveal">
      <button class="faq-question" type="button" aria-expanded="false" data-faq="${idx}">
        <span class="faq-question-main">
          ${badgeMarkup}
          <span class="faq-question-text">${item.q}</span>
        </span>
        <span class="faq-toggle">+</span>
      </button>
      <p class="faq-answer">${item.a}</p>
    </article>
  `;
}
