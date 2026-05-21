// src/pages/portfolio/index.tsx
// 作品集页面 - 分类筛选 + 作品网格展示

import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';

import { SectionTitle } from '@components/ui/SectionTitle';
import { Badge } from '@components/ui/Badge';
import { FadeIn } from '@components/animation/FadeIn';

import {
  getAllWorks,
  getWorksByCategory,
} from '@utils/dataHelpers';

import type { Work } from '@types/index';

// 分类配置（包含"全部"选项）
const CATEGORIES = ['全部', '品牌设计', 'UI/UX', '插画', '动态设计'];

// 作品卡片组件
interface WorkCardProps {
  work: Work;
  index: number;
}

const WorkCard: React.FC<WorkCardProps> = ({ work, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <FadeIn delay={index * 0.08} direction="up" once>
      <motion.div
        className="group relative cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        {/* 图片容器 */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#cccccc]">
          {/* 灰色占位背景 */}
          <div className="absolute inset-0 flex items-center justify-center bg-[#cccccc]">
            <span className="text-sm text-[#999]">图片占位</span>
          </div>

          {/* 悬停遮罩 */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-black/60"
              >
                <motion.h3
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-xl font-bold text-white mb-2"
                >
                  {work.title}
                </motion.h3>
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                >
                  <Badge variant="primary" size="sm">
                    {work.category}
                  </Badge>
                </motion.div>
                <motion.p
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mt-3 text-sm text-white/80 max-w-[80%] text-center line-clamp-2"
                >
                  {work.description}
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 信息区 */}
        <div className="pt-4">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary" size="sm">
              {work.category}
            </Badge>
            <span className="text-xs text-[#999]">{work.year}</span>
          </div>
          <h3 className="text-lg font-bold text-[#1a1a1a] mb-1 group-hover:text-[#c9a96e] transition-colors">
            {work.title}
          </h3>
          <p className="text-sm text-[#666] line-clamp-2">{work.description}</p>
          <div className="mt-3 flex items-center gap-3 text-xs text-[#999]">
            <span>客户: {work.client}</span>
            <span className="flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              {work.likes}
            </span>
          </div>
        </div>
      </motion.div>
    </FadeIn>
  );
};

// 空状态组件
const EmptyState: React.FC = () => (
  <div className="col-span-full flex flex-col items-center justify-center py-24">
    <div className="w-16 h-16 mb-4 rounded-full bg-[#f5f5f5] flex items-center justify-center">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    </div>
    <p className="text-lg text-[#666] font-medium">该分类下暂无作品</p>
    <p className="text-sm text-[#999] mt-1">请尝试切换其他分类查看</p>
  </div>
);

// 主页面组件
export const PortfolioPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategory = searchParams.get('category');

  // 初始化当前分类：优先从URL参数读取，否则默认"全部"
  const [activeCategory, setActiveCategory] = useState<string>(
    urlCategory && CATEGORIES.includes(urlCategory) ? urlCategory : '全部'
  );

  // 获取筛选后的作品
  const filteredWorks = useMemo(() => {
    if (activeCategory === '全部') {
      return getAllWorks();
    }
    return getWorksByCategory(activeCategory);
  }, [activeCategory]);

  // 分类切换处理
  const handleCategoryChange = useCallback(
    (category: string) => {
      setActiveCategory(category);
      // 同步到URL参数
      if (category === '全部') {
        searchParams.delete('category');
      } else {
        searchParams.set('category', category);
      }
      setSearchParams(searchParams, { replace: true });
    },
    [searchParams, setSearchParams]
  );

  return (
    <div className="min-h-screen bg-white">
      {/* 页面头部 */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn direction="up" once>
            <SectionTitle
              title="作品集"
              subtitle="精选项目案例"
              align="center"
            />
          </FadeIn>

          {/* 分类筛选栏 */}
          <FadeIn delay={0.2} direction="up" once>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`
                    px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                    ${
                      activeCategory === category
                        ? 'bg-[#1a1a1a] text-white shadow-md'
                        : 'bg-[#f5f5f5] text-[#666] hover:bg-[#e5e5e5] hover:text-[#1a1a1a]'
                    }
                  `}
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 作品网格 */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredWorks.length > 0 ? (
                filteredWorks.map((work, index) => (
                  <WorkCard key={work.id} work={work} index={index} />
                ))
              ) : (
                <EmptyState />
              )}
            </motion.div>
          </AnimatePresence>

          {/* 统计信息 */}
          <FadeIn delay={0.3} direction="up" once>
            <div className="mt-16 text-center">
              <p className="text-sm text-[#999]">
                共展示 <span className="text-[#1a1a1a] font-bold">{filteredWorks.length}</span> 件作品
                {activeCategory !== '全部' && (
                  <span>，分类：{activeCategory}</span>
                )}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};