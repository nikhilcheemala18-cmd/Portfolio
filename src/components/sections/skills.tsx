import { SectionContainer } from "@/components/sections/section-container";
import { SkillCard } from "@/components/skills/skill-card";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <SectionContainer
      id="skills"
      eyebrow="Capabilities"
      title="Skills & Technologies"
      description="A practical stack across backend engineering, full-stack development, Generative AI, RAG systems, and agent workflows."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group) => (
          <SkillCard key={group.title} group={group} />
        ))}
      </div>
    </SectionContainer>
  );
}
