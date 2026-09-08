import { Link } from 'react-router-dom';
import { WorkCard } from '@components/ui/WorkCard';
import works from '@data/works.json';
export const FeaturedWorks = () => <section className="selected-works section-shell">
  <div className="section-heading"><div><p>设计作品</p><h2>从游艇到海洋体验</h2></div><Link to="/portfolio">查看全部 7 个项目</Link></div>
  <div className="work-grid">{works.filter(w => w.isFeatured).map(work => <WorkCard key={work.id} work={work} />)}</div>
</section>;
