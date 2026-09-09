import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './layout';
import { HomePage } from '@pages/home';
import { PortfolioPage } from '@pages/portfolio';
import { SpecialProjectsListPage } from '@pages/special-projects';
import { SpecialProjectDetailPage } from '@pages/special-project-detail';
import { AboutPage } from '@pages/about';
import { ContactPage } from '@pages/contact';

/**
 * 路由配置表
 * 所有页面路由在此注册
 */
const router = createHashRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'portfolio', element: <PortfolioPage /> },
        { path: 'special-projects', element: <SpecialProjectsListPage /> },
        { path: 'special-projects/:id', element: <SpecialProjectDetailPage /> },
        { path: 'about', element: <AboutPage /> },
        { path: 'contact', element: <ContactPage /> },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ],
  {
    basename: '/',
  }
);

/**
 * 404 页面
 */
function NotFoundPage(): React.ReactElement {
  return (
    <div className="section-shell empty-page">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <p className="text-xl text-text-secondary mb-8">页面未找到</p>
      <a
        href={import.meta.env.BASE_URL}
        className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors"
      >
        返回首页
      </a>
    </div>
  );
}

/**
 * 路由提供者组件
 * 在应用根组件中使用
 */
export const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};
