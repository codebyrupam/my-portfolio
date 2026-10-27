# Rupam Ghosh — MERN Stack Developer Portfolio

A professional, high-performance developer portfolio website engineered with **React.js**, **Vite**, and **Tailwind CSS**. Designed for fresher MERN Stack job applications, technical recruiter reviews, and engineering interviews.

---

## ⚡ Quick Start (Run Locally)

From the project root (`rupam-ghosh-portfolio`):

```bash
# 1. Install dependencies (if not already installed)
npm install

# 2. Start the local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

The Vite dev server will start at `http://localhost:3000` or `http://localhost:5173`.

---

## 📂 Project Structure

```text
rupam-ghosh-portfolio/
├── public/
│   └── resume.pdf                 <-- Place your official CV PDF here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             <-- Sticky navigation with active spy & mobile drawer
│   │   ├── Hero.jsx               <-- Headline, elevator pitch & interactive IDE preview
│   │   ├── About.jsx              <-- Academic summary, background & language proficiencies
│   │   ├── Skills.jsx             <-- Frontend, Backend, Database, Tools & Foundational
│   │   ├── CurrentlyPracticing.jsx<-- Transparent learning roadmap (Hooks, Redux, Auth, etc.)
│   │   ├── Projects.jsx           <-- Full-stack, React & UI project cards
│   │   ├── Experience.jsx         <-- NexCent Ecommerce internship details
│   │   ├── Education.jsx          <-- Diploma (85%), Class XII, and Class X timeline
│   │   ├── Contact.jsx            <-- Direct email, phone, LinkedIn & mailto form
│   │   ├── Footer.jsx             <-- Social links, navigation & back-to-top button
│   │   └── ResumeModal.jsx        <-- CV download trigger & instructions modal
│   ├── data/
│   │   └── portfolioData.js       <-- ⭐ Central configuration file for all content & links
│   ├── App.jsx                    <-- Main container component
│   ├── main.jsx                   <-- React entry point
│   └── index.css                  <-- Tailwind directives, custom glassmorphism & gradients
├── index.html                     <-- SEO meta tags, title & fonts
├── tailwind.config.js             <-- Dark theme color palette & extensions
├── vite.config.js                 <-- Vite build configuration
└── package.json
```

---

## ⚙️ How to Customize

### 1. Adding Your Real CV PDF File
- Save your official resume as `resume.pdf`.
- Copy or move it into the `public/` directory:
  ```text
  rupam-ghosh-portfolio/public/resume.pdf
  ```
- Any click on the **Resume** or **Download CV** buttons across the site will immediately download your file.

### 2. Updating Project Repository & Live Demo URLs
All project data is stored in a single file: `src/data/portfolioData.js`.
To update the repository or demo link for any project:
```javascript
// src/data/portfolioData.js
{
  id: "mern-crud-app",
  title: "MERN CRUD Web Application",
  // ...
  githubUrl: "https://github.com/codebyrupam/your-repo-name", // update your URL
  isGithubPlaceholder: false,
  demoUrl: "https://your-deployed-app.vercel.app",             // update once deployed
}
```

### 3. Adding Project Screenshots
1. Place your screenshot images inside `public/projects/` (e.g. `public/projects/mern-crud.png`).
2. In `src/data/portfolioData.js`, add an `image: "/projects/mern-crud.png"` property to the project.
3. In `src/components/Projects.jsx`, render the image above the card body.

---

## 🚀 Deployment Instructions

### Deploy to Vercel (Recommended — Free & Fast)
1. Push this project to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Rupam Ghosh Portfolio"
   git remote add origin https://github.com/codebyrupam/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset will be auto-detected as **Vite**.
5. Click **Deploy**. Your portfolio will be live with an SSL certificate within seconds!

### Deploy to Netlify
1. Go to [netlify.com](https://netlify.com).
2. Connect your repository.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy Site**.

---

## 💼 CV Accuracy & Recruiter Integrity Checklist
- **No Fabricated Data**: No fake employment dates, clients, or exaggerated metrics.
- **Accurate Academic Details**: Diploma in Computer Science & Technology from AIEM (2026, 85%).
- **Internship Representation**: Web Development Intern at NexCent Ecommerce with exact duties.
- **Transparent Learning Section**: Currently practicing technologies (Redux Toolkit, Next.js, Auth, Socket.IO) are clearly separated and labeled as active learning rather than senior production skills.
