// ============================================
// Testimonials 区块 - 客户评价轮播
// ============================================

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Award, Quote } from 'lucide-react';
import { FadeIn } from '@components/animation/FadeIn';
import { SectionTitle } from '@components/ui/SectionTitle';
import testimonialsData from '@data/testimonials.json';
import type { Testimonial } from '@/types';
import { siteConfig } from '@/config/site';

const testimonials: Testimonial[] = testimonialsData;

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setCurrentIndex(index);
  }, []);

  const next = useCallback(() => {
    goTo((currentIndex + 1) % testimonials.length, 1);
  }, [currentIndex, goTo]);

  const prev = useCallback(() => {
    goTo((currentIndex - 1 + testimonials.length) % testimonials.length, -1);
  }, [currentIndex, goTo]);

  // 自动轮播
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  const current = testimonials[currentIndex];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 md:py-32 bg-bg-dark relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-accent" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-accent" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <SectionTitle
            title="成果记录"
            subtitle="Milestones"
            variant="light"
            className="mb-16"
          />
        </FadeIn>

        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* 轮播内容 */}
          <div className="relative min-h-[320px] md:min-h-[280px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
                  <Quote size={40} className="text-accent/40 mb-6" />

                  <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8">
                    {current.content}
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full img-placeholder flex-shrink-0 overflow-hidden">
                      {!siteConfig.usePlaceholderImages && (
                        <img
                          src={`${import.meta.env.BASE_URL}${current.avatar.replace(/^\//, '')}`}
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      )}
                    </div>

                    <div className="flex-1">
                      <h4 className="text-white font-bold">{current.name}</h4>
                      <p className="text-white/60 text-sm">
                        {current.title} · {current.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-accent text-sm">
                      <Award size={18} />
                      <span>已核验成果</span>
                    </div>
                  </div>

                  {current.project && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <span className="text-accent text-sm">项目：{current.project}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 导航按钮 */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="上一条成果"
            >
              <ChevronLeft size={20} />
            </button>

            {/* 指示器 */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index, index > currentIndex ? 1 : -1)}
                  className={`
                    h-2 rounded-full transition-all duration-300
                    ${index === currentIndex
                      ? 'w-8 bg-accent'
                      : 'w-2 bg-white/30 hover:bg-white/50'
                    }
                  `}
                  aria-label={`跳转到第${index + 1}条成果`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="下一条成果"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
