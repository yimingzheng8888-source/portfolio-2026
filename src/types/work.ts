/**
 * 作品数据类型定义
 */
export interface Work {
  /** 唯一标识，kebab-case */
  id: string;
  /** 作品标题 */
  title: string;
  /** 作品分类 */
  category: string;
  /** 完成年份 */
  year: number;
  /** 客户名称 */
  client: string;
  /** 简短描述 */
  description: string;
  /** 完整描述 */
  fullDescription: string;
  /** 缩略图路径 */
  thumbnail: string;
  /** 图片列表 */
  images: string[];
  /** 标签列表 */
  tags: string[];
  /** 是否精选 */
  isFeatured: boolean;
  /** 点赞数 */
  likes: number;
}

/** 作品分类 */
export type WorkCategory = 'brand' | 'ui' | 'illustration' | 'motion' | 'web';

/** 作品筛选条件 */
export interface WorkFilter {
  category?: WorkCategory | 'all';
  year?: number;
  search?: string;
}
