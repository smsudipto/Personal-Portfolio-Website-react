# Personal Portfolio Website

## Project Overview

A responsive personal portfolio website built with React.js. It presents personal information, education, technical skills, projects, and contact information in a professional interface for university submission and future portfolio use.

## Features

- Responsive navigation bar with mobile menu
- Hero section with CV download and project navigation
- About Me section
- Technical Skills section
- Dynamic project cards
- Project technology filtering
- Frontend contact form validation
- Dark / Light Mode
- Theme preference saved with `localStorage`
- Dynamic active navigation
- Scroll to Top button
- Responsive footer
- Mobile, tablet, laptop, and desktop support

## Technology Stack

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Vite
- React Hooks
- CSS Media Queries
- Browser `localStorage`

## Project Screenshots

Add real screenshots to a screenshots folder or replace these placeholders before submission:

- Home / Hero Section: `[Add screenshot here]`
- About Section: `[Add screenshot here]`
- Skills Section: `[Add screenshot here]`
- Projects Section: `[Add screenshot here]`
- Contact Section: `[Add screenshot here]`
- Dark Mode: `[Add screenshot here]`
- Mobile Responsive View: `[Add screenshot here]`

## Project Structure

```text
personal-portfolio-website/
├── public/
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── documents/
│   │   │   └── CV_PLACEHOLDER.txt
│   │   └── images/
│   │       └── projects/
│   │           ├── 3d-car-racing.svg
│   │           ├── bank-management.svg
│   │           ├── django-ecommerce.svg
│   │           └── research-topic-mapping.svg
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Projects.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── SkillCard.jsx
│   │   ├── Skills.jsx
│   │   └── ThemeToggle.jsx
│   ├── data/
│   │   ├── personalInfo.js
│   │   ├── projects.js
│   │   └── skills.js
│   ├── hooks/
│   │   └── useActiveSection.js
│   ├── styles/
│   │   ├── about.css
│   │   ├── contact.css
│   │   ├── footer.css
│   │   ├── global.css
│   │   ├── hero.css
│   │   ├── navbar.css
│   │   ├── projects.css
│   │   ├── scrollToTop.css
│   │   └── skills.css
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js
```

## Installation

Clone the repository and install its dependencies:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd YOUR_PROJECT_FOLDER
npm install
npm run dev
```

The development server will display its local URL in the terminal.

## Production Build

Create and preview an optimized production build:

```bash
npm run build
npm run preview
```

`npm run build` generates the production files in `dist/`. `npm run preview` serves that build locally for verification.

## Personal Information

Update the editable values in `src/data/personalInfo.js`:

- Developer Name: `SUDIPTO MANDAL`
- Professional Title: `Software Engineer`
- Email: `[EDITABLE EMAIL ADDRESS]`
- GitHub Profile: `[Add GitHub URL]`
- LinkedIn Profile: `[Add LinkedIn URL]`
- Facebook Profile: `[Add Facebook URL]`
- University: `[EDITABLE UNIVERSITY NAME]`
- Academic Status: `[EDITABLE ACADEMIC STATUS]`
- Career Goal: `[EDITABLE CAREER GOAL]`

Replace the CV placeholder with the actual PDF in `src/assets/documents/` and update its reference in the same data file.

## Contact

The contact form is a frontend-only demonstration and does not send email or store messages. Replace the editable email, location, and availability placeholders in `src/data/personalInfo.js` with real information when ready.

## Deployment

This Vite application can be deployed with Vercel or Netlify.

- GitHub Repository URL: `YOUR_GITHUB_REPOSITORY_URL`
- Live Website URL: `YOUR_LIVE_WEBSITE_URL`

## License

No license has been selected for this project yet. Choose an appropriate license before distributing the project as open-source.
