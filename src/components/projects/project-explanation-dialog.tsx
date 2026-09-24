"use client";

import { ExternalLink, X } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import { SiGithub } from "react-icons/si";

import { ProjectGallery } from "@/components/projects/project-gallery";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";

type ExplanationDepth = "short" | "medium" | "long";

type ProjectExplanationDialogProps = {
  project: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialDepth?: ExplanationDepth;
};

const explanationTabs: { label: string; value: ExplanationDepth }[] = [
  { label: "Short", value: "short" },
  { label: "Medium", value: "medium" },
  { label: "Long", value: "long" },
];

export function ProjectExplanationDialog({
  project,
  open,
  onOpenChange,
  initialDepth = "short",
}: ProjectExplanationDialogProps) {
  const [activeDepth, setActiveDepth] = useState<ExplanationDepth>(initialDepth);
  const accent = project.accent ?? "#38bdf8";
  const explanation = useMemo(() => getProjectExplanation(project), [project]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onOpenChange, open]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/78 px-4 py-6 backdrop-blur-md"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onOpenChange(false);
        }
      }}
    >
      <section
        aria-labelledby={`${project.id}-dialog-title`}
        aria-modal="true"
        className="relative grid max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-xl border border-white/[0.09] bg-[#070708] shadow-2xl shadow-black/70 ring-1 ring-white/[0.04] [scrollbar-color:rgba(56,189,248,0.35)_transparent] [scrollbar-width:thin] lg:grid-cols-[1.25fr_0.75fr] lg:overflow-hidden"
        role="dialog"
        style={{ "--project-accent": accent } as CSSProperties}
      >
        <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--project-accent),transparent)] opacity-80" />
        <button
          type="button"
          onClick={() => onOpenChange(false)}
          className="absolute right-3 top-3 z-10 inline-flex size-10 items-center justify-center rounded-md border border-white/[0.1] bg-black/50 text-slate-300 backdrop-blur-sm transition-colors hover:border-primary/45 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/45"
          aria-label={`Close ${project.title} explanation`}
        >
          <X className="size-4" aria-hidden="true" />
        </button>

        <div className="min-h-0 border-b border-white/[0.08] p-4 lg:border-b-0 lg:border-r lg:p-5">
          <ProjectGallery
            images={project.images}
            title={project.title}
            category={project.category}
            accent={accent}
            mediaPosition={project.mediaPosition}
            presentation="expanded"
          />
        </div>

        <div className="flex min-h-0 flex-col gap-5 p-5 [scrollbar-color:rgba(56,189,248,0.35)_transparent] [scrollbar-width:thin] sm:p-6 lg:overflow-y-auto">
          <div className="pr-10">
            <Badge
              variant="outline"
              className="border-white/[0.08] bg-background/35 text-[color:var(--project-accent)]"
            >
              {getProjectCategoryLabel(project.category)}
            </Badge>
            <h3
              id={`${project.id}-dialog-title`}
              className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground"
            >
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {project.shortDescription}
            </p>
          </div>

          <div
            className="grid grid-cols-3 rounded-lg border border-white/[0.08] bg-white/[0.025] p-1"
            role="tablist"
            aria-label={`${project.title} explanation depth`}
          >
            {explanationTabs.map((tab) => {
              const isActive = activeDepth === tab.value;

              return (
                <button
                  key={tab.value}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveDepth(tab.value)}
                  className={cn(
                    "min-h-9 rounded-md px-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
                    isActive
                      ? "bg-[color-mix(in_srgb,var(--project-accent)_18%,transparent)] text-[color:var(--project-accent)]"
                      : "text-muted-foreground hover:bg-white/[0.04] hover:text-foreground"
                  )}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <ProjectExplanationContent
            activeDepth={activeDepth}
            explanation={explanation}
            project={project}
          />

          <div className="mt-auto flex flex-wrap gap-2 border-t border-white/[0.08] pt-4">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "border-white/[0.1] bg-background/30 text-foreground hover:border-[color:var(--project-accent)] hover:text-[color:var(--project-accent)]"
                )}
              >
                <SiGithub className="size-4" aria-hidden="true" />
                GitHub
              </a>
            ) : null}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "border-white/[0.1] bg-background/30 text-foreground hover:border-[color:var(--project-accent)] hover:text-[color:var(--project-accent)]"
                )}
              >
                <ExternalLink className="size-4" aria-hidden="true" />
                Live Demo
              </a>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}

