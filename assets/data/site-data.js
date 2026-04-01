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
    category: "general",
  },
  {
    icon: "fa-tooth",
    title: "Dentistry",
    desc: "Preventive and restorative oral care for children, adults, and seniors.",
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
    category: "general",
  },
  {
    icon: "fa-user-nurse",
    title: "Nursing",
    desc: "Compassion-driven nursing support with continuous patient monitoring.",
    img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    category: "general",
  },
  {
    icon: "fa-x-ray",
    title: "Radiology",
    desc: "Fast imaging support with accurate reports for better treatment decisions.",
    img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1200&q=80",
    category: "emergency",
  },
  {
    icon: "fa-pills",
    title: "Pharmacy",
    desc: "Safe medicine distribution and counseling by licensed professionals.",
    img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=1200&q=80",
    category: "telehealth",
  },
  {
    icon: "fa-brain",
    title: "Neurology",
    desc: "Specialized brain and nerve treatment with modern protocols.",
    img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80",
    category: "telehealth",
  },
];

/** Full-width department cards for departments.html (same card pattern as services grid) */
export const departmentShowcase = [
  {
    icon: "fa-microscope",
    title: "Pathology",
    desc: "Accurate reports with quality-assured lab workflows and rapid turnaround for clinicians.",
    img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80",
    badge: "Lab Excellence",
    category: "diagnostics",
  },
  {
    icon: "fa-x-ray",
    title: "Radiology",
    desc: "Fast imaging pipeline from scan to actionable report with coordinated specialist reads.",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    badge: "Fast Turnaround",
    category: "diagnostics",
  },
  {
    icon: "fa-heartbeat",
    title: "Cardiology",
    desc: "Early diagnosis, treatment planning, and heart health follow-up with preventive programs.",
    img: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1200&q=80",
    badge: "Heart Care",
    category: "clinical",
  },
  {
    icon: "fa-baby",
    title: "Pediatrics",
    desc: "Compassionate care tailored for children and families with age-appropriate communication.",
    img: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=1200&q=80",
    badge: "Family Care",
    category: "patient",
  },
  {
    icon: "fa-notes-medical",
    title: "Orthopedics",
    desc: "Bone, joint, and mobility support from injury recovery through long-term rehabilitation.",
    img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
    badge: "Motion Health",
    category: "clinical",
  },
  {
    icon: "fa-ambulance",
    title: "Emergency",
    desc: "24/7 rapid triage, stabilization, and escalation to the right specialty team when minutes matter.",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    badge: "24/7 Critical",
    category: "patient",
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
    badge: "Appointments",
  },
  {
    q: "Do you provide emergency support?",
    a: "Yes. Our emergency team is available all day, every day.",
    badge: "Emergency",
  },
  {
    q: "Can I consult doctors online?",
    a: "Yes. We provide secure telehealth sessions for selected departments.",
    badge: "Telehealth",
  },
  {
    q: "How do I access my test reports?",
    a: "You can collect reports at the front desk or request secure digital delivery after verification.",
    badge: "Reports",
  },
  {
    q: "Do you support insurance and cashless claims?",
    a: "Yes. Our billing desk helps with eligible providers, pre-authorization, and claim documentation.",
    badge: "Billing",
  },
  {
    q: "What should I bring for a first specialist visit?",
    a: "Carry ID, previous prescriptions, relevant reports, and a short timeline of symptoms.",
    badge: "Preparation",
  },
];
