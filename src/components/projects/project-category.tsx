import { ProjectCard } from "@/components/projects/project-card";
import { cn } from "@/lib/utils";
import type { ProjectCategory as ProjectCategoryType } from "@/types/project";

type ProjectCategoryProps = {
  category: ProjectCategoryType;
};

export function ProjectCategory({ category }: ProjectCategoryProps) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-heading text-xl font-semibold tracking-normal text-foreground">
          {category.title}
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
          {category.description}
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {category.projects.map((project) => (
          <div
            key={project.id}
            className={cn(project.featured && "md:col-span-2")}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
