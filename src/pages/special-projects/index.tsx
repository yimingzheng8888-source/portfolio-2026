import React from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '@components/animation/FadeIn';
import { SectionTitle } from '@components/ui/SectionTitle';
import { Badge } from '@components/ui/Badge';
import { Button } from '@components/ui/Button';
import { specialProjects } from '@data/special-projects';
import { ArrowRight, FlaskConical, Heart, Leaf, Code2 } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  '公益设计': <Heart className="w-5 h-5" />,
  '个人实验': <FlaskConical className="w-5 h-5" />,
  '品牌重塑': <Leaf className="w-5 h-5" />,
  '开源项目': <Code2 className="w-5 h-5" />,
};

const categoryColors: Record<string, string> = {
  '公益设计': 'bg-rose-50 text-rose-700 border-rose-200',
  '个人实验': 'bg-violet-50 text-violet-700 border-violet-200',
  '品牌重塑': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  '开源项目': 'bg-sky-50 text-sky-700 border-sky-200',
};

export const SpecialProjectsListPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* 页面标题 */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="特别项目"
            subtitle="深度案例研究 — 从问题发现到设计落地的完整过程记录"
            align="center"
            showLine
          />
          <FadeIn direction="up" delay={0.2}>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mt-6 leading-relaxed">
              与商业作品不同，特别项目更强调设计过程、研究方法与实验性探索。
              这里记录了我对设计边界的好奇与突破，以及用设计创造社会价值的尝试。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 项目列表 */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {specialProjects.map((project, index) => (
              <FadeIn key={project.id} direction="up" delay={0.1}>
                <article className="group">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* 封面图 */}
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <Link to={`/special-projects/${project.id}`} className="block relative overflow-hidden rounded-2xl shadow-lg aspect-[16/10] bg-[#cccccc]">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-gray-500 text-sm">项目封面占位</span>
                        </div>
                        {/* 悬停遮罩 */}
                        <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/40 transition-all duration-500 flex items-center justify-center">
                          <span className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-white font-semibold flex items-center gap-2">
                            查看详情 <ArrowRight className="w-5 h-5" />
                          </span>
                        </div>
                        {/* 分类标签 */}
                        <div className="absolute top-4 left-4">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border ${categoryColors[project.category] || 'bg-gray-100 text-gray-700 border-gray-200'}`}>
                            {categoryIcons[project.category]}
                            {project.category}
                          </span>
                        </div>
                      </Link>
                    </div>

                    {/* 内容 */}
                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          <span>{project.date}</span>
                          <span className="w-1 h-1 rounded-full bg-gray-300" />
                          <span>{project.client}</span>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          <Link to={`/special-projects/${project.id}`}>
                            {project.title}
                          </Link>
                        </h2>

                        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                          {project.shortDesc}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="outline" size="sm">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="pt-4">
                          <Button
                            variant="outline"
                            href={`/special-projects/${project.id}`}
                            className="group/btn"
                          >
                            阅读案例
                            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 底部 CTA */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up" delay={0}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              对我的商业项目感兴趣？
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              特别项目展示了设计思维与实验精神，商业作品则体现了落地能力与专业水准。
            </p>
            <Button variant="primary" size="lg" href="/portfolio">
              查看完整作品集
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default SpecialProjectsListPage;
