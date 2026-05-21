/**
 * 客户评价数据类型定义
 */
export interface Testimonial {
  /** 唯一标识 */
  id: string;
  /** 客户姓名 */
  name: string;
  /** 职位 */
  title: string;
  /** 公司名称 */
  company: string;
  /** 头像路径 */
  avatar: string;
  /** 评分 (1-5) */
  rating: number;
  /** 评价内容 */
  content: string;
  /** 关联项目 (可选) */
  project?: string;
}
