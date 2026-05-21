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
    year: '2023 - 至今',
    company: '星辰设计事务所',
    position: '资深视觉设计师 / 设计主管',
    description: '带领 5 人设计团队，负责品牌全案、UI/UX 设计体系搭建。主导完成 30+ 商业项目，客户涵盖互联网、金融、消费品领域。建立公司设计规范系统，提升团队协作效率 40%。',
  },
  {
    id: 'exp-2',
    year: '2020 - 2023',
    company: '云图科技',
    position: '高级 UI 设计师',
    description: '负责核心 SaaS 产品的界面设计与用户体验优化。参与设计系统建设，输出组件库 200+。主导产品改版项目，用户满意度提升 25%，留存率增长 18%。',
  },
  {
    id: 'exp-3',
    year: '2018 - 2020',
    company: '墨白创意工作室',
    position: '品牌设计师',
    description: '服务中小型品牌客户，提供 Logo 设计、VI 系统、包装设计、宣传物料等全案服务。累计服务客户 50+，作品多次入选 Behance 首页推荐。',
  },
  {
    id: 'exp-4',
    year: '2016 - 2018',
    company: '独立设计师',
    position: '自由设计师',
    description: '承接各类设计委托，积累跨行业设计经验。期间完成品牌项目 20+，建立个人设计风格与方法论，为后续职业发展奠定坚实基础。',
  },
];

export const educations: Education[] = [
  {
    id: 'edu-1',
    year: '2012 - 2016',
    school: '中央美术学院',
    degree: '视觉传达设计 · 学士学位',
    description: '主修品牌设计、信息可视化、交互设计。毕业作品《城市记忆》获优秀毕业设计奖，留校展览。',
  },
  {
    id: 'edu-2',
    year: '2015',
    school: '罗德岛设计学院',
    degree: '暑期交换项目 · 平面设计',
    description: '参加 RISD 夏季课程，深入学习西方设计理论与实验性排版，拓展国际设计视野。',
  },
];

export const skillTags: SkillTag[] = [
  { id: 'sk-1', label: 'Figma', category: 'design' },
  { id: 'sk-2', label: 'Sketch', category: 'design' },
  { id: 'sk-3', label: 'Adobe XD', category: 'design' },
  { id: 'sk-4', label: 'Photoshop', category: 'design' },
  { id: 'sk-5', label: 'Illustrator', category: 'design' },
  { id: 'sk-6', label: 'InDesign', category: 'design' },
  { id: 'sk-7', label: 'After Effects', category: 'design' },
  { id: 'sk-8', label: 'Cinema 4D', category: 'design' },
  { id: 'sk-9', label: 'Blender', category: 'design' },
  { id: 'sk-10', label: 'React', category: 'dev' },
  { id: 'sk-11', label: 'TypeScript', category: 'dev' },
  { id: 'sk-12', label: 'Tailwind CSS', category: 'dev' },
  { id: 'sk-13', label: 'Framer Motion', category: 'dev' },
  { id: 'sk-14', label: 'HTML/CSS', category: 'dev' },
  { id: 'sk-15', label: 'Git', category: 'tool' },
  { id: 'sk-16', label: 'Notion', category: 'tool' },
  { id: 'sk-17', label: 'Jira', category: 'tool' },
  { id: 'sk-18', label: 'Midjourney', category: 'tool' },
  { id: 'sk-19', label: 'Stable Diffusion', category: 'tool' },
  { id: 'sk-20', label: 'Notion AI', category: 'tool' },
];

export const stats = {
  years: 10,
  projects: 156,
  clients: 48,
  awards: 12,
};
