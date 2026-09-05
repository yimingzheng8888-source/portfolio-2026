import React from 'react';
import { FadeIn } from '@components/animation/FadeIn';
import { CountUp } from '@components/animation/CountUp';
import { SectionTitle } from '@components/ui/SectionTitle';
import { Badge } from '@components/ui/Badge';
import { Button } from '@components/ui/Button';
import { Timeline } from '@components/timeline/Timeline';
import { experiences, educations, skillTags, stats } from '@data/about';
import { Briefcase, GraduationCap, Award, Download } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const AboutPage: React.FC = () => {
  const experienceItems = experiences.map((exp) => ({
    id: exp.id,
    year: exp.year,
    title: exp.company,
    subtitle: exp.position,
    description: exp.description,
  }));

  const educationItems = educations.map((edu) => ({
    id: edu.id,
    year: edu.year,
    title: edu.school,
    subtitle: edu.degree,
    description: edu.description,
  }));

  const skillCategories = {
    design: { label: '船舶工程工具', color: 'primary' as const },
    dev: { label: '三维与视觉表达', color: 'secondary' as const },
    tool: { label: '分析与数据工具', color: 'accent' as const },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 个人简介区 */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* 左侧照片 */}
            <FadeIn direction="up" delay={0} className="lg:col-span-4 flex justify-center">
              <div className="relative">
                <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-xl bg-[#cccccc] flex items-center justify-center">
                  <span className="text-gray-500 text-sm">个人照片占位</span>
                  {!siteConfig.usePlaceholderImages && (
                    <img
                      src={`${import.meta.env.BASE_URL}images/profile/profile.jpg`}
                      alt="郑一鸣"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-neutral-900 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-3xl font-bold">2027</span>
                </div>
              </div>
            </FadeIn>

            {/* 右侧文字 */}
            <div className="lg:col-span-8">
              <FadeIn direction="up" delay={0.1}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
                  关于我
                </h1>
                <p className="text-xl text-neutral-600 font-medium mb-6">
                  船舶与海洋工程 · 船舶设计 · 游艇造型
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <div className="space-y-4 text-neutral-600 leading-relaxed text-base md:text-lg">
                  <p>
                    你好，我是郑一鸣，广东海洋大学船舶与海洋工程专业 2027 届本科生，
                    GPA 3.78/5.0，专业排名 2/121。
                  </p>
                  <p>
                    我的项目覆盖船体结构、静水力与稳性、阻力与推进、船型建模及生产设计；
                    同时持续参与游艇造型竞赛，负责建模、渲染、展板与说明书等完整交付。
                  </p>
                  <p>
                    我希望在船舶设计、技术与质量、验船或船东技术相关岗位继续成长，
                    将工程计算、三维设计和清晰表达结合起来解决真实问题。
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button variant="primary" size="lg" href={`${import.meta.env.BASE_URL}resume/郑一鸣-简历.pdf`} external className="flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    下载简历
                  </Button>
                  <Button variant="outline" size="lg" href="/contact">
                    联系我
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 数据统计区 */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <FadeIn direction="up" delay={0}>
              <div className="text-center p-6 rounded-2xl bg-neutral-50 hover:bg-neutral-100 transition-colors duration-300">
                <div className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">
                  <CountUp end={stats.years} duration={2} suffix="+" />
                </div>
                <p className="text-neutral-500 font-medium">组织管理经历</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <div className="text-center p-6 rounded-2xl bg-neutral-50 hover:bg-neutral-100 transition-colors duration-300">
                <div className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">
                  <CountUp end={stats.projects} duration={2} suffix="+" />
                </div>
                <p className="text-neutral-500 font-medium">工程与设计项目</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <div className="text-center p-6 rounded-2xl bg-neutral-50 hover:bg-neutral-100 transition-colors duration-300">
                <div className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">
                  <CountUp end={stats.clients} duration={2} suffix="+" />
                </div>
                <p className="text-neutral-500 font-medium">实用新型专利</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <div className="text-center p-6 rounded-2xl bg-neutral-50 hover:bg-neutral-100 transition-colors duration-300">
                <div className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">
                  <CountUp end={stats.awards} duration={2} />
                </div>
                <p className="text-neutral-500 font-medium">竞赛奖项</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 工作经历时间线 */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="组织与项目经历"
            subtitle="从团队管理到竞赛交付的实践记录"
            align="center"
            showLine
            className="mb-12"
          />
          <Timeline
            items={experienceItems}
            title=""
            icon={<Briefcase className="w-6 h-6" />}
          />
        </div>
      </section>

      {/* 教育背景 */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="教育背景"
            subtitle="船舶与海洋工程的系统学习与训练"
            align="center"
            showLine
            className="mb-12"
          />
          <Timeline
            items={educationItems}
            title=""
            icon={<GraduationCap className="w-6 h-6" />}
          />
        </div>
      </section>

      {/* 技能标签云 */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="技能与工具"
            subtitle="工程计算、三维建模、仿真分析与视觉表达"
            align="center"
            showLine
            className="mb-12"
          />

          <FadeIn direction="up" delay={0.1}>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-neutral-100">
              {(Object.keys(skillCategories) as Array<keyof typeof skillCategories>).map((cat) => (
                <div key={cat} className="mb-6 last:mb-0">
                  <h4 className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    {skillCategories[cat].label}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillTags
                      .filter((tag) => tag.category === cat)
                      .map((tag) => (
                        <Badge
                          key={tag.id}
                          variant={skillCategories[cat].color}
                          size="md"
                          className="text-sm py-1.5 px-3"
                        >
                          {tag.label}
                        </Badge>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 获奖/认证 */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="获奖与认证"
            subtitle="行业认可与专业资质的积累"
            align="center"
            showLine
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { year: '2026', title: '海南国际游艇设计大赛全国优秀奖', org: 'DRIFT 游艇设计' },
              { year: '2024', title: '海南国际游艇设计大赛全国铜奖', org: '鲸梦泽 游艇设计' },
              { year: '2024', title: '大学生邮轮游艇创新创意设计大赛全国三等奖', org: '蔚蓝之环' },
              { year: '2024', title: '全国海洋航行器设计与制作大赛省级三等奖', org: '蝠鲼号' },
              { year: '两学年', title: '一等奖学金', org: '广东海洋大学' },
              { year: '两学年', title: '校级三好学生标兵', org: '广东海洋大学' },
            ].map((award, index) => (
              <FadeIn key={award.title} direction="up" delay={index * 0.1}>
                <div className="flex items-start gap-4 p-5 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors duration-300 border border-neutral-100">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-bold text-sm">
                    {award.year}
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-1">{award.title}</h4>
                    <p className="text-sm text-neutral-500">{award.org}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
