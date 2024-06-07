import type { SkillType } from "./skillType";

export interface Project {
  title: string;
  content: string;
  tags: string[];
  images: string[];
  skillType: SkillType
}

