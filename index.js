import { departments, faqs, services, stats } from "./assets/data/site-data.js";
import { departmentCard, faqItem, renderFooter, renderHeader, serviceCard } from "./assets/js/components.js";
import { initUI } from "./assets/js/ui.js";

/**
 * Beginner note:
 * This file initializes shared layout and page widgets for all pages.
 */
function mountSharedLayout() {
  const page = document.body.dataset.page || "index.html";
  const headerRoot = document.querySelector("#site-header");
  const footerRoot = document.querySelector("#site-footer");

  if (headerRoot) headerRoot.innerHTML = renderHeader(page);
  if (footerRoot) footerRoot.innerHTML = renderFooter();
}

function mountHomeData() {
  const statsRoot = document.querySelector("#stats-grid");
  const servicesRoot = document.querySelector("#services-grid");
  const departmentsRoot = document.querySelector("#departments-grid");
  if (!statsRoot || !servicesRoot || !departmentsRoot) return;

  // Stat cards: icon + value + label; staggered reveal via CSS nth-child delays
  statsRoot.innerHTML = stats
    .map(
      (item, i) => `
    <article class="stat-card reveal stat-card--stagger" style="--stagger:${i}">
      <div class="stat-card__inner">
        <span class="stat-card__icon" aria-hidden="true"><i class="fas ${item.icon}"></i></span>
        <div class="stat-card__text">
          <h3 class="stat-card__value">${item.value}</h3>
          <p class="stat-card__label">${item.label}</p>
        </div>
      </div>
    </article>`,
    )
    .join("");
  // Featured services: click navigates to full services page
  servicesRoot.innerHTML = services.slice(0, 3).map((s) => serviceCard(s, { linkHref: "services.html" })).join("");
  departmentsRoot.innerHTML = departments.map(departmentCard).join("");
}

function mountServicesData() {
  const root = document.querySelector("#all-services-grid");
  if (!root) return;
  root.innerHTML = services.map(serviceCard).join("");
}

function mountFaqData() {
  const root = document.querySelector("#faq-root");
  if (!root) return;
  root.innerHTML = faqs.map(faqItem).join("");
}

mountSharedLayout();
mountHomeData();
mountServicesData();
mountFaqData();
initUI();