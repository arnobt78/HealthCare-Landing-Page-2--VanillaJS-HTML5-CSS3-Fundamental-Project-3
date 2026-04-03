# Health Care Landing Page 2 - JavaScript (Vanilla), HTML5, CSS3 Fundamental Project 3 (Framework-free SPA)

A responsive, modern health care website built with HTML, CSS, and JavaScript. It is designed for clinics, hospitals, or health-related organizations to showcase their services, departments, and contact information. The project demonstrates best practices in web design, UI/UX, and responsive layouts, making it a great learning resource for beginners and intermediate developers.

- **Live Demo:** [https://healthcare-ui-2.vercel.app/](https://healthcare-ui-2.vercel.app/)

![Healthcare UI Screenshot 1](https://github.com/user-attachments/assets/3b994412-c2e7-4a97-a3f1-c6350277ee26)
![Healthcare UI Screenshot 2](https://github.com/user-attachments/assets/e9e63890-bc6d-410d-95c7-874fc1415412)
![Healthcare UI Screenshot 3](https://github.com/user-attachments/assets/4606a578-964a-427a-87d1-88fdf6cd7f5c)
![Healthcare UI Screenshot 4](https://github.com/user-attachments/assets/8bc65c39-437b-441c-8644-fac1ae4f6a66)
![Healthcare UI Screenshot 5](https://github.com/user-attachments/assets/cf18f3c3-ab5c-476b-ad7f-d4c7011de1d4)
![Healthcare UI Screenshot 6](https://github.com/user-attachments/assets/b9119283-4040-4ebc-8832-b1e24db29783)
![Healthcare UI Screenshot 7](https://github.com/user-attachments/assets/aed0852b-43f5-4a5f-bf87-80e13753f5ee)
![Healthcare UI Screenshot 8](https://github.com/user-attachments/assets/52253a49-6c2e-465c-af41-8c12ab2a5f83)
![Healthcare UI Screenshot 9](https://github.com/user-attachments/assets/0e97c83c-606d-4132-a1f5-983a94ea6a07)
![Healthcare UI Screenshot 10](https://github.com/user-attachments/assets/9b149c07-ebe0-42c2-a4de-cd423e115af4)
![Healthcare UI Screenshot 11](https://github.com/user-attachments/assets/c2c470a9-db09-4b9f-940c-26b589d3ba6f)
![Healthcare UI Screenshot 12](https://github.com/user-attachments/assets/384c3236-c9f9-4f38-82f2-90ffec29658d)
![Healthcare UI Screenshot 13](https://github.com/user-attachments/assets/29e3d1bb-dc08-43fc-b3db-af8fdde2ad1a)

## Table of Contents

- [Project Summary](#project-summary)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [How to Run](#how-to-run)
- [Component & Code Walkthrough](#component--code-walkthrough)
- [How to Reuse Components](#how-to-reuse-components)
- [Keywords](#keywords)
- [Conclusion](#conclusion)

---

## Project Summary

This project is a multi-page, framework-free healthcare UI built with vanilla HTML, CSS, and JavaScript. It includes reusable shared layout components (header/footer), page-specific sections for services, departments, blog, and contact, plus responsive behavior and interactive UI patterns such as filters, tabs, accordions, and hover states.

The codebase is structured to stay beginner-friendly while still demonstrating practical front-end patterns: centralized data, reusable render helpers, clean section-based styling, and deployment-ready setup for static hosting.

---

## Features

- Responsive navigation bar with burger menu for mobile
- Hero section with a call-to-action
- Appointment booking form (UI only)
- Services section with icons
- Quality highlights
- About section with image and description
- Departments overview
- Footer with contact, departments, address, and social links
- Fully responsive design for all devices

---

## Project Structure

```bash
health-website-main/
│
├── index.html         # Main HTML file
├── style.css          # Stylesheet
├── index.js           # JavaScript for navbar interactivity
├── public/images/               # Images and icons
│   ├── favicon.ico
│   ├── logo.png
│   ├── pic1.jpg
│   └── pic2.jpg
```

---

## Technologies Used

- HTML5
- CSS3 (with Flexbox and media queries)
- JavaScript (ES6)
- Font Awesome (CDN)
- Google Fonts (CDN)

---

## How to Run

To view the website locally, follow these steps:

1. **Open the Project Folder:**
   - Download or clone the repository.
   - Open the `health-care-2` folder.
2. **Open in Browser:**
   - Double-click `index.html` or right-click and choose "Open With" → your browser.
3. **(Optional) Run a Local Server:**
   - For dynamic features or best practice, run a local server:
     - With Python 3: `python3 -m http.server`
     - Open `http://localhost:8000` in your browser.

---

## Component & Code Walkthrough

### index.html

- **DOCTYPE and Meta Tags:** Standard HTML5 setup with viewport for responsiveness.
- **Navbar:** Responsive navigation with logo and burger menu for mobile.
- **Main Section:** Hero text and appointment form (UI only, not connected to backend).
- **Services:** Grid of service cards with Font Awesome icons.
- **Quality:** Highlights clinic strengths.
- **About:** Image and description of the clinic.
- **Departments:** List of medical departments.
- **Footer:** Contact info, departments, address, social icons.

### style.css

- Uses Google Fonts and Font Awesome.
- Flexbox for layout, media queries for responsiveness.
- Custom styles for each section and component.
- Mobile-first adjustments for navigation and layout.

### index.js

- Handles burger menu click to toggle navigation on mobile:

  ```js
  burger = document.querySelector(".burger");
  navbarItems = document.querySelector(".navbar-items");
  nav = document.querySelector(".nav");
  burger.addEventListener("click", () => {
    navbarItems.classList.toggle("h-class");
    nav.classList.toggle("v-class");
  });
  ```

### public/images/

- Contains favicon, logo, and section images.

---

## How to Reuse Components

- **Navbar & Footer:** Copy HTML and CSS blocks. Update links and icons as needed.
- **Appointment Form:** Use as a template for UI forms. Add backend logic as required.
- **Service/Department Cards:** Reuse card structure for other content types.
- **Responsive Layout:** Media queries and Flexbox can be adapted for other projects.

---

## Keywords

healthcare, responsive website, HTML, CSS, JavaScript, clinic, hospital, appointment, UI, web design, template, Font Awesome, Google Fonts, mobile-friendly

---

## Conclusion

This project is a clean, modern template for health care websites. It demonstrates responsive design, modular components, and best practices in front-end development. Feel free to customize and extend it for your own needs or use it as a learning resource.

---

Happy coding! 🎉

Thank you!

---
