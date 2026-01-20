# PRD：頻道活動計劃頁面更新

## 文檔資訊
- **建立日期**：2026-01-20
- **目標文件**：`src/pages/PlanPage.jsx`
- **變更範圍**：頻道活動計劃頁面內容與結構調整

---

## 更新概述

本次更新將對「頻道活動計劃」頁面進行兩項主要變更：
1. **將 GeoPingKak 項目從「籌備中」升級為「進行中」狀態**，並移除舊的 GeoGuessr 相關籌備項目
2. **調整整個頁面的時序順序**，改為最新項目在上、最舊項目在下的呈現方式

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

### Phase 3: 驗證
- [ ] 確認所有項目的 ID 正確無誤
- [ ] 確認外部連結可正常開啟
- [ ] 確認 GitHubRepoCard 組件正確引用 repo
- [ ] 確認頁面在淺色/深色模式下皆顯示正常

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

---

## 備註

1. 完成此次更新後，「籌備中」section 將沒有任何項目，可考慮：
   - 選項 A：暫時隱藏整個「籌備中」section
   - 選項 B：保留 section 但顯示空狀態訊息
   - 選項 C：完全移除「籌備中」section 的程式碼

   **建議：選項 A（暫時隱藏）**，以便未來有新的籌備項目時可以快速恢復。

2. GeoPingKak 的開始日期為 `2025-07-29`，這個日期應該準確反映在 `scheduleText` 中。

3. 所有文案與段落格式都應該嚴格遵循用戶提供的內容，不添加額外的描述或修飾。
