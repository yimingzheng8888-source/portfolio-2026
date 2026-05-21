import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '@components/common/Navbar';

/**
 * 全局布局组件
 * - 包含 Navbar (顶部固定)
 * - 包含 Footer (页尾)
 * - 主内容区使用 <Outlet />
 * - 页面切换时平滑滚动到顶部
 */
export const Layout: React.FC = () => {
  const location = useLocation();

  // 页面切换时滚动到顶部
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* 主内容区 - 为固定导航栏留出空间 */}
      <main className="flex-1 pt-16 md:pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-bg-dark text-text-inverse py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 品牌信息 */}
            <div>
              <h3 className="text-xl font-bold mb-4 tracking-wider">PORTFOLIO</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                专注于创造有影响力的设计作品，
                <br />
                用视觉语言讲述品牌故事。
              </p>
            </div>

            {/* 快速链接 */}
            <div>
              <h4 className="font-semibold mb-4">快速链接</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/portfolio-2026/portfolio" className="text-text-muted hover:text-accent text-sm transition-colors">
                    作品集
                  </a>
                </li>
                <li>
                  <a href="/portfolio-2026/special-projects" className="text-text-muted hover:text-accent text-sm transition-colors">
                    特别项目
                  </a>
                </li>
                <li>
                  <a href="/portfolio-2026/about" className="text-text-muted hover:text-accent text-sm transition-colors">
                    关于我
                  </a>
                </li>
                <li>
                  <a href="/portfolio-2026/contact" className="text-text-muted hover:text-accent text-sm transition-colors">
                    联系我
                  </a>
                </li>
              </ul>
            </div>

            {/* 联系方式 */}
            <div>
              <h4 className="font-semibold mb-4">联系方式</h4>
              <ul className="space-y-2 text-sm text-text-muted">
                <li>邮箱: hello@portfolio.design</li>
                <li>电话: +86 138 0000 0000</li>
                <li>地址: 中国 · 上海</li>
              </ul>
            </div>
          </div>

          {/* 版权信息 */}
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-text-muted text-sm">
              © 2026 PORTFOLIO. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
