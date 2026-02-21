# Wasabi PingKak 的個人網站

[![GitHub Pages Deploy](https://img.shields.io/github/deployments/WasabiPingKak/Pingkak-Site/github-pages?label=deploy)](https://wasabipingkak.github.io/Pingkak-Site/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

這是 Wasabi PingKak 的個人網站，使用 React 19 + Vite 7 + Tailwind CSS 3 製作，並部署在 GitHub Pages 上，作為介紹創作、頻道計劃與專案整理的平台。

👉 [網站連結](https://wasabipingkak.github.io/Pingkak-Site/)

<!--
TODO: 加入網站截圖
![網站預覽 - 淺色模式](docs/screenshot-light.png)
![網站預覽 - 深色模式](docs/screenshot-dark.png)
-->

---

## 🛠️ 技術棧

- **React** - 前端框架
- **Vite** - 建構工具
- **Tailwind CSS** - CSS 框架
- **React Router DOM** - 路由管理（HashRouter）
- **React Icons** - 圖標庫

---

## 🚀 本地開發與部署

### 安裝依賴
```bash
npm install
```

### 本地開發（啟動 dev server）
```bash
npm run dev
```

### 建立正式版（產生 dist/）
```bash
npm run build
```

### 預覽正式版
```bash
npm run preview
```

### 程式碼檢查
```bash
npm run lint
```

### 部署到 GitHub Pages
```bash
npm run deploy
```
> 這個指令會將 `dist/` 推送到 `gh-pages` 分支，對應 GitHub Pages 的靜態頁面來源。

---

## 📁 專案結構

```
├── public/
│   └── assets/              # 靜態資源（圖片、LOGO 等）
├── src/
│   ├── components/          # React 元件
│   │   ├── layouts/         # 佈局元件（MainLayout）
│   │   ├── Header.jsx       # 導航欄（含自動隱藏）
│   │   ├── Hero.jsx         # 首頁主區塊
│   │   ├── Footer.jsx       # 頁尾
│   │   ├── FeaturedProjects.jsx  # 精選專案卡片
│   │   ├── CreatorCard.jsx       # 創作者卡片
│   │   ├── CreatorCredits.jsx    # 設計師致謝
│   │   ├── PlanItemCard.jsx      # 計劃項目卡片
│   │   ├── PlanSectionSidebar.jsx # 頻道計劃側邊目錄導航
│   │   ├── GitHubRepoCard.jsx    # GitHub 專案卡片
│   │   ├── ScrollToTopButton.jsx # 回到頂部按鈕
│   │   ├── SocialLinks.jsx       # 社群連結
│   │   └── ...
│   ├── pages/               # 頁面元件
│   │   ├── Home.jsx         # 首頁
│   │   ├── CreatorCreditsPage.jsx  # 設計師介紹
│   │   ├── PlanPage.jsx     # 頻道計劃
│   │   └── ContactPage.jsx  # 聯絡頁面
│   ├── App.jsx              # 路由配置（HashRouter）
│   ├── main.jsx             # React 入口
│   └── index.css            # 全域樣式
├── index.html
├── vite.config.js           # Vite 配置（base: '/Pingkak-Site/'）
├── tailwind.config.js       # Tailwind 配置（darkMode: 'class'）
└── package.json
```

---

## 📄 授權

本專案採用 [MIT License](./LICENSE) 授權。
