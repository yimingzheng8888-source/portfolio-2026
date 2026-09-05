// ============================================
// HeroBanner 区块 - 首屏打字机特效 Banner
// ============================================

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Typewriter } from '@components/animation/Typewriter';
import { GlassCard } from '@components/ui/GlassCard';

const slogans = [
  '你好，我是郑一鸣',
  '用工程计算验证设计判断',
  '用三维表达呈现船舶方案',
  '期待在船舶行业持续成长',
];

export const HeroBanner: React.FC = () => {
  const [currentSloganIndex, setCurrentSloganIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSloganIndex((prev) => (prev + 1) % slogans.length);
      setKey((prev) => prev + 1);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('stats-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-dark">
      {/* 背景装饰 - 渐变 */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 30% 50%, rgba(201, 169, 110, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 30%, rgba(201, 169, 110, 0.1) 0%, transparent 50%)',
          }}
        />
        {/* 粒子效果 */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-accent/20"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float-particle ${Math.random() * 10 + 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* 内容区域 */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 小标题 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-accent text-sm md:text-base tracking-[0.3em] uppercase mb-6"
        >
          船舶与海洋工程 · 2027 届
        </motion.p>

        {/* 大标题 - 打字机 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight min-h-[1.2em]">
            <Typewriter
              key={key}
              text={slogans[currentSloganIndex]}
              speed={80}
              pauseDuration={3000}
              loop={false}
            />
          </h1>
        </motion.div>

        {/* 副标题 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          聚焦船体结构、船型性能与游艇造型，用严谨计算和清晰表达推动方案落地
        </motion.p>

        {/* 毛玻璃搜索/筛选栏 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="max-w-2xl mx-auto"
        >
          <GlassCard className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex-1 text-left">
                <p className="text-white/50 text-xs mb-1">服务类型</p>
                <p className="text-white font-medium">船体结构 / 船型性能 / 游艇设计</p>
              </div>
              <div className="hidden md:block w-px h-10 bg-white/20" />
              <div className="flex-1 text-left">
                <p className="text-white/50 text-xs mb-1">求职方向</p>
                <p className="text-white font-medium">设计 / 技术 / 质量 / 验船</p>
              </div>
              <div className="hidden md:block w-px h-10 bg-white/20" />
              <div className="flex-1 text-left">
                <p className="text-white/50 text-xs mb-1">毕业时间</p>
                <p className="text-white font-medium">2027 年 6 月</p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* 向下滚动指示器 */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors cursor-pointer"
        aria-label="向下滚动"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown
            size={24}
            className="animate-bounce"
            style={{ animationDuration: '2s' }}
          />
        </div>
      </motion.button>
    </section>
  );
};
