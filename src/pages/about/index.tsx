import React from 'react';
import { FadeIn } from '@components/animation/FadeIn';
import { CountUp } from '@components/animation/CountUp';
import { SectionTitle } from '@components/ui/SectionTitle';
import { Badge } from '@components/ui/Badge';
import { Button } from '@components/ui/Button';
import { Timeline } from '@components/timeline/Timeline';
import { experiences, educations, skillTags, stats } from '@data/about';
import { Briefcase, GraduationCap, Award, Download } from 'lucide-react';

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
    design: { label: '设计工具', color: 'primary' as const },
    dev: { label: '前端开发', color: 'secondary' as const },
    tool: { label: '效率工具', color: 'accent' as const },
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
                <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-xl bg-[#cccccc] flex items-center justify-center">
                  <span className="text-gray-500 text-sm">个人照片占位</span>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-neutral-900 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-3xl font-bold">10+</span>
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
                  资深视觉设计师 · 设计系统架构师 · 开源贡献者
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <div className="space-y-4 text-neutral-600 leading-relaxed text-base md:text-lg">
                  <p>
                    你好，我是一名拥有 10 年经验的视觉设计师，专注于品牌设计、UI/UX 设计以及设计系统构建。
                    我相信好的设计不仅是视觉上的美感，更是解决问题、传递价值的有效工具。
                  </p>
                  <p>
                    从中央美术学院到星辰设计事务所，从独立自由设计师到带领设计团队，
                    我始终坚持"设计驱动商业，细节成就品质"的理念。期间服务过互联网、金融、消费品、公益等多个领域，
                    累计完成 150+ 商业项目。
                  </p>
                  <p>
                    除了商业设计，我也热衷于开源贡献与个人实验项目。
                    我发起维护了 OpenDesign UI 组件库，探索中文字体在数字媒介中的表现力，
                    并积极参与公益设计项目，用设计创造社会价值。
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button variant="primary" size="lg" className="flex items-center gap-2">
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
                <p className="text-neutral-500 font-medium">年设计经验</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <div className="text-center p-6 rounded-2xl bg-neutral-50 hover:bg-neutral-100 transition-colors duration-300">
                <div className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">
                  <CountUp end={stats.projects} duration={2} suffix="+" />
                </div>
                <p className="text-neutral-500 font-medium">完成项目</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <div className="text-center p-6 rounded-2xl bg-neutral-50 hover:bg-neutral-100 transition-colors duration-300">
                <div className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">
                  <CountUp end={stats.clients} duration={2} suffix="+" />
                </div>
                <p className="text-neutral-500 font-medium">合作客户</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <div className="text-center p-6 rounded-2xl bg-neutral-50 hover:bg-neutral-100 transition-colors duration-300">
                <div className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">
                  <CountUp end={stats.awards} duration={2} />
                </div>
                <p className="text-neutral-500 font-medium">设计奖项</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 工作经历时间线 */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="工作经历"
            subtitle="十年设计生涯，从自由设计师到设计主管的成长之路"
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
            subtitle="扎实的学术训练与国际视野的拓展"
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
            subtitle="设计、开发、效率，三位一体的技能矩阵"
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
              { year: '2025', title: '红点品牌与传达设计奖', org: 'Red Dot Award' },
              { year: '2024', title: '中国公益设计年鉴入选', org: '中国设计博物馆' },
              { year: '2024', title: 'Behance 首页推荐 × 6', org: 'Adobe Behance' },
              { year: '2023', title: 'GitHub 年度热门中文开源项目', org: 'GitHub' },
              { year: '2023', title: 'UX Design Awards 提名', org: 'International Design Center' },
              { year: '2022', title: '站酷推荐设计师', org: 'ZCOOL 站酷' },
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
