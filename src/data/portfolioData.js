/**
 * Central Portfolio Data Configuration for Rupam Ghosh
 * All personal details, projects, skills, and links are managed here.
 */

export const personalInfo = {
  name: "Rupam Ghosh",
  role: "MERN Stack Web Developer",
  status: "Fresher | Actively Seeking Full-Time Opportunities",
  tagline: "Building responsive, modern, and high-performance web applications with clean code and intuitive UI.",
  location: "Kolkata, West Bengal, India",
  email: "rupamghosh175@gmail.com",
  phone: "+91 9475887833",
  github: "https://github.com/codebyrupam",
  linkedin: "https://linkedin.com/in/rupam-ghosh-7293a5279",
  resumePath: "/resume.pdf", // Place your resume.pdf into the public/ directory
  bio: "Motivated and detail-oriented Computer Science diploma graduate (2026) specializing in modern frontend engineering and the MERN stack ecosystem. Passionate about crafting responsive user interfaces, developing robust REST APIs, and writing clean, scalable JavaScript and React code. Hands-on experience gained through an e-commerce development internship and dedicated full-stack practice projects.",
  languages: [
    { name: "English", proficiency: "Professional Working Proficiency" },
    { name: "Bengali", proficiency: "Native" },
    { name: "Hindi", proficiency: "Conversational" }
  ],
  quickStats: [
    { label: "Education Status", value: "Diploma CST '26" },
    { label: "Diploma Score", value: "85%" },
    { label: "Core Focus", value: "MERN Stack" },
    { label: "Availability", value: "Immediate / Fresher" }
  ]
};

export const skillsData = {
  frontend: [
    { name: "React.js", level: "Proficient", highlight: true },
    { name: "JavaScript (ES6+)", level: "Proficient", highlight: true },
    { name: "Tailwind CSS", level: "Proficient", highlight: true },
    { name: "HTML5", level: "Proficient" },
    { name: "CSS3", level: "Proficient" }
  ],
  backend: [
    { name: "Node.js", level: "Working Knowledge", highlight: true },
    { name: "Express.js", level: "Working Knowledge", highlight: true },
    { name: "REST API Fundamentals", level: "Working Knowledge" },
    { name: "CRUD Operations", level: "Working Knowledge" }
  ],
  databaseAndIntegration: [
    { name: "MongoDB", level: "Basic Knowledge", note: "Schema design & CRUD" },
    { name: "Axios", level: "Proficient", note: "API communication" },
    { name: "API Integration", level: "Working Knowledge", note: "Third-party & custom endpoints" }
  ],
  tools: [
    { name: "Git", category: "Version Control" },
    { name: "GitHub", category: "Code Collaboration" },
    { name: "Visual Studio Code", category: "Editor & Tooling" },
    { name: "Figma", category: "UI/UX & Design Hand-off" }
  ],
  otherLanguages: [
    { name: "Python", level: "Basic Foundation" },
    { name: "Java", level: "Basic Foundation" }
  ]
};

// Clearly delineated: strictly practicing/in-progress to avoid misrepresenting as advanced skills
export const currentlyPracticing = [
  {
    topic: "React Hooks & State Architecture",
    description: "Deepening practical knowledge of useEffect dependencies, custom hooks, and memoization patterns.",
    icon: "Boxes"
  },
  {
    topic: "Redux Toolkit",
    description: "Global state management, slices, and async thunks for scalable React applications.",
    icon: "Layers"
  },
  {
    topic: "Protected Routes & Auth Flow",
    description: "Implementing client-side route guards, JWT token lifecycle, and role-based views.",
    icon: "ShieldCheck"
  },
  {
    topic: "Google Authentication (OAuth)",
    description: "Integrating seamless single sign-on (SSO) with Firebase and OAuth providers.",
    icon: "KeyRound"
  },
  {
    topic: "Socket.IO Real-time Communication",
    description: "Bi-directional event-driven architecture for real-time chat and live status updates.",
    icon: "Zap"
  },
  {
    topic: "Next.js & Server Components",
    description: "Exploring hybrid rendering (SSR/SSG), App Router paradigms, and SEO optimizations.",
    icon: "Flame"
  },
  {
    topic: "TypeScript",
    description: "Type safety, interfaces, generics, and strict contract definitions across UI props.",
    icon: "FileCode2"
  },
  {
    topic: "Payment Gateway Concepts",
    description: "Studying webhook verification, order creation workflows, and checkout security principles.",
    icon: "CreditCard"
  }
];

