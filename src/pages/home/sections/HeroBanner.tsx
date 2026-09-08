import React from 'react';
import { Link } from 'react-router-dom';
export const HeroBanner: React.FC = () => <section className="design-hero">
  <div className="hero-intro"><p>郑一鸣 / 2027 届 · 船舶与海洋工程</p>
    <h1>把海上的想象，<br />变成看得见的设计。</h1>
    <p className="hero-description">游艇造型、空间设计与三维可视化。<br />从文化灵感出发，让概念有形，让体验可见。</p>
    <div className="hero-actions"><Link className="design-button" to="/special-projects/drift-yacht">探索 DRIFT 60</Link><Link className="hero-secondary" to="/portfolio">浏览全部作品</Link></div>
    <div className="hero-project-name"><strong>DRIFT</strong><span>60 米超级游艇概念设计 · 泛舟</span></div>
  </div>
  <Link to="/special-projects/drift-yacht" className="hero-visual" aria-label="查看 DRIFT 60 超级游艇重点案例"><img src={`${import.meta.env.BASE_URL}images/design/drift-image1.webp`} alt="DRIFT 60 大地色船体超级游艇的海上侧前方渲染" /><span>从海南纺织文化，到海上文化驿站</span></Link>
</section>;
