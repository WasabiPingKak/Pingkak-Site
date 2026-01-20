# SEO 優化產品需求文件 (PRD)

**專案名稱**：Pingkak-Site SEO 優化計畫
**版本**：v1.0
**建立日期**：2026-01-20
**負責人**：Wasabi PingKak

---

## 📋 目錄

1. [專案概述](#專案概述)
2. [目標與成效指標](#目標與成效指標)
3. [技術面優化](#技術面優化)
4. [內容優化](#內容優化)
5. [實作優先級](#實作優先級)
6. [驗證與測試](#驗證與測試)

---

## 專案概述

### 背景

山葵冰角 (Wasabi PingKak) 個人網站目前已具備基本的社群媒體分享功能（Open Graph、Twitter Card），但在搜尋引擎優化（SEO）方面仍有大幅改善空間。本專案旨在透過技術面與內容面的全面優化，提升網站在搜尋引擎的可見度與排名。

### 網站定位

- **核心定位**：軟體工程 × 文件創作
- **目標受眾**：VTuber 愛好者、技術社群、潛在合作夥伴、繁中社群
- **主要內容**：個人作品展示、頻道活動規劃、技術教學、創作整理

### SEO 關鍵字策略

**主要關鍵字**：
- VTuber、台灣 VTuber、工程師 VTuber
- 軟體工程創作、技術型 VTuber

**長尾關鍵字**：
- LeetCode 解題教學、OBS 設定筆記
- 音游 VTuber、程式設計 VTuber
- GeoPingKak、VTMap 頻道旅圖

**品牌關鍵字**：
- 山葵冰角、Wasabi PingKak

---

## 目標與成效指標

### 核心目標

1. **提升 Google 搜尋可見度**（台灣地區為主）
2. **優化社群媒體分享效果**（Twitter、Discord、YouTube）
3. **增強內容可發現性**（讓目標受眾能找到專案與教學內容）
4. **建立品牌權威性**（在「技術型 VTuber」領域）

### 成效指標 (KPI)

**短期目標（1-3 個月）**：
- Google Search Console 收錄 4 個主要頁面
- 平均點擊率（CTR）> 2%
- 搜尋曝光次數增加 50%

**中期目標（3-6 個月）**：
- 品牌關鍵字「山葵冰角」進入 Google 首頁
- 自然搜尋流量佔比 > 20%
- 社群分享的預覽卡點擊率提升 30%

---

## 技術面優化

### P0 優先級（必須立即完成）

#### 1. 修復基礎 HTML Meta 標籤

**現況問題**：
- ❌ `<html lang="en">` 語言設定錯誤（應為繁體中文）
- ❌ 缺少標準 `<meta name="description">` 標籤
- ❌ 缺少 `<meta name="keywords">` 標籤
- ❌ 缺少 `<meta name="author">` 標籤

**改善方案**：
```html
<!-- index.html 修改 -->
<html lang="zh-TW">

<!-- 新增標準 meta 標籤 -->
<meta name="description" content="山葵冰角 Wasabi PingKak - 軟體工程 × 文件創作｜喜歡做整理與教學的工程師 VTuber，專注於技術分享、LeetCode 解題、OBS 設定教學與創作整理。">
<meta name="keywords" content="VTuber, 台灣VTuber, 工程師VTuber, 程式設計, LeetCode, OBS教學, GeoPingKak, 山葵冰角, Wasabi PingKak">
<meta name="author" content="Wasabi PingKak (山葵冰角)">
```

**技術要點**：
- 描述文字限制在 150-160 字元內
- 關鍵字使用逗號分隔，避免過度堆砌
- 確保所有描述都精準反映網站內容

---

#### 2. 建立動態 Meta 標籤系統（解決 SPA SEO 問題）

**現況問題**：
- ❌ 所有路由共用同一組 title 和 meta 標籤
- ❌ 搜尋引擎無法區分不同頁面的內容主題
- ❌ 社群分享連結時，所有頁面顯示相同預覽

**改善方案**：
使用 `react-helmet-async` 套件為每個頁面設定獨立的 meta 標籤。

**套件安裝**：
```bash
npm install react-helmet-async
```

**實作步驟**：

1. **在 `App.jsx` 加入 HelmetProvider**：
```jsx
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <HashRouter>
        {/* 現有路由 */}
      </HashRouter>
    </HelmetProvider>
  );
}
```

2. **為每個頁面元件加入 Helmet 配置**：

**首頁 (Home.jsx)**：
```jsx
import { Helmet } from 'react-helmet-async';

function Home() {
  return (
    <>
      <Helmet>
        <title>山葵冰角 Wasabi PingKak - 軟體工程 × 文件創作</title>
        <meta name="description" content="喜歡做整理與教學的工程師 VTuber，這裡整理了我的創作專案、頻道活動與技術筆記。包含 GeoPingKak、VTMap、LeetCode 解題與 OBS 設定教學。" />
        <meta property="og:title" content="山葵冰角 Wasabi PingKak - 軟體工程 × 文件創作" />
        <meta property="og:description" content="喜歡做整理與教學的工程師 VTuber，這裡整理了我的創作專案、頻道活動與技術筆記。" />
        <meta property="og:url" content="https://wasabipingkak.github.io/Pingkak-Site/" />
      </Helmet>
      {/* 現有內容 */}
    </>
  );
}
```

**頻道計畫頁 (PlanPage.jsx)**：
```jsx
<Helmet>
  <title>頻道活動計畫 - 山葵冰角 Wasabi PingKak</title>
  <meta name="description" content="查看山葵冰角的頻道活動規劃與創作歷程，包含 GeoPingKak 地理探索、VTMap 頻道旅圖、LeetCode 解題冷藏庫等進行中與已完成的專案。" />
  <meta property="og:title" content="頻道活動計畫 - 山葵冰角" />
  <meta property="og:description" content="查看山葵冰角的頻道活動規劃與創作歷程" />
</Helmet>
```

**設計頁 (CreatorCreditsPage.jsx)**：
```jsx
<Helmet>
  <title>委託設計名單 - 山葵冰角 Wasabi PingKak</title>
  <meta name="description" content="感謝為山葵冰角創作形象的設計團隊：繪師 鹽can、建模師 李安瑟羅Zelo、LOGO 設計 莓果雪酪。這裡提供 LOGO 與標準字的下載資源。" />
  <meta property="og:title" content="委託設計名單 - 山葵冰角" />
  <meta property="og:description" content="感謝為山葵冰角創作形象的設計團隊" />
</Helmet>
```

**聯絡頁 (ContactPage.jsx)**：
```jsx
<Helmet>
  <title>聯絡方式 - 山葵冰角 Wasabi PingKak</title>
  <meta name="description" content="歡迎聯絡山葵冰角進行交流、合作邀約或工商洽談。可透過 Twitter、Discord、Email 或 Marshmallow 聯繫。" />
  <meta property="og:title" content="聯絡方式 - 山葵冰角" />
  <meta property="og:description" content="歡迎聯絡山葵冰角進行交流與合作洽談" />
</Helmet>
```

**技術要點**：
- 每個頁面的 title 格式：`頁面名稱 - 山葵冰角 Wasabi PingKak`
- description 需包含該頁面的核心內容關鍵字
- Open Graph 標籤也需同步更新，確保社群分享正確

---

#### 3. 建立 robots.txt

**現況問題**：
- ❌ 缺少 `robots.txt` 檔案
- ❌ 無法控制搜尋引擎爬蟲行為
- ❌ 無法指引 sitemap 位置

**改善方案**：
在 `public/` 目錄建立 `robots.txt` 檔案。

**檔案內容**：
```txt
# Pingkak-Site robots.txt
User-agent: *
Allow: /

# Sitemap 位置
Sitemap: https://wasabipingkak.github.io/Pingkak-Site/sitemap.xml

# 阻擋不必要的資源
Disallow: /node_modules/
Disallow: /*.json$
```

**檔案位置**：`/public/robots.txt`

**技術要點**：
- 允許所有搜尋引擎爬取（`User-agent: *` + `Allow: /`）
- 明確指出 sitemap 位置，加速索引
- 阻擋不必要的開發資源（node_modules、設定檔）

---

#### 4. 產生 sitemap.xml

**現況問題**：
- ❌ 缺少 `sitemap.xml` 檔案
- ❌ 搜尋引擎無法完整發現所有頁面
- ❌ 無法告知搜尋引擎頁面的更新頻率與優先級

**改善方案**：
手動建立 `sitemap.xml`（靜態網站，頁面數量固定）。

**檔案內容**：
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <!-- 首頁 -->
  <url>
    <loc>https://wasabipingkak.github.io/Pingkak-Site/</loc>
    <lastmod>2026-01-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- 頻道計畫頁 -->
  <url>
    <loc>https://wasabipingkak.github.io/Pingkak-Site/#/plan</loc>
    <lastmod>2026-01-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- 設計頁 -->
  <url>
    <loc>https://wasabipingkak.github.io/Pingkak-Site/#/creator-credits</loc>
    <lastmod>2026-01-20</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>

  <!-- 聯絡頁 -->
  <url>
    <loc>https://wasabipingkak.github.io/Pingkak-Site/#/contact</loc>
    <lastmod>2026-01-20</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>

</urlset>
```

**檔案位置**：`/public/sitemap.xml`

**技術要點**：
- 使用 HashRouter 的完整 URL 格式（包含 `#/`）
- `priority` 數值：首頁 1.0、頻道計畫 0.8、其他頁面 0.5-0.6
- `changefreq` 依實際更新頻率設定：
  - 首頁：weekly（經常更新專案連結）
  - 頻道計畫：monthly（定期新增活動）
  - 設計與聯絡：yearly（較少變動）
- `lastmod` 更新時間應在每次內容變更後手動更新

**維護注意**：
- 每次新增頁面或重大更新時，需手動更新此檔案
- 可考慮未來使用自動化腳本生成（如有需要）

---

#### 5. 加入結構化資料（Schema.org JSON-LD）

**現況問題**：
- ❌ 缺少結構化資料
- ❌ Google 無法顯示豐富摘要（Rich Snippets）
- ❌ 無法在搜尋結果中展示個人資訊卡片

**改善方案**：
在 `index.html` 加入 JSON-LD 格式的結構化資料。

**Schema 類型選擇**：
- **Person Schema**：標示個人身份（VTuber、創作者）
- **ProfilePage Schema**：標示這是個人檔案頁面
- **WebSite Schema**：標示網站資訊

**實作程式碼**：

在 `index.html` 的 `<head>` 區段加入以下 JSON-LD：

```html
<!-- 結構化資料：Person + ProfilePage -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "山葵冰角",
  "alternateName": "Wasabi PingKak",
  "description": "軟體工程 × 文件創作｜喜歡做整理與教學的工程師 VTuber",
  "url": "https://wasabipingkak.github.io/Pingkak-Site/",
  "image": "https://wasabipingkak.github.io/Pingkak-Site/assets/og-cover.jpg",
  "jobTitle": "VTuber, Software Engineer",
  "sameAs": [
    "https://www.youtube.com/@WasabiPingKak",
    "https://twitter.com/WasabiPingKak",
    "https://github.com/WasabiPingKak"
  ],
  "knowsAbout": [
    "軟體工程",
    "程式設計",
    "VTuber",
    "LeetCode",
    "OBS 設定",
    "技術教學"
  ],
  "mainEntityOfPage": {
    "@type": "ProfilePage",
    "name": "山葵冰角個人網站"
  }
}
</script>

<!-- 結構化資料：WebSite -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "山葵冰角 Wasabi PingKak",
  "alternateName": "Pingkak Site",
  "url": "https://wasabipingkak.github.io/Pingkak-Site/",
  "description": "軟體工程 × 文件創作｜這裡是冰角的創作整理基地",
  "inLanguage": "zh-TW",
  "author": {
    "@type": "Person",
    "name": "山葵冰角",
    "alternateName": "Wasabi PingKak"
  }
}
</script>
```

**技術要點**：
- 使用 JSON-LD 格式（Google 推薦）
- `sameAs` 陣列包含所有官方社群媒體連結
- `knowsAbout` 列出專業領域關鍵字
- 圖片使用現有的 `og-cover.jpg`

**驗證方法**：
完成後使用 [Google Rich Results Test](https://search.google.com/test/rich-results) 驗證是否正確。

---

### P1 優先級（次要重要）

#### 6. 優化圖片 SEO

**現況問題**：
- ⚠️ 部分圖片缺少 `alt` 屬性
- ⚠️ 現有 `alt` 文字過於簡略或重複

**改善方案**：
為所有圖片加入描述性的 `alt` 文字，特別是：

**首頁專案卡片圖片**（位於 `Hero.jsx` 或各卡片元件）：
- GeoPingKak：`alt="GeoPingKak 地理探索專案 - 結合地理知識與互動體驗的創作"`
- VTMap：`alt="VTMap 頻道旅圖 - 山葵冰角的頻道活動與創作歷程視覺化"`
- LeetCode：`alt="LeetCode 解題冷藏庫 - 程式設計題目解析與教學"`

**個人形象圖片**（首頁、聯絡頁）：
- `alt="山葵冰角 Wasabi PingKak - 工程師 VTuber 角色立繪"`

**設計團隊圖片**（CreatorCreditsPage.jsx）：
- LOGO 圖片：`alt="山葵冰角 LOGO 標準字設計"`
- 三視圖：`alt="山葵冰角角色三視圖設定"`

**技術要點**：
- `alt` 文字應描述圖片內容與用途
- 避免使用「圖片」、「照片」等贅字
- 包含相關關鍵字但不過度堆砌
- 裝飾性圖片可使用空白 `alt=""`

---

#### 7. 優化 Open Graph 圖片

**現況評估**：
- ✅ 已有 `og:image` 設定
- ⚠️ 缺少圖片尺寸資訊（建議加入）

**改善方案**：
加入圖片尺寸標籤，確保社群平台正確顯示。

```html
<meta property="og:image" content="https://wasabipingkak.github.io/Pingkak-Site/assets/og-cover.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="山葵冰角 Wasabi PingKak - 軟體工程 × 文件創作" />
```

**技術要點**：
- Open Graph 圖片建議尺寸：1200x630 px
- 加入 `og:image:alt` 提升可訪問性
- 若現有圖片尺寸不符，可考慮重新製作（非必須）

---

#### 8. 加入 Canonical URL

**現況問題**：
- ❌ 缺少 canonical URL 標籤
- ⚠️ 可能有重複內容問題（雖然是 SPA，風險較低）

**改善方案**：
在每個頁面的 Helmet 中加入 canonical URL。

**首頁範例**：
```jsx
<Helmet>
  <link rel="canonical" href="https://wasabipingkak.github.io/Pingkak-Site/" />
</Helmet>
```

**其他頁面**：
```jsx
// 頻道計畫頁
<link rel="canonical" href="https://wasabipingkak.github.io/Pingkak-Site/#/plan" />

// 設計頁
<link rel="canonical" href="https://wasabipingkak.github.io/Pingkak-Site/#/creator-credits" />

// 聯絡頁
<link rel="canonical" href="https://wasabipingkak.github.io/Pingkak-Site/#/contact" />
```

**技術要點**：
- 每個頁面只能有一個 canonical URL
- URL 必須是絕對路徑（包含 https://）
- 使用 HashRouter 的完整 URL 格式

---

### P2 優先級（可後續追加）

#### 9. 語意化 HTML 優化

**改善方向**：
- 確保所有頁面使用正確的標題階層（H1 > H2 > H3）
- 使用語意化標籤（`<article>`, `<section>`, `<nav>`, `<aside>`）
- 為互動元素加入適當的 ARIA 標籤

**技術要點**：
- 每個頁面只能有一個 H1
- 標題階層不可跳級（不能從 H1 直接跳到 H3）
- 已存在的文案不可更動，只調整 HTML 標籤

---

#### 10. 效能優化（Core Web Vitals）

**改善方向**：
- 圖片延遲載入（lazy loading）
- 使用 WebP 格式圖片（若適用）
- 優化 Vite 打包設定（code splitting）

**技術要點**：
- 使用 `<img loading="lazy" />`
- 監控 Lighthouse 評分
- 目標：LCP < 2.5s, FID < 100ms, CLS < 0.1

---

## 內容優化

### P0 優先級（必須立即完成）

#### 1. 優化頁面標題階層

**現況問題**：
- ⚠️ 部分頁面可能缺少明確的 H1 標題
- ⚠️ 標題階層可能不符合 SEO 最佳實踐

**改善方案**：
檢查並優化每個頁面的標題結構，確保：

**首頁 (Home.jsx)**：
- H1：「山葵冰角 Wasabi PingKak」（主標題）
- H2：各區塊標題（如「精選專案」、「社群連結」）
- H3：專案卡片標題

**頻道計畫頁 (PlanPage.jsx)**：
- H1：「頻道活動計畫」
- H2：「進行中」、「已完成」
- H3：各專案名稱（GeoPingKak、VTMap 等）

**設計頁 (CreatorCreditsPage.jsx)**：
- H1：「委託設計名單」
- H2：各設計師類別（繪師、建模師、LOGO 設計）

**聯絡頁 (ContactPage.jsx)**：
- H1：「聯絡方式」
- H2：聯絡說明、社群連結

**技術要點**：
- 每個頁面只能有一個 H1
- 階層必須連續（H1 → H2 → H3）
- 不改動現有文案，只調整 HTML 標籤

---

#### 2. 優化內部連結

**現況問題**：
- ⚠️ 首頁專案卡片的連結多為外部連結
- ⚠️ 缺少指向其他內部頁面的描述性連結

**改善方案**：
在適當位置加入指向其他內部頁面的連結，並使用描述性錨點文字。

**首頁範例**：
在個人介紹區段加入：
- 「查看完整的【頻道活動計畫】」（連結到 `/plan`）
- 「瞭解更多【設計團隊介紹】」（連結到 `/creator-credits`）
- 「歡迎【聯絡我】進行合作」（連結到 `/contact`）

**技術要點**：
- 錨點文字應具描述性，避免使用「點此」、「這裡」
- 使用 React Router 的 `<Link>` 元件
- 避免過度連結（每段落 1-2 個即可）

**限制**：
- 不可更動現有文案
- 只在「補充說明區塊」或「頁尾」加入新的引導文字與連結

---

#### 3. 優化圖片 alt 屬性（與技術面重疊）

參見「技術面優化 > P1 優先級 > 6. 優化圖片 SEO」。

---

### P1 優先級（次要重要）

#### 4. 加入麵包屑導航（Breadcrumb）

**改善方案**：
在子頁面（`/plan`, `/creator-credits`, `/contact`）加入麵包屑導航。

**範例**：
```
首頁 > 頻道活動計畫
首頁 > 委託設計名單
首頁 > 聯絡方式
```

**技術要點**：
- 使用語意化標籤（`<nav aria-label="breadcrumb">`）
- 加入結構化資料（BreadcrumbList Schema）
- 提升使用者體驗與 SEO

**實作位置**：
在 `MainLayout.jsx` 或各頁面元件頂部。

---

#### 5. 優化社群連結的 title 屬性

**改善方案**：
為所有社群媒體連結加入 `title` 屬性。

**範例**：
```jsx
<a
  href="https://youtube.com/@WasabiPingKak"
  title="訂閱山葵冰角的 YouTube 頻道"
  aria-label="YouTube"
>
  <FaYoutube />
</a>
```

**技術要點**：
- `title` 提供滑鼠懸停提示
- `aria-label` 提供螢幕閱讀器輔助
- 兩者內容可略有不同（title 可更詳細）

---

## 實作優先級

### 第一階段：技術基礎建設（預估 2-3 小時）
1. ✅ 修復 HTML lang 屬性
2. ✅ 新增標準 meta 標籤（description, keywords, author）
3. ✅ 安裝並設定 react-helmet-async
4. ✅ 為 4 個主要頁面建立動態 meta 標籤
5. ✅ 建立 robots.txt
6. ✅ 建立 sitemap.xml
7. ✅ 加入結構化資料（JSON-LD）

### 第二階段：內容與圖片優化（預估 1-2 小時）
1. ✅ 優化所有圖片的 alt 屬性
2. ✅ 檢查並修正頁面標題階層
3. ✅ 加入 canonical URL
4. ✅ 優化 Open Graph 圖片標籤

### 第三階段：進階優化（可選）
1. 🔄 加入內部連結與引導文字
2. 🔄 實作麵包屑導航
3. 🔄 優化社群連結 title 屬性
4. 🔄 語意化 HTML 優化

---

## 驗證與測試

### 上線前檢查清單

#### SEO 基礎檢測
- [ ] Google Search Console 提交網站
- [ ] 提交 sitemap.xml
- [ ] 確認 robots.txt 可正常存取
- [ ] 檢查所有頁面的 meta description 是否正確

#### 結構化資料驗證
- [ ] 使用 [Google Rich Results Test](https://search.google.com/test/rich-results) 驗證 JSON-LD
- [ ] 確認 Person Schema 顯示正確
- [ ] 檢查是否有錯誤或警告

#### 社群分享測試
- [ ] 使用 [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) 測試 OG 標籤
- [ ] 使用 [Twitter Card Validator](https://cards-dev.twitter.com/validator) 測試 Twitter Card
- [ ] 確認預覽圖片與描述正確顯示

#### 頁面品質檢測
- [ ] 執行 Lighthouse SEO 檢測（目標 > 90 分）
- [ ] 檢查所有內部連結是否正常
- [ ] 測試響應式設計（手機、平板、桌面）

#### 可訪問性檢測
- [ ] 確認所有圖片都有 alt 屬性
- [ ] 檢查鍵盤導航是否正常
- [ ] 執行 Lighthouse Accessibility 檢測（目標 > 90 分）

---

## 維護與更新

### 定期維護項目

**每週**：
- 檢查 Google Search Console 的搜尋表現報告
- 監控爬蟲錯誤與覆蓋率

**每月**：
- 更新 sitemap.xml 的 lastmod 時間（若有內容變更）
- 檢查 Analytics 數據，分析熱門頁面與關鍵字

**每季**：
- 執行完整的 SEO 檢測（Lighthouse、PageSpeed Insights）
- 檢視競品網站，調整 SEO 策略

### 內容更新指南

**當新增頁面時**：
1. 在該頁面元件加入 Helmet 配置
2. 更新 sitemap.xml 加入新 URL
3. 提交更新的 sitemap 到 Google Search Console

**當內容重大變更時**：
1. 更新該頁面的 meta description
2. 更新 sitemap.xml 的 lastmod 時間
3. 若關鍵字改變，調整 keywords meta 標籤

---

## 附錄

### 相關資源

**SEO 工具**：
- [Google Search Console](https://search.google.com/search-console)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Schema.org](https://schema.org/)

**社群分享測試**：
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

**效能測試**：
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

### 參考文件

- [SEO Starter Guide - Google](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [React Helmet Async 文件](https://github.com/staylor/react-helmet-async)
- [Schema.org Person](https://schema.org/Person)

---

**文件版本紀錄**：
- v1.0 (2026-01-20)：初始版本，包含完整技術面與內容優化方案
