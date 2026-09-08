// src/utils/dataHelpers.ts
// Data helper functions for WP-03 content system

import worksData from '@data/works.json';
import skillsData from '@data/skills.json';
import testimonialsData from '@data/testimonials.json';
import specialProjectsData from '@data/special-projects.json';

import type { Work, Testimonial } from '@/types/index';
import type { Skill, SkillCategory } from '@/types/skill-extended';
import type { SpecialProject } from '@/types/special-project';

// Cast imported JSON data to typed arrays
const works: Work[] = worksData as Work[];
const skills: Skill[] = skillsData as Skill[];
const testimonials: Testimonial[] = testimonialsData as Testimonial[];
const specialProjects: SpecialProject[] = specialProjectsData as SpecialProject[];

/**
 * 获取所有作品数据
 * @returns Work[] 全部作品列表
 */
export function getAllWorks(): Work[] {
  return works;
}

/**
 * 获取精选作品（首页展示用）
 * @returns Work[] isFeatured=true 的作品列表
 */
export function getFeaturedWorks(): Work[] {
  return works.filter((work) => work.isFeatured === true);
}

/**
 * 按分类筛选作品
 * @param category - 分类名称，如 "品牌设计"、"UI/UX"
 * @returns Work[] 该分类下的作品列表
 */
export function getWorksByCategory(category: string): Work[] {
  if (category === '全部' || category === 'all') {
    return works;
  }
  return works.filter((work) => work.category === category);
}

/**
 * 获取所有作品分类列表（去重）
 * @returns string[] 分类名称数组
 */
export function getAllCategories(): string[] {
  const categories = new Set(works.map((work) => work.category));
  return Array.from(categories);
}

/**
 * 按ID获取单个作品
 * @param id - 作品ID
 * @returns Work | undefined
 */
export function getWorkById(id: string): Work | undefined {
  return works.find((work) => work.id === id);
}

/**
 * 获取所有技能数据
 * @returns Skill[] 全部技能列表
 */
export function getAllSkills(): Skill[] {
  return skills;
}

/**
 * 按分类筛选技能
 * @param category - 技能分类：'设计类' | '工具类' | '软技能'
 * @returns Skill[] 该分类下的技能列表
 */
export function getSkillsByCategory(category: SkillCategory): Skill[] {
  return skills.filter((skill) => skill.category === category);
}

/**
 * 获取所有技能分类列表
 * @returns SkillCategory[] 技能分类数组
 */
export function getAllSkillCategories(): SkillCategory[] {
  const categories = new Set(skills.map((skill) => skill.category));
  return Array.from(categories) as SkillCategory[];
}

/**
 * 获取所有评价数据
 * @returns Testimonial[] 全部评价列表
 */
export function getAllTestimonials(): Testimonial[] {
  return testimonials;
}

/**
 * 按关联项目ID获取评价
 * @param projectId - 项目ID
 * @returns Testimonial[] 关联该项目的评价列表
 */
export function getTestimonialsByProject(projectId: string): Testimonial[] {
  return testimonials.filter((t) => t.project === projectId);
}

/**
 * 获取所有特别项目
 * @returns SpecialProject[] 全部特别项目列表
 */
export function getAllSpecialProjects(): SpecialProject[] {
  return specialProjects;
}

/**
 * 按分类筛选特别项目
 * @param category - 分类名称
 * @returns SpecialProject[] 该分类下的特别项目列表
 */
export function getSpecialProjectsByCategory(category: string): SpecialProject[] {
  if (category === '全部' || category === 'all') {
    return specialProjects;
  }
  return specialProjects.filter((project) => project.category === category);
}

/**
 * 获取所有特别项目分类（去重）
 * @returns string[] 分类名称数组
 */
export function getAllSpecialProjectCategories(): string[] {
  const categories = new Set(specialProjects.map((p) => p.category));
  return ['全部', ...Array.from(categories)];
}

/**
 * 搜索作品（按标题、标签、描述）
 * @param keyword - 搜索关键词
 * @returns Work[] 匹配的作品列表
 */
export function searchWorks(keyword: string): Work[] {
  const lowerKeyword = keyword.toLowerCase();
  return works.filter(
    (work) =>
      work.title.toLowerCase().includes(lowerKeyword) ||
      work.description.toLowerCase().includes(lowerKeyword) ||
      work.tags.some((tag) => tag.toLowerCase().includes(lowerKeyword)) ||
      work.client.toLowerCase().includes(lowerKeyword)
  );
}

/**
 * 按年份筛选作品
 * @param year - 年份
 * @returns Work[] 该年份的作品列表
 */
export function getWorksByYear(year: number): Work[] {
  return works.filter((work) => work.year === year);
}

/**
 * 获取作品年份列表（去重，降序）
 * @returns number[] 年份数组
 */
export function getAllWorkYears(): number[] {
  const years = new Set(works.map((work) => work.year));
  return Array.from(years).sort((a, b) => b - a);
}

/**
 * 获取相关作品（同分类，排除当前）
 * @param workId - 当前作品ID
 * @param limit - 返回数量限制，默认3
 * @returns Work[] 相关作品列表
 */
export function getRelatedWorks(workId: string, limit: number = 3): Work[] {
  const currentWork = getWorkById(workId);
  if (!currentWork) return [];

  return works
    .filter((work) => work.id !== workId && work.category === currentWork.category)
    .slice(0, limit);
}
