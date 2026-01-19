# Wasabi PingKak 個人網站專案

這是 Wasabi PingKak（山葵冰角）的個人網站專案，使用 React 19 + Vite 7 + Tailwind CSS 3 建立，部署於 GitHub Pages。

## 專案資訊

- **專案名稱**: Pingkak-Site
- **作者**: Wasabi PingKak（工程師 Vtuber）
- **網站連結**: https://wasabipingkak.github.io/Pingkak-Site/
- **專案定位**: 個人品牌網站，展示創作內容、頻道計劃、技術專案與聯絡資訊

## 技術棧

### 核心框架
- **React**: 19.2.1 - 前端 UI 框架
- **Vite**: 7.0.4 - 建構工具與開發伺服器
- **React Router DOM**: 7.10.1 - 路由管理（使用 HashRouter）
- **Tailwind CSS**: 3.4.17 - CSS 框架
- **React Icons**: 5.5.0 - 圖標庫

### 開發工具
- **ESLint**: 9.30.1 - 程式碼檢查
- **PostCSS**: 8.5.6 - CSS 處理器
- **gh-pages**: 6.3.0 - GitHub Pages 部署工具

## 專案目錄結構

```
Pingkak-Site/
├── .git/                        # Git 版本控制
├── .gitignore                   # Git 忽略設定
├── LICENSE                      # MIT 授權文件
├── README.md                    # 專案說明文件
├── claude.md                    # Claude Code 專案文件
│
├── index.html                   # HTML 入口模板
├── vite.config.js               # Vite 配置（base: '/Pingkak-Site/'）
├── tailwind.config.js           # Tailwind 配置（darkMode: 'class'）
├── postcss.config.js            # PostCSS 配置
├── eslint.config.js             # ESLint 配置
├── package.json                 # 專案依賴與腳本
├── package-lock.json            # 依賴鎖定文件
│
├── public/                      # 靜態資源目錄
│   └── assets/                  # 圖片資源
│       ├── logo.png             # 網站 Logo
│       ├── site_icon.png        # 網站圖標
│       ├── hero-visual.jpg      # 首頁主視覺
│       ├── og-cover.jpg         # Open Graph 封面
│       ├── LOGO_complete.png    # 完整 Logo 設計
│       ├── draft.jpg            # 角色草圖
│       ├── model-front.png      # 三視圖（正面）
│       ├── model-back.png       # 三視圖（背面）
│       ├── artist-saltcan.jpg   # 繪師照片
│       ├── rigger-zelo.jpg      # 建模師照片
│       ├── logo-berrysorbet.jpg # Logo 設計師照片
│       └── marshmallow-icon.jpg # 棉花糖圖標
│
└── src/                         # 原始碼目錄
    ├── main.jsx                 # React 應用入口
    ├── App.jsx                  # 應用主元件（路由配置）
    ├── index.css                # 全域樣式（Tailwind 引入）
    │
    ├── components/              # React 元件庫
    │   ├── layouts/
    │   │   └── MainLayout.jsx   # 主要佈局元件
    │   │
    │   ├── Header.jsx           # 導航欄（含自動隱藏功能）
    │   ├── Hero.jsx             # 首頁英雄區塊
    │   ├── Footer.jsx           # 頁尾元件
    │   ├── SocialLinks.jsx      # 社群連結元件
    │   ├── ScrollToTopButton.jsx # 回到頂部按鈕
    │   │
    │   ├── FeaturedProjects.jsx # 精選專案展示區塊
    │   ├── GitHubRepoCard.jsx   # GitHub 專案卡片
    │   │
    │   ├── CreatorCard.jsx      # 創作者卡片元件
    │   ├── CreatorCredits.jsx   # 創作者致謝區塊
    │   │
    │   ├── PlanItemCard.jsx     # 計劃項目卡片
    │   └── PlanSectionSidebar.jsx # 計劃側邊欄
    │
    └── pages/                   # 頁面元件
        ├── Home.jsx             # 首頁
        ├── CreatorCreditsPage.jsx # 設計師介紹頁
        ├── PlanPage.jsx         # 頻道計劃頁
        └── ContactPage.jsx      # 聯絡頁面
```

