# PRD：頻道活動計劃頁面更新

## 文檔資訊
- **建立日期**：2026-01-20
- **目標文件**：`src/pages/PlanPage.jsx`
- **變更範圍**：頻道活動計劃頁面內容與結構調整

---

## 更新概述

本次更新將對「頻道活動計劃」頁面進行三項主要變更：
1. **將 GeoPingKak 項目從「籌備中」升級為「進行中」狀態**，並移除舊的 GeoGuessr 相關籌備項目
2. **調整整個頁面的時序順序**，改為最新項目在上、最舊項目在下的呈現方式
3. **啟用側邊目錄導航 UI**，提供類似 HackMD 的目錄功能，方便訪客快速瀏覽與跳轉

---

## 變更一：GeoPingKak 項目更新

### 1.1 移除內容
從「籌備中 (Planned)」section 中移除以下兩個項目：
- ❌ **GeoGuessr 教學** (id: `planned-GeoGuessr-教學`)
- ❌ **GeoGuessr 直播企劃** (id: `planned-GeoGuessr-直播企劃`)

### 1.2 新增內容
在「進行中 (In Progress)」section 中新增 **GeoPingKak** 項目：

#### 基本資訊
- **標題**：`GeoPingKak`
- **ID**：`in-progress-GeoPingKak`
- **日程**：`2025-07-29 ～ （進行中）`

#### 項目說明文案
```
GeoPingKak

以每日固定題目為核心運作的 GeoGuessr 挑戰與內容系統。

GeoPingKak 是我目前頻道中主要使用的 GeoGuessr 題目產生與整理系統，用來支撐日常直播內容與觀眾互動。

系統每天固定產生多組 GeoGuessr Challenge 連結，涵蓋世界、台灣、日本三個區域，並各自提供不同難度設定。同一天的挑戰連結對所有玩家皆為相同題目，適合用於練習、對照與重玩。

我的 YouTube 直播內容會直接使用 GeoPingKak 當日產生的題目進行遊玩與講解，觀眾可以在直播當天或之後，透過相同的連結實際重玩該次內容，對照直播中的推理與判斷過程。

目前 GeoPingKak 已穩定運作，並成為我頻道內容更新與網站日常維護的核心基礎。
```

#### 外部連結
1. **網站連結**
   - URL: `https://geopingkak.web.app/`
   - 顯示文字: `🌍 GeoPingKak`

2. **GitHub 專案連結**
   - Repo: `WasabiPingKak/GeoPingKak`
   - 使用 `<GitHubRepoCard>` 組件
   - Title: `GeoPingKak`

#### 格式要求
- 對齊 **VTMap 頻道旅圖** 的卡片格式
- 包含以下結構：
  1. 專案說明段落（多個 `<p>` 標籤）
  2. 「網站」section (使用 `<h3 className="section-heading">`)
  3. 網站連結按鈕（使用與 VTMap 相同的藍色按鈕樣式）
  4. 「Github 專案主頁」section
  5. GitHub 專案卡片（使用 `<GitHubRepoCard>` 組件）

### 1.3 更新結果
完成後，「籌備中」section 將**不再有任何項目**（可以考慮暫時隱藏或移除整個 section）

---

## 變更二：調整頁面時序順序

### 2.1 Section 層級順序
將整個頁面的 section 順序調整為「最新在上、最舊在下」：

**調整前順序：**
1. 已完成 (Completed)
2. 進行中 (In Progress)
3. 籌備中 (Planned)

**調整後順序：**
1. 進行中 (In Progress) ← 最新、最活躍
2. 已完成 (Completed)
3. 籌備中 (Planned) ← 如果還有內容的話

### 2.2 「進行中」項目內部順序
調整「進行中」section 內的項目順序：

**調整前順序：**
1. LeetCode 解題冷藏庫
2. VTMap 頻道旅圖

**調整後順序：**
1. **GeoPingKak** (2025-07-29 ～) ← 新增，排最上
2. VTMap 頻道旅圖 (2025-04-06 ～)
3. LeetCode 解題冷藏庫 (2024/11/13 ～)

### 2.3 「已完成」項目內部順序
調整「已完成」section 內的項目順序：

**調整前順序：**
1. 初配信 (2023/07/30 ~ 2024/11/13)
2. 初配信後日談 (2025/03/28)

**調整後順序：**
1. 初配信後日談 (2025/03/28) ← 較新
2. 初配信 (2023/07/30 ~ 2024/11/13) ← 較舊

### 2.4 sectionMeta 陣列更新
同步更新 `sectionMeta` 陣列 (第 8-33 行)，確保：
- Section 順序：進行中 → 已完成 → 籌備中
- 各 section 的 items 順序與實際渲染順序一致

---

## 變更三：啟用側邊目錄導航

### 3.1 背景說明

專案中已存在 `PlanSectionSidebar` 組件 (`src/components/PlanSectionSidebar.jsx`)，目前在 `PlanPage.jsx` 第 38 行被註解掉：

```jsx
{/*    <PlanSectionSidebar sections={sectionMeta} /> */}
```

