import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FadeIn } from '@components/animation/FadeIn';
import { Badge } from '@components/ui/Badge';
import { Button } from '@components/ui/Button';
import { specialProjects, getSpecialProjectById, getAdjacentProjects } from '@data/special-projects';
import { ArrowLeft, ArrowRight, Calendar, User, Wrench, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface LightboxState {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
}

export const SpecialProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [lightbox, setLightbox] = useState<LightboxState>({
    isOpen: false,
    images: [],
    currentIndex: 0,
  });

  // 根据 ID 获取项目数据
  const project = useMemo(() => {
    if (!id) return undefined;
    return getSpecialProjectById(id);
  }, [id]);

  // 获取相邻项目
  const adjacent = useMemo(() => {
    if (!id) return { prev: null, next: null };
    return getAdjacentProjects(id);
  }, [id]);

  // 滚动到顶部
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  // 处理键盘事件
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightbox.isOpen) return;
      if (e.key === 'Escape') setLightbox((prev) => ({ ...prev, isOpen: false }));
      if (e.key === 'ArrowLeft') {
        setLightbox((prev) => ({
          ...prev,
          currentIndex: prev.currentIndex > 0 ? prev.currentIndex - 1 : prev.images.length - 1,
        }));
      }
      if (e.key === 'ArrowRight') {
        setLightbox((prev) => ({
          ...prev,
          currentIndex: prev.currentIndex < prev.images.length - 1 ? prev.currentIndex + 1 : 0,
        }));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox.isOpen]);

  // 打开 Lightbox
  const openLightbox = (images: string[], index: number) => {
    setLightbox({ isOpen: true, images, currentIndex: index });
    document.body.style.overflow = 'hidden';
  };

  // 关闭 Lightbox
  const closeLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
    document.body.style.overflow = '';
  };

  // 404 状态
  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-200 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">项目未找到</h2>
          <p className="text-gray-600 mb-8">您访问的特别项目不存在或已被移除。</p>
          <Button variant="primary" href="/special-projects">
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回特别项目列表
          </Button>
        </div>
      </div>
    );
  }

  // 所有图片（封面 + 画廊 + 过程图）
  const allImages = [project.cover, ...project.gallery, ...project.processImages];

  const sectionClasses = 'prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-strong:text-gray-900';

  return (
    <div className="min-h-screen bg-white">
      {/* 返回按钮 */}
      <div className="sticky top-16 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3">
          <button
            onClick={() => navigate('/special-projects')}
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            返回特别项目
          </button>
        </div>
      </div>

      {/* 项目头部 */}
      <header className="pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeIn direction="up" delay={0}>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge variant="primary" size="md">
                {project.category}
              </Badge>
              {project.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline" size="sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {project.title}
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              {project.description}
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div className="flex flex-wrap gap-4 md:gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-500" />
                <span>{project.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-blue-500" />
                <span>{project.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-blue-500" />
                <span>角色：{project.role}</span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-blue-500" />
                <span>{project.tools.join(' · ')}</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </header>

      {/* 项目主图 */}
      <section className="mb-12 md:mb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn direction="up" delay={0}>
            <div
              className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-[#cccccc] cursor-zoom-in shadow-lg group"
              onClick={() => openLightbox(allImages, 0)}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-500">项目主图占位</span>
              </div>
              {!siteConfig.usePlaceholderImages && (
                <img
                  src={`${import.meta.env.BASE_URL}${project.cover.replace(/^\//, '')}`}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 内容区 */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* 项目背景 */}
          <FadeIn direction="up" delay={0}>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">01</span>
                项目背景
              </h2>
              <div className={sectionClasses}>
                <p>{project.sections.background}</p>
              </div>
            </div>
          </FadeIn>

          {/* 设计挑战 */}
          <FadeIn direction="up" delay={0.1}>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center text-sm font-bold">02</span>
                设计挑战
              </h2>
              <div className={sectionClasses}>
                <p>{project.sections.challenge}</p>
              </div>
            </div>
          </FadeIn>

          {/* 解决方案 */}
          <FadeIn direction="up" delay={0.2}>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm font-bold">03</span>
                解决方案
              </h2>
              <div className={sectionClasses}>
                <p>{project.sections.solution}</p>
              </div>
            </div>
          </FadeIn>

          {/* 成果展示 */}
          <FadeIn direction="up" delay={0.3}>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-bold">04</span>
                项目成果
              </h2>
              <div className={sectionClasses}>
                <p>{project.sections.result}</p>
              </div>
            </div>
          </FadeIn>

          {/* 画廊 */}
          {project.gallery.length > 0 && (
            <FadeIn direction="up" delay={0.1}>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">成果展示</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#cccccc] cursor-zoom-in group shadow-sm"
                      onClick={() => openLightbox(allImages, idx + 1)}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">展示图 {idx + 1}</span>
                      </div>
                      {!siteConfig.usePlaceholderImages && (
                        <img
                          src={`${import.meta.env.BASE_URL}${img.replace(/^\//, '')}`}
                          alt={`${project.title} 成果图 ${idx + 1}`}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      )}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}

          {/* 过程图 */}
          {project.processImages.length > 0 && (
            <FadeIn direction="up" delay={0.1}>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">设计过程</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.processImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#cccccc] cursor-zoom-in group shadow-sm"
                      onClick={() => openLightbox(allImages, idx + 1 + project.gallery.length)}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">过程图 {idx + 1}</span>
                      </div>
                      {!siteConfig.usePlaceholderImages && (
                        <img
                          src={`${import.meta.env.BASE_URL}${img.replace(/^\//, '')}`}
                          alt={`${project.title} 过程图 ${idx + 1}`}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      )}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}

          {/* 反思总结 */}
          <FadeIn direction="up" delay={0.1}>
            <div className="mb-12 bg-gray-50 rounded-2xl p-6 md:p-8 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-gray-900 mb-3">项目反思</h3>
              <p className="text-gray-600 leading-relaxed italic">
                这个项目让我深刻体会到，设计的力量不仅在于视觉美感，更在于解决真实问题的能力。
                每一个设计决策背后都应该有清晰的逻辑支撑，而最终的价值体现在对用户和社会的实际影响上。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 底部导航 */}
      <nav className="border-t border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8">
            {/* 上一个项目 */}
            <div className={`${adjacent.prev ? '' : 'invisible'}`}>
              {adjacent.prev && (
                <Link
                  to={`/special-projects/${adjacent.prev.id}`}
                  className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white transition-colors"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-white group-hover:bg-blue-50 text-gray-400 group-hover:text-blue-600 flex items-center justify-center transition-colors border border-gray-200">
                    <ChevronLeft className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500 mb-1">上一个项目</p>
                    <p className="font-semibold text-gray-900 truncate group-hover:text-blue-600 transition-colors">
                      {adjacent.prev.title}
                    </p>
                  </div>
                </Link>
              )}
            </div>

            {/* 返回列表 */}
            <div className="flex items-center justify-center">
              <Link
                to="/special-projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-gray-200 text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all"
              >
                查看全部项目
              </Link>
            </div>

            {/* 下一个项目 */}
            <div className={`${adjacent.next ? '' : 'invisible'} md:text-right`}>
              {adjacent.next && (
                <Link
                  to={`/special-projects/${adjacent.next.id}`}
                  className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white transition-colors md:flex-row-reverse"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-white group-hover:bg-blue-50 text-gray-400 group-hover:text-blue-600 flex items-center justify-center transition-colors border border-gray-200">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 md:text-right">
                    <p className="text-xs text-gray-500 mb-1">下一个项目</p>
                    <p className="font-semibold text-gray-900 truncate group-hover:text-blue-600 transition-colors">
                      {adjacent.next.title}
                    </p>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Lightbox 弹窗 */}
      {lightbox.isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* 关闭按钮 */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* 图片计数 */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium">
            {lightbox.currentIndex + 1} / {lightbox.images.length}
          </div>

          {/* 上一张 */}
          {lightbox.images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((prev) => ({
                  ...prev,
                  currentIndex: prev.currentIndex > 0 ? prev.currentIndex - 1 : prev.images.length - 1,
                }));
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* 图片 */}
          <div
            className="relative w-[90vw] max-w-6xl max-h-[85vh] aspect-[16/9] bg-[#cccccc] rounded-lg flex items-center justify-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-gray-500 text-lg">
              图片占位 {lightbox.currentIndex + 1}
            </span>
            {!siteConfig.usePlaceholderImages && (
              <img
                src={`${import.meta.env.BASE_URL}${lightbox.images[lightbox.currentIndex].replace(/^\//, '')}`}
                alt={`${project.title} 大图 ${lightbox.currentIndex + 1}`}
                className="absolute inset-0 w-full h-full object-contain bg-black"
              />
            )}
          </div>

          {/* 下一张 */}
          {lightbox.images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((prev) => ({
                  ...prev,
                  currentIndex: prev.currentIndex < prev.images.length - 1 ? prev.currentIndex + 1 : 0,
                }));
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default SpecialProjectDetailPage;
