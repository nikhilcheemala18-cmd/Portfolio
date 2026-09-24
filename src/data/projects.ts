import type { Project, ProjectCategory } from "@/types/project";

export const projects: Project[] = [
  {
    id: "enterprise-rag-platform",
    title: "Enterprise RAG Platform",
    category: "Generative AI / RAG Systems",
    shortDescription:
      "An end-to-end Retrieval-Augmented Generation platform that enables users to upload business documents and ask grounded questions based on their contents.",
    fullDescription:
      "Developed an end-to-end RAG platform for uploading business documents and asking grounded questions across PDF, DOCX, XLSX, and CSV files.",
    technologies: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "Supabase",
      "pgvector",
      "BGE",
      "Google Gemini",
      "Pydantic",
      "unittest",
    ],
    highlights: [
      "Multi-format document ingestion",
      "PDF, DOCX, XLSX, and CSV support",
      "Document normalization and semantic chunking",
      "Local BGE embeddings",
      "PostgreSQL and Supabase integration",
      "pgvector vector storage",
      "Hybrid retrieval",
      "Full-text search",
      "Vector similarity search",
      "Reciprocal Rank Fusion",
      "Grounded answers using Google Gemini",
      "Source chunk attribution",
      "FastAPI REST APIs",
      "Provider abstraction for embeddings and LLMs",
      "Comprehensive automated testing with 500+ passing tests",
    ],
    repository: "nikhilcheemala18-cmd/enterprise-rag-platform",
    githubUrl: "https://github.com/nikhilcheemala18-cmd/enterprise-rag-platform",
    images: [
      {
        src: "/images/projects/enterprise-rag-platform/landing.png",
        alt: "Enterprise RAG Platform landing screen",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/enterprise-rag-platform/workspace.png",
        alt: "Enterprise RAG Platform workspace interface",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/enterprise-rag-platform/architecture.svg",
        alt: "Enterprise RAG Platform architecture diagram",
        width: 1920,
        height: 1080,
      },
      {
        src: "/images/projects/enterprise-rag-platform/evaluation-metrics.svg",
        alt: "Enterprise RAG Platform evaluation metrics snapshot",
        width: 1920,
        height: 1080,
      },
    ],
    featured: true,
    status: "featured",
    variant: "featured",
    accent: "#60a5fa",
    mediaPosition: "overlap",
  },
  {
    id: "ai-travel-booking-agent",
    title: "AI Travel Booking Agent",
    category: "Agentic AI",
    shortDescription:
      "An LLM-powered conversational travel planning agent that understands natural-language requests, manages multi-turn conversations, and executes travel-related workflows through a structured agentic pipeline.",
    technologies: ["FastAPI", "LLMs", "Agentic AI", "React"],
    highlights: [
      "Planner",
      "Tool Executor",
      "Validator",
      "Fallback Manager",
      "Itinerary Builder",
      "Natural-language trip planning",
      "Conversational clarification",
      "Mid-conversation corrections",
      "Provider-agnostic LLM architecture",
      "Validation and failure handling",
      "Bounded retry mechanisms",
      "Structured itinerary generation",
    ],
    repository: "nikhilcheemala18-cmd/TravelAgent",
    githubUrl: "https://github.com/nikhilcheemala18-cmd/TravelAgent",
    images: [
      {
        src: "/images/projects/ai-travel-booking-agent/landing.png",
        alt: "AI Travel Booking Agent landing screen",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/ai-travel-booking-agent/workspace.png",
        alt: "AI Travel Booking Agent conversational workspace",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/ai-travel-booking-agent/architecture.svg",
        alt: "AI Travel Booking Agent architecture diagram",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/ai-travel-booking-agent/evaluation-metrics.svg",
        alt: "AI Travel Booking Agent evaluation metrics snapshot",
        width: 1920,
        height: 1080,
      },
    ],
    featured: true,
    status: "featured",
    variant: "featured",
    accent: "#34d399",
    mediaPosition: "right",
  },
  {
    id: "real-time-task-manager",
    title: "Real-Time Task Manager",
    category: "Full-Stack Application",
    shortDescription:
      "A collaborative MERN task management app with authentication-ready workflows, workspace routing, boards, cards, comments, and real-time architecture foundations.",
    fullDescription:
      "Built a production-style task management platform using React, Redux Toolkit, React Query, Express, MongoDB, Mongoose, and Socket.io-oriented architecture.",
    technologies: [
      "React",
      "Redux Toolkit",
      "React Query",
      "Express",
      "MongoDB",
      "Mongoose",
      "Socket.io",
      "JWT",
    ],
    highlights: [
      "Workspace and board routing",
      "Task cards, lists, comments, and activity structure",
      "Redux Toolkit and React Query state architecture",
      "Express module-based backend structure",
      "Socket.io-ready real-time collaboration layer",
      "JWT authentication foundation",
    ],
    repository: "nikhilcheemala18-cmd/real-time-task-manager",
    githubUrl: "https://github.com/nikhilcheemala18-cmd/real-time-task-manager",
    images: [
      {
        src: "/images/projects/real-time-task-manager/login.png",
        alt: "Real-Time Task Manager login screen",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/real-time-task-manager/register.png",
        alt: "Real-Time Task Manager registration screen",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/real-time-task-manager/architecture.svg",
        alt: "Real-Time Task Manager architecture diagram",
        width: 1440,
        height: 900,
      },
    ],
    status: "complete",
    accent: "#38bdf8",
    mediaPosition: "default",
  },
  {
    id: "devcareer-hub",
    title: "DevCareer Hub",
    category: "Full-Stack Web Application",
    shortDescription:
      "Developer career and job management platform built with Next.js and MongoDB.",
    fullDescription:
      "Includes a public content platform and admin CMS for managing job listings, categories, tags, media, authentication, SEO, and publishing workflows.",
    technologies: ["Next.js", "MongoDB", "Modern full-stack web technologies"],
    highlights: [
      "Public developer-focused content platform",
      "Admin dashboard",
      "Job content management",
      "Category management",
      "Tag management",
      "Media management",
      "MongoDB data layer",
      "Service-oriented architecture",
      "Admin authentication",
      "SEO improvements",
      "Publishing features",
    ],
    repository: "nikhilcheemala18-cmd/devcareer-hub",
    githubUrl: "https://github.com/nikhilcheemala18-cmd/devcareer-hub",
    images: [
      {
        src: "/images/projects/devcareer-hub/homepage.png",
        alt: "DevCareer Hub public homepage",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/devcareer-hub/admin-login.png",
        alt: "DevCareer Hub admin login screen",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/devcareer-hub/architecture.svg",
        alt: "DevCareer Hub architecture diagram",
        width: 1440,
        height: 900,
      },
    ],
    status: "complete",
    accent: "#8b5cf6",
    mediaPosition: "left",
  },
  {
    id: "employee-management-system",
    title: "Employee Management System",
    category: "Full-Stack Application",
    shortDescription:
      "A full-stack, role-based employee management system designed for a multi-branch HR services organization.",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "JWT"],
    highlights: [
      "Admin, Owner, and Operator roles",
      "Role-based access control",
      "Employee onboarding and management",
      "Attendance tracking",
      "Payroll workflows",
      "JWT authentication",
      "Protected APIs",
      "MongoDB-backed data management",
      "Frontend and backend deployment",
    ],
    repository: "nikhilcheemala18-cmd/employee-management-system",
    githubUrl: "https://github.com/nikhilcheemala18-cmd/employee-management-system",
    images: [
      {
        src: "/images/projects/employee-management-system/landing.png",
        alt: "Employee Management System landing screen",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/employee-management-system/admin-login.png",
        alt: "Employee Management System admin login screen",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/employee-management-system/architecture.svg",
        alt: "Employee Management System architecture diagram",
        width: 1440,
        height: 900,
      },
    ],
    status: "complete",
    accent: "#22c55e",
    mediaPosition: "default",
  },
];

export const projectCategories: ProjectCategory[] = [
  {
    title: "Generative AI / RAG",
    description:
      "Document-grounded systems, retrieval pipelines, embeddings, and LLM applications.",
    projects: projects.filter((project) =>
      ["Generative AI / RAG Systems"].includes(
        project.category
      )
    ),
  },
  {
    title: "Agentic AI",
    description:
      "Conversational and tool-oriented AI workflows with validation, fallbacks, and orchestration.",
    projects: projects.filter((project) => project.category === "Agentic AI"),
  },
  {
    title: "Full-Stack Applications",
    description:
      "Applications that connect frontend interfaces, backend APIs, databases, and deployment workflows.",
    projects: projects.filter((project) =>
      ["Full-Stack Web Application", "Full-Stack Application"].includes(
        project.category
      )
    ),
  },
];
