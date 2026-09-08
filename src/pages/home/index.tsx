// ============================================
// 首页入口 - 整合所有核心模块
// ============================================

import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useHomeMotion } from '@hooks/useHomeMotion';
import { HeroBanner } from './sections/HeroBanner';
import { StatsBar } from './sections/StatsBar';
import { FeaturedWorks } from './sections/FeaturedWorks';
import { SkillsTree } from './sections/SkillsTree';
import { Testimonials } from './sections/Testimonials';

export const HomePage: React.FC = () => {
  const root = useRef<HTMLDivElement>(null);
  useHomeMotion(root);
  return (
    <div ref={root} className="cinema-home">
      <HeroBanner />
      <section id="home-introduction" className="home-introduction section-shell">
        <div className="home-introduction-copy">
          <p>从海上的想象，到设计的表达。</p>
          <h2>让形态承载文化，<br />让空间连接生活。</h2>
          <div><p>我是郑一鸣，广东海洋大学船舶与海洋工程专业本科生。<br />从游艇造型到空间体验，以建模、渲染与动态影像，探索海洋设计的更多可能。</p><Link to="/about">关于我</Link></div>
        </div>
      </section>
      <StatsBar />
      <FeaturedWorks />
      <SkillsTree />
      <Testimonials />
    </div>
  );
};

export default HomePage;
