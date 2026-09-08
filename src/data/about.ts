export interface Experience {
  id: string;
  year: string;
  company: string;
  position: string;
  description: string;
}

export interface Education {
  id: string;
  year: string;
  school: string;
  degree: string;
  description: string;
}

export interface SkillTag {
  id: string;
  label: string;
  category: 'design' | 'dev' | 'tool';
}

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    year: '2024.12 - 2025.06',
    company: '广东海洋大学学生创新团队',
    position: '负责人 · 游艇造型设计与性能分析',
    description: '组织游艇设计竞赛与建模、渲染训练，协同团队完成竞赛作品交付。',
  },
  {
    id: 'exp-2',
    year: '2023.12 - 2025.06',
    company: '船舶与海运学院船舶工作室',
    position: '负责人',
    description: '面向约 60 名成员开展组织管理，直接管理约 30 人；建立考勤、培训、竞赛任务、OKR 复盘与人才培养机制。',
  },
  {
    id: 'exp-3',
    year: '2023.12 - 2025.06',
    company: '学院微信公众号',
    position: '负责人',
    description: '从 0 搭建选题、撰稿、排版、审核与复盘流程；累计发布原创文章 207 篇，粉丝增长至 12,000。',
  },
];

export const educations: Education[] = [
  {
    id: 'edu-1',
    year: '2023.09 - 2027.06',
    school: '广东海洋大学',
    degree: '船舶与海洋工程 · 本科',
    description: 'GPA 3.78/5.0，专业排名 2/121。核心课程包括船舶 CAD/CAM、船舶静力学、船舶材料与焊接、船舶海工 CAE 等。',
  },
];

export const skillTags: SkillTag[] = [
  { id: 'sk-1', label: 'AutoCAD', category: 'design' },
  { id: 'sk-2', label: 'COMPASS', category: 'design' },
  { id: 'sk-3', label: 'Maxsurf', category: 'design' },
  { id: 'sk-4', label: '沪东 SPD', category: 'design' },
  { id: 'sk-5', label: 'Rhino', category: 'dev' },
  { id: 'sk-6', label: '3ds Max', category: 'dev' },
  { id: 'sk-7', label: 'KeyShot', category: 'dev' },
  { id: 'sk-8', label: 'Unreal Engine', category: 'dev' },
  { id: 'sk-9', label: 'Illustrator', category: 'dev' },
  { id: 'sk-10', label: 'STAR-CCM+', category: 'tool' },
  { id: 'sk-11', label: 'Abaqus/CAE', category: 'tool' },
  { id: 'sk-12', label: 'Excel', category: 'tool' },
];

export const stats = {
  years: 2,
  projects: 7,
  clients: 2,
  awards: 4,
};
