// src/types/skill.ts - Extension for WP-03
// Extends the base Skill type with category field

export interface Skill {
  id: string;
  label: string;
  shortDesc: string;
  fullDesc: string;
  tools: string[];
  image: string;
  proficiency: number;
  category: SkillCategory;
}

export type SkillCategory = '设计类' | '工具类' | '软技能';
