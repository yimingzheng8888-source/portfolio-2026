// ============================================
// FeaturedWorks 区块 - 精选作品区
// ============================================

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';
import { FadeIn } from '@components/animation/FadeIn';
import { SectionTitle } from '@components/ui/SectionTitle';
import { Badge } from '@components/ui/Badge';
import worksData from '@data/works.json';
import type { Work } from '@/types';
import { siteConfig } from '@/config/site';

const featuredWorks: Work[] = worksData.filter((w: Work) => w.isFeatured).slice(0, 6);

export const FeaturedWorks: React.FC = () => {
  const [likedWorks, setLikedWorks] = useState<Set<string>>(new Set());

  const toggleLike = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    setLikedWorks((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section className="py-20 md:py-32 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionTitle
            title="近期精选"
            subtitle="Featured Works"
            className="mb-16"
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredWorks.map((work, index) => (
            <FadeIn key={work.id} delay={index * 0.1} direction="up">
              <Link to={`/special-projects/${work.id}`} className="group block">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  {/* 图片区域 */}
                  <div className="relative aspect-[4/3] overflow-hidden img-placeholder">
                    {!siteConfig.usePlaceholderImages && (
                      <img
                        src={`${import.meta.env.BASE_URL}${work.thumbnail.replace(/^\//, '')}`}
                        alt={work.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    )}
                    {/* 悬停叠加层 */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-400 flex items-center justify-center">
                      {/* 爱心按钮 */}
                      <button
                        aria-label={`收藏 ${work.title}`} onClick={(e) => toggleLike(e, work.id)}
                        className="absolute top-4 left-4 z-10 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-all"
                        style={{
                          animation: likedWorks.has(work.id) ? 'heart-bounce 0.5s ease' : 'none',
                        }}
                      >
                        <Heart
                          size={20}
                          className={likedWorks.has(work.id) ? 'text-accent fill-accent' : 'text-white'}
                        />
                      </button>

                      {/* 了解详情按钮 */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-primary transition-all duration-300">
                          了解详情 <ArrowRight size={16} />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 信息区域 */}
                  <div className="p-5 md:p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="accent">{work.category}</Badge>
                      <span className="text-text-muted text-sm">{work.year || ""}</span>
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                      {work.title}
                    </h3>
                    <p className="text-text-secondary text-sm line-clamp-2">{work.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-text-muted text-xs">{work.client}</span>
                      <span className="text-text-muted text-xs flex items-center gap-1">
                        <Heart size={12} className={likedWorks.has(work.id) ? 'text-accent fill-accent' : ''} />
                        {work.likes + (likedWorks.has(work.id) ? 1 : 0)}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* 查看更多 */}
        <FadeIn delay={0.4}>
          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary-light transition-colors"
            >
              查看全部作品 <ArrowRight size={18} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
