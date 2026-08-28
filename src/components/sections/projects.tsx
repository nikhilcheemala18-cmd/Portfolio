import { ProjectCategory } from "@/components/projects/project-category";
import { SectionContainer } from "@/components/sections/section-container";
import { projectCategories } from "@/data/projects";

export function Projects() {
  return (
    <SectionContainer
      id="projects"
      eyebrow="Work"
      title="Projects"
      description="Backend, full-stack, RAG, and agentic AI projects organized as reusable project data."
    >
      <div className="space-y-12">
        {projectCategories.map((category) => (
          <ProjectCategory key={category.title} category={category} />
        ))}
      </div>
    </SectionContainer>
  );
}
