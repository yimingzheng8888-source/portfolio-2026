import { Link } from 'react-router-dom';
import { WorkCard } from '@components/ui/WorkCard';
import works from '@data/works.json';
export const FeaturedWorks = () => <section className="selected-works section-shell">
  <div className="section-heading"><div><h2>设计作品</h2><p className="section-description">从游艇造型，走向更丰富的海洋体验。</p></div><Link to="/portfolio">查看全部 7 个项目</Link></div>
  <article className="featured-case"><Link className="featured-case-image" to="/special-projects/drift-yacht"><img src={`${import.meta.env.BASE_URL}images/design/drift-image7.webp`} width="1200" height="800" alt="DRIFT 会客空间与文化展示设计" loading="lazy"/></Link><div><span className="featured-label">重点案例 · 2026</span><h3>DRIFT 60<br/>一座可以航行的文化驿站</h3><p>从海南纺织文化出发，将船体造型、四层甲板与室内体验组织成一个完整的设计方案。</p><dl><div><dt>我的工作</dt><dd>团队负责人、造型建模、渲染与展板表达</dd></div><div><dt>案例内容</dt><dd>交互式三维模型、甲板布置、设计过程与影像</dd></div></dl><Link className="design-button" to="/special-projects/drift-yacht">阅读 DRIFT 专题</Link></div></article>
  <div className="work-grid secondary-works">{works.filter(w=>w.isFeatured&&w.id!=='drift-yacht').map(work=><WorkCard key={work.id} work={work}/>)}</div>
</section>;
