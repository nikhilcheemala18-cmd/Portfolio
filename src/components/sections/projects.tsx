import { ProjectExplorer } from "@/components/projects/project-explorer";
import { SectionContainer } from "@/components/sections/section-container";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <SectionContainer
      id="projects"
      eyebrow="Selected Work"
      title="Projects"
      description="Selected projects across full-stack development, RAG systems, GenAI applications, and AI agents."
    >
      <ProjectExplorer projects={projects} />
    </SectionContainer>
  );
}