該組件已實現基礎的目錄導航功能，包含：
- ✅ 巢狀結構顯示（Section → Items）
- ✅ IntersectionObserver 自動追蹤當前可見項目
- ✅ 點擊跳轉到對應位置
- ✅ 當前項目高亮顯示
- ✅ 響應式設計（僅在 xl 螢幕以上顯示）

### 3.2 設計目標

提供類似 **HackMD 文章目錄** 的導航體驗，讓訪客能夠：
1. **一眼瀏覽**：快速了解頁面包含哪些頻道項目
2. **快速跳轉**：點擊目錄項目直接滾動到對應說明區塊
3. **位置追蹤**：滾動頁面時，目錄自動高亮當前正在查看的項目
4. **視覺清晰**：區分不同狀態的項目（進行中、已完成）

### 3.3 UI 設計方案

#### 3.3.1 結構設計

採用**兩層巢狀結構**：

```
📋 目錄
├─ 🛠️ 進行中
│   ├─ GeoPingKak
│   ├─ VTMap 頻道旅圖
│   └─ LeetCode 解題冷藏庫
└─ ✅ 已完成
    ├─ 初配信後日談
    └─ 初配信
```

**層級說明：**
- **第一層**：狀態分類（進行中 / 已完成）
  - 使用較大字體、粗體顯示
  - 左側有彩色邊框標示（黃色 = 進行中、灰色 = 已完成）

- **第二層**：具體項目名稱
  - 正常字體大小
  - 可點擊跳轉
  - 滾動時當前項目會高亮（加粗 + 深色）
  - 非當前項目為灰色半透明

#### 3.3.2 位置與佈局

- **桌面版（xl 螢幕以上，≥ 1280px）：**
  - 固定在頁面**右側**
  - 距離頂部：`top-24`（避免與 header 重疊）
  - 距離右側：`right-8`
  - 寬度：`w-64`（256px，比原本的 240px 稍寬）
  - 使用 `position: fixed` 固定定位

- **平板與手機版（< 1280px）：**
  - **隱藏側邊目錄**（使用 `hidden xl:block`）
  - 原因：小螢幕空間有限，側邊欄會遮擋主要內容
  - 可依賴頁面本身的滾動體驗

#### 3.3.3 視覺樣式優化

基於現有組件進行以下改進：

1. **背景與邊框**
   - 添加半透明背景：`bg-white/80 dark:bg-gray-900/80`
   - 添加背景模糊效果：`backdrop-blur-sm`
   - 添加邊框：`border border-gray-200 dark:border-gray-700`
   - 圓角：`rounded-lg`
   - 內邊距：`p-4`

2. **Section 標題樣式**
   - 保留彩色左邊框：
     - 進行中：`border-yellow-500 dark:border-yellow-600`
     - 已完成：`border-gray-400 dark:border-gray-600`
   - 字體：粗體、較大字號
   - 顏色：深色模式適配

3. **項目連結樣式**
   - 默認狀態：`text-gray-600 dark:text-gray-400`
   - Hover 狀態：`hover:text-gray-900 dark:hover:text-white`
   - 活躍狀態（當前項目）：
     - `text-gray-900 dark:text-white`
     - `font-semibold`
     - 可選：左側添加藍色指示器 `border-l-2 border-blue-500`
   - 平滑過渡：`transition-colors duration-200`

4. **陰影與層次**
   - 添加輕微陰影：`shadow-md`
   - Z-index：`z-40`（確保在內容之上，但低於 modal/dropdown）

### 3.4 互動行為

#### 3.4.1 滾動追蹤
- 使用 IntersectionObserver API 監聽頁面滾動
- 配置：
  ```js
  rootMargin: "-20% 0px -70% 0px"  // 優化觸發時機
  threshold: 0.1
  ```
- 當項目進入視窗上方 20%-30% 區域時，目錄高亮對應項目

#### 3.4.2 點擊跳轉
- 使用 `href="#項目ID"` 實現錨點跳轉
- 建議啟用平滑滾動（在全局 CSS 添加）：
  ```css
  html {
    scroll-behavior: smooth;
  }
  ```

#### 3.4.3 響應式處理
- 桌面版：顯示完整側邊目錄
- 移動版：隱藏目錄，保持頁面簡潔

### 3.5 實作細節

#### 3.5.1 啟用組件
在 `PlanPage.jsx` 中：
```jsx
// 移除註解，啟用側邊欄
<PlanSectionSidebar sections={sectionMeta} />
```

#### 3.5.2 更新 sectionMeta
確保 `sectionMeta` 陣列反映新的順序，並且**移除「籌備中」section**（因為已無項目）：

```js
const sectionMeta = [
  {
    id: "in-progress",
    label: "進行中",
    items: [
      { id: "in-progress-GeoPingKak", title: "GeoPingKak" },
      { id: "in-progress-VTMap", title: "VTMap 頻道旅圖" },
      { id: "in-progress-LeetCode", title: "LeetCode 解題冷藏庫" },
    ],
  },
  {
    id: "completed",
    label: "已完成",
    items: [
      { id: "completed-初配信後日談", title: "初配信後日談" },
      { id: "completed-初配信", title: "初配信" },
    ],
  },
];
```