## 開發指令

```bash
# 安裝依賴
npm install

# 啟動開發伺服器（http://localhost:5173）
npm run dev

# 建立正式版本（輸出至 dist/）
npm run build

# 預覽建立後的版本
npm run preview

# 執行 ESLint 檢查
npm run lint

# 部署至 GitHub Pages（推送到 gh-pages 分支）
npm run deploy
```

## 網站架構

### 路由配置（HashRouter）
- `/` → Home（首頁）
- `/creator-credits` → CreatorCreditsPage（設計師介紹）
- `/plan` → PlanPage（頻道計劃）
- `/contact` → ContactPage（聯絡頁面）

### 主要頁面內容

#### 1. 首頁 (`/`)
- **Hero 區塊**: 個人介紹 + 角色主視覺 + 社群連結
- **精選專案區**: 6 個專案卡片
  - VTMap 頻道旅圖
  - GeoPingKak
  - LeetCode 冷藏庫
  - 音遊 Vtuber 名單
  - OBS 設定筆記
  - 冰角的委託指南
- **ScrollToTopButton**: 回到頂部按鈕

#### 2. 設計頁面 (`/creator-credits`)
- 三位設計師介紹（繪師、建模師、Logo 設計師）
- 設計資源展示（完整 Logo、角色草圖、三視圖）

#### 3. 頻道計劃頁面 (`/plan`)
- **已完成**: 初配信、初配信後日談
- **進行中**: LeetCode 解題冷藏庫、VTMap 頻道旅圖
- **籌備中**: GeoGuessr 教學與直播企劃

#### 4. 聯絡頁面 (`/contact`)
- 個人頭像、聯絡說明、社群連結

## 核心功能與設計決策

### 1. 深色模式支援
- 使用 Tailwind CSS 的 `darkMode: 'class'` 配置
- 切換狀態儲存於 `localStorage`
- 統一使用 `dark:` 前綴設定深色模式樣式
- 背景色統一: `dark:bg-gray-900/80`
- 文字顏色: 標題 `dark:text-white`，內文 `dark:text-gray-300`

### 2. 響應式設計 (RWD)
- 使用 Tailwind 斷點系統：`sm:`、`md:`、`lg:`
- 手機版: 漢堡選單
- 桌面版: 水平導航列
- 全站元件支援三種尺寸（手機、平板、桌面）

### 3. Header 自動隱藏
- 向下捲動時淡出（`opacity-0`）
- 向上捲動時淡入（`opacity-100`）
- 使用 `useEffect` + `scroll` 事件監聽
- 背景使用半透明模糊效果: `bg-white/80 dark:bg-gray-900/80 backdrop-blur`

### 4. 路由系統
- **重要**: 使用 **HashRouter** 而非 BrowserRouter
- 原因: GitHub Pages 不支援 SPA 的 BrowserRouter（會產生 404）
- Vite 配置 `base: '/Pingkak-Site/'` 確保資源路徑正確

### 5. 靜態資源路徑
- 使用 `${import.meta.env.BASE_URL}assets/...` 確保路徑正確
- BASE_URL 由 Vite 配置的 `base` 自動提供

## 樣式設計原則

### Tailwind CSS 使用規範
```css
/* 背景色 */
bg-white dark:bg-gray-900/80

/* 文字顏色 */
text-gray-900 dark:text-white          /* 標題 */
text-gray-700 dark:text-gray-300       /* 內文 */

/* 邊框 */
border-gray-200 dark:border-gray-700   /* 主要邊框 */
border-gray-300 dark:border-gray-800   /* 次要邊框 */

/* 過渡效果 */
transition-colors                       /* 顏色過渡 */
transition                             /* 全屬性過渡 */

/* 懸停效果 */
hover:shadow-lg                        /* 陰影 */
hover:bg-blue-700                      /* 背景色變化 */
```

