/**
 * 类型定义统一导出
 */
export type { Work, WorkCategory, WorkFilter } from './work';
export type { Skill, SkillCategory } from './skill';
export type { Testimonial } from './testimonial';

/** 路由配置类型 */
export interface RouteConfig {
  path: string;
  element: React.ReactNode;
  title?: string;
}

/** 导航项类型 */
export interface NavItem {
  label: string;
  path: string;
  icon?: string;
}

/** 社交链接类型 */
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

/** 统计数据类型 */
export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}