export const experienceData = [
  {
    role: "Web Development Intern",
    company: "NexCent Ecommerce",
    location: "Remote / Internship",
    type: "Internship",
    description: "Contributed to front-facing e-commerce user experiences, responsive layouts, and version-controlled collaborative workflows.",
    responsibilities: [
      "Assisted with developing and refining responsive e-commerce web pages using HTML5, CSS3, and JavaScript.",
      "Collaborated on UI layouts, mobile-first responsive design, and frontend implementation across various screen viewports.",
      "Utilized GitHub for source-code management, branching, and version control during development practice."
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Git", "GitHub"]
  }
];

export const projectsData = [
  {
    id: "mern-crud-app",
    title: "MERN CRUD Web Application",
    subtitle: "Full-Stack Data Management System",
    category: "Full Stack",
    featured: true,
    summary: "A complete full-stack web application practicing the MERN architecture with full Create, Read, Update, and Delete operations and RESTful communication.",
    highlights: [
      "Built interactive user interfaces with React.js and reusable component architecture",
      "Created RESTful endpoints with Node.js and Express.js to process incoming requests",
      "Integrated Axios for asynchronous HTTP API communication with backend services",
      "Practiced document storage, schema structure, and query handling with MongoDB"
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Axios", "REST API"],
    // Real repository link or explicit placeholder
    githubUrl: "https://github.com/codebyrupam", 
    isGithubPlaceholder: true, // Set to false once specific repository link is updated
    demoUrl: null, // Set URL once deployed (never fake deployment)
    badge: "Full-Stack Project"
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio Website",
    subtitle: "Clean, Modern & Semantic Web Experience",
    category: "Frontend UI",
    featured: true,
    summary: "A modern, highly responsive developer portfolio engineered with clean semantic layout, subtle dark theme aesthetics, and accessible design patterns.",
    highlights: [
      "Crafted mobile-first responsive layouts with clean CSS and modern component styling",
      "Structured semantic HTML5 for high readability, accessibility, and clean DOM trees",
      "Designed a polished dark palette with glassmorphism and subtle accent highlights",
      "Engineered reusable components, interactive modals, and copy-to-clipboard utilities"
    ],
    techStack: ["React.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
    githubUrl: "https://github.com/codebyrupam",
    isGithubPlaceholder: true,
    demoUrl: null,
    badge: "Portfolio Highlight"
  },
  {
    id: "react-practice-apps",
    title: "React Practice Applications",
    subtitle: "Interactive UI, API Integration & State Labs",
    category: "React / Frontend",
    featured: true,
    summary: "A collection of practical React applications focused on mastering state management, external API fetching, component lifecycles, and dynamic client routing.",
    highlights: [
      "Implemented dynamic product listings, search filters, and detail views",
      "Applied essential React Hooks including useState, useEffect, and custom state logic",
      "Integrated external third-party REST APIs using asynchronous fetch and Axios",
      "Architected modular and reusable component structures passing props effectively"
    ],
    techStack: ["React.js", "JavaScript (ES6+)", "Axios", "React Hooks", "CSS3"],
    githubUrl: "https://github.com/codebyrupam",
    isGithubPlaceholder: true,
    demoUrl: null,
    badge: "React Showcase"
  },
  {
    id: "responsive-web-layouts",
    title: "Responsive Web Layouts",
    subtitle: "Figma-to-Code Pixel-Accurate UI Practice",
    category: "UI / UX Implementation",
    featured: false,
    summary: "Precision frontend implementations translating Figma design wireframes and mockups into responsive, accessible, cross-browser web interfaces.",
    highlights: [
      "Translated Figma design files and UI components into clean, semantic markup",
      "Applied modern CSS Flexbox and Grid patterns for fluid multi-screen responsiveness",
      "Ensured mobile, tablet, and widescreen visual parity without layout breakage",
      "Maintained structured, maintainable stylesheets and accessible color contrasts"
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Figma", "Responsive Web Design"],
    githubUrl: "https://github.com/codebyrupam",
    isGithubPlaceholder: true,
    demoUrl: null,
    badge: "UI Engineering"
  }
];

export const educationData = [
  {
    degree: "Diploma in Computer Science & Technology",
    institution: "Abacus Institute of Engineering and Management",
    year: "2026 (Final Year / Passing Year)",
    score: "85%",
    scoreType: "Aggregate Score",
    status: "In Progress / Final Year",
    details: "Comprehensive coursework covering Data Structures, Web Development, Database Management Systems, Computer Networks, and Object-Oriented Programming."
  },
  {
    degree: "Higher Secondary (Class XII)",
    institution: "Sijna Ujna Pancha Para High School",
    year: "2023",
    score: "56.6%",
    scoreType: "Board Examination",
    status: "Completed",
    details: "Senior secondary education focusing on foundational science and general studies."
  },
  {
    degree: "Secondary Examination (Class X)",
    institution: "Sijna Ujna Pancha Para High School",
    year: "2021",
    score: "65%",
    scoreType: "Board Examination",
    status: "Completed",
    details: "Secondary general education building foundational core analytical and language capabilities."
  }
];
