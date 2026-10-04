import type { NotebookCategory, NotebookEntry } from "@/types/builders-lab";

const frameworkSections = (
  subject: string,
  angle: string,
): NotebookEntry["sections"] => [
  {
    title: "Purpose",
    body: `This ${subject} defines the kind of evidence I want to keep while building: what I tried, why it mattered, what changed, and how it affected the system.`,
  },
  {
    title: "Working Structure",
    body: "The page uses a repeatable structure so the notes stay readable: context, decision or experiment, implementation detail, observation, result, and follow-up.",
  },
  {
    title: "Evidence To Add",
    body: `As the portfolio grows, this page should include project-specific examples, screenshots, diagrams, tradeoffs, and measured observations around ${angle}.`,
  },
];

export const notebookCategories: NotebookCategory[] = [
  {
    id: "build-playbooks",
    slug: "build-playbooks",
    title: "Build Playbooks",
    eyebrow: "Process",
    description:
      "Living notes on how I turn an idea into a working backend, full-stack, or AI-powered system.",
    summary:
      "These are practical working habits I use to slow down before coding, understand the problem clearly, make better technical decisions, and build projects that feel closer to real software products than quick demos.",
    intro: [
      "These playbooks are not fixed rules or a perfect process. They are working notes I use and refine as I build more systems.",
      "The goal is simple: understand the problem before choosing tools, define the smallest useful version, think through the backend and data flow, test the important paths, and document enough for another person to understand the project.",
      "I use AI assistants as part of my workflow, but I do not want speed to replace engineering ownership. These notes help me keep requirements, decisions, checkpoints, experiments, and handoff context visible while building.",
      "I like working on projects where backend engineering, data, APIs, AI models, and real user workflows come together. These notes help me organize that thinking.",
    ],
    principles: [
      "Problem before tools",
      "User flow before database",
      "Data flow before AI layer",
      "Failure cases before demo polish",
      "Evaluation before claiming success",
      "Documentation before calling it finished",
    ],
    status: "V1",
    featured: true,
    entries: [
      {
        id: "how-i-start-a-project",
        slug: "how-i-start-a-project",
        title: "How I Start a Project",
        type: "Workflow",
        summary:
          "How I move from a rough idea to a clearer project direction before jumping into implementation.",
        status: "V1",
        tags: ["Planning", "Scope", "Product Thinking"],
        updatedAt: "Initial public version",
        sections: [
          {
            title: "Why this matters",
            body: "When I start a project, I try not to jump directly into implementation. I first define the problem, the user flow, and the core outcome the project should deliver. This helps me avoid building random features and keeps the project closer to a real product.",
          },
          {
            title: "What I usually clarify",
            body: "Before coding, I try to make the project smaller, clearer, and easier to reason about.",
            points: [
              "What problem is this solving?",
              "Who is the user?",
              "What is the smallest useful version?",
              "What should the system definitely do?",
              "What is out of scope for now?",
              "What are the risky or unknown parts?",
              "What would make this project feel complete?",
            ],
          },
          {
            title: "Example mindset",
            body: "For a RAG project, I would not start with embeddings immediately. I would first ask what kind of documents users upload, what questions they ask, what kind of answers they expect, and how the system should behave when the answer is not available.",
          },
        ],
      },
      {
        id: "requirements-and-scope",
        slug: "requirements-and-scope",
        title: "Requirements & Scope",
        type: "Playbook",
        summary:
          "How I convert a broad project idea into clear requirements, constraints, and acceptance criteria.",
        status: "V1",
        tags: ["Requirements", "SRS", "Scope"],
        updatedAt: "Initial public version",
        sections: [
          {
            title: "Why this matters",
            body: "I do not want requirements to become a heavy corporate document, but I do want enough structure to avoid confusion later. A practical requirements note helps me stay focused and avoid adding features that do not improve the core product.",
          },
          {
            title: "What I usually capture",
            body: "I treat requirements as a working document that can evolve as the project becomes clearer.",
            points: [
              "Functional requirements",
              "Non-functional requirements",
              "User roles",
              "Main workflows",
              "Inputs and outputs",
              "Assumptions",
              "Constraints",
              "Edge cases",
              "Acceptance criteria",
            ],
          },
          {
            title: "How I want to use this",
            body: "This playbook should help me explain why a feature exists, what it must support, and what can wait until a later version. It is also useful when I revisit an old project and need to understand the original intent quickly.",
          },
        ],
      },
      {
        id: "backend-api-planning",
        slug: "backend-api-planning",
        title: "Backend & API Planning",
        type: "Checklist",
        summary:
          "The backend planning checklist I use for APIs, data models, validation, errors, and testing.",
        status: "V1",
        tags: ["Backend", "APIs", "Databases"],
        updatedAt: "Initial public version",
        sections: [
          {
            title: "Why this matters",
            body: "Since my focus is backend and AI systems, I care about how the backend is structured. Even in personal projects, I want the backend to feel understandable, predictable, and possible to extend.",
          },
          {
            title: "What I plan before building APIs",
            body: "This checklist helps me think through the shape of the system instead of only creating endpoints as I need them.",
            points: [
              "Main resources and entities",
              "API endpoints",
              "Request and response formats",
              "Authentication and authorization",
              "Validation rules",
              "Error handling",
              "Database models",
              "Service boundaries",
              "Background tasks, if needed",
              "Testing approach",
            ],
          },
          {
            title: "What I am trying to improve",
            body: "I want my APIs to be easy to understand from the outside and clean enough to maintain from the inside. This means thinking about naming, data contracts, failure states, and tests before the project becomes too large.",
          },
        ],
      },
      {
        id: "genai-system-planning",
        slug: "genai-system-planning",
        title: "GenAI System Planning",
        type: "Checklist",
        summary:
          "How I think about LLM-powered features, RAG pipelines, tool calling, validation, and failure handling.",
        status: "V1",
        tags: ["GenAI", "RAG", "Agents"],
        updatedAt: "Initial public version",
        sections: [
          {
            title: "Why this matters",
            body: "For AI-powered applications, I try not to treat the LLM as the whole system. The LLM is only one part of the architecture. The surrounding backend, retrieval, tools, validation, and product workflow are what make the system useful.",
          },
          {
            title: "Questions I ask before building",
            body: "These questions help me decide whether the AI layer is actually solving the problem or only making the demo look smarter.",
            points: [
              "What role does the LLM play?",
              "Does the system need retrieval?",
              "What data sources are involved?",
              "What context should be passed to the model?",
              "What tools or APIs can the model use?",
              "What should happen when the model is wrong?",
              "How should outputs be validated?",
              "What should be logged or evaluated?",
              "How can the system avoid unsupported answers?",
            ],
          },
          {
            title: "RAG and agent focus",
            body: "For RAG systems, I care about document processing, chunking, retrieval quality, source attribution, and grounded answers. For agentic systems, I care about planning, tool execution, validation, fallbacks, and bounded retries.",
          },
        ],
      },
      {
        id: "testing-and-evaluation",
        slug: "testing-and-evaluation",
        title: "Testing & Evaluation",
        type: "Playbook",
        summary:
          "How I think about reliability for backend workflows, RAG outputs, and agent behavior.",
        status: "V1",
        tags: ["Testing", "Evaluation", "Reliability"],
        updatedAt: "Initial public version",
        sections: [
          {
            title: "Why this matters",
            body: "I want my projects to be more reliable than simple demos, so I try to think about testing early. For AI projects, testing is not only about whether the code runs. It is also about whether the system gives useful, grounded, and reliable outputs.",
          },
          {
            title: "What I consider testing",
            body: "The exact approach depends on the project, but I try to cover the most important paths and the places where the system can fail.",
            points: [
              "Unit tests",
              "API tests",
              "Integration tests",
              "Manual workflow tests",
              "Edge case testing",
              "Error handling tests",
              "RAG retrieval quality checks",
              "LLM output validation",
              "Agent failure cases",
              "Regression checks",
            ],
          },
          {
            title: "Current direction",
            body: "This is one of the areas I want to keep improving. My goal is to make evaluation a normal part of building AI systems instead of something added only after the demo works.",
          },
        ],
      },
      {
        id: "documentation-and-handoff",
        slug: "documentation-and-handoff",
        title: "Documentation & Handoff",
        type: "Playbook",
        summary:
          "How I document projects so another person can understand the setup, architecture, decisions, and limitations.",
        status: "V1",
        tags: ["Documentation", "README", "Handoff"],
        updatedAt: "Initial public version",
        sections: [
          {
            title: "Why this matters",
            body: "I see documentation as part of the project, not something separate from it. A good project should communicate value even when I am not there to explain it.",
          },
          {
            title: "What I try to document",
            body: "For important projects, I want the documentation to explain both how to run the project and why it was built in a certain way.",
            points: [
              "Clear README",
              "Setup instructions",
              "Environment variable notes",
              "API overview",
              "Architecture explanation",
              "Key technical decisions",
              "Known limitations",
              "Future improvements",
              "Screenshots or diagrams",
              "Testing instructions",
            ],
          },
          {
            title: "Portfolio value",
            body: "For a portfolio, documentation is also part of the presentation. It helps recruiters and engineers understand the project faster and gives me a place to explain decisions, tradeoffs, and what I would improve next.",
          },
        ],
      },
    ],
  },
  {
    id: "architecture-notes",
    slug: "architecture-notes",
    title: "Architecture Notes",
    eyebrow: "System Design",
    description:
      "How I think through system structure, data flow, backend boundaries, AI components, and tradeoffs.",
    summary:
      "These notes explain how each system is organized, where the important boundaries are, what decisions shaped the design, and what I would improve as the project grows.",
    intro: [
      "Architecture notes help me separate the idea of a project from the actual system that has to support it. I use them to reason about data flow, backend responsibilities, AI components, frontend boundaries, and failure points.",
      "I do not treat these as perfect final blueprints. They are working documents that can evolve as I learn more about the project, test real workflows, and discover better implementation choices.",
      "For portfolio projects, these notes also help a reader understand what I built without needing to inspect every file in the repository first.",
    ],
    principles: [
      "Start with the user workflow",
      "Separate frontend flow from backend responsibilities",
      "Make data movement visible",
      "Identify the parts that can fail",
      "Write down tradeoffs, not only final choices",
      "Keep future scaling paths clear",
    ],
    status: "V1",
    entries: [
      {
        id: "enterprise-rag-architecture",
        slug: "enterprise-rag-architecture",
        title: "Enterprise RAG Architecture Notes",
        type: "Architecture",
        summary:
          "How the Enterprise RAG Platform is organized around document ingestion, indexing, hybrid retrieval, ranking, and grounded answer generation.",
        status: "V1",
        tags: ["RAG", "FastAPI", "PostgreSQL"],
        updatedAt: "Initial public version",
        sections: [
          {
            title: "System goal",
            body: "The system is designed to let users upload business documents and ask questions that are grounded in those documents. The architecture needs to support document ingestion, text normalization, chunking, embeddings, indexing, retrieval, answer generation, and source attribution.",
          },
          {
            title: "Main flow",
            body: "The core flow moves from uploaded files to normalized content, then to searchable chunks, then to retrieval, ranking, and answer generation.",
            points: [
              "User uploads PDF, DOCX, XLSX, or CSV documents",
              "Backend parses and normalizes document content",
              "Text is split into semantic chunks",
              "Embeddings are generated for each chunk",
              "Chunks are stored with metadata and vector representations",
              "Questions trigger full-text and vector retrieval",
              "Results are fused and ranked before being sent to the LLM",
              "The response includes generated answer text and source chunks",
            ],
          },
          {
            title: "Key architecture decisions",
            body: "The project uses a backend-first structure because the important work is not only calling an LLM. The harder part is preparing the documents, retrieving useful context, and keeping the answer grounded.",
            points: [
              "FastAPI exposes upload, retrieval, and question-answering APIs",
              "PostgreSQL and Supabase support structured document and chunk storage",
              "pgvector stores embedding vectors close to the document metadata",
              "Hybrid retrieval combines full-text search and vector similarity",
              "Reciprocal Rank Fusion improves retrieval quality before generation",
              "Provider abstractions keep embeddings and LLM usage replaceable",
            ],
          },
          {
            title: "What I would keep improving",
            body: "The next architecture improvements would focus on evaluation, observability, richer permission models, background processing for large uploads, and better monitoring of retrieval quality over time.",
          },
        ],
      },
      {
        id: "agent-workflow-design",
        slug: "agent-workflow-design",
        title: "AI Travel Booking Agent Architecture Notes",
        type: "Architecture",
        summary:
          "How the travel agent is structured around planning, tool execution, validation, fallbacks, and itinerary generation.",
        status: "V1",
        tags: ["Agents", "LLMs", "Workflows"],
        updatedAt: "Initial public version",
        sections: [
          {
            title: "System goal",
            body: "The project is an LLM-powered conversational travel planning agent. The architecture needs to support natural-language requests, multi-turn clarification, corrections during the conversation, and structured itinerary generation.",
          },
          {
            title: "Agent workflow",
            body: "The system is easier to reason about when the agent is broken into stages instead of letting the LLM directly produce a final answer every time.",
            points: [
              "Planner interprets the user request and decides what needs to happen",
              "Tool executor handles structured travel-related actions or lookups",
              "Validator checks whether the output is complete and usable",
              "Fallback manager handles missing information and failed steps",
              "Itinerary builder turns validated information into a final plan",
            ],
          },
          {
            title: "Reliability choices",
            body: "The important architecture idea is that the LLM should not be trusted as a single-step black box. The surrounding workflow needs guardrails that make the output easier to validate and recover from.",
            points: [
              "Use structured steps instead of one large prompt",
              "Ask clarifying questions when required information is missing",
              "Allow mid-conversation corrections",
              "Keep provider-specific LLM logic replaceable",
              "Use bounded retries instead of endless agent loops",
              "Separate planning, execution, validation, and final response formatting",
            ],
          },
          {
            title: "What I would keep improving",
            body: "The next version should improve tool schemas, conversation memory, itinerary evaluation, user preference handling, and observability for failed or low-confidence agent steps.",
          },
        ],
      },
      {
        id: "real-time-task-manager-architecture",
        slug: "real-time-task-manager-architecture",
        title: "Real-Time Task Manager Architecture Notes",
        type: "Architecture",
        summary:
          "How the task manager is structured across frontend state, backend modules, MongoDB models, authentication, and real-time collaboration foundations.",
        status: "V1",
        tags: ["MERN", "Socket.io", "MongoDB"],
        updatedAt: "Initial public version",
        sections: [
          {
            title: "System goal",
            body: "The Real-Time Task Manager is a collaborative task management system with workspaces, boards, cards, comments, activity structure, and real-time foundations. The architecture needs to keep user interactions responsive while keeping backend data consistent.",
          },
          {
            title: "Main system boundaries",
            body: "The project has a frontend application, backend API layer, database layer, and real-time communication foundation.",
            points: [
              "React handles the task management interface and routing",
              "Redux Toolkit manages application-level state where useful",
              "React Query handles server data fetching, caching, and synchronization",
              "Express organizes backend modules and API routes",
              "MongoDB and Mongoose model workspaces, boards, tasks, comments, and users",
              "Socket.io-oriented architecture prepares the system for live collaboration",
              "JWT provides the authentication foundation",
            ],
          },
          {
            title: "Key architecture decisions",
            body: "The architecture separates client state from server state so the UI can stay responsive while still syncing important task data with the backend.",
            points: [
              "Use React Query for remote data instead of manually storing every API result in global state",
              "Use Redux Toolkit for shared UI or application state that is not simply server cache",
              "Keep backend modules organized around domain responsibilities",
              "Design data models around workspaces, boards, lists, cards, comments, and activity",
              "Prepare real-time events around changes that other users need to see",
            ],
          },
          {
            title: "What I would keep improving",
            body: "The next improvements would focus on stronger real-time event handling, optimistic updates, conflict handling, role-based permissions, activity logs, and production-ready auth/session behavior.",
          },
        ],
      },
      {
        id: "devcareer-hub-architecture",
        slug: "devcareer-hub-architecture",
        title: "DevCareer Hub Architecture Notes",
        type: "Architecture",
        summary:
          "How the developer career platform is split between public content, admin CMS workflows, MongoDB data, authentication, SEO, and publishing.",
        status: "V1",
        tags: ["Next.js", "CMS", "MongoDB"],
        updatedAt: "Initial public version",
        sections: [
          {
            title: "System goal",
            body: "DevCareer Hub is a full-stack developer career and job management platform. The architecture needs to support a public content experience and an admin CMS for managing jobs, categories, tags, media, and publishing workflows.",
          },
          {
            title: "Main responsibilities",
            body: "The project combines content presentation with admin-side management, so the architecture has to separate public browsing from protected publishing workflows.",
            points: [
              "Public frontend presents developer-focused content and job listings",
              "Admin dashboard manages jobs, categories, tags, and media",
              "Authentication protects admin workflows",
              "MongoDB stores content and management data",
              "Service-oriented code separates data access and business logic",
              "SEO improvements support discoverability of public pages",
              "Publishing features control what becomes visible to users",
            ],
          },
          {
            title: "Key architecture decisions",
            body: "The project is useful as a full-stack architecture case because it has both public-facing and admin-facing responsibilities. The data model and service layer need to support editing, organizing, and publishing content without mixing everything directly into UI components.",
          },
          {
            title: "What I would keep improving",
            body: "Future improvements would include stronger role permissions, content versioning, better media workflows, analytics around content performance, and cleaner separation between admin operations and public read-only pages.",
          },
        ],
      },
      {
        id: "architecture-review-template",
        slug: "architecture-review-template",
        title: "Project Architecture Review Template",
        type: "Template",
        summary:
          "A reusable checklist I can use before writing or publishing architecture notes for any project.",
        status: "V1",
        tags: ["Template", "System Design", "Review"],
        updatedAt: "Initial public version",
        sections: [
          {
            title: "Purpose",
            body: "This template gives me a repeatable way to explain a system. It helps keep architecture notes clear, practical, and connected to the actual project instead of becoming vague diagrams.",
          },
          {
            title: "Questions to answer",
            body: "Before publishing an architecture note, I want to make sure it explains the parts of the system that matter most.",
            points: [
              "What problem does the system solve?",
              "Who uses it and what is the main workflow?",
              "What are the main components?",
              "Where does data enter, move, and get stored?",
              "What does the backend own?",
              "What does the frontend own?",
              "What external services or models are involved?",
              "What can fail?",
              "What tradeoffs did I make?",
              "What would I improve next?",
            ],
          },
          {
            title: "How I want to use this",
            body: "This template should help me write architecture notes that feel useful to another engineer. The goal is not to make every project sound bigger than it is, but to make the actual design thinking visible.",
          },
        ],
      },
    ],
  },
  {
    id: "research-analysis",
    slug: "research-analysis",
    title: "Research & Analysis",
    eyebrow: "Research",
    description:
      "Working research notes for technical decisions, project discovery, comparisons, and implementation direction.",
    summary:
      "This section collects the research I do before or during a project. The goal is not to sound academic, but to make my decision-making visible: what I compared, what I cared about, and how that shaped the system.",
    intro: [
      "Research notes help me avoid choosing tools only because they are popular. I use them to compare approaches, understand tradeoffs, and decide what fits the project I am building.",
      "These notes are intentionally practical. They focus on questions that affect implementation: retrieval quality, agent reliability, output validation, user workflows, project scope, and backend constraints.",
      "As I build more systems, this section should become a record of how my thinking improves over time.",
    ],
    principles: [
      "Compare approaches before committing",
      "Prefer practical tradeoffs over tool hype",
      "Connect research to a real project decision",
      "Look for failure modes early",
      "Keep notes understandable to future me",
      "Update conclusions when experiments prove them wrong",
    ],
    status: "V1",
    entries: [
      {
        id: "retrieval-strategy-notes",
        slug: "retrieval-strategy-notes",
        title: "RAG Retrieval Strategy Notes",
        type: "Research",
        summary:
          "A practical comparison of retrieval approaches for RAG systems: vector search, full-text search, hybrid retrieval, fusion, and reranking.",
        status: "V1",
        tags: ["Retrieval", "Search", "RAG"],
        updatedAt: "Initial public version",
        sections: [
          {
            title: "Research question",
            body: "When building a RAG system, retrieval quality often matters more than the LLM prompt. The question I want to answer is: how should documents be searched so the model receives context that is actually useful and grounded?",
          },
          {
            title: "Approaches I compare",
            body: "Different retrieval methods are useful for different reasons. I do not want to assume embeddings alone are always enough.",
            points: [
              "Vector search for semantic similarity",
              "Full-text search for exact terms, keywords, names, and identifiers",
              "Hybrid retrieval when both meaning and exact matching matter",
              "Reciprocal Rank Fusion to combine ranked result lists",
              "Reranking to improve the final context order",
              "Source attribution to make answers easier to trust",
            ],
          },
          {
            title: "Current working conclusion",
            body: "For document-heavy business workflows, hybrid retrieval feels more reliable than vector search alone because users may ask both semantic questions and exact-detail questions. My current preference is to start with hybrid retrieval and then improve ranking, chunking, and evaluation over time.",
          },
          {
            title: "What I still want to test",
            body: "I want to compare chunk sizes, semantic chunking strategies, embedding models, reranking options, and evaluation methods using real question sets instead of only checking a few successful demo queries.",
          },
        ],
      },
      {
        id: "agent-framework-comparison",
        slug: "agent-framework-comparison",
        title: "Agent Workflow Pattern Notes",
        type: "Research",
        summary:
          "Research notes on planning, tool execution, validation, fallbacks, and bounded agent workflows.",
        status: "V1",
        tags: ["Agents", "LangGraph", "Tool Calling"],
        updatedAt: "Initial public version",
        sections: [
          {
            title: "Research question",
            body: "Agent systems can become unreliable when the LLM is allowed to decide too much without structure. The question I care about is: how can an agent workflow stay flexible while still being understandable and controlled?",
          },
          {
            title: "Patterns I look for",
            body: "I am more interested in the workflow pattern than in the framework name alone.",
            points: [
              "Planner and executor separation",
              "Tool schemas that make actions explicit",
              "Validation after important tool calls",
              "Fallback behavior when information is missing",
              "Bounded retries instead of infinite loops",
              "Conversation state that supports corrections",
              "Final response formatting separate from tool execution",
            ],
          },
          {
            title: "Current working conclusion",
            body: "For my current level and project goals, I prefer simple, visible agent pipelines over very abstract autonomous agents. If I can explain the steps, validate the outputs, and limit failure cases, the system becomes easier to debug and improve.",
          },
          {
            title: "What I still want to test",
            body: "I want to compare hand-rolled workflows, LangGraph-style state machines, and tool-calling pipelines on the same task to see which one is easiest to debug, test, and explain.",
          },
        ],
      },
      {
        id: "llm-output-reliability-notes",
        slug: "llm-output-reliability-notes",
        title: "LLM Output Reliability Notes",
        type: "Research",
        summary:
          "How I think about structured outputs, validation, fallback behavior, and avoiding unsupported AI responses.",
        status: "V1",
        tags: ["LLMs", "Validation", "Structured Outputs"],
        updatedAt: "Initial public version",
        sections: [
          {
            title: "Research question",
            body: "LLM outputs can sound confident even when they are incomplete or wrong. The question I care about is: how can I make AI-powered features more predictable from a software engineering point of view?",
          },
          {
            title: "Reliability techniques",
            body: "These are the patterns I want to keep applying and improving in GenAI projects.",
            points: [
              "Use structured outputs when the application needs predictable fields",
              "Validate generated data before using it in workflows",
              "Prefer grounded answers when source context exists",
              "Return clear fallback responses when context is missing",
              "Log failed or low-confidence cases for later review",
              "Separate model response generation from business logic",
              "Keep prompts versioned or documented when they become important",
            ],
          },
          {
            title: "Current working conclusion",
            body: "A useful AI application needs more than a good prompt. It needs contracts, validation, context control, fallbacks, and a backend workflow that decides what to do when the model output is not enough.",
          },
          {
            title: "What I still want to test",
            body: "I want to test structured output validation across different providers and compare how failures appear when using tool calling, JSON schemas, and manual validation layers.",
          },
        ],
      },
      {
        id: "project-discovery-notes",
        slug: "project-discovery-notes",
        title: "Project Discovery & Product Analysis Notes",
        type: "Research",
        summary:
          "A practical note structure for understanding the user problem, existing products, core workflows, and useful feature scope before building.",
        status: "V1",
        tags: ["Discovery", "Product Thinking", "Scope"],
        updatedAt: "Initial public version",
        sections: [
          {
            title: "Research question",
            body: "Before building a project, I want to understand what problem the system is solving and what a useful first version should include. The question is: how do I avoid building random features and instead build toward a clear workflow?",
          },
          {
            title: "What I try to analyze",
            body: "This is the discovery layer before architecture and implementation.",
            points: [
              "Who is the user?",
              "What problem are they trying to solve?",
              "What does the current manual or existing workflow look like?",
              "What are the must-have features?",
              "What can wait until a later version?",
              "What similar products or patterns already exist?",
              "What makes this project worth building as a portfolio project?",
              "What proof should the final project show?",
            ],
          },
          {
            title: "Current working conclusion",
            body: "Project discovery helps me make the project smaller and sharper. A focused project with a clear workflow usually gives a better impression than a large project with many disconnected features.",
          },
          {
            title: "What I still want to improve",
            body: "I want to become better at writing short project briefs before building: problem, audience, workflow, technical angle, success criteria, and demo plan.",
          },
        ],
      },
    ],
  },
  {
    id: "experiment-logs",
    slug: "experiment-logs",
    title: "Experiment Logs",
    eyebrow: "Experiments",
    description:
      "Technical logs for prototypes, tests, failures, findings, and iteration notes.",
    summary:
      "A running record of what I tested, what worked, what failed, and what I learned while building AI and backend systems.",
    status: "Framework",
    entries: [
      {
        id: "tool-calling-tests",
        slug: "tool-calling-tests",
        title: "Prompt and Tool Calling Tests",
        type: "Experiment",
        summary:
          "A working format for tracking prompt variants, structured outputs, tool execution behavior, and fallback cases.",
        status: "Framework",
        tags: ["LLMs", "Tool Calling", "Validation"],
        updatedAt: "Initial framework",
        sections: frameworkSections("experiment log", "tool calling"),
      },
      {
        id: "retrieval-quality-experiments",
        slug: "retrieval-quality-experiments",
        title: "Retrieval Quality Experiments",
        type: "Experiment",
        summary:
          "A working format for recording chunking experiments, embedding tests, search failures, and retrieval evaluation observations.",
        status: "Framework",
        tags: ["Embeddings", "Chunking", "Evaluation"],
        updatedAt: "Initial framework",
        sections: frameworkSections(
          "experiment log",
          "retrieval quality",
        ),
      },
    ],
  },
  {
    id: "future-ideas",
    slug: "future-ideas",
    title: "Future Ideas",
    eyebrow: "Ideas",
    description:
      "Product ideas, learning directions, systems I want to build, and problems I want to explore.",
    summary:
      "A place for promising project ideas and future technical directions before they become fully scoped builds.",
    status: "Framework",
    entries: [
      {
        id: "ai-knowledge-workspace",
        slug: "ai-knowledge-workspace",
        title: "AI Knowledge Workspace",
        type: "Idea",
        summary:
          "An exploration note for a future workspace that connects documents, research notes, retrieval, agents, and task execution.",
        status: "Framework",
        tags: ["RAG", "Agents", "Product"],
        updatedAt: "Initial framework",
        sections: frameworkSections("idea note", "AI knowledge workspaces"),
      },
      {
        id: "backend-observability-playground",
        slug: "backend-observability-playground",
        title: "Backend Observability Playground",
        type: "Idea",
        summary:
          "An exploration note for a future project around logs, metrics, traces, background jobs, and production-style monitoring.",
        status: "Framework",
        tags: ["Backend", "Observability", "Systems"],
        updatedAt: "Initial framework",
        sections: frameworkSections(
          "idea note",
          "backend observability",
        ),
      },
    ],
  },
];

export const buildersLabItems = notebookCategories;

export function getNotebookCategory(slug: string) {
  return notebookCategories.find((category) => category.slug === slug);
}

export function getNotebookEntry(categorySlug: string, entrySlug: string) {
  const category = getNotebookCategory(categorySlug);
  const entry = category?.entries.find((item) => item.slug === entrySlug);

  if (!category || !entry) {
    return null;
  }

  return { category, entry };
}

export function getNotebookEntries() {
  return notebookCategories.flatMap((category) =>
    category.entries.map((entry) => ({ category, entry })),
  );
}
