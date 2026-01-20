import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import PlanItemCard from "../components/PlanItemCard";
import ScrollToTopButton from "../components/ScrollToTopButton";
import GitHubRepoCard from "../components/GitHubRepoCard";
import PlanSectionSidebar from "../components/PlanSectionSidebar";

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

export default function PlanPage() {
  return (
    <>
      <PlanSectionSidebar sections={sectionMeta} />
      <MainLayout>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12 space-y-12 text-gray-900 dark:text-white">
          <h1 className="text-6xl font-bold mb-10 text-center">
            頻道
            <br className="block md:hidden" />
            活動計劃
          </h1>
          {/* 🛠️ 進行中 */}
          <section id="in-progress" className="mt-10">
            <h2 className="mb-8">
              <span className="block w-full text-4xl font-bold text-center px-4 py-3 rounded-xl border border-yellow-200 dark:border-yellow-700 bg-yellow-100 dark:bg-yellow-800 text-yellow-900 dark:text-yellow-100">
                進行中
              </span>
            </h2>

            <div className="space-y-6">
              <PlanItemCard
                title="GeoPingKak"
                scheduleText="2025-07-29 ～ （進行中）"
                id="in-progress-GeoPingKak"
              >
                <p className="mb-3">
                  以每日固定題目為核心運作的 GeoGuessr 挑戰與內容系統。
                </p>
                <p className="mb-3">
                  GeoPingKak 是我目前頻道中主要使用的 GeoGuessr 題目產生與整理系統，用來支撐日常直播內容與觀眾互動。
                </p>
                <p className="mb-3">
                  系統每天固定產生多組 GeoGuessr Challenge 連結，涵蓋世界、台灣、日本三個區域，並各自提供不同難度設定。同一天的挑戰連結對所有玩家皆為相同題目，適合用於練習、對照與重玩。
                </p>
                <p className="mb-3">
                  我的 YouTube 直播內容會直接使用 GeoPingKak 當日產生的題目進行遊玩與講解，觀眾可以在直播當天或之後，透過相同的連結實際重玩該次內容，對照直播中的推理與判斷過程。
                </p>
                <p className="mb-3">
                  目前 GeoPingKak 已穩定運作，並成為我頻道內容更新與網站日常維護的核心基礎。
                </p>
                <h3 className="section-heading">
                  網站
                </h3>
                <a
                  href="https://geopingkak.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 rounded-md bg-blue-600 text-white dark:text-white hover:bg-blue-700 dark:hover:bg-blue-500 text-xl transition"
                >
                  🌍 GeoPingKak
                </a>

                {/* GitHub 專案卡片 */}
                <div className="mt-6">
                  <h3 className="section-heading">
                    Github 專案主頁
                  </h3>
                  <GitHubRepoCard
                    repo="WasabiPingKak/GeoPingKak"
                    title="GeoPingKak"
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

            </div>
          </section>

          {/* ✅ 已完成 */}
          <section id="completed" className="mt-10">
            <h2 className="mb-8">
              <span className="block w-full text-4xl font-bold text-center px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800">
                已完成
              </span>
            </h2>

            <div className="space-y-6">
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
            </div>
          </section>
        </div >

        <ScrollToTopButton />
      </MainLayout >
    </>
  );
}
