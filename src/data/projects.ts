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
    explanation: {
      short: {
        overview:
          "Enterprise RAG Platform is an intelligent document-based Q&A system that allows users to upload business documents, search across them, and ask grounded questions based on their content.",
        lists: [
          {
            title: "User Features",
            items: [
              "Upload PDF, DOCX, XLSX, and CSV files",
              "Ask questions in natural language",
              "Search across uploaded documents",
              "Get answers grounded in retrieved document chunks",
              "View source context used for the answer",
            ],
          },
          {
            title: "Technical Highlights",
            items: [
              "Multi-format document ingestion",
              "Document parsing and normalization",
              "Semantic chunking",
              "Embedding generation",
              "PostgreSQL + pgvector indexing",
              "Hybrid lexical + vector retrieval",
              "Reciprocal Rank Fusion",
              "Source-backed answer generation",
            ],
          },
        ],
      },
      medium: {
        problem:
          "Enterprise RAG Platform solves the problem of making business documents searchable, understandable, and useful through natural-language questions. In many real workflows, important information is spread across PDFs, spreadsheets, reports, and internal documents. Users may know what they want to ask, but they may not know which file contains the answer or what exact wording was used inside the document.",
        solution:
          "To solve this, I built a backend-focused RAG system where documents are uploaded, processed, indexed, retrieved, and then used as context for answer generation. The system does not send the user's question directly to an LLM. Instead, it first finds the most relevant document chunks and only then uses those chunks to generate a grounded answer.",
        technical:
          "Technically, the platform supports multi-format ingestion for PDF, DOCX, XLSX, and CSV files. Each uploaded file is parsed, normalized, split into meaningful chunks, embedded, and stored in PostgreSQL with pgvector support. When a user asks a question, the system performs both lexical search and vector search, then combines the results using Reciprocal Rank Fusion.",
        decision:
          "This hybrid retrieval approach matters because business questions can depend on both exact terms and semantic meaning. Lexical search helps with exact policy words, names, and values, while vector search helps when users ask the same idea in different language. The final answer is generated using retrieved context, and the system returns the source chunks used to support the response.",
      },
      long: {
        intro:
          "Enterprise RAG Platform is a document intelligence system built around one core idea: before an AI system answers a question, it should first find the right evidence.",
        sections: [
          {
            title: "Problem",
            body:
              "The problem this project solves comes from real business document workflows. Important information is often scattered across PDFs, spreadsheets, reports, policies, and internal files. A user may ask a simple question, but the answer might be buried inside a long document, written in different wording, or stored in a table. Searching manually is slow, and traditional keyword search is limited because users do not always know the exact terms used in the document.",
          },
          {
            title: "Why RAG Needs Grounding",
            body:
              "Directly asking an LLM is not reliable enough for this kind of workflow. The model may give a fluent answer, but without retrieval and source grounding, there is no clear way to verify whether the answer actually came from the uploaded documents. That is why this project focuses on building the retrieval and backend foundation first.",
          },
          {
            title: "What I Built",
            body:
              "The system allows users to upload business documents and then ask natural-language questions over them. Uploaded files go through a complete ingestion pipeline. The backend detects the file type, loads the document, normalizes the content, splits it into retrieval-friendly chunks, generates embeddings, and stores the chunks in PostgreSQL with pgvector support.",
          },
          {
            title: "Retrieval Flow",
            body:
              "When a user asks a question, the platform runs a hybrid retrieval pipeline. It uses lexical search to catch exact words, policy terms, numbers, and structured information. It also uses vector search to find semantically similar content when the user's wording is different from the document. These two result sets are then merged using Reciprocal Rank Fusion, which helps produce a stronger final ranking without directly comparing incompatible score types.",
          },
          {
            title: "Why Hybrid Search",
            body:
              "This design decision matters because enterprise documents are not always easy to search with one method. A pure vector search may understand meaning but miss exact values or specific terminology. A pure keyword search may find exact matches but fail when the user asks a question in a different way. Hybrid retrieval gives the system a better chance of finding the right context before generation happens.",
          },
          {
            title: "Generation And Sources",
            body:
              "After retrieval, the selected chunks are passed into the RAG generation layer. The LLM receives the user question along with the retrieved context, and the answer is returned with source chunks. This makes the response more transparent because the user can see what information supported the answer.",
          },
          {
            title: "Engineering Structure",
            body:
              "The project is structured as a backend system rather than just a chatbot interface. It separates document ingestion, chunking, embeddings, indexing, retrieval, RAG generation, API routes, and evaluation into clear modules. It also includes tests and retrieval evaluation work, including metrics such as Recall@5, Recall@10, Precision, MRR, source grounding, and latency.",
          },
          {
            title: "What This Demonstrates",
            body:
              "This project demonstrates that I can think through the engineering required to make a RAG system more reliable. The focus is on retrieval quality, source grounding, modular backend design, testability, and making the AI layer depend on verified context instead of unsupported generation.",
          },
        ],
      },
    },
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
    explanation: {
      short: {
        overview:
          "AI Travel Booking Agent is a conversational travel planning system that turns natural-language trip requests into structured travel workflows with planning, tool execution, validation, fallback handling, and itinerary generation.",
        lists: [
          {
            title: "User Features",
            items: [
              "Plan trips through natural conversation",
              "Ask follow-up questions only when required details are missing",
              "Handle mid-conversation corrections",
              "Return flight and hotel options from simulated travel tools",
              "Generate a structured itinerary from validated results",
            ],
          },
          {
            title: "Technical Highlights",
            items: [
              "FastAPI agent backend",
              "React chat workspace",
              "LLM-powered slot extraction",
              "Conversation state management",
              "Tool registry and executor",
              "Validator and fallback manager",
              "Provider-agnostic LLM layer",
              "Controlled workflow evaluation",
            ],
          },
        ],
      },
      medium: {
        problem:
          "AI Travel Booking Agent solves the problem of turning messy travel requests into structured actions. A user may describe a trip casually, miss important details, change their mind midway, or ask for recommendations without filling a rigid form. A normal chatbot can respond conversationally, but it may not reliably decide what information is missing, when to call tools, how to validate results, or how to recover from failures.",
        solution:
          "To solve this, I built an agentic travel workflow where the LLM is used for planning and extraction, while the actual work is handled by structured backend stages. The system manages the conversation, extracts trip details, asks clarifying questions when needed, executes travel tools, validates the results, handles retryable failures, and turns the final output into a structured itinerary.",
        technical:
          "Technically, the backend is organized as a staged pipeline: Conversation Manager, Planner, Tool Executor, Validator, Fallback Manager, Itinerary Builder, and Response Builder. The LLM does not directly call tools or control the whole system. It produces structured planning output, and the backend controls execution through typed schemas, a tool registry, validation rules, and bounded fallback behavior.",
        decision:
          "This architecture matters because agent workflows can become unreliable when every responsibility is placed inside one large prompt. Separating planning, execution, validation, fallback, and response formatting makes the system easier to debug, test, and improve. The project also includes controlled evaluation notes for workflow success, correction handling, field extraction, complete-record extraction, and latency.",
      },
      long: {
        intro:
          "AI Travel Booking Agent is built around a simple idea: an AI travel assistant should not just chat, it should plan, execute, validate, and recover in a controlled workflow.",
        sections: [
          {
            title: "Problem",
            body:
              "Travel planning is naturally conversational. Users do not always provide origin, destination, dates, passengers, budget, and hotel preferences in one clean message. They may correct themselves, change one detail, or ask for suggestions in an incomplete way. A form is too rigid for this experience, but a plain chatbot is too uncontrolled because it can respond without executing reliable steps.",
          },
          {
            title: "Why Agentic Workflow",
            body:
              "The project uses an agentic pipeline because travel planning has multiple responsibilities. The system needs to understand the user's request, remember session state, decide whether information is missing, call the right tools, check whether tool results are usable, retry when failures are recoverable, and finally present a clean itinerary. Keeping those responsibilities separate makes the agent more predictable.",
          },
          {
            title: "What I Built",
            body:
              "I built a FastAPI backend and React chat interface for a conversational travel agent. The user can describe a trip in natural language, the system extracts travel slots, asks clarifying questions only when required, handles corrections without resetting the full conversation, and returns structured flight and hotel recommendations from simulated travel tools.",
          },
          {
            title: "Agent Flow",
            body:
              "The backend flow starts with the Conversation Manager, which loads or creates session state. The Planner uses an LLM-backed extraction layer to understand the user's message and produce either a clarification request or an execution plan. The Tool Executor runs the planned steps through a registry. The Validator checks whether the returned data is complete and usable. The Fallback Manager retries only bounded, recoverable failures. The Itinerary Builder and Response Builder then turn the validated result into a user-facing response.",
          },
          {
            title: "Why Not One Big Prompt",
            body:
              "Putting the entire travel flow inside one prompt would make the system harder to trust. It would be unclear whether the model planned correctly, executed correctly, or simply generated a plausible response. In this project, the LLM is used for language understanding and structured planning, while backend code owns execution, validation, fallbacks, and response assembly.",
          },
          {
            title: "Reliability And Evaluation",
            body:
              "The project includes evaluation notes for controlled HTTP scenarios, correction handling, structured field extraction, complete-record extraction, and latency. These metrics are not claims about real-world travel booking accuracy. They are controlled engineering checks that show whether the workflow behaves consistently under tested scenarios.",
          },
          {
            title: "What This Demonstrates",
            body:
              "This project demonstrates how I think about agentic systems: break the workflow into clear stages, keep the LLM provider replaceable, prevent endless retries, validate outputs before presenting them, and build the system so failures can be inspected instead of hidden behind a fluent answer.",
          },
        ],
      },
    },
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
        src: "/images/projects/real-time-task-manager/board.png",
        alt: "Real-Time Task Manager board with task lists and cards",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/real-time-task-manager/card-details.png",
        alt: "Real-Time Task Manager card details modal with comments and attachments",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/real-time-task-manager/workspace.png",
        alt: "Real-Time Task Manager workspace with members and activity feed",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/real-time-task-manager/dashboard.png",
        alt: "Real-Time Task Manager workspace dashboard overview",
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
    explanation: {
      short: {
        overview:
          "Real-Time Task Manager is a collaborative MERN task management platform for organizing workspaces, boards, lists, cards, comments, activities, members, notifications, and attachment-ready workflows.",
        lists: [
          {
            title: "User Features",
            items: [
              "Create and manage workspaces",
              "Organize boards, lists, and task cards",
              "Open card details with comments and activity context",
              "Support member and notification workflows",
              "Use dashboard and workspace views for project tracking",
            ],
          },
          {
            title: "Technical Highlights",
            items: [
              "React + Vite frontend",
              "Redux Toolkit and React Query",
              "Express module-based API",
              "MongoDB and Mongoose persistence",
              "JWT authentication foundation",
              "Zod validation",
              "Socket.io realtime layer",
              "Feature-oriented backend modules",
            ],
          },
        ],
      },
      medium: {
        problem:
          "Real-Time Task Manager solves the problem of coordinating project work across workspaces, boards, task cards, comments, and team activity. A simple todo list is not enough when work needs structure, ownership, updates, and a clear view of what is happening across a workspace.",
        solution:
          "To solve this, I built a full-stack task management system with a React frontend and Express/MongoDB backend. The application organizes work into workspaces, boards, lists, cards, comments, activities, members, and notifications. The UI is designed around dashboard, workspace, board, and card-detail views so users can move from high-level overview to task-level context.",
        technical:
          "Technically, the frontend uses Redux Toolkit for app state and React Query for server state. The backend is organized into feature modules for auth, workspaces, members, boards, lists, cards, comments, attachments, activities, and notifications. Each backend module separates models, routes, controllers, services, and validation, with MongoDB/Mongoose handling persistence.",
        decision:
          "The important engineering decision is separating application state, server cache, and backend modules instead of building everything as one large CRUD app. The project also includes a Socket.io-ready realtime layer, which prepares the system for collaborative updates without forcing the rest of the architecture to depend on realtime behavior from the start.",
      },
      long: {
        intro:
          "Real-Time Task Manager is a full-stack productivity application built to explore how collaborative project management systems can be structured across frontend state, backend APIs, persistence, and realtime-ready workflows.",
        sections: [
          {
            title: "Problem",
            body:
              "Project work quickly becomes difficult to manage when tasks are scattered across messages, notes, and individual todo lists. Teams need a shared place to organize work, group tasks by board or list, track comments and activity, and understand the current state of a workspace without losing context.",
          },
          {
            title: "What I Built",
            body:
              "I built a MERN task management application with workspaces, boards, lists, cards, card details, comments, activities, members, notifications, and attachment-ready structure. The application gives users multiple levels of organization: dashboard for overview, workspace for project context, board for workflow, and card details for execution-level discussion.",
          },
          {
            title: "Frontend Structure",
            body:
              "The frontend uses React with Vite, React Router, Redux Toolkit, React Query, Axios, and reusable UI components. Redux Toolkit manages local application state, while React Query handles server state, fetching, caching, and updates. This separation helps prevent the frontend from becoming a single tangled state layer.",
          },
          {
            title: "Backend Structure",
            body:
              "The backend uses Express, MongoDB, Mongoose, JWT, Zod, and Socket.io. It is organized by feature modules such as auth, workspace, board, list, card, comment, attachment, activity, member, and notification. Each module follows a route/controller/service/model/validation pattern, which makes the backend easier to extend as features grow.",
          },
          {
            title: "Realtime Foundation",
            body:
              "The project includes a realtime layer with Socket.io-related files for events, broadcasting, and client connection structure. This keeps realtime collaboration as a first-class architectural concern while still allowing the core REST API and database workflows to remain understandable and testable.",
          },
          {
            title: "Why This Architecture",
            body:
              "A task management app can become messy if boards, cards, comments, activities, members, and notifications are handled as unrelated pieces. The modular backend structure gives each domain its own boundary, while the frontend state approach separates UI state from server data. This makes the project feel closer to a production-style app than a simple CRUD demo.",
          },
          {
            title: "What This Demonstrates",
            body:
              "This project demonstrates full-stack application thinking: routing, authentication foundation, database modeling, feature modules, reusable frontend state patterns, activity-driven UX, and realtime-ready architecture. It shows that I can build a structured product workflow, not just isolated screens.",
          },
        ],
      },
    },
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
    explanation: {
      short: {
        overview:
          "DevCareer Hub is a full-stack developer career and job management platform with a public content experience and admin workflows for managing jobs, categories, tags, media, SEO, and publishing.",
        lists: [
          {
            title: "User Features",
            items: [
              "Browse developer-focused career content",
              "View job and career resources",
              "Support public content discovery",
              "Manage job listings through admin workflows",
              "Control categories, tags, media, and publishing",
            ],
          },
          {
            title: "Technical Highlights",
            items: [
              "Next.js application structure",
              "MongoDB data layer",
              "Admin CMS workflows",
              "Authentication-ready management area",
              "Service-oriented code organization",
              "SEO-focused public pages",
              "Content publishing flow",
              "Media management structure",
            ],
          },
        ],
      },
      medium: {
        problem:
          "DevCareer Hub solves the problem of managing developer-focused career content and job listings from one place. A public site needs to be easy for visitors to browse, while the admin side needs workflows for creating, organizing, and publishing content without manually changing code every time.",
        solution:
          "To solve this, I built a full-stack web application with a public content platform and an admin CMS. The public side focuses on presenting career and job content, while the admin side manages job listings, categories, tags, media, and publishing workflows.",
        technical:
          "Technically, the project uses Next.js with MongoDB as the data layer. The architecture separates public-facing pages from protected admin workflows and uses service-oriented code to keep data access and business logic organized. SEO improvements and publishing controls are part of the project direction so the public content can be managed more like a real platform.",
        decision:
          "The key engineering idea is separating content presentation from content operations. Visitors should get a clean browsing experience, while the admin system handles the operational side: adding jobs, organizing metadata, managing media, and controlling what becomes visible.",
      },
      long: {
        intro:
          "DevCareer Hub is a full-stack content and job management platform built around the idea that a useful developer career site needs both a polished public experience and a maintainable admin workflow behind it.",
        sections: [
          {
            title: "Problem",
            body:
              "Career and job platforms are not only about showing content. They also require a system for managing listings, organizing categories and tags, handling media, controlling publishing, and making public pages discoverable. Without an admin workflow, every content change becomes a manual development task.",
          },
          {
            title: "What I Built",
            body:
              "I built DevCareer Hub as a full-stack web application with two main sides: a public developer-focused content experience and an admin CMS for managing jobs, categories, tags, media, authentication, SEO, and publishing features.",
          },
          {
            title: "Public Experience",
            body:
              "The public side is designed to present developer career content and job-related resources in a way that visitors can browse and discover. This part of the application focuses on the user-facing reading and discovery experience.",
          },
          {
            title: "Admin Workflow",
            body:
              "The admin side supports operational content management. Instead of hardcoding job listings or metadata, the system is structured so content can be created, organized, updated, and published through management workflows.",
          },
          {
            title: "Data And Architecture",
            body:
              "The project uses Next.js with MongoDB. The architecture separates public routes from admin workflows and keeps data access and business logic organized through a service-oriented structure. This gives the project a clearer boundary between frontend presentation, backend/data logic, and publishing operations.",
          },
          {
            title: "Why This Approach",
            body:
              "A platform like this needs to be maintainable as content grows. Separating browsing, management, metadata, media, and publishing helps the system scale beyond a static website. It also shows the difference between building pages and building a small content platform.",
          },
          {
            title: "What This Demonstrates",
            body:
              "This project demonstrates full-stack product thinking: public pages, admin tools, content management, database-backed workflows, metadata organization, authentication direction, SEO awareness, and publishing control.",
          },
        ],
      },
    },
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
        src: "/images/projects/employee-management-system/landing-current.png",
        alt: "Employee Management System landing page with HRMS overview and screen preview",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/employee-management-system/admin-dashboard.jpg",
        alt: "Employee Management System admin dashboard with workforce overview",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/employee-management-system/owner-dashboard.jpg",
        alt: "Employee Management System owner dashboard with employee metrics",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/employee-management-system/employee-cards.jpg",
        alt: "Employee Management System employee directory cards",
        width: 1440,
        height: 900,
      },
      {
        src: "/images/projects/employee-management-system/attendance-table.jpg",
        alt: "Employee Management System attendance workflow table",
        width: 1440,
        height: 900,
      },
    ],
    status: "complete",
    accent: "#22c55e",
    mediaPosition: "default",
    explanation: {
      short: {
        overview:
          "Employee Management System is a role-based HR management platform for a multi-branch services organization, covering employee onboarding, attendance workflows, payroll-related operations, and protected access for Admin, Owner, and Operator roles.",
        lists: [
          {
            title: "User Features",
            items: [
              "Admin, Owner, and Operator role flows",
              "Employee onboarding and management",
              "Attendance roster and daily attendance workflows",
              "Payroll and salary detail workflows",
              "Protected dashboards for different permission levels",
            ],
          },
          {
            title: "Technical Highlights",
            items: [
              "React frontend",
              "Redux state management",
              "Express backend APIs",
              "MongoDB data storage",
              "JWT authentication",
              "Role-based route protection",
              "Seeded demo data",
              "Vercel and Render deployment",
            ],
          },
        ],
      },
      medium: {
        problem:
          "Employee Management System solves the problem of managing HR operations across multiple service centers and permission levels. A multi-branch organization needs different users to perform different responsibilities: admins manage owners, owners manage employees and payroll-related workflows, and operators record attendance for service centers.",
        solution:
          "To solve this, I built a full-stack role-based system with separate workflows for Admin, Owner, and Operator users. The application supports employee onboarding, employee details, attendance recording, attendance roster workflows, finalized attendance states, and salary-related operations.",
        technical:
          "Technically, the frontend is built with React and Redux, while the backend uses Express, MongoDB, JWT, and bcrypt. Backend routes are grouped around admin, owner, and operator responsibilities. Protected routes use role-based middleware that verifies the JWT and checks whether the current user is allowed to access a specific endpoint.",
        decision:
          "The key engineering decision is modeling the application around real operational roles instead of treating every user as the same. This makes the system closer to an internal business application, where authentication, authorization, workflows, and data ownership matter as much as the UI.",
      },
      long: {
        intro:
          "Employee Management System is a full-stack HR operations project built to manage employees, attendance, and payroll-related workflows across multiple roles and service centers.",
        sections: [
          {
            title: "Problem",
            body:
              "In a multi-branch HR services organization, employee data and attendance workflows cannot be handled by one generic user role. Admins, owners, and operators need different permissions and different responsibilities. Without role-based structure, sensitive workflows such as salary details, attendance finalization, and employee management become difficult to control.",
          },
          {
            title: "What I Built",
            body:
              "I built a full-stack employee management system with separate Admin, Owner, and Operator flows. Admins can register owners and view owner information. Owners can add and update employees, view salary details, and manage attendance-related operations. Operators can log in per service center and record attendance workflows.",
          },
          {
            title: "Role-Based Access",
            body:
              "The backend protects non-auth routes using JWT-based authentication and role checks. Instead of only checking whether a user is logged in, the system checks whether that role is allowed to perform the requested action. This gives the project a stronger business-application structure.",
          },
          {
            title: "Workflow Design",
            body:
              "The project includes employee onboarding, employee detail management, attendance roster workflows, attendance submission, attendance finalization, attendance unlocking, and salary detail calculations based on attendance. These workflows reflect operational needs rather than simple CRUD screens.",
          },
          {
            title: "Backend And Data Layer",
            body:
              "The backend uses Express with MongoDB, JWT, and bcrypt. API routes are separated into admin, owner, and operator areas, and the database seed script creates demo users, employees, and attendance data. This makes the application easier to run, test manually, and demonstrate with realistic sample data.",
          },
          {
            title: "Deployment Considerations",
            body:
              "The frontend is deployed on Vercel and the backend on Render, with MongoDB Atlas as the database. The project also accounts for backend cold starts by pinging the backend on load and documenting the deployment behavior.",
          },
          {
            title: "What This Demonstrates",
            body:
              "This project demonstrates full-stack business application development: role-based authentication, protected APIs, dashboard workflows, employee data management, attendance logic, payroll-related operations, database seeding, and frontend/backend deployment.",
          },
        ],
      },
    },
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
