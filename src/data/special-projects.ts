export interface SpecialProject {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  description: string;
  cover: string;
  tags: string[];
  date: string;
  client: string;
  role: string;
  tools: string[];
  sections: {
    background: string;
    challenge: string;
    solution: string;
    result: string;
  };
  gallery: string[];
  processImages: string[];
}

export const specialProjects: SpecialProject[] = [
  {
    id: 'bulk-carrier-strength',
    title: '190.9 m 散货船船体强度与结构设计',
    category: '结构设计',
    shortDesc: '依据规范完成载荷计算、构件设计、剖面特性与总纵强度校核。',
    description: '面向 190.9 m 散货船的船体强度与结构课程设计，形成从基础数据、载荷计算到规范校核的完整计算链。',
    cover: '/images/special-projects/bulk-carrier-strength-cover.jpg',
    tags: ['船体结构', '总纵强度', '规范计算', 'Excel'],
    date: '2026年7月',
    client: '课程设计',
    role: '独立完成',
    tools: ['AutoCAD', 'Excel'],
    sections: {
      background: '针对 190.9 m 散货船，依据《国内航行海船建造规范（2024）》完成船体结构设计与强度校核。',
      challenge: '需要统一重量、浮力、静水与波浪载荷、弯矩剪力以及剖面特性等多组数据，确保计算链条前后一致并符合规范。',
      solution: '依次完成构件设计、重量与浮力计算、静水和波浪弯矩与剪力计算、剖面模数计算，最后进行总纵强度校核。',
      result: '最大弯曲应力 123.30 N/mm²，最大剪应力 10.16 N/mm²，满足规范要求。',
    },
    gallery: ['/images/special-projects/bulk-carrier-strength-1.jpg', '/images/special-projects/bulk-carrier-strength-2.jpg', '/images/special-projects/bulk-carrier-strength-3.jpg'],
    processImages: ['/images/special-projects/bulk-carrier-strength-process-1.jpg', '/images/special-projects/bulk-carrier-strength-process-2.jpg'],
  },
  {
    id: 'drift-yacht',
    title: 'DRIFT 游艇造型设计',
    category: '游艇设计',
    shortDesc: '全国优秀奖作品，完整呈现游艇造型建模、渲染与竞赛表达。',
    description: '第三届海南国际游艇设计大赛参赛作品，强调造型、空间意象与完整视觉表达。',
    cover: '/images/special-projects/drift-yacht-cover.jpg',
    tags: ['游艇设计', 'Rhino', '3ds Max', 'Unreal Engine'],
    date: '2026年4月',
    client: '海南国际游艇设计大赛',
    role: '两人团队负责人',
    tools: ['Rhino', '3ds Max', 'Unreal Engine', 'Illustrator'],
    sections: {
      background: '围绕游艇造型创新与完整方案表达开展竞赛设计。',
      challenge: '在有限时间内完成概念梳理、曲面建模、材质灯光、渲染和展板叙事，并保持整体风格统一。',
      solution: '负责造型建模、渲染、展板和设计说明书，按阶段推进造型方案、可视化与最终排版交付。',
      result: '作品获得第三届海南国际游艇设计大赛全国优秀奖。',
    },
    gallery: ['/images/special-projects/drift-yacht-1.jpg', '/images/special-projects/drift-yacht-2.jpg', '/images/special-projects/drift-yacht-3.jpg'],
    processImages: ['/images/special-projects/drift-yacht-process-1.jpg', '/images/special-projects/drift-yacht-process-2.jpg'],
  },
  {
    id: 'blue-ring-yacht',
    title: '蔚蓝之环邮轮游艇创新设计',
    category: '游艇设计',
    shortDesc: '五人团队从概念、造型到表达交付的全流程设计项目。',
    description: '2024 大学生邮轮游艇创新创意设计大赛参赛作品。',
    cover: '/images/special-projects/blue-ring-yacht-cover.jpg',
    tags: ['概念设计', 'Rhino', 'KeyShot', '团队协作'],
    date: '2024年12月',
    client: '大学生邮轮游艇创新创意设计大赛',
    role: '五人团队负责人',
    tools: ['Rhino', 'KeyShot', 'Illustrator'],
    sections: {
      background: '围绕未来邮轮与游艇体验开展创新创意设计。',
      challenge: '需要协调多人任务并统一概念、造型与最终展板的设计语言。',
      solution: '组织概念讨论、任务拆解和节点复盘，推进三维造型、渲染与版式表达形成完整交付。',
      result: '作品获得全国三等奖。',
    },
    gallery: ['/images/special-projects/blue-ring-yacht-1.jpg', '/images/special-projects/blue-ring-yacht-2.jpg', '/images/special-projects/blue-ring-yacht-3.jpg'],
    processImages: ['/images/special-projects/blue-ring-yacht-process-1.jpg', '/images/special-projects/blue-ring-yacht-process-2.jpg'],
  },
  {
    id: 'maxsurf-analysis',
    title: 'Maxsurf 船型建模与性能分析',
    category: '船型性能',
    shortDesc: '完成供应船与货船船型建模及静水力、阻力、耐波性分析。',
    description: '基于 Maxsurf 完成两类船型的曲面建模、修顺与多项性能分析。',
    cover: '/images/special-projects/maxsurf-analysis-cover.jpg',
    tags: ['Maxsurf', '静水力', '阻力', '耐波性'],
    date: '课程设计',
    client: '广东海洋大学',
    role: '独立完成',
    tools: ['Maxsurf', 'Excel'],
    sections: {
      background: '完成 29 m 供应船及 4,000 t 货船的船型建模与性能分析。',
      challenge: '船体曲面的连续性和修顺质量会直接影响后续静水力、阻力及耐波性结果。',
      solution: '从曲线和曲面生成开始迭代模型，检查并修顺船体，再逐项完成浮态平衡、初稳性、阻力和耐波性分析。',
      result: '形成两类船型模型与完整的性能分析输出。',
    },
    gallery: ['/images/special-projects/maxsurf-analysis-1.jpg', '/images/special-projects/maxsurf-analysis-2.jpg', '/images/special-projects/maxsurf-analysis-3.jpg'],
    processImages: ['/images/special-projects/maxsurf-analysis-process-1.jpg', '/images/special-projects/maxsurf-analysis-process-2.jpg'],
  },
];

export const getSpecialProjectById = (id: string): SpecialProject | undefined => specialProjects.find((project) => project.id === id);

export const getAdjacentProjects = (currentId: string): { prev: SpecialProject | null; next: SpecialProject | null } => {
  const index = specialProjects.findIndex((project) => project.id === currentId);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? specialProjects[index - 1] : null,
    next: index < specialProjects.length - 1 ? specialProjects[index + 1] : null,
  };
};
