// ============================================
// SkillsTree 区块 - 技能树展示
// ============================================

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Layout, Image, Video, Box, Pencil, CheckCircle2 } from 'lucide-react';
import { FadeIn } from '@components/animation/FadeIn';
import { SectionTitle } from '@components/ui/SectionTitle';
import skillsData from '@data/skills.json';
import type { Skill } from '@types';
import { siteConfig } from '@/config/site';

const iconMap: Record<string, React.ElementType> = {
  Palette,
  Layout,
  Image,
  Video,
  Box,
  Pencil,
};

const skills: Skill[] = skillsData;

export const SkillsTree: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<string>(skills[0].id);
  const currentSkill = skills.find((s) => s.id === activeSkill) || skills[0];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionTitle
            title="专业能力"
            subtitle="My Skills"
            className="mb-16"
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* 左侧：技能标签列表 */}
          <FadeIn direction="left">
            <div className="space-y-4">
              {skills.map((skill, index) => {
                const Icon = iconMap[skill.icon || 'Palette'] || Palette;
                const isActive = skill.id === activeSkill;

                return (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onMouseEnter={() => setActiveSkill(skill.id)}
                    className={`
                      relative p-5 md:p-6 rounded-xl cursor-pointer
                      transition-all duration-300
                      ${isActive
                        ? 'bg-white shadow-lg border-l-4 border-accent'
                        : 'bg-bg-secondary hover:bg-white hover:shadow-md border-l-4 border-transparent'
                      }
                    `}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`
                        p-3 rounded-lg flex-shrink-0
                        ${isActive ? 'bg-accent/10 text-accent' : 'bg-white text-text-muted'}
                      `}>
                        <Icon size={24} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className={`
                          font-bold text-lg mb-1
                          ${isActive ? 'text-primary' : 'text-text-secondary'}
                        `}>
                          {skill.label}
                        </h3>
                        <p className="text-text-muted text-sm">{skill.shortDesc}</p>

                        {/* 熟练度进度条 */}
                        <div className="mt-3">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-text-muted">熟练度</span>
                            <span className="text-xs font-medium text-accent">{skill.proficiency}%</span>
                          </div>
                          <div className="h-2 bg-bg-secondary rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: isActive ? `${skill.proficiency}%` : '0%' }}
                              transition={{ duration: 1, ease: 'easeOut' }}
                              className="h-full bg-accent rounded-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </FadeIn>

          {/* 右侧：技能详情 */}
          <FadeIn direction="right" delay={0.2}>
            <div className="lg:sticky lg:top-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSkill.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-bg-secondary rounded-2xl overflow-hidden"
                >
                  <div className="relative aspect-[16/10] img-placeholder overflow-hidden">
                    {!siteConfig.usePlaceholderImages && (
                      <img
                        src={`${import.meta.env.BASE_URL}${currentSkill.image.replace(/^\//, '')}`}
                        alt={`${currentSkill.label}示意图`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    )}
                  </div>

                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      {currentSkill.label}
                    </h3>
                    <p className="text-text-secondary leading-relaxed mb-6">
                      {currentSkill.fullDesc}
                    </p>

                    {/* 工具列表 */}
                    <div>
                      <h4 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-3">
                        常用工具
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {currentSkill.tools.map((tool) => (
                          <span
                            key={tool}
                            className="inline-flex items-center gap-1 px-3 py-1.5 bg-white rounded-lg text-sm text-text-secondary shadow-sm"
                          >
                            <CheckCircle2 size={14} className="text-accent" />
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
