import { departmentShowcase, departments, faqs, services, stats } from "./assets/data/site-data.js";
import {
  departmentCard,
  departmentShowcaseCard,
  faqItem,
  renderFooter,
  renderHeader,
  serviceCard,
} from "./assets/js/components.js";
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

function mountDepartmentsShowcase() {
  const root = document.querySelector("#departments-showcase-grid");
  const filtersWrap = document.querySelector("[data-dept-filters]");
  if (!root) return;

  const filterButtons = filtersWrap ? Array.from(filtersWrap.querySelectorAll("[data-dept-filter]")) : [];

  const render = (category) => {
    const list = category === "all" ? departmentShowcase : departmentShowcase.filter((d) => d.category === category);
    root.innerHTML = list.map(departmentShowcaseCard).join("");
    root.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
  };

  render("all");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-dept-filter") || "all";
      filterButtons.forEach((btn) => btn.classList.remove("is-active"));
      button.classList.add("is-active");
      render(category);
    });
  });
}

function mountServicesData() {
  const root = document.querySelector("#all-services-grid");
  if (!root) return;
  const filtersWrap = document.querySelector("[data-service-filters]");
  const filterButtons = filtersWrap ? Array.from(filtersWrap.querySelectorAll("[data-service-filter]")) : [];

  const renderServices = (category) => {
    const filtered = category === "all" ? services : services.filter((service) => service.category === category);
    root.innerHTML = filtered.map(serviceCard).join("");
    root.querySelectorAll(".reveal").forEach((card) => card.classList.add("is-visible"));
  };

  renderServices("all");

  if (!filterButtons.length) return;

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-service-filter") || "all";
      filterButtons.forEach((btn) => btn.classList.remove("is-active"));
      button.classList.add("is-active");
      renderServices(category);
    });
  });
}

function mountFaqData() {
  const root = document.querySelector("#faq-root");
  if (!root) return;
  root.innerHTML = faqs.map(faqItem).join("");
}

mountSharedLayout();
mountHomeData();
mountDepartmentsShowcase();
mountServicesData();
mountFaqData();
initUI();