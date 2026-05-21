# 🎨 PORTFOLIO-2026 — 个人作品集网站

> 一个为资深设计师打造的现代化个人作品集网站，采用 React 18 + Vite 5 + Tailwind CSS 3 + Framer Motion 技术栈构建，计划部署至 Gitee Pages 供 HR 展示。

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16.0-EF44A5?logo=framer)](https://www.framer.com/motion/)

---

## 📑 目录

- [项目概览](#-项目概览)
- [技术栈](#-技术栈)
- [功能特性](#-功能特性)
- [项目结构](#-项目结构)
- [快速开始](#-快速开始)
- [页面说明](#-页面说明)
- [核心组件](#-核心组件)
- [数据管理](#-数据管理)
- [响应式设计](#-响应式设计)
- [动画系统](#-动画系统)
- [部署指南](#-部署指南)
- [开发规范](#-开发规范)
- [工作包说明](#-工作包说明)
- [路线图](#-路线图)
- [许可证](#-许可证)

---

## 🌟 项目概览

本项目是一个面向 HR 和潜在客户展示的专业设计师作品集网站，包含完整的作品展示、技能介绍、客户评价、特别项目案例等功能模块。网站设计注重首屏视觉冲击力和交互体验，采用深色主题搭配毛玻璃效果，营造高端专业的视觉氛围。

### 设计亮点

- **打字机特效 Banner**：首屏动态标语逐字显示，6 秒循环切换
- **数据背书区**：悬浮卡片展示核心数据，数字递增动画增强说服力
- **作品矩阵**：精选作品网格展示，悬停浮现详情，支持爱心点赞交互
- **技能树**：左右分栏交互式技能展示，实时进度条动画
- **客户评价轮播**：自动播放 + 手动切换，悬停暂停
- **特别项目深度案例**：四段式叙事结构（背景/挑战/解决方案/成果）
- **Lightbox 画廊**：支持键盘导航、ESC 关闭的沉浸式图片查看

---

## 🛠 技术栈

### 核心框架

| 技术 | 版本 | 用途 |
|------|------|------|
| [React](https://react.dev/) | ^18.2.0 | UI 框架 |
| [React Router DOM](https://reactrouter.com/) | ^6.20.0 | 客户端路由管理 |
| [TypeScript](https://www.typescriptlang.org/) | ^5.3.0 | 类型安全 |
| [Vite](https://vitejs.dev/) | ^5.0.0 | 构建工具与开发服务器 |

### 样式与 UI

| 技术 | 版本 | 用途 |
|------|------|------|
| [Tailwind CSS](https://tailwindcss.com/) | ^3.3.0 | 原子化 CSS 框架 |
| [PostCSS](https://postcss.org/) | ^8.4.0 | CSS 后处理 |
| [Autoprefixer](https://github.com/postcss/autoprefixer) | ^10.4.0 | 浏览器前缀自动补全 |

### 动画与交互

| 技术 | 版本 | 用途 |
|------|------|------|
| [Framer Motion](https://www.framer.com/motion/) | ^10.16.0 | React 动画库，入场/切换/手势动画 |
| [Lucide React](https://lucide.dev/) | ^0.294.0 | 现代化图标库 |

### 代码质量

- **ESLint** + **Prettier**：代码规范与格式化
- **TypeScript 严格模式**：完整的类型检查
- **CSS 变量系统**：统一的设计令牌管理

---

## ✨ 功能特性

### 已完成模块

#### 首页 (Home)
- [x] **HeroBanner** — 全屏深色背景 + 打字机特效 + 粒子装饰 + 毛玻璃信息栏
- [x] **StatsBar** — 4 项核心数据展示（年经验/项目数/客户数/奖项数）+ CountUp 动画
- [x] **FeaturedWorks** — 6 个精选作品卡片 + 悬停交互 + 爱心点赞
- [x] **SkillsTree** — 8 项技能左右分栏交互 + 熟练度进度条
- [x] **Testimonials** — 6 条客户评价轮播 + 自动播放 + 手动切换

#### 作品集页 (Portfolio)
- [x] **分类筛选** — 全部/品牌设计/UI/UX/插画/动态设计，URL 状态双向同步
- [x] **作品网格** — 15 条作品数据，3/2/1 列响应式布局
- [x] **悬停动效** — 图片遮罩、标题浮现、分类标签、卡片上浮
- [x] **空状态处理** — 无作品时的友好提示

#### 特别项目 (Special Projects)
- [x] **列表页** — 4 个深度案例，交替图文布局
- [x] **详情页** — 四段式结构 + 成果画廊 + 设计过程展示
- [x] **Lightbox** — 图片放大查看，支持 ESC/方向键导航
- [x] **相邻导航** — 上一篇/下一篇/返回列表

#### 关于我 (About)
- [x] **个人简介** — 照片 + 三段式叙事
- [x] **数据统计** — 4 项核心指标 CountUp 动画
- [x] **时间轴** — 4 条工作经历 + 2 条教育背景
- [x] **技能标签云** — 20 个技能按设计/开发/工具分类
- [x] **获奖认证** — 6 项奖项卡片展示

#### 联系我 (Contact)
- [x] **联系信息** — 邮箱/电话/地址/工作时间
- [x] **社交链接** — GitHub/Twitter/Dribbble/LinkedIn
- [x] **联系表单** — 完整表单验证 + 提交状态反馈
- [x] **地图占位** — 预留地图集成区域

#### 全局系统
- [x] **响应式导航栏** — 滚动变色 + 当前页高亮 + 移动端抽屉菜单
- [x] **路由系统** — 6 条路由 + 404 页面 + 滚动复位
- [x] **动画系统** — FadeIn/Typewriter/CountUp 等可复用动画组件
- [x] **自定义 Hooks** — useInView / useMediaQuery / useScrollProgress

---

## 📁 项目结构

```
portfolio-2026/
├── public/                          # 静态资源
│   ├── images/
│   │   ├── hero/                    # 首屏背景图
│   │   ├── works/                   # 作品图片
│   │   │   ├── featured/            # 精选作品缩略图
│   │   │   └── grid/                # 作品集网格图
│   │   ├── skills/                  # 技能配图
│   │   ├── testimonials/            # 客户头像
│   │   └── special-projects/        # 特别项目图片
│   └── vite.svg                     # 站点图标
│
├── src/
│   ├── app/
│   │   ├── router.tsx               # 路由配置 (6 条路由 + 404)
│   │   └── layout.tsx               # 全局布局 (Navbar + Footer + Outlet)
│   │
│   ├── components/
│   │   ├── ui/                      # 基础 UI 组件
│   │   │   ├── Button.tsx           # 按钮 (4 变体 × 3 尺寸)
│   │   │   ├── Card.tsx             # 卡片 (4 级阴影 + 悬停动效)
│   │   │   ├── GlassCard.tsx        # 毛玻璃卡片
│   │   │   ├── Badge.tsx            # 标签 (5 种变体)
│   │   │   └── SectionTitle.tsx     # 区块标题 (3 种对齐)
│   │   │
│   │   ├── animation/               # 动画组件
│   │   │   ├── FadeIn.tsx           # 5 方向淡入动画
│   │   │   ├── Typewriter.tsx       # 打字机特效
│   │   │   └── CountUp.tsx          # 数字递增动画
│   │   │
│   │   ├── common/                  # 通用组件
│   │   │   ├── Navbar.tsx           # 响应式导航栏
│   │   │   └── MobileMenu.tsx       # 移动端抽屉菜单
│   │   │
│   │   ├── timeline/                # 时间轴组件
│   │   │   └── Timeline.tsx         # 通用时间轴 (工作/教育复用)
│   │   │
│   │   └── contact/                 # 联系表单组件
│   │       └── ContactForm.tsx      # 受控表单 + 完整验证
│   │
│   ├── pages/                       # 页面组件
│   │   ├── home/
│   │   │   ├── index.tsx            # 首页入口
│   │   │   └── sections/
│   │   │       ├── HeroBanner.tsx   # 首屏 Banner
│   │   │       ├── StatsBar.tsx     # 数据背书区
│   │   │       ├── FeaturedWorks.tsx # 精选作品
│   │   │       ├── SkillsTree.tsx   # 技能树
│   │   │       └── Testimonials.tsx # 客户评价
│   │   │
│   │   ├── portfolio/
│   │   │   └── index.tsx            # 作品集页 (筛选 + 网格)
│   │   │
│   │   ├── special-projects/
│   │   │   └── index.tsx            # 特别项目列表页
│   │   │
│   │   ├── special-project-detail/
│   │   │   └── index.tsx            # 特别项目详情页
│   │   │
│   │   ├── about/
│   │   │   └── index.tsx            # 关于我页
│   │   │
│   │   └── contact/
│   │       └── index.tsx            # 联系我页
│   │
│   ├── data/                        # 数据文件
│   │   ├── works.json               # 15 条作品数据
│   │   ├── skills.json              # 8 条技能数据
│   │   ├── testimonials.json        # 6 条评价数据
│   │   ├── special-projects.json    # 6 条特别项目数据
│   │   ├── about.ts                 # 关于我页面 Mock 数据
│   │   └── special-projects.ts      # 特别项目数据 + 工具函数
│   │
│   ├── types/                       # TypeScript 类型定义
│   │   ├── index.ts                 # 统一导出
│   │   ├── work.ts                  # 作品类型
│   │   ├── skill.ts                 # 技能类型
│   │   ├── testimonial.ts           # 评价类型
│   │   ├── skill-extended.ts        # 技能类型扩展
│   │   └── special-project.ts       # 特别项目类型
│   │
│   ├── hooks/                       # 自定义 Hooks
│   │   ├── useInView.ts             # IntersectionObserver 封装
│   │   ├── useMediaQuery.ts         # 响应式媒体查询
│   │   └── useScrollProgress.ts     # 页面滚动进度监听
│   │
│   ├── utils/                       # 工具函数
│   │   └── dataHelpers.ts           # 数据查询/筛选/搜索工具 (15 个函数)
│   │
│   ├── styles/                      # 全局样式
│   │   ├── variables.css            # CSS 变量系统
│   │   ├── global.css               # CSS Reset + 基础排版
│   │   └── animations.css           # 关键帧动画工具类
│   │
│   ├── main.tsx                     # React 应用入口
│   └── vite-env.d.ts               # Vite 类型声明
│
├── index.html                       # 应用入口 HTML
├── package.json                     # 项目依赖配置
├── vite.config.ts                   # Vite 构建配置
├── tsconfig.json                    # TypeScript 严格模式配置
├── tsconfig.node.json              # Node 环境 TS 配置
├── tailwind.config.js              # Tailwind 主题扩展
├── postcss.config.js               # PostCSS + Autoprefixer
├── .gitignore                      # Git 忽略规则
└── README.md                       # 项目说明文档
```

---

## 🚀 快速开始

### 环境要求

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 或 **yarn** >= 1.22.0

### 安装依赖

```bash
cd portfolio-2026
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:5173/portfolio-2026/` 查看效果。

### 构建生产版本

```bash
npm run build
```

构建产物输出至 `dist/` 目录。

### 预览生产构建

```bash
npm run preview
```

---

## 📄 页面说明

| 页面 | 路由 | 核心内容 |
|------|------|---------|
| **首页** | `/portfolio-2026/` | HeroBanner、StatsBar、FeaturedWorks、SkillsTree、Testimonials |
| **作品集** | `/portfolio-2026/portfolio` | 15 个作品分类筛选 + 网格展示 |
| **特别项目** | `/portfolio-2026/special-projects` | 4 个深度案例交替布局 |
| **项目详情** | `/portfolio-2026/special-projects/:id` | 四段式案例详情 + Lightbox 画廊 |
| **关于我** | `/portfolio-2026/about` | 简介、统计、时间轴、技能云、奖项 |
| **联系我** | `/portfolio-2026/contact` | 联系信息、社交链接、表单、地图占位 |
| **404** | `*` | 友好错误页面 |

> **注意**：路由已配置 `basename: '/portfolio-2026/'`，适配 Gitee Pages 子路径部署。

---

## 🧩 核心组件

### UI 组件

| 组件 | 路径 | 功能 |
|------|------|------|
| `Button` | `src/components/ui/Button.tsx` | 4 种变体(primary/secondary/outline/ghost) × 3 种尺寸，支持 Link/外部链接 |
| `Card` | `src/components/ui/Card.tsx` | 可点击卡片，4 级阴影，悬停上浮动效 |
| `GlassCard` | `src/components/ui/GlassCard.tsx` | 毛玻璃效果，可调透明度/模糊度/边框透明度 |
| `Badge` | `src/components/ui/Badge.tsx` | 5 种变体标签，2 种尺寸 |
| `SectionTitle` | `src/components/ui/SectionTitle.tsx` | 区块标题，支持左/中/右对齐 + 装饰线 |

### 动画组件

| 组件 | 路径 | 功能 |
|------|------|------|
| `FadeIn` | `src/components/animation/FadeIn.tsx` | 5 方向淡入动画，Framer Motion useInView 触发 |
| `Typewriter` | `src/components/animation/Typewriter.tsx` | 打字机特效，支持循环/光标样式/速度调节 |
| `CountUp` | `src/components/animation/CountUp.tsx` | 数字递增动画，easeOutQuart 缓动，进入视口触发 |

### 自定义 Hooks

| Hook | 路径 | 功能 |
|------|------|------|
| `useInView` | `src/hooks/useInView.ts` | IntersectionObserver 封装，支持 once/threshold |
| `useMediaQuery` | `src/hooks/useMediaQuery.ts` | 响应式媒体查询，含预设断点 |
| `useScrollProgress` | `src/hooks/useScrollProgress.ts` | 页面滚动进度监听 (0-1) |

---

## 💾 数据管理

### 数据文件

| 文件 | 记录数 | 说明 |
|------|--------|------|
| `src/data/works.json` | 15 条 | 作品数据，含 5 条精选 |
| `src/data/skills.json` | 8 条 | 技能数据，分设计/工具/软技能三类 |
| `src/data/testimonials.json` | 6 条 | 客户评价，关联不同项目 |
| `src/data/special-projects.json` | 6 条 | 特别项目，含公益/实验/开源/品牌重塑 |
| `src/data/about.ts` | - | 关于我页面 Mock 数据 |
| `src/data/special-projects.ts` | - | 特别项目数据 + 查询工具函数 |

### 数据工具函数

`src/utils/dataHelpers.ts` 提供 15 个工具函数：

```typescript
// 作品相关
getAllWorks()              // 获取全部作品
getFeaturedWorks()         // 获取精选作品
getWorksByCategory(cat)    // 按分类筛选
getAllCategories()         // 获取所有分类
getWorkById(id)            // 按 ID 获取单个作品
getWorksByYear(year)       // 按年份筛选
getAllWorkYears()          // 获取所有年份
getRelatedWorks(id, limit) // 获取相关作品
searchWorks(keyword)       // 关键词搜索

// 技能相关
getAllSkills()             // 获取全部技能
getSkillsByCategory(cat)   // 按分类筛选技能
getAllSkillCategories()    // 获取所有技能分类

// 评价相关
getAllTestimonials()       // 获取全部评价
getTestimonialsByProject(id) // 按项目获取评价

// 特别项目相关
getAllSpecialProjects()    // 获取全部特别项目
getSpecialProjectsByCategory(cat) // 按分类筛选
getAllSpecialProjectCategories()  // 获取所有分类
```

---

## 📱 响应式设计

### 断点说明

| 断点 | 范围 | Tailwind 前缀 | 布局变化 |
|------|------|--------------|---------|
| 移动端 | < 768px | 默认 | 单列堆叠，汉堡菜单，StatsBar 2×2 网格 |
| 平板端 | 768px - 1024px | `md:` | 2 列网格，完整导航，左右分栏 |
| 桌面端 | > 1024px | `lg:` | 3 列网格，完整导航，完整布局 |
| 大屏 | > 1280px | `xl:` | 更宽容器，更大气间距 |

### 响应式类名示例

```tsx
// 作品网格：移动端 1 列，平板 2 列，桌面 3 列
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// 导航栏：移动端隐藏，平板显示
<nav className="hidden md:flex">

// 字体大小：移动端小字号，桌面大字号
<h1 className="text-2xl md:text-4xl lg:text-5xl">
```

---

## 🎬 动画系统

### 动画参数汇总

| 动画 | 时长 | 缓动 | 延迟 | 触发条件 |
|------|------|------|------|---------|
| FadeIn 入场 | 0.6s | ease-out | 可配置 | 进入视口 |
| Typewriter 打字 | 80ms/字 | linear | - | 组件挂载 |
| CountUp 数字递增 | 2s | easeOutQuart | - | 进入视口 |
| Navbar 指示器 | spring | stiffness:380 damping:30 | - | 路由切换 |
| MobileMenu 抽屉 | spring | damping:25 stiffness:200 | - | 点击汉堡 |
| Card 悬停上浮 | 0.3s | ease | - | hover |
| Button active | 0.15s | ease | - | active |
| 粒子漂浮 | 10-20s | ease-in-out | 0-5s | 持续循环 |
| 轮播切换 | 0.4s | ease-in-out | - | 手动/自动 |
| 进度条填充 | 1s | ease-out | - | 标签激活 |
| Lightbox 打开 | 0.2s | ease | - | 点击 |

### 使用示例

```tsx
// FadeIn 动画
<FadeIn direction="up" delay={0.2} distance={30}>
  <h2>标题内容</h2>
</FadeIn>

// 打字机特效
<Typewriter text="你好，我是设计师" speed={100} loop />

// 数字递增
<CountUp end={150} duration={2} suffix="+" />
```

---

## 🚀 部署指南

### 部署到 Gitee Pages

1. **创建 Gitee 仓库**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://gitee.com/[username]/portfolio-2026.git
   git push -u origin master
   ```

2. **开启 Gitee Pages**
   - 进入仓库 → 服务 → Gitee Pages
   - 选择部署分支（master）
   - 部署目录选择 `dist/`
   - 点击「启动」

3. **访问地址**
   ```
   https://[username].gitee.io/portfolio-2026/
   ```

> **注意**：Vite 配置已预设 `base: '/portfolio-2026/'`，无需额外修改。

### 构建前检查清单

- [ ] `npm run build` 成功，无 TypeScript 类型错误
- [ ] `dist/` 目录生成，产物包含代码分割的 vendor 和 animation chunk
- [ ] 所有图片路径正确（当前使用占位图，需替换为真实资源）
- [ ] 路由 basename 与部署路径一致

---

## 📝 开发规范

### 文件命名

| 类型 | 命名规则 | 示例 |
|------|---------|------|
| React 组件 | PascalCase.tsx | `HeroBanner.tsx`, `GlassCard.tsx` |
| Hooks | camelCase.ts | `useInView.ts`, `useMediaQuery.ts` |
| 工具函数 | camelCase.ts | `dataHelpers.ts` |
| 类型定义 | PascalCase.ts | `Work.ts`, `Skill.ts` |
| 样式文件 | kebab-case.css | `variables.css`, `animations.css` |
| 数据文件 | kebab-case.json | `works.json`, `skills.json` |
| 页面目录 | kebab-case | `special-projects/`, `home/` |

### 代码格式

- **缩进**：2 个空格
- **引号**：单引号 (JS/TS), 双引号 (HTML/JSON)
- **分号**：必须
- **最大行宽**：100 字符
- **换行**：LF (Unix)

### 导入顺序

```typescript
// 1. React 内置
import React, { useState, useEffect } from 'react';

// 2. 第三方库
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// 3. 绝对路径别名 (@/)
import { Button } from '@components/ui/Button';
import { useInView } from '@hooks/useInView';

// 4. 相对路径 (同一目录)
import { helper } from './utils';
```

---

## 📦 工作包说明

本项目按模块化方式分 4 个工作包完成：

| 工作包 | 代号 | 内容 | 状态 |
|--------|------|------|------|
| **WP-01** | FOUNDATION | 基础架构与全局系统：项目初始化、样式系统、路由、导航栏、基础 UI 组件、动画基础、Hooks、类型定义 | ✅ 已完成 |
| **WP-02** | HOME-CORE | 首页核心模块：HeroBanner、StatsBar、FeaturedWorks、SkillsTree、Testimonials | ✅ 已完成 |
| **WP-03** | CONTENT-SYSTEM | 内容数据模块：4 个 JSON 数据文件、15 个工具函数、作品集页面、URL 状态同步 | ✅ 已完成 |
| **WP-04** | PAGES-DETAIL | 子页面与详情页：关于我、联系我、特别项目列表/详情、Timeline 组件、ContactForm 组件 | ✅ 已完成 |

### 合并顺序

```
WP-01 (基础架构) → WP-02 (首页核心) → WP-03 (内容模块) → WP-04 (子页面)
```

### 冲突处理原则

- 同一文件被多个工作包修改：以 WP 编号大的为准（后完成的覆盖先完成的）
- 组件重复定义：保留功能更完整的版本
- 样式冲突：使用更具体的选择器或 CSS Modules
- 路由冲突：统一在 `router.tsx` 中整合

---

## 🗺 路线图

### 当前状态

- [x] 基础架构搭建
- [x] 首页核心模块
- [x] 内容数据系统
- [x] 子页面与详情页
- [x] 响应式布局
- [x] 动画系统
- [x] 表单验证

### 待优化项

- [ ] **图片资源替换**：当前使用 `#cccccc` 灰色占位，需替换为真实图片
  - 作品图：`public/images/works/featured/` 和 `public/images/works/grid/`
  - 技能图：`public/images/skills/`
  - 头像：`public/images/testimonials/`
  - 特别项目：`public/images/special-projects/`

- [ ] **表单后端接入**：联系表单目前仅前端模拟提交，需接入真实邮件服务或后端 API

- [ ] **地图集成**：联系页面地图区域为占位，需接入高德/百度/Google Maps API

- [ ] **简历下载**：关于我页面「下载简历」按钮需接入真实 PDF 文件

- [ ] **图片懒加载**：配合 WP-01 的 Image 组件实现懒加载优化

- [ ] **筛选体验优化**：移动端分类筛选可考虑下拉选择器替代横向滚动

- [ ] **作品详情页**：当前点击作品跳转至作品集列表页，独立作品详情页待实现

---

## 📸 截图预览

> 以下为关键模块预览描述，实际截图将在部署后补充：

### 首页 HeroBanner
全屏深色背景，打字机特效标题逐字显示，20 个 CSS 粒子随机漂浮，底部毛玻璃信息栏展示核心标签。

### 数据背书区
悬浮于 HeroBanner 下方的白色卡片，4 个 CountUp 数字从 0 递增到目标值（8 年经验 / 150+ 项目 / 50+ 客户 / 12 奖项）。

### 精选作品网格
3 列网格布局，悬停时卡片上浮 8px，图片叠加层显示「了解详情」按钮，支持爱心点赞交互。

### 技能树
左侧 6 个技能标签，右侧详情面板，悬停切换时进度条从 0% 动画到目标熟练度。

### 特别项目详情
四段式叙事结构（背景/挑战/解决方案/成果），成果画廊支持 Lightbox 放大查看，键盘 ESC/方向键导航。

---

## 🤝 贡献指南

本项目为个人作品集，暂不开放外部贡献。如需参考或复用代码，请遵守以下规范：

1. 保留原始作者声明
2. 修改后请注明变更内容
3. 禁止用于商业用途（代码模板除外）

---

## 📄 许可证

[MIT](LICENSE) © 2026 [Your Name]

---

## 🙏 致谢

- [React](https://react.dev/) — UI 框架
- [Vite](https://vitejs.dev/) — 构建工具
- [Tailwind CSS](https://tailwindcss.com/) — 样式框架
- [Framer Motion](https://www.framer.com/motion/) — 动画引擎
- [Lucide](https://lucide.dev/) — 图标库

---

> **提示**：如需查看各工作包的详细制作文档，请参考项目根目录下的 `WP-01-制作文档.md` ~ `WP-04-制作文档.md` 以及 `统一文档要求规范.md`。

*Made with ❤️ by AI Assistant & Designer*
