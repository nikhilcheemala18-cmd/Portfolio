"use client";

import { useMemo, useState } from "react";

import { ProjectCard } from "@/components/projects/project-card";
import { cn } from "@/lib/utils";
import type { Project, ProjectFilter } from "@/types/project";

type ProjectExplorerProps = {
  projects: Project[];
};

type FilterOption = {
  label: string;
  value: ProjectFilter;
};

const featuredProjectIds = [
  "enterprise-rag-platform",
  "ai-travel-booking-agent",
  "devcareer-hub",
];

const filterOptions: FilterOption[] = [
  { label: "All", value: "all" },
  { label: "Full-Stack", value: "full-stack" },
  { label: "GenAI / RAG", value: "genai-rag" },
  { label: "AI Agents", value: "ai-agents" },
];

export function ProjectExplorer({ projects }: ProjectExplorerProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");

  const featuredProjects = featuredProjectIds
    .map((id) => projects.find((project) => project.id === id))
    .filter((project): project is Project => Boolean(project));

  const filteredProjects = useMemo(
    () =>
      projects.filter((project) => {
        if (activeFilter === "all") {
          return true;
        }

        return projectMatchesFilter(project, activeFilter);
      }),
    [activeFilter, projects]
  );

  const visibleProjects =
    activeFilter === "all" ? featuredProjects : filteredProjects;

  return (
    <div className="-mt-4 space-y-5 md:-mt-5">
      <div className="flex flex-wrap gap-2" aria-label="Project filters">
        {filterOptions.map((filter) => {
          const isActive = activeFilter === filter.value;

          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => {
                setActiveFilter(filter.value);
              }}
              className={cn(
                "min-h-9 rounded-md border px-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
                isActive
                  ? "border-primary/55 bg-primary/90 text-primary-foreground shadow-sm shadow-primary/15"
                  : "border-white/[0.08] bg-secondary/25 text-muted-foreground hover:border-primary/35 hover:bg-secondary/40 hover:text-foreground"
              )}
              aria-pressed={isActive}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <div className="grid items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            mode={activeFilter === "all" ? "featured" : "standard"}
          />
        ))}
      </div>
    </div>
  );
}

function projectMatchesFilter(project: Project, filter: ProjectFilter) {
  const searchableText = [
    project.category,
    project.title,
    project.shortDescription,
  ]
    .join(" ")
    .toLowerCase();

  const filterTerms: Record<ProjectFilter, string[]> = {
    all: [],
    "full-stack": ["full-stack", "full stack", "career", "employee"],
    "genai-rag": [
      "generative ai",
      "rag",
      "retrieval",
      "pdf chatbot",
    ],
    "ai-agents": ["agent", "agentic"],
  };

  return filterTerms[filter].some((term) => searchableText.includes(term));
}
