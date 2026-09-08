// ============================================
// StatsBar 区块 - 数据背书区
// ============================================

import React from 'react';
import { motion } from 'framer-motion';
import { CountUp } from '@components/animation/CountUp';
import { FadeIn } from '@components/animation/FadeIn';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}

const stats: StatItem[] = [
  { value: 2, suffix: '/121', label: '专业排名' },
  { value: 7, suffix: '', label: '设计作品' },
  { value: 4, suffix: '', label: '竞赛奖项' },
  { value: 2, suffix: '', label: '实用新型专利', decimals: 0 },
];

export const StatsBar: React.FC = () => {
  return (
    <section id="stats-section" className="relative z-20 -mt-16 px-4 sm:px-6 lg:px-8">
      <FadeIn delay={0.1}>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    <CountUp
                      end={stat.value}
                      duration={2}
                      suffix={stat.suffix}
                      decimals={stat.decimals || 0}
                    />
                  </div>
                  <p className="text-text-secondary text-sm md:text-base">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};
