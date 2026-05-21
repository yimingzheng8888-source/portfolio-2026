// ============================================
// 首页入口 - 整合所有核心模块
// ============================================

import React from 'react';
import { HeroBanner } from './sections/HeroBanner';
import { StatsBar } from './sections/StatsBar';
import { FeaturedWorks } from './sections/FeaturedWorks';
import { SkillsTree } from './sections/SkillsTree';
import { Testimonials } from './sections/Testimonials';

export const HomePage: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <HeroBanner />
      <StatsBar />
      <FeaturedWorks />
      <SkillsTree />
      <Testimonials />
    </div>
  );
};

export default HomePage;
