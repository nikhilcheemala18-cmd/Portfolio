import type { ElementType } from "react";

export type SkillIcon = ElementType<{ className?: string }>;

export type SkillItem = {
  name: string;
  icon?: SkillIcon;
  color?: string;
  surface?: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  icon: SkillIcon;
  accent: string;
  surface: string;
  skills: SkillItem[];
};
