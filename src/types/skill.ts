/**
 * 技能数据类型定义
 */
export interface Skill {
  /** 唯一标识 */
  id: string;
  icon?: string;
  /** 技能名称 */
  label: string;
  /** 简短描述 */
  shortDesc: string;
  /** 完整描述 */
  fullDesc: string;
  /** 工具/技术栈列表 */
  tools: string[];
  /** 技能图片路径 */
  image: string;
  /** 熟练度 (0-100) */
  proficiency?: number;
}

/** 技能分类 */
export type SkillCategory = 'design' | 'development' | 'tool' | 'soft';
