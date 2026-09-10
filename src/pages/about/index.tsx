import { Link } from 'react-router-dom';
import { experiences, educations, skillTags } from '@data/about';
const awards=[
  ['2026','海南国际游艇设计大赛优秀奖','DRIFT 60','drift-yacht'],
  ['2024','海南国际游艇设计大赛铜奖','鲸梦泽','whale-dream'],
  ['2024','大学生邮轮游艇创新创意设计大赛全国三等奖','蔚蓝之环','blue-ring-yacht'],
  ['2024','全国海洋航行器设计与制作大赛省级三等奖','蝠鲼号','purify-manta'],
];
export function AboutPage(){return <div className="about-page section-shell">
  <section className="about-intro"><div className="about-portrait"><img src={`${import.meta.env.BASE_URL}images/design/asset-0.webp`} width="700" height="900" alt="郑一鸣个人照片"/><span>2027 届本科生</span></div><div><header className="editorial-heading"><p>关于我</p><h1>郑一鸣</h1><p>船舶与海洋工程背景，关注游艇造型、空间与设计表达。</p></header><p className="about-description">我就读于广东海洋大学船舶与海洋工程专业。我的作品从超级游艇、游览船延伸到海洋产品、虚拟漫游与原创 IP，希望把工程训练与设计表达结合起来，让概念有清晰的形态与使用逻辑。</p><p className="about-description">在竞赛与团队实践中，我参与造型推演、建模、渲染及展板制作，也承担团队组织与交付协调。DRIFT 是这一阶段的重点作品。</p><div className="about-facts"><div><strong>3.78 / 5.0</strong><span>GPA</span></div><div><strong>2 / 121</strong><span>专业排名</span></div><div><strong>2027.06</strong><span>预计毕业</span></div></div><div className="contact-actions"><Link className="design-button" to="/special-projects/drift-yacht">了解我的设计</Link><Link className="quiet-button" to="/contact">联系我</Link></div></div></section>
  <section className="about-section"><h2>教育背景</h2><div>{educations.map(edu=><article className="experience-item" key={edu.id}><time>{edu.year}</time><h3>{edu.school}</h3><p className="experience-role">{edu.degree}</p><p>{edu.description}</p></article>)}</div></section>
  <section className="about-section"><div><h2>组织与项目经历</h2></div><div>{experiences.map(exp=><article className="experience-item" key={exp.id}><time>{exp.year}</time><h3>{exp.company}</h3><p className="experience-role">{exp.position}</p><p>{exp.description}</p></article>)}</div></section>
  <section className="about-section"><h2>设计竞赛与学习成果</h2><div className="award-list">{awards.map(([year,title,project,id])=><Link key={id} to={`/special-projects/${id}`}><span>{year}</span><div><h3>{title}</h3><p>{project} · 查看作品</p></div></Link>)}<p className="academic-awards">另获两学年一等奖学金、两学年校级三好学生标兵。</p></div></section>
  <section className="about-section"><h2>技能与工具</h2><div className="tool-groups">{[['dev','三维与视觉表达'],['design','船舶工程工具'],['tool','分析与数据工具']].map(([category,label])=><div key={category}><h3>{label}</h3><div>{skillTags.filter(t=>t.category===category).map(t=><span key={t.id}><img src={`${import.meta.env.BASE_URL}${t.icon}`} alt="" width="20" height="20" loading="lazy"/>{t.label}</span>)}</div></div>)}</div></section>
</div>}
export default AboutPage;
