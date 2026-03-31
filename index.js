import { departments, faqs, services, stats } from "./assets/data/site-data.js";
import { faqItem, renderFooter, renderHeader, serviceCard, tableRow } from "./assets/js/components.js";
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
  const departmentsRoot = document.querySelector("#departments-body");
  if (!statsRoot || !servicesRoot || !departmentsRoot) return;

  statsRoot.innerHTML = stats
    .map((item) => `<article class="stat-card reveal"><h3>${item.value}</h3><p>${item.label}</p></article>`)
    .join("");
  servicesRoot.innerHTML = services.slice(0, 3).map(serviceCard).join("");
  departmentsRoot.innerHTML = departments.map(tableRow).join("");
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