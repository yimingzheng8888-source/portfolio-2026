import { useSearchParams } from 'react-router-dom';
import { WorkCard } from '@components/ui/WorkCard';
import works from '@data/works.json';
const categories = ['全部', ...new Set(works.map(w => w.category))];
export const PortfolioPage = () => {
  const [params,setParams] = useSearchParams();
  const category = categories.includes(params.get('category') || '') ? params.get('category')! : '全部';
  const filtered = works.filter(w => category === '全部' || w.category === category);
  return <div className="portfolio-page section-shell">
    <header className="portfolio-heading"><p>郑一鸣 · 设计作品集</p><h1>作品。</h1><p>游艇 / 海洋产品 / 虚拟空间 / 原创 IP</p></header>
    <div className="portfolio-filters" aria-label="作品分类">{categories.map(c => <button key={c} aria-pressed={category===c} onClick={() => {const next = new URLSearchParams(params);if(c==='全部')next.delete('category');else next.set('category',c);setParams(next);}}>{c}</button>)}</div>
    <p className="portfolio-count" aria-live="polite">{filtered.length} 个项目</p>
    <div className="work-grid">{filtered.map(work => <WorkCard key={work.id} work={work} />)}</div>
  </div>;
};
