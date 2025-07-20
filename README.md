# Wasabi PingKak 的個人網站

這是 Wasabi PingKak 的個人網站，使用 React + Vite + Tailwind CSS 製作，並部署在 GitHub Pages 上，作為介紹創作、頻道計劃與專案整理的平台。

👉 [網站連結](https://wasabipingkak.github.io/Pingkak-Site/)

---

## 🛠️ 本地開發與部署

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

### 部署到 GitHub Pages
```bash
npm run deploy
```
> 這個指令會將 `dist/` 推送到 `gh-pages` 分支，對應 GitHub Pages 的靜態頁面來源。

---

## 📁 專案結構

```
├── public/                  # 靜態資源
├── src/
│   ├── components/          # 元件（卡片、Header、Footer 等）
│   ├── pages/               # 各個主頁面（首頁、聯絡、計劃頁等）
│   ├── App.jsx              # 應用入口
│   └── main.jsx             # Vite 初始化
├── index.html
├── vite.config.js
└── package.json
```

---

## 📌 注意事項

- Tailwind 深色模式採用 `class` 模式切換
- 背景統一使用 `dark:bg-gray-900/80`
- 已啟用自動隱藏 header、回頂按鈕、響應式設計

---
