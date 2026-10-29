# 🚀 Rupam Ghosh | MERN Stack Developer Portfolio

A modern, responsive, and performance-focused developer portfolio built with **React.js, Vite, and Tailwind CSS**. Designed to showcase my technical skills, projects, internship experience, and educational background to recruiters and potential employers.

🌐 **Live Portfolio:** https://my-portfolio-sigma-one-k8ehr1xzlo.vercel.app
💼 **LinkedIn:** [Rupam Ghosh](https://linkedin.com/in/rupam-ghosh-7293a5279)  
💻 **GitHub:** [codebyrupam](https://github.com/codebyrupam)  
📍 **Location:** Kolkata, West Bengal, India

---

## ✨ Features

- 🎨 **Modern UI/UX** — Clean design with gradients, glassmorphism, and a consistent dark theme.
- 📱 **Responsive Design** — Optimized for desktop, tablet, and mobile devices.
- ⚡ **High Performance** — Powered by Vite for a fast development experience and optimized production builds.
- 🧭 **Smart Navigation** — Sticky navbar, active section highlighting, and a mobile navigation drawer.
- 👨‍💻 **Developer Introduction** — Professional introduction and interactive IDE-style preview.
- 🛠️ **Technical Skills** — Organized overview of frontend, backend, databases, and development tools.
- 📂 **Project Showcase** — Dedicated project cards with GitHub repositories and live demo links.
- 💼 **Internship Experience** — Highlights relevant web development internship experience.
- 🎓 **Education Timeline** — Presents academic qualifications and educational background.
- 📄 **Resume Download** — Easy access to my professional CV.
- 📬 **Contact Section** — Quick access to email and professional social profiles.
- 🔍 **SEO Fundamentals** — Page title, metadata, and other basic search-engine optimization features.
- ♿ **Accessibility Considerations** — Semantic structure and keyboard-navigation support.
- 🧪 **Browser Testing** — Automated browser test suite for checking important website functionality.

## 🧰 Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, JavaScript, HTML5, CSS3 |
| Styling | Tailwind CSS, Custom CSS |
| Build Tool | Vite |
| Development Tools | Git, GitHub, npm, VS Code |
| Testing | Automated browser testing |
| Deployment | Vercel / Netlify |

*Additional technologies and tools are listed according to their implementation and current learning status.*

## 📁 Project Structure

```text
rupam-ghosh-portfolio/
├── public/
│   ├── projects/               # Project screenshots
│   └── resume.pdf              # Your official CV
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── CurrentlyPracticing.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── ResumeModal.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tests/
│   └── browserTest.js
├── index.html
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md
```

## ⚙️ Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- [Git](https://git-scm.com/)
- A code editor such as [Visual Studio Code](https://code.visualstudio.com/)

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/codebyrupam/portfolio.git
```

**2. Navigate to the project directory**

```bash
cd portfolio
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

Open the local URL displayed in your terminal. Depending on your Vite configuration, it may be `http://localhost:5173` or another configured port.

### Available Scripts

```bash
npm run dev           # Start the development server
npm run build         # Build the production version
npm run preview       # Preview the production build
npm run test:browser  # Run browser tests, if configured
```

> **Note:** The browser test command depends on the testing setup and its required dependencies. Check `package.json` and the test configuration before running it.

## 🎨 Customization Guide

### 1. Update Portfolio Content

Most portfolio content is maintained in:

```text
src/data/portfolioData.js
```

Update your personal details, professional introduction, skills, project descriptions, social links, and other information in the corresponding data objects.

### 2. Add Your Resume

Place your official resume PDF inside the `public` directory:

```text
public/resume.pdf
```

Ensure the resume buttons point to the correct public file path and that the download functionality works correctly.

### 3. Add Your Projects

For each project, include:

- Project title and description
- Technologies used
- GitHub repository URL
- Live demo URL, if available
- Screenshot, if implemented

Example project entry:

```javascript
{
  id: "mern-crud-app",
  title: "MERN CRUD Web Application",
  description: "A web application for managing records with CRUD functionality.",
  technologies: ["React", "Node.js", "Express.js", "MongoDB"],
  githubUrl: "https://github.com/codebyrupam/your-repo-name",
  demoUrl: "https://your-deployed-app.vercel.app"
}
```

Adapt the property names to match the existing structure in `portfolioData.js`. Only list technologies and features that the project actually implements.

### 4. Add Project Screenshots

Store screenshots in:

```text
public/projects/
```

For example:

```text
public/projects/mern-crud.png
```

Connect each screenshot to its project data and render it in the relevant project card. Make sure the image path and component support are configured correctly.

## 🚀 Deployment

### Deploy with Vercel

1. Push your project to GitHub.
2. Visit [Vercel](https://vercel.com/).
3. Import your portfolio repository.
4. Confirm the framework is detected as **Vite**.
5. Set the build command to `npm run build`.
6. Set the output directory to `dist`.
7. Click **Deploy**.

### Deploy with Netlify

1. Visit [Netlify](https://www.netlify.com/).
2. Import your GitHub repository.
3. Configure the build command:

   ```bash
   npm run build
   ```

4. Set the publish directory to:

   ```text
   dist
   ```

5. Deploy the website and verify the generated URL.

## 🧪 Testing and Quality Checks

Before publishing a new version, verify the following:

- [ ] The project installs successfully.
- [ ] The development server starts without errors.
- [ ] The production build completes successfully.
- [ ] All navigation links work correctly.
- [ ] The mobile navigation opens and closes properly.
- [ ] All project links point to the correct destinations.
- [ ] Resume download works with the actual PDF file.
- [ ] Contact links and email actions work correctly.
- [ ] The layout is responsive across screen sizes.
- [ ] Browser tests pass, if configured.
- [ ] No broken images, console errors, or missing assets remain.

## 👨‍💻 About Me

I am a Computer Science and Technology diploma graduate interested in building modern, responsive web applications and developing my skills in full-stack web development.

My primary areas of interest include:

- Frontend development with React.js
- Backend development with Node.js and Express.js
- Database management with MongoDB and SQL
- Responsive UI development
- Problem-solving and continuous learning

I also have internship experience in web development and continue to improve my technical skills through practical projects and hands-on learning.

## 🎯 Current Learning Goals

I am actively strengthening my full-stack development skills and exploring additional technologies, including:

- Advanced React patterns and state management
- Authentication and authorization
- REST API development and integration
- Next.js fundamentals
- Real-time application development

These topics represent my learning goals and should not be interpreted as production-level expertise unless supported by relevant project experience.

## 📬 Connect With Me

I'm open to fresher opportunities, internships, and collaborations related to web development.

- **GitHub:** [github.com/codebyrupam](https://github.com/codebyrupam)
- **LinkedIn:** [linkedin.com/in/rupam-ghosh-7293a5279](https://linkedin.com/in/rupam-ghosh-7293a5279)
- **Email:** Add your professional email address here.

## 📄 License

This project is intended to showcase my personal portfolio and development work. If you plan to reuse or redistribute the source code, add an appropriate license file and review its terms.

---

⭐ **Thank you for visiting my portfolio!**

Feel free to explore my projects and connect with me.
