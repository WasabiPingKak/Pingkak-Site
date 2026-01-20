# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website for Wasabi PingKak (VTuber), built with React 19 + Vite 7 + Tailwind CSS 3, deployed on GitHub Pages.

**Live site**: https://wasabipingkak.github.io/Pingkak-Site/

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Build for production (outputs to dist/)
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
npm run deploy       # Deploy to GitHub Pages (pushes dist/ to gh-pages branch)
```

## Directory Structure

```
├── public/
│   └── assets/                  # 靜態圖片資源
├── src/
│   ├── main.jsx                 # React 入口
│   ├── App.jsx                  # 路由配置 (HashRouter)
│   ├── index.css                # 全域樣式 (Tailwind)
│   ├── components/
│   │   ├── layouts/
│   │   │   └── MainLayout.jsx   # 主要佈局 (Header + Footer)
│   │   ├── Header.jsx           # 導航欄 (自動隱藏)
│   │   ├── Footer.jsx           # 頁尾
│   │   ├── Hero.jsx             # 首頁主區塊
│   │   ├── FeaturedProjects.jsx # 精選專案卡片
│   │   ├── GitHubRepoCard.jsx   # GitHub 專案卡片
│   │   ├── CreatorCard.jsx      # 創作者卡片
│   │   ├── CreatorCredits.jsx   # 設計師致謝區塊
│   │   ├── PlanItemCard.jsx     # 計劃項目卡片
│   │   ├── PlanSectionSidebar.jsx # 頻道計劃側邊導航 (IntersectionObserver)
│   │   ├── SocialLinks.jsx      # 社群連結
│   │   └── ScrollToTopButton.jsx
│   └── pages/
│       ├── Home.jsx             # 首頁
│       ├── CreatorCreditsPage.jsx # 設計師介紹
│       ├── PlanPage.jsx         # 頻道計劃
│       └── ContactPage.jsx      # 聯絡頁面
├── vite.config.js               # Vite 配置 (base: '/Pingkak-Site/')
├── tailwind.config.js           # Tailwind 配置 (darkMode: 'class')
└── eslint.config.js
```

## Architecture

### Routing (HashRouter)
Uses HashRouter (not BrowserRouter) because GitHub Pages cannot handle SPA routing. Routes are defined in `src/App.jsx`:
- `/` - Home page
- `/creator-credits` - Designer credits page
- `/plan` - Channel plans page
- `/contact` - Contact page

### Layout Structure
- `MainLayout.jsx` wraps all pages with Header and Footer
- Header auto-hides on scroll down, reappears on scroll up

### Key Configuration
- **Vite base path**: `/Pingkak-Site/` in `vite.config.js`
- **Dark mode**: Tailwind `class` mode in `tailwind.config.js`, state stored in localStorage

## Critical Development Notes

### Static Asset Paths
Always use `${import.meta.env.BASE_URL}assets/...` for static assets to ensure correct paths in production.

### Tailwind Dark Mode Conventions
```
Background: bg-white dark:bg-gray-900/80
Headings:   text-gray-900 dark:text-white
Body text:  text-gray-700 dark:text-gray-300
Borders:    border-gray-200 dark:border-gray-700
```

All new UI elements must support both light and dark modes with appropriate `dark:` variants.

### Responsive Design
Use Tailwind breakpoints (`sm:`, `md:`, `lg:`) for responsive layouts. Mobile uses hamburger menu.

## Common Edits

- **Add featured project**: Edit `projects` array in `src/components/FeaturedProjects.jsx`
- **Add plan item**: Add `<PlanItemCard>` in `src/pages/PlanPage.jsx`
  - Update `sectionMeta` array to include new items in sidebar navigation
  - Ensure item IDs match between `PlanItemCard` and `sectionMeta`
  - PlanPage displays items in newest-first order (最新在上)
- **Update social links**: Edit `src/components/SocialLinks.jsx`
- **Update designer info**: Edit `creators` array in `src/components/CreatorCredits.jsx`

## PlanPage Features

- **Sidebar Navigation** (`PlanSectionSidebar`): Fixed left sidebar on desktop (≥1280px) that tracks scroll position and highlights current section using IntersectionObserver
- **Smooth Scrolling**: Click sidebar links to smoothly scroll to sections (prevents hash routing conflicts with React Router)
- **Section Order**: In Progress (進行中) → Completed (已完成), newest items first within each section
