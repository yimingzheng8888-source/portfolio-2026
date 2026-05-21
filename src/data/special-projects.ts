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
    id: 'urban-stray',
    title: '城市流浪动物救助品牌重塑',
    category: '公益设计',
    shortDesc: '为零预算的流浪动物救助站打造专业品牌视觉系统，提升公众认知与捐赠转化率。',
    description: '为本地流浪动物救助站打造全新的品牌视觉系统，以"温暖守护"为核心理念，采用手绘风格与温暖色调，在零预算限制下实现专业级品牌输出。',
    cover: '/images/special-projects/urban-stray-cover.jpg',
    tags: ['品牌设计', '公益', 'VI系统', '手绘风格'],
    date: '2025年3月 - 2025年6月',
    client: '城市流浪动物救助站',
    role: '品牌主设计师',
    tools: ['Illustrator', 'Photoshop', 'InDesign', 'Figma'],
    sections: {
      background: '本地流浪动物救助站成立已有10年，一直缺乏专业的品牌视觉系统。机构主要依靠志愿者自发运营，年度预算有限，品牌形象陈旧，导致公众认知度低、捐赠转化率不足。机构负责人希望通过设计提升专业形象，吸引更多社会关注与资源支持。',
      challenge: '核心挑战在于如何在零预算的情况下，设计出专业且易于传播的品牌形象。需要兼顾以下矛盾：专业感 vs 亲和力、成本控制 vs 视觉品质、传统公益印象 vs 现代设计审美。同时，品牌需要适配多种应用场景：线下海报、社交媒体、周边产品、官网等。',
      solution: '以"温暖守护"为核心理念，采用手绘插画风格传递亲和力与真诚感。色彩系统选用暖橙与薄荷绿的对比组合，既温暖又充满生机。设计了一套完整的 VI 系统：Logo（主标+图形标）、标准色、辅助图形、字体规范、应用场景模板。所有物料设计为可自助编辑的模板化文件，降低后期维护成本。',
      result: '品牌上线后 3 个月内，救助站社交媒体粉丝增长 320%，月度捐赠金额提升 180%。新形象获得本地媒体报道 5 次，成功吸引 2 家企业建立长期赞助合作。设计作品入选《中国公益设计年鉴 2025》。',
    },
    gallery: [
      '/images/special-projects/urban-stray-1.jpg',
      '/images/special-projects/urban-stray-2.jpg',
      '/images/special-projects/urban-stray-3.jpg',
    ],
    processImages: [
      '/images/special-projects/urban-stray-process-1.jpg',
      '/images/special-projects/urban-stray-process-2.jpg',
      '/images/special-projects/urban-stray-process-3.jpg',
      '/images/special-projects/urban-stray-process-4.jpg',
    ],
  },
  {
    id: 'type-lab',
    title: 'TypeLab 实验字体项目',
    category: '个人实验',
    shortDesc: '探索中文字体在数字媒介中的表现力，设计一套实验性可变字体。',
    description: '为期一年的个人字体设计实验项目，探索汉字笔画在数字屏幕上的动态表现力，最终产出一套包含 3 款字体的实验性字库。',
    cover: '/images/special-projects/type-lab-cover.jpg',
    tags: ['字体设计', '可变字体', '实验性', '数字媒介'],
    date: '2024年1月 - 2024年12月',
    client: '个人项目',
    role: '字体设计师 / 开发者',
    tools: ['Glyphs', 'RoboFont', 'Python', 'HTML/CSS'],
    sections: {
      background: '随着可变字体（Variable Fonts）技术的成熟，拉丁字母已经有了丰富的实验性字体作品，但中文可变字体的探索仍然非常有限。汉字结构复杂、笔画繁多，在动态变化中保持可读性与美感是巨大的挑战。我希望通过这个项目，探索中文字体在数字媒介中的新可能。',
      challenge: '中文字体设计面临三大技术挑战：首先是字符集庞大（GB2312 含 6763 字），设计工作量巨大；其次是笔画结构复杂，可变轴的设计需要兼顾所有汉字的协调性；最后是渲染性能，中文字体文件体积通常较大，需要优化加载策略。',
      solution: '采用"模块化笔画"设计方法，将汉字拆解为 32 种基础笔画组件，通过组合生成完整字形。设计 3 个可变轴：字重（Weight）、字宽（Width）、笔画曲率（Curvature）。使用 Python 脚本自动化生成中间状态字形，大幅提升效率。最终输出 WOFF2 格式，配合子集化加载策略，首屏加载控制在 200KB 以内。',
      result: '完成 3 款实验性可变字体："流云体"（飘逸风格）、"磐石体"（稳重风格）、"霓虹体"（未来风格）。在 GitHub 开源获得 1.2k Stars，被 3 家设计院校引用为教学案例。项目网站访问量 5万+，收到字体厂商合作意向 2 份。',
    },
    gallery: [
      '/images/special-projects/type-lab-1.jpg',
      '/images/special-projects/type-lab-2.jpg',
      '/images/special-projects/type-lab-3.jpg',
    ],
    processImages: [
      '/images/special-projects/type-lab-process-1.jpg',
      '/images/special-projects/type-lab-process-2.jpg',
      '/images/special-projects/type-lab-process-3.jpg',
    ],
  },
  {
    id: 'eco-packaging',
    title: '零废弃包装系统设计',
    category: '品牌重塑',
    shortDesc: '为环保品牌设计可完全降解的包装系统，从材料到视觉的全链路创新。',
    description: '为新兴环保消费品牌设计一套零废弃包装系统，涵盖材料选择、结构设计、视觉呈现全链路，实现包装 100% 可降解。',
    cover: '/images/special-projects/eco-packaging-cover.jpg',
    tags: ['包装设计', '可持续', '材料创新', '品牌策略'],
    date: '2024年6月 - 2024年11月',
    client: '绿野生活',
    role: '包装设计师 / 品牌顾问',
    tools: ['Illustrator', 'Cinema 4D', 'Blender', 'Figma'],
    sections: {
      background: '绿野生活是一家主打环保理念的新消费品牌，产品线涵盖个人护理、家居清洁、食品等。品牌核心理念是"零废弃生活"，但现有包装仍大量使用塑料与复合材料，与品牌主张形成矛盾。品牌方希望彻底重构包装系统，实现真正的零废弃承诺。',
      challenge: '需要同时解决三个层面的问题：材料层面——寻找可完全降解且成本可控的替代材料；结构层面——设计无需胶带、胶水即可自锁成型的包装结构；视觉层面——在环保材料（通常质感粗糙）上实现精致的印刷效果。三者相互制约，需要系统性创新。',
      solution: '材料方案：采用菌丝体（Mycelium）缓冲材料 + 竹纤维卡纸 + 海藻基油墨，全部可家庭堆肥降解。结构设计：借鉴传统榫卯结构，开发"自锁式折叠盒"专利结构，无需任何粘合剂。视觉方案：利用材料本身的纤维纹理作为设计元素，采用单色凹印工艺，以极简美学凸显材料质感。',
      result: '包装系统上线后，品牌获得 B Corp 认证，入选《快公司》中国创新设计榜。包装成本仅比传统方案高 15%，但客户满意度提升 45%，复购率增长 28%。设计获得红点品牌与传达设计奖（Red Dot Award: Brands & Communication Design）。',
    },
    gallery: [
      '/images/special-projects/eco-packaging-1.jpg',
      '/images/special-projects/eco-packaging-2.jpg',
      '/images/special-projects/eco-packaging-3.jpg',
    ],
    processImages: [
      '/images/special-projects/eco-packaging-process-1.jpg',
      '/images/special-projects/eco-packaging-process-2.jpg',
      '/images/special-projects/eco-packaging-process-3.jpg',
      '/images/special-projects/eco-packaging-process-4.jpg',
    ],
  },
  {
    id: 'open-source-ui',
    title: 'OpenDesign UI 组件库',
    category: '开源项目',
    shortDesc: '为独立开发者打造的开源 React UI 组件库，强调设计质感与开发体验。',
    description: '发起并维护一个面向独立开发者的开源 React UI 组件库，提供高质量、易定制的设计系统组件，GitHub Stars 2.5k+。',
    cover: '/images/special-projects/open-source-ui-cover.jpg',
    tags: ['开源', 'UI组件', '设计系统', 'React'],
    date: '2023年8月 - 持续维护',
    client: '开源社区',
    role: '项目发起人 / 核心维护者',
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Storybook'],
    sections: {
      background: '作为设计师学习前端开发的过程中，我发现现有开源组件库往往偏向工程化而忽视设计细节，或者设计精美但定制困难。独立开发者和小团队急需一套既美观又易用的组件库。于是决定结合设计背景与开发技能，打造一款"设计师友好"的 React UI 组件库。',
      challenge: '需要平衡设计精致度与开发灵活性。过于精致的设计往往难以定制，而过于灵活的组件又难以保证视觉一致性。另外，作为个人维护的开源项目，需要建立可持续的贡献机制与社区运营策略。',
      solution: '采用"主题驱动"架构，所有组件通过统一的主题配置对象控制样式，支持深度定制。组件设计遵循"渐进式复杂度"原则：基础用法简单直接，高级用法提供丰富的配置项。配套提供 Figma 设计资源包，保持设计与代码同步。建立清晰的贡献指南与代码审查流程，吸引社区参与。',
      result: 'GitHub Stars 2,500+，npm 周下载量 8,000+。被 120+ 个项目采用，收到贡献者 PR 150+。配套 Figma 资源包下载量 3,000+。项目入选 GitHub 年度热门中文开源项目榜。通过 GitHub Sponsors 获得可持续维护资金。',
    },
    gallery: [
      '/images/special-projects/open-source-ui-1.jpg',
      '/images/special-projects/open-source-ui-2.jpg',
      '/images/special-projects/open-source-ui-3.jpg',
    ],
    processImages: [
      '/images/special-projects/open-source-ui-process-1.jpg',
      '/images/special-projects/open-source-ui-process-2.jpg',
      '/images/special-projects/open-source-ui-process-3.jpg',
    ],
  },
];

export const getSpecialProjectById = (id: string): SpecialProject | undefined => {
  return specialProjects.find((p) => p.id === id);
};

export const getAdjacentProjects = (currentId: string): { prev: SpecialProject | null; next: SpecialProject | null } => {
  const index = specialProjects.findIndex((p) => p.id === currentId);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? specialProjects[index - 1] : null,
    next: index < specialProjects.length - 1 ? specialProjects[index + 1] : null,
  };
};
