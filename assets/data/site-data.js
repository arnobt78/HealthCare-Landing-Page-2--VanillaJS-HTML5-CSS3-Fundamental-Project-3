/**
 * Shared content data for all pages.
 * Beginner note: keeping text/data in one file makes UI reuse easy.
 */
export const navLinks = [
  { href: "index.html", label: "Home" },
  { href: "about.html", label: "About" },
  { href: "services.html", label: "Services" },
  { href: "departments.html", label: "Departments" },
  { href: "blog.html", label: "Blog" },
  { href: "contact.html", label: "Contact" },
];

export const stats = [
  { label: "Patients Served", value: "50k+" },
  { label: "Expert Doctors", value: "120+" },
  { label: "Satisfaction Rate", value: "98%" },
  { label: "Emergency Response", value: "24/7" },
];

export const services = [
  { icon: "fa-heartbeat", title: "Cardiology", desc: "Early diagnosis, treatment planning, and heart health follow-up care." },
  { icon: "fa-tooth", title: "Dentistry", desc: "Preventive and restorative oral care for children, adults, and seniors." },
  { icon: "fa-user-nurse", title: "Nursing", desc: "Compassion-driven nursing support with continuous patient monitoring." },
  { icon: "fa-x-ray", title: "Radiology", desc: "Fast imaging support with accurate reports for better treatment decisions." },
  { icon: "fa-pills", title: "Pharmacy", desc: "Safe medicine distribution and counseling by licensed professionals." },
  { icon: "fa-brain", title: "Neurology", desc: "Specialized brain and nerve treatment with modern protocols." },
];

export const departments = [
  ["Pathology", "22 Specialists", "Mon-Sat"],
  ["Pharmacology", "18 Specialists", "Mon-Sun"],
  ["Radiology", "15 Specialists", "24/7"],
  ["Anatomy", "10 Specialists", "Mon-Fri"],
  ["Pediatrics", "14 Specialists", "Mon-Sun"],
];

export const faqs = [
  {
    q: "Do I need an appointment before visiting?",
    a: "Walk-ins are available for general care, but appointments are recommended for specialists.",
  },
  {
    q: "Do you provide emergency support?",
    a: "Yes. Our emergency team is available all day, every day.",
  },
  {
    q: "Can I consult doctors online?",
    a: "Yes. We provide secure telehealth sessions for selected departments.",
  },
];
