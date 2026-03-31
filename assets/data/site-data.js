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
  { label: "Patients Served", value: "50k+", icon: "fa-users" },
  { label: "Expert Doctors", value: "120+", icon: "fa-user-md" },
  { label: "Satisfaction Rate", value: "98%", icon: "fa-smile" },
  { label: "Emergency Response", value: "24/7", icon: "fa-ambulance" },
];

export const services = [
  {
    icon: "fa-heartbeat",
    title: "Cardiology",
    desc: "Early diagnosis, treatment planning, and heart health follow-up care.",
    img: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: "fa-tooth",
    title: "Dentistry",
    desc: "Preventive and restorative oral care for children, adults, and seniors.",
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: "fa-user-nurse",
    title: "Nursing",
    desc: "Compassion-driven nursing support with continuous patient monitoring.",
    img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: "fa-x-ray",
    title: "Radiology",
    desc: "Fast imaging support with accurate reports for better treatment decisions.",
    img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: "fa-pills",
    title: "Pharmacy",
    desc: "Safe medicine distribution and counseling by licensed professionals.",
    img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: "fa-brain",
    title: "Neurology",
    desc: "Specialized brain and nerve treatment with modern protocols.",
    img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80",
  },
];

/** Department rows for home “Availability” — icons + labels for richer card UI (8 for a 4×2 grid on desktop) */
export const departments = [
  { name: "Pathology", team: "22 Specialists", availability: "Mon-Sat", icon: "fa-microscope" },
  { name: "Pharmacology", team: "18 Specialists", availability: "Mon-Sun", icon: "fa-pills" },
  { name: "Radiology", team: "15 Specialists", availability: "24/7", icon: "fa-x-ray" },
  { name: "Anatomy", team: "10 Specialists", availability: "Mon-Fri", icon: "fa-heartbeat" },
  { name: "Pediatrics", team: "14 Specialists", availability: "Mon-Sun", icon: "fa-baby" },
  { name: "Orthopedics", team: "12 Specialists", availability: "Mon-Fri", icon: "fa-notes-medical" },
  { name: "Dermatology", team: "9 Specialists", availability: "Mon-Sat", icon: "fa-allergies" },
  { name: "Emergency", team: "28 Specialists", availability: "24/7", icon: "fa-medkit" },
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
