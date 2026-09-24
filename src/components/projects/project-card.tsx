"use client";

import {
  BookOpen,
  ExternalLink,
  FileText,
  Maximize2,
  MonitorPlay,
  PlayCircle,
} from "lucide-react";
import type { CSSProperties } from "react";
import { useState } from "react";
import { SiGithub } from "react-icons/si";

import { ProjectExplanationDialog } from "@/components/projects/project-explanation-dialog";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
  mode?: "featured" | "standard";
};

const actionMeta = [
  { key: "githubUrl", label: "GitHub", icon: SiGithub, iconOnly: true },
  { key: "liveUrl", label: "Live Demo", icon: ExternalLink, iconOnly: true },
  { key: "documentationUrl", label: "Documentation", icon: BookOpen },
  { key: "videoUrl", label: "Video / Demo", icon: MonitorPlay },
  { key: "demoUrl", label: "Demo", icon: PlayCircle },
] as const;

export function ProjectCard({ project, mode = "standard" }: ProjectCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [initialDepth, setInitialDepth] = useState<"short" | "medium" | "long">(
    "short"
  );
  const isFeatured = mode === "featured";
  const visibleTechnologies = project.technologies.slice(0, isFeatured ? 4 : 5);
  const remainingTechnologies =
    project.technologies.length - visibleTechnologies.length;
  const accent = project.accent ?? "#3b82f6";
  const categoryLabel = getProjectCategoryLabel(project.category);

  return (
    <>
      <Card
        className={cn(
          "group/project relative h-full rounded-xl border-white/[0.08] bg-[linear-gradient(150deg,color-mix(in_srgb,var(--project-accent)_7%,transparent),rgba(18,18,19,0.88)_34%,rgba(6,6,7,0.96))] p-0 shadow-lg shadow-black/28 ring-1 ring-white/[0.025] transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--project-accent)] hover:shadow-xl hover:shadow-black/38 focus-within:border-[color:var(--project-accent)] motion-safe:hover:z-20 motion-safe:hover:scale-[1.035]",
          isFeatured ? "overflow-visible" : "overflow-hidden"
        )}
        onDoubleClick={() => {
          setInitialDepth("medium");
          setIsDialogOpen(true);
        }}
        style={{ "--project-accent": accent } as CSSProperties}
      >
        <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--project-accent),transparent)] opacity-70" />
        <CardContent className="flex h-full flex-col gap-4 p-4 sm:p-4">
          <ProjectGallery
            images={project.images}
            title={project.title}
            category={project.category}
            accent={accent}
            mediaPosition={project.mediaPosition}
            compact
          />

          <div className="flex flex-1 flex-col gap-4">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge
                  variant="outline"
                  className="h-6 border-white/[0.08] bg-background/35 text-[color:var(--project-accent)]"
                >
                  {categoryLabel}
                </Badge>
              </div>
              <div>
                <h3
                  className={cn(
                    "font-heading font-semibold leading-tight text-foreground",
                    isFeatured ? "text-[1.2rem]" : "text-lg"
                  )}
                >
                  {project.title}
                </h3>
                <p className="mt-2 overflow-hidden text-sm leading-6 text-muted-foreground [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
                  {project.shortDescription}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {visibleTechnologies.map((technology) => (
                <Badge
                  key={technology}
                  variant="secondary"
                  className="h-6 border border-white/[0.07] bg-secondary/55 px-2 font-mono text-[0.67rem] text-[#e4e9ef]"
                >
                  {technology}
                </Badge>
              ))}
              {remainingTechnologies > 0 ? (
                <Badge
                  variant="outline"
                  className="h-6 border-white/[0.08] bg-background/25 font-mono text-[0.68rem] text-muted-foreground"
                >
                  +{remainingTechnologies}
                </Badge>
              ) : null}
            </div>

            <div className="mt-auto pt-1">
              <ProjectActions
                project={project}
                onOpen={(depth) => {
                  setInitialDepth(depth);
                  setIsDialogOpen(true);
                }}
              />
            </div>
          </div>
        </CardContent>
      </Card>
      {isDialogOpen ? (
        <ProjectExplanationDialog
          project={project}
          open={isDialogOpen}
          initialDepth={initialDepth}
          onOpenChange={setIsDialogOpen}
        />
      ) : null}
    </>
  );
}

function ProjectActions({
  project,
  onOpen,
}: Pick<ProjectCardProps, "project"> & {
  onOpen: (depth: "short" | "medium" | "long") => void;
}) {
  const actions = actionMeta
    .filter((action) => ["githubUrl", "liveUrl"].includes(action.key))
    .map((action) => ({
      ...action,
      href: project[action.key],
    }))
    .filter((action) => action.href);

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        onClick={() => onOpen("short")}
        className="group/quick inline-flex min-h-9 items-center gap-2 rounded-md border border-[color:var(--project-accent)]/55 bg-[color-mix(in_srgb,var(--project-accent)_10%,transparent)] px-3 text-sm font-semibold text-[color:var(--project-accent)] transition-colors hover:bg-[color-mix(in_srgb,var(--project-accent)_16%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
        aria-label={`Open larger visual preview for ${project.title}`}
      >
        Quick View
        <Maximize2
          className="size-4 transition-transform group-hover/quick:translate-x-0.5"
          aria-hidden="true"
        />
      </button>
      <button
        type="button"
        onClick={() => onOpen("medium")}
        className="inline-flex min-h-9 items-center gap-2 rounded-md border border-white/[0.1] bg-background/30 px-3 text-sm font-semibold text-foreground transition-colors hover:border-[color:var(--project-accent)] hover:text-[color:var(--project-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
        aria-label={`Open explanation for ${project.title}`}
      >
        Explain
        <FileText className="size-4" aria-hidden="true" />
      </button>

      {actions.map((action) => {
        const Icon = action.icon;

        return (
          <a
            key={action.key}
            href={action.href}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "icon-lg",
              }),
              "border-white/[0.1] bg-background/30 text-foreground hover:border-[color:var(--project-accent)] hover:text-[color:var(--project-accent)]"
            )}
            aria-label={`Open ${project.title} ${action.label}`}
            title={action.label}
          >
            <Icon className="size-4" aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
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