function ProjectExplanationContent({
  activeDepth,
  explanation,
  project,
}: {
  activeDepth: ExplanationDepth;
  explanation: ReturnType<typeof getProjectExplanation>;
  project: Project;
}) {
  if (activeDepth === "short") {
    return (
      <ScrollableExplanationPanel>
        <div className="space-y-3 text-sm leading-6 text-muted-foreground">
          <p>{explanation.short}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 8).map((technology) => (
              <Badge
                key={technology}
                variant="secondary"
                className="border border-white/[0.07] bg-secondary/55 font-mono text-[0.68rem] text-[#e4e9ef]"
              >
                {technology}
              </Badge>
            ))}
          </div>
        </div>
      </ScrollableExplanationPanel>
    );
  }

  if (activeDepth === "medium") {
    return (
      <ScrollableExplanationPanel>
        <div className="space-y-4 text-sm leading-6 text-muted-foreground">
          <p>{explanation.medium}</p>
          <div>
            <h4 className="text-sm font-semibold text-foreground">
              Architecture Placeholder
            </h4>
            <p className="mt-2">{explanation.architecture}</p>
          </div>
          <ul className="space-y-2">
            {[
              "Problem context placeholder",
              "Core engineering approach placeholder",
              "System boundary and trade-off placeholder",
              "Proof/result placeholder",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 size-1.5 rounded-full bg-[color:var(--project-accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </ScrollableExplanationPanel>
    );
  }

  return (
    <ScrollableExplanationPanel isLongForm>
      <div className="space-y-5 text-sm leading-6 text-muted-foreground">
        <p>{explanation.longIntro}</p>
        {[
          ["Problem", "Replace this with the complete problem statement, target user, constraints, and why this project was worth building."],
          ["Solution", "Replace this with the end-to-end solution walkthrough, including the main application flow and the responsibilities of each subsystem."],
          ["Architecture", explanation.architecture],
          ["Implementation", "Replace this with implementation details, key modules, API boundaries, database choices, validation strategy, and important engineering decisions."],
          ["Evaluation", "Replace this with verified evaluation results, testing evidence, benchmark context, and any limitations or future improvements."],
          ["Takeaways", "Replace this with your personal learning, trade-offs, what you would improve next, and how the project shaped your backend or AI engineering thinking."],
        ].map(([heading, body]) => (
          <div key={heading}>
            <h4 className="text-sm font-semibold text-foreground">{heading}</h4>
            <p className="mt-2">{body}</p>
          </div>
        ))}
      </div>
    </ScrollableExplanationPanel>
  );
}

function ScrollableExplanationPanel({
  children,
  isLongForm = false,
}: {
  children: ReactNode;
  isLongForm?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border border-white/[0.08] bg-white/[0.018] p-4 pr-3 [scrollbar-color:rgba(56,189,248,0.35)_transparent] [scrollbar-width:thin]",
        isLongForm
          ? "max-h-[min(42vh,460px)] overflow-y-auto"
          : "max-h-[min(34vh,340px)] overflow-y-auto"
      )}
    >
      <div className="pr-2">{children}</div>
    </div>
  );
}

function getProjectExplanation(project: Project) {
  return {
    short:
      "Short explanation placeholder. Replace this with a concise summary of the problem, the solution, and the strongest proof point for this project.",
    medium:
      "Medium explanation placeholder. Replace this with a recruiter-friendly overview that explains the workflow, the system design, and the main engineering decisions without becoming a full case study.",
    longIntro:
      "Long-form explanation placeholder. This area is intentionally scrollable so you can later add a complete walkthrough without forcing the dialog to grow beyond the viewport.",
    architecture: getArchitecturePlaceholder(project),
  };
}

function getArchitecturePlaceholder(project: Project) {
  const text = `${project.title} ${project.category}`.toLowerCase();

  if (text.includes("rag") || text.includes("retrieval")) {
    return "Replace this with the RAG pipeline walkthrough: ingestion, parsing, chunking, embeddings, indexing, retrieval, fusion/reranking, answer generation, and source attribution.";
  }

  if (text.includes("agent") || text.includes("travel")) {
    return "Replace this with the agent workflow walkthrough: conversation state, planning, tool execution, validation, fallback handling, itinerary construction, and response generation.";
  }

  if (text.includes("career") || text.includes("devcareer")) {
    return "Replace this with the full-stack product architecture: public routes, admin workflows, authentication, service layer, validation, data models, and publishing flow.";
  }

  if (text.includes("employee")) {
    return "Replace this with the role-based system walkthrough: user roles, protected APIs, authentication, HR workflows, database models, and deployment boundaries.";
  }

  if (text.includes("task")) {
    return "Replace this with the real-time application walkthrough: React state, API modules, Express services, MongoDB persistence, auth boundaries, and Socket.io-ready collaboration flow.";
  }

  return "Replace this with the project architecture walkthrough: frontend experience, backend workflows, persistence, integration points, and deployment boundaries.";
}

function getProjectCategoryLabel(category: string) {
  const text = category.toLowerCase();

  if (text.includes("agent")) {
    return "AI Agent";
  }

  if (text.includes("rag") || text.includes("generative")) {
    return "GenAI / RAG";
  }

  if (text.includes("full-stack")) {
    return "Full-Stack";
  }

  return category;
}