### 元件設計模式
- 所有互動元件支援深色模式
- 使用 `transition` 確保平滑切換
- 卡片元件統一使用 `shadow-md` 與 `rounded-lg`
- 按鈕使用明確的 hover 狀態

## GitHub Pages 部署

### 配置要點
1. **Repository**: WasabiPingKak/Pingkak-Site
2. **部署分支**: `gh-pages`（由 `npm run deploy` 自動建立）
3. **Base URL**: `/Pingkak-Site/`（在 `vite.config.js` 設定）
4. **路由模式**: HashRouter（避免 404）

### 部署流程
```bash
# 1. 建立正式版本
npm run build

# 2. 部署至 gh-pages 分支
npm run deploy
```

`npm run deploy` 會自動：
- 將 `dist/` 資料夾推送到 `gh-pages` 分支
- GitHub Pages 自動偵測並部署

## 開發注意事項

### 新增功能時的檢查清單
- [ ] 是否支援深色模式？（檢查 `dark:` 樣式）
- [ ] 是否支援響應式設計？（檢查 `sm:`、`md:`、`lg:` 斷點）
- [ ] 靜態資源路徑是否正確？（使用 `import.meta.env.BASE_URL`）
- [ ] 是否使用 HashRouter 路由？
- [ ] 是否有適當的過渡效果？（`transition-colors`）

### 常見維護任務

#### 新增精選專案
編輯 `src/components/FeaturedProjects.jsx`：
```javascript
const projects = [
  {
    title: "🆕 新專案名稱",
    description: "專案簡介",
    link: "https://example.com",
  },
  // ...
];
```

#### 新增計劃項目
編輯 `src/pages/PlanPage.jsx`，在對應 section 中加入 `<PlanItemCard>` 元件。

#### 更新社群連結
編輯 `src/components/SocialLinks.jsx`。

#### 更新設計師資訊
編輯 `src/components/CreatorCredits.jsx` 中的 `creators` 陣列。

## 效能與可訪問性

### 效能優化
- Vite 的快速熱重載 (HMR)
- 生產環境自動程式碼分割與最小化
- React 19 的最新效能優化

### 可訪問性 (A11y)
- 使用語義化 HTML（`<header>`, `<nav>`, `<section>`, `<footer>`）
- 按鈕使用 `aria-label` 屬性
- 外部連結使用 `rel="noopener noreferrer"`
- 深色模式支援系統偏好設定

## 常見問題

### Q: 為什麼使用 HashRouter 而不是 BrowserRouter？
A: GitHub Pages 是靜態託管服務，無法處理 SPA 的動態路由。HashRouter 使用 URL hash（`#/path`）來管理路由，不需要伺服器端配置。

### Q: 如何修改部署路徑？
A: 修改 `vite.config.js` 中的 `base` 設定，然後重新執行 `npm run build` 與 `npm run deploy`。

### Q: 深色模式如何運作？
A: 使用 Tailwind 的 `class` 模式，透過在 `<html>` 標籤加上 `dark` class 來切換。設定儲存在 localStorage，頁面載入時自動套用。

### Q: 如何本地測試生產環境版本？
A: 執行 `npm run build` 後，使用 `npm run preview` 啟動預覽伺服器。

## 聯絡資訊

- **YouTube**: [Wasabi PingKak](https://www.youtube.com/@WasabiPingKak)
- **Twitter/X**: [@wasabi_pingkak](https://twitter.com/wasabi_pingkak)
- **GitHub**: [WasabiPingKak](https://github.com/WasabiPingKak)
- **Email**: wasabipingkak@gmail.com

---

*最後更新: 2026-01-19*
