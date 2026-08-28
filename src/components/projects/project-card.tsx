import {
  BookOpen,
  ExternalLink,
  MonitorPlay,
  PlayCircle,
} from "lucide-react";
import type { CSSProperties } from "react";
import { SiGithub } from "react-icons/si";

import { ProjectGallery } from "@/components/projects/project-gallery";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

const actionMeta = [
  { key: "githubUrl", label: "GitHub", icon: SiGithub },
  { key: "liveUrl", label: "Live Demo", icon: ExternalLink },
  { key: "documentationUrl", label: "Documentation", icon: BookOpen },
  { key: "videoUrl", label: "Video / Demo", icon: MonitorPlay },
  { key: "demoUrl", label: "Demo", icon: PlayCircle },
] as const;

export function ProjectCard({ project }: ProjectCardProps) {
  const isFeatured = project.featured || project.variant === "featured";
  const visibleHighlights = project.highlights.slice(0, isFeatured ? 6 : 4);
  const remainingHighlights = project.highlights.length - visibleHighlights.length;
  const accent = project.accent ?? "#3b82f6";

  return (
    <Card
      className={cn(
        "relative rounded-xl border-white/[0.08] bg-[linear-gradient(145deg,color-mix(in_srgb,var(--project-accent)_10%,transparent),rgba(16,24,39,0.88)_38%,rgba(8,15,29,0.92))] p-0 shadow-xl shadow-black/18 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--project-accent)] hover:shadow-2xl hover:shadow-black/28",
        isFeatured && "border-[color:var(--project-accent)] ring-1 ring-white/[0.08]"
      )}
      style={{ "--project-accent": accent } as CSSProperties}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--project-accent),transparent)] opacity-75" />
      <CardContent className="space-y-6 p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge
                variant="outline"
                className="border-white/[0.08] bg-background/30 text-[#bfdbfe]"
              >
                {project.category}
              </Badge>
              {isFeatured ? (
                <Badge className="bg-primary/15 text-[#dbeafe]">Featured</Badge>
              ) : null}
            </div>
            <div>
              <h3
                className={cn(
                  "font-semibold leading-tight text-foreground",
                  isFeatured ? "text-2xl" : "text-xl"
                )}
              >
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {project.shortDescription}
              </p>
            </div>
          </div>
          {project.status ? (
            <span className="w-fit shrink-0 rounded-md border border-white/[0.08] bg-background/35 px-3 py-1 text-[0.68rem] font-semibold uppercase text-muted-foreground">
              {project.status.replace("-", " ")}
            </span>
          ) : null}
        </div>

        {project.fullDescription ? (
          <p className="text-sm leading-6 text-muted-foreground">
            {project.fullDescription}
          </p>
        ) : null}

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <Badge
              key={technology}
              variant="secondary"
            className="border border-white/[0.07] bg-secondary/48 text-[#dbeafe]"
            >
              {technology}
            </Badge>
          ))}
        </div>

        <ProjectGallery
          images={project.images}
          title={project.title}
          accent={accent}
          mediaPosition={project.mediaPosition}
        />

        <div>
          <p className="text-xs font-semibold uppercase text-primary">
            Selected Highlights
          </p>
          <ul className="mt-3 grid gap-2 text-sm leading-6 text-muted-foreground sm:grid-cols-2">
            {visibleHighlights.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/70" />
                <span>{point}</span>
              </li>
            ))}
            {remainingHighlights > 0 ? (
              <li
                key="remaining-highlights"
                className="flex gap-2 text-[#cbd5e1]"
              >
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/70" />
                <span>{remainingHighlights} more implementation details</span>
              </li>
            ) : null}
          </ul>
        </div>

        {project.repository ? (
          <p className="rounded-lg border border-border/55 bg-background/28 px-3 py-2 font-mono text-xs text-muted-foreground">
            {project.repository}
          </p>
        ) : null}

        <ProjectActions project={project} />
      </CardContent>
    </Card>
  );
}

function ProjectActions({ project }: ProjectCardProps) {
  const actions = actionMeta
    .map((action) => ({
      ...action,
      href: project[action.key],
    }))
    .filter((action) => action.href);

  if (!actions.length) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-3">
      {actions.map((action) => {
        const Icon = action.icon;

        return (
          <a
            key={action.key}
            href={action.href}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({
              variant: action.key === "githubUrl" ? "default" : "outline",
              size: "sm",
            })}
          >
            {action.label}
            <Icon className="size-4" aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}