#### 3.5.3 優化 PlanSectionSidebar 組件

對現有組件進行以下改進：

1. **調整定位**：`top-24` 替換 `top-64`，避免與 header 重疊
2. **增加寬度**：`w-64` 替換 `w-60`
3. **添加背景與邊框**：如 3.3.3 所述
4. **優化顏色方案**：確保深色模式下清晰可讀
5. **移除 ScrollToTopButton**：該按鈕在 `PlanPage.jsx` 中已單獨存在，無需在側邊欄重複

#### 3.5.4 確保 ID 一致性

所有項目的 `id` 屬性必須與 `sectionMeta` 中定義的一致：
- ✅ `in-progress-GeoPingKak`
- ✅ `in-progress-VTMap`
- ✅ `in-progress-LeetCode`
- ✅ `completed-初配信後日談`
- ✅ `completed-初配信`

### 3.6 預期效果

完成後，訪客將能夠：
1. 在桌面版頁面右側看到固定的目錄導航
2. 目錄清晰顯示「進行中」與「已完成」兩個狀態分類
3. 點擊任意項目名稱，頁面平滑滾動到對應位置
4. 滾動頁面時，目錄自動高亮當前正在查看的項目
5. 一眼就能了解頻道目前有哪些項目正在進行、哪些已經完成

---

## 實作檢查清單

### Phase 1: GeoPingKak 項目新增
- [ ] 從「籌備中」移除 GeoGuessr 教學項目
- [ ] 從「籌備中」移除 GeoGuessr 直播企劃項目
- [ ] 在「進行中」新增 GeoPingKak 卡片
- [ ] 確認 GeoPingKak 卡片包含所有必要元素（標題、日程、說明、網站連結、GitHub 連結）
- [ ] 確認格式對齊 VTMap 的卡片樣式

### Phase 2: 順序調整
- [ ] 調整頁面 section 順序：進行中 → 已完成 → 籌備中
- [ ] 調整「進行中」內部順序：GeoPingKak → VTMap → LeetCode
- [ ] 調整「已完成」內部順序：初配信後日談 → 初配信
- [ ] 更新 sectionMeta 陣列以反映新的順序

### Phase 3: 側邊目錄導航
- [ ] 啟用 PlanSectionSidebar 組件（移除註解）
- [ ] 更新 sectionMeta 陣列順序與內容
- [ ] 優化 PlanSectionSidebar 樣式（背景、邊框、陰影）
- [ ] 調整側邊欄定位（top-24, w-64）
- [ ] 確認所有項目 ID 與 sectionMeta 一致
- [ ] 測試點擊跳轉功能正常運作
- [ ] 測試滾動追蹤高亮功能正常運作
- [ ] 確認桌面版顯示、移動版隱藏

### Phase 4: 驗證
- [ ] 確認所有項目的 ID 正確無誤
- [ ] 確認外部連結可正常開啟
- [ ] 確認 GitHubRepoCard 組件正確引用 repo
- [ ] 確認頁面在淺色/深色模式下皆顯示正常
- [ ] 確認側邊目錄在深色/淺色模式下皆清晰可讀
- [ ] 在不同螢幕尺寸測試響應式佈局

---

## 不變更的內容

以下內容**不應該被修改**：
- ✅ LeetCode 解題冷藏庫的完整內容與文案
- ✅ VTMap 頻道旅圖的完整內容與文案
- ✅ 初配信的完整內容與文案
- ✅ 初配信後日談的完整內容與文案
- ✅ 頁面標題「頻道活動計劃」
- ✅ 整體樣式與設計風格
- ✅ Section 標題樣式（已完成、進行中、籌備中）

---

## 參考連結

- GeoPingKak 網站: https://geopingkak.web.app/
- GeoPingKak GitHub: https://github.com/WasabiPingKak/GeoPingKak
- VTMap 參考格式: PlanPage.jsx 第 137-173 行
- 現有側邊欄組件: src/components/PlanSectionSidebar.jsx
- IntersectionObserver API 文檔: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

---

## 備註

1. 完成此次更新後，「籌備中」section 將沒有任何項目，可考慮：
   - 選項 A：暫時隱藏整個「籌備中」section
   - 選項 B：保留 section 但顯示空狀態訊息
   - 選項 C：完全移除「籌備中」section 的程式碼

   **建議：選項 A（暫時隱藏）**，以便未來有新的籌備項目時可以快速恢復。

2. GeoPingKak 的開始日期為 `2025-07-29`，這個日期應該準確反映在 `scheduleText` 中。

3. 所有文案與段落格式都應該嚴格遵循用戶提供的內容，不添加額外的描述或修飾。

4. 側邊目錄 UI 設計參考 HackMD 的目錄體驗，重點在於：
   - 清晰的視覺層次（兩層巢狀結構）
   - 實時的位置追蹤（滾動時自動高亮）
   - 便捷的快速跳轉（點擊即可到達）
   - 響應式設計（大螢幕顯示，小螢幕隱藏）

5. 側邊欄的視覺優化（背景、邊框、陰影等）目的是讓目錄更加醒目且不干擾主要內容，具體樣式可在實作時根據實際效果微調。
