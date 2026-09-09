import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useHomeMotion } from '@hooks/useHomeMotion';
import { HeroBanner } from './sections/HeroBanner';
import { WorkCard } from '@components/ui/WorkCard';
import { MediaImage } from '@components/MediaImage';
import works from '@data/works.json';
export function HomePage(){
 const root=useRef<HTMLDivElement>(null);useHomeMotion(root);
 return <div ref={root} className="cinema-home"><HeroBanner/>
  <section className="selected-works section-shell" id="home-introduction">
   <header className="section-heading" data-reveal><div><p className="eyebrow">SELECTED WORK / 01—03</p><h2>关于海洋的设计。</h2></div><Link className="text-link" to="/portfolio">全部作品 <ArrowUpRight size={18}/></Link></header>
   <Link className="drift-feature" data-reveal to="/special-projects/drift-yacht"><div className="drift-feature-image"><MediaImage src="/media/drift-stern" alt="DRIFT 60 艉部泳池与层叠甲板夜景" loading="lazy"/><span className="image-open"><ArrowUpRight/></span></div><div className="feature-caption"><span className="project-number">01</span><div><h3>DRIFT <span>泛舟</span></h3><p>60 米超级游艇概念设计</p></div><span>2026</span></div></Link>
   <div className="selected-pair">{works.slice(1,3).map(work=><div key={work.id} data-reveal><WorkCard work={work}/></div>)}</div>
  </section>
  <section className="explorations"><div className="section-shell"><header className="section-heading" data-reveal><div><p className="eyebrow">FURTHER EXPLORATIONS</p><h2>从船舶，延伸向更多。</h2></div><span className="section-note">海洋产品 / 虚拟空间 / 原创 IP</span></header><div className="exploration-grid">{works.slice(3,6).map(work=><div key={work.id} data-reveal><WorkCard work={work}/></div>)}</div></div></section>
  <section className="home-about section-shell" data-reveal><p className="eyebrow">YIMING ZHENG</p><div><h2>工程的思考，<br/>设计的表达。</h2><p>我是郑一鸣，广东海洋大学船舶与海洋工程专业 2027 届本科生。关注游艇造型与空间，使用建模、渲染和动态影像，让设计逐渐成形。</p><Link className="text-link" to="/about">认识我 <ArrowUpRight size={18}/></Link></div></section>
 </div>;
}
export default HomePage;
