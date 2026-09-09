import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from './app/router';
import '@styles/editorial.css';

/**
 * 应用入口文件
 * 挂载 React 应用并注入全局样式
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
