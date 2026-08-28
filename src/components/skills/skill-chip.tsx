import type { CSSProperties } from "react";

import type { SkillItem } from "@/types/skill";

type SkillChipProps = {
  skill: SkillItem;
};

export function SkillChip({ skill }: SkillChipProps) {
  const Icon = skill.icon;

  return (
    <span
      className="group/skill inline-flex min-h-11 items-center gap-3 rounded-lg border border-white/[0.07] bg-background/35 px-3 py-2.5 text-sm font-medium text-[#dbeafe] shadow-sm shadow-black/10 transition-colors duration-200 hover:border-white/16 hover:bg-secondary/55"
      style={
        {
          "--skill-color": skill.color ?? "#60a5fa",
          "--skill-surface": skill.surface ?? "rgba(96, 165, 250, 0.12)",
        } as CSSProperties
      }
    >
      <span className="grid size-8 shrink-0 place-items-center rounded-md border border-white/[0.08] bg-[var(--skill-surface)] shadow-inner shadow-black/15">
        {Icon ? (
          <Icon
            className="size-[18px]"
            style={{ color: skill.color ?? "#60a5fa" }}
            aria-hidden="true"
          />
        ) : null}
      </span>
      <span className="leading-tight">{skill.name}</span>
    </span>
  );
}
