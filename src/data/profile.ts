// Single source of truth for the portfolio. Everything on the page is rendered from here,
// so updating the CV means editing this file only. Content taken from the CV
// (public/Allan-Feosar-CV.pdf) unless marked otherwise.

export const profile = {
  name: "Allan Geoffrey Feosar J.B",
  shortName: "Allan Feosar",
  initials: "AF",
  title: "Full Stack Developer",
  location: "Moari, Avadi, Chennai, India",
  summary:
    "Full-stack web developer with hands-on experience architecting scalable backend APIs and responsive user interfaces using C#, ASP.NET Core, JavaScript, and SQL Server. Designs secure RESTful microservices, implements JWT authentication workflows, and optimizes database schemas. Bridges modern frontend frameworks with resilient, cloud-ready backend architecture.",
  focus: [
    "Backend APIs and RESTful microservices",
    "Secure JWT authentication with refresh-token flows",
    "Responsive frontends with React, Next.js and TypeScript",
    "Relational database design and query tuning",
    "AI integration and agentic AI tooling",
  ],
  contact: {
    email: "allgeofffeosar.lord888@gmail.com",
    phone: "9176404239",
    linkedin: "https://www.linkedin.com/in/allan-feosar-204a6a21a",
    github: "https://github.com/AllanFeosar",
  },
  resumeHref: "/Allan-Feosar-CV.pdf",
};

export const experience = [
  {
    role: "Full Stack Web Developer",
    company: "STA Technologies",
    period: "2025 – Present",
    points: [
      "Designed and deployed modular RESTful APIs using ASP.NET Core Web API, improving backend integration efficiency across core products.",
      "Implemented secure token-based authentication (JWT) with automated refresh-token mechanisms, protecting critical platform endpoints.",
      "Built responsive, mobile-first web interfaces with modern JavaScript, HTML5 and Bootstrap, improving UI rendering speed and usability.",
      "Structured relational database schemas in SQL Server and optimized complex queries to reduce backend response latency.",
      "Configured deployment pipelines and hosting using Nginx and Docker to support continuous integration.",
    ],
  },
  {
    role: "Full Stack Web Developer",
    company: "Red Sky",
    period: "2024 – 2025",
    points: [
      "Developed dynamic front-to-back web modules using PHP, JavaScript and MySQL for client-facing applications.",
      "Integrated third-party REST APIs and delivered cross-browser responsive interfaces with design and QA teams.",
      "Streamlined API documentation with Swagger, accelerating client integration workflows.",
      "Resolved production bug tickets, optimized UI components and contributed to version-controlled team codebases via Git.",
    ],
  },
  {
    role: "Service Operations Associate",
    company: "Customer & Operations Services",
    period: "2019 – 2023",
    points: [
      "Managed client service workflows, customer communication and issue troubleshooting across daily operations.",
    ],
  },
];

// Projects are written from the actual codebases this developer has built. Only the company
// website has a public live link; the others are private, so no link is shown for them.
export const projects = [
  {
    name: "X MEG Company Website",
    kind: "Company website",
    summary:
      "Marketing and services site for X MEG, a digital engineering company. Built as a fully static Next.js 16 site with Tailwind CSS v4, deployed to Cloudflare Workers from GitHub.",
    tech: ["Next.js 16", "React 19", "Tailwind CSS v4", "Cloudflare Workers", "GitHub"],
    link: { label: "Visit site", href: "https://xmeg.dpdns.org" },
  },
  {
    name: "Amazon Product Research Platform",
    kind: "Market intelligence tool for Amazon FBA sellers",
    summary:
      "Searches Amazon listings, reviews and Movers & Shakers rankings, then scores product opportunities with a background-job pipeline and a Chrome extension for in-page analysis.",
    tech: ["ASP.NET Core 8", "SQL Server", "Python FastAPI", "Playwright", "React 19", "TypeScript"],
  },
  {
    name: "Infotroz ERP",
    kind: "Enterprise resource planning system",
    summary:
      "Multi-module ERP covering finance and GL, inventory, sales, procurement, payroll, HR, CRM, projects and GST compliance, built as a clean-architecture FastAPI backend with a mobile-first React Native app.",
    tech: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "Redis", "React Native", "Expo"],
  },
  {
    name: "AI Marketing Automation",
    kind: "AI-assisted marketing workflows",
    summary:
      "Automation toolkit for content and media generation, social scheduling and marketplace tasks, exposed to AI agents as MCP tool servers, with media backends for image and video generation.",
    tech: ["Python", "MCP servers", "Playwright", "AI APIs", "Docker"],
  },
];

export const skills = [
  {
    group: "Backend",
    items: ["C#", "ASP.NET Core Web API", "RESTful APIs", "Node.js", "Python", "PHP", "JWT Authentication"],
  },
  {
    group: "Frontend",
    items: ["JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "HTML5", "CSS3", "Bootstrap", "jQuery"],
  },
  {
    group: "Databases",
    items: ["Microsoft SQL Server", "MySQL", "Database Normalization", "Indexing & Query Tuning"],
  },
  {
    group: "Tools & DevOps",
    items: ["Git", "GitHub", "Docker", "Nginx", "Swagger / OpenAPI", "Postman"],
  },
  {
    group: "AI",
    items: ["AI Integration", "AI-Assisted Coding", "Agentic AI"],
  },
  {
    group: "Concepts",
    items: ["Microservices Architecture", "CRUD Operations", "MVC Pattern", "State Management"],
  },
];

export const education = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    org: "University of Madras",
    period: "2022 – Present",
  },
  {
    title: "Full Stack Development Certification",
    org: "Red Sky Institute",
    period: "Jun 2023 – Dec 2023",
  },
  {
    title: "Diploma in Mechatronics Engineering",
    org: "Government Polytechnic College, Purasawalkam",
    period: "2016 – 2019",
  },
];
