// src/types/special-project.ts

export interface SpecialProject {
  id: string;
  title: string;
  category: string;
  description: string;
  cover: string;
  tags: string[];
  year: number;
  link?: string;
}
