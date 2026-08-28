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
    featured: true,
    status: "featured",
    variant: "featured",
    accent: "#34d399",
    mediaPosition: "right",
  },
  {
    id: "pdf-chatbot-rag-document-qa",
    title: "PDF Chatbot - RAG-Powered Document Q&A",
    category: "Generative AI / RAG",
    shortDescription:
      "A RAG-powered PDF chatbot that allows users to upload documents and ask questions based on their contents.",
    fullDescription:
      "The system retrieves relevant context from uploaded documents and generates grounded answers while maintaining multi-turn conversation context.",
    technologies: [
      "FastAPI",
      "LangChain",
      "LangGraph",
      "ChromaDB",
      "Hugging Face",
      "Google Gemini",
      "React",
    ],
    highlights: [
      "Multiple PDF upload support",
      "PDF extraction",
      "Document chunking",
      "Embeddings",
      "Vector search",
      "Retrieval-Augmented Generation",
      "Multi-turn conversation memory",
      "Context-grounded answers",
      "Handles unavailable information appropriately",
    ],
    repository: "nikhilcheemala18-cmd/Pdf-chatbot",
    githubUrl: "https://github.com/nikhilcheemala18-cmd/Pdf-chatbot",
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
      ["Generative AI / RAG", "Generative AI / RAG Systems"].includes(
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
