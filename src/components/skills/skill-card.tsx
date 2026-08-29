import type { CSSProperties } from "react";

import { SkillChip } from "@/components/skills/skill-chip";
import { Card, CardContent } from "@/components/ui/card";
import type { SkillGroup } from "@/types/skill";

type SkillCardProps = {
  group: SkillGroup;
};

export function SkillCard({ group }: SkillCardProps) {
  const Icon = group.icon;

  return (
    <Card
      className="relative rounded-xl border-white/[0.07] bg-[linear-gradient(145deg,var(--skill-surface),rgba(18,18,19,0.72)_36%,rgba(8,8,9,0.82))] p-0 shadow-sm shadow-black/25 ring-0 transition-all duration-200 hover:border-[var(--skill-accent)] hover:bg-card/90 hover:shadow-lg hover:shadow-black/28"
      style={
        {
          "--skill-accent": group.accent,
          "--skill-surface": group.surface,
        } as CSSProperties
      }
    >
      <div className="absolute inset-y-6 left-0 w-px bg-[linear-gradient(180deg,transparent,var(--skill-accent),transparent)] opacity-80" />
      <CardContent className="flex h-full flex-col p-5">
        <div className="flex items-start gap-4">
          <div className="relative flex size-12 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-background/55 shadow-sm shadow-black/20">
            <div className="absolute inset-0 rounded-lg bg-[color:var(--skill-accent)] opacity-[0.12]" />
            <Icon
              className="relative size-6"
              style={{ color: group.accent }}
              aria-hidden="true"
            />
          </div>
          <div className="min-w-0">
            <h3 className="text-base font-semibold leading-tight text-foreground">
              {group.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {group.description}
            </p>
          </div>
        </div>

        <div className="my-5 h-px bg-[linear-gradient(90deg,var(--skill-accent),rgba(148,163,184,0.12),transparent)] opacity-45" />

        <div className="grid gap-2">
          {group.skills.map((skill) => (
            <SkillChip key={skill.name} skill={skill} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
