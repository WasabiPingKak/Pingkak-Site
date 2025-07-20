import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import PlanItemCard from "../components/PlanItemCard";
import ScrollToTopButton from "../components/ScrollToTopButton";
import GitHubRepoCard from "../components/GitHubRepoCard";
import PlanSectionSidebar from "../components/PlanSectionSidebar";

const sectionMeta = [
  {
    id: "completed",
    label: "已完成",
    items: [
      { id: "completed-初配信", title: "初配信" },
      { id: "completed-初配信後日談", title: "初配信後日談" },
    ],
  },
  {
    id: "in-progress",
    label: "進行中",
    items: [
      { id: "in-progress-LeetCode", title: "LeetCode 解題冷藏庫" },
      { id: "in-progress-VTMap", title: "VTMap 頻道旅圖" },
    ],
  },
  {
    id: "planned",
    label: "籌備中",
    items: [
      { id: "planned-GeoGuessr-教學", title: "GeoGuessr 教學" },
      { id: "planned-GeoGuessr-直播企劃", title: "GeoGuessr 直播企劃" },
    ],
  },
];

export default function PlanPage() {
  return (
    <>
      {/*    <PlanSectionSidebar sections={sectionMeta} /> */}
      <MainLayout>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12 space-y-12 text-gray-900 dark:text-white">
          <h1 className="text-6xl font-bold mb-10 text-center">
            頻道
            <br className="block md:hidden" />
            活動計劃
          </h1>
          {/* ✅ 已完成 */}
          <section id="completed" className="mt-10">
            <h2 className="mb-8">
              <span className="block w-full text-4xl font-bold text-center px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800">
                已完成
              </span>
            </h2>

            <div className="space-y-6">
              <PlanItemCard
                title="初配信"
                scheduleText="2023/07/30 ~ 2024/11/13"
                youtubeId="d-57rW0I9uM"
                id="completed-初配信"
              >
                <p className="mb-3">
                  如果你想知道整個初配信從無到有的詳細日程，你可以參考這份{" "}
                  <a
                    href="https://wasabi-pingkak.notion.site/5cf26b8651f7425abca4aafcdc09ceb3?v=5d5af223f08c4fb8a7ef3b0c410dff38"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    初配信準備進度表
                  </a>{" "}
                  了解當時的準備過程與項目。
                </p>
              </PlanItemCard>

              <PlanItemCard
                title="初配信後日談"
                scheduleText="2025/03/28"
                youtubeId="bb0mlSsP-XY"
                id="completed-初配信後日談"
              >
                <p className="mb-3">
                  整個節目就是重新拆解這份{" "}
                  <a
                    href="https://wasabi-pingkak.notion.site/5cf26b8651f7425abca4aafcdc09ceb3?v=5d5af223f08c4fb8a7ef3b0c410dff38"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    初配信準備進度表
                  </a>{" "}
                  的內容。<br />
                  <br />
                  這場後日談直播回顧了我從零開始籌備初配信的整個過程，詳細說明了每個項目的需求、花費與時間成本，也分享了我當時的思考與選擇。<br />
                  <br />
                  節目內容包含：哪些項目是我認為「必要的」、每個項目的實際開銷與時程安排，以及我對做功課的重視程度。<br />
                  如果你正在考慮籌備 V 活動或是準備初配信，這場直播會是一份值得參考的實戰資料。<br />
                </p>
              </PlanItemCard>
            </div>
          </section>

          {/* 🛠️ 進行中 */}
          <section id="in-progress" className="mt-10">
            <h2 className="mb-8">
              <span className="block w-full text-4xl font-bold text-center px-4 py-3 rounded-xl border border-yellow-200 dark:border-yellow-700 bg-yellow-100 dark:bg-yellow-800 text-yellow-900 dark:text-yellow-100">
                進行中
              </span>
            </h2>

            <div className="space-y-6">
              <PlanItemCard
                title="LeetCode 解題冷藏庫"
                scheduleText="2024/11/13 ～ （進行中）"
                id="in-progress-LeetCode"
              >
                <p className="mb-3">
                  LeetCode 是專為軟體工程師設計的面試題庫平台，內容多為各大科技公司常見的白板題。
                  本計劃目標是針對其中出題率最高、最基礎的題目，製作免費的詳解內容，協助讀者理解演算法的設計思路與職場應用場景。
                </p>
                <p className="mb-3">
                  解題方式將包含直播講解、影片製作與文字圖文詳解，並優先處理與求職面試最相關的問題，初期不會涵蓋太困難的題型。
                  所有內容都會公開免費，只是需要一些時間慢慢做出來。
                </p>

                {/* GitHub 專案卡片 */}
                <div className="mt-6">
                  <h3 className="section-heading">
                    計劃主頁
                  </h3>
                  <GitHubRepoCard
                    repo="WasabiPingKak/leetcode_pingkak"
                    title="冰角的 LeetCode 解題冷藏庫"
                  />
                </div>
              </PlanItemCard>

              <PlanItemCard
                title="VTMap 頻道旅圖｜Vtuber TrailMap"
                scheduleText="2025/04/06 ～ （進行中）"
                id="in-progress-VTMap"
              >
                <p className="mb-3">
                  VTMap 是一套針對 Vtuber 頻道經營設計的分析與導流工具，目標是解決 YouTube 後台缺乏「主題分類」與「導流追蹤」功能的問題，協助觀眾與創作者更快找到有趣的內容與趨勢。
                </p>
                <p className="mb-3">
                  影片主題分類採用標題關鍵字比對方式，並可自訂規則與隱私設定，提供比 YouTube 原生介面更完整的內容洞察。
                </p>
                <p className="mb-3">
                  第一階段開發時程為 2025/04/06 至 2025/07/04，目前已進入穩定維護階段，仍將持續針對分類規則與導流模組進行小規模更新。
                </p>
                <h3 className="section-heading">
                  網站
                </h3>
                <a
                  href="https://www.vtubertrailmap.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 rounded-md bg-blue-600 text-white dark:text-white hover:bg-blue-700 dark:hover:bg-blue-500 text-xl transition"
                >
                  🗺️ VTMap 頻道旅圖｜Vtuber TrailMap
                </a>

                {/* GitHub 專案卡片 */}
                <div className="mt-6">
                  <h3 className="section-heading">
                    Github 專案主頁
                  </h3>
                  <GitHubRepoCard
                    repo="WasabiPingKak/youtube-channel-info-fetcher"
                    title="Vtuber TrailMap"
                  />
                </div>
              </PlanItemCard>

            </div>
          </section>

          {/* 🧊 籌備中 */}
          <section id="planned" className="mt-10">
            <h2 className="mb-8">
              <span className="block w-full text-4xl font-bold text-center px-4 py-3 rounded-xl border border-blue-200 dark:border-blue-700 bg-blue-100 dark:bg-blue-800 text-blue-900 dark:text-blue-100">
                籌備中
              </span>
            </h2>

            <div className="space-y-6">
              <PlanItemCard
                title="GeoGuessr 教學"
                id="planned-GeoGuessr-教學"
              >
                <p className="mb-3">
                  本計劃將為新手玩家設計 GeoGuessr 教學資源，預計推出一個免費練習網站，提供無需註冊即可遊玩的每日任務，涵蓋世界地圖與台灣地圖。
                </p>
                <p className="mb-3">
                  此外網站也將整理常見線索判讀技巧、地形與標誌的觀察方法，並搭配製作一系列教學影片，協助玩家提升實戰能力與判斷準確度。
                </p>
              </PlanItemCard>

              <PlanItemCard
                title="GeoGuessr 直播企劃"
                id="planned-GeoGuessr-直播企劃"
              >
                <p className="mb-3">
                  我會設計一系列自製主題地圖，並整理成直播用的開台企劃書，公開提供給有興趣的 Vtuber 或實況主自由使用。
                </p>
                <p className="mb-3">
                  由於我是出題者，因此我本人不會參與遊玩過程，主播們可以選擇自行安排直播時間，不需事先報名或與我協調。
                </p>
                <p className="mb-3">
                  每份企劃書會包含題目介紹、地圖連結與遊戲說明，方便直接套用到自己的節目中。
                  目前已確定的主題包括「台灣諧音招牌」與「有趣的台灣地名」。
                </p>
                <p className="mb-3">
                  這個企劃的目標是讓更多創作者能輕鬆嘗試 GeoGuessr 主題直播，不需要付費訂閱遊戲也不需自行設計地圖，就能在免費模式下有完整的節目架構與內容。
                </p>
              </PlanItemCard>


            </div>
          </section>
        </div >

        <ScrollToTopButton />
      </MainLayout >
    </>
  );
}
