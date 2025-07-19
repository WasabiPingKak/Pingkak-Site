// src/components/FeaturedProjects.jsx
import React from "react";

const projects = [
  {
    title: "🗺️ VTMap 頻道旅圖｜Vtuber TrailMap",
    description: "Vtuber 頻道分析與導流工具，讓你快速發現有趣的直播與頻道。",
    link: "https://www.vtubertrailmap.com/",
  },
  {
    title: "❄️ LeetCode 冷藏庫",
    description: "我的 LeetCode 解題記錄與觀念筆記，持續更新中。",
    link: "https://github.com/WasabiPingKak/leetcode_pingkak",
  },
  {
    title: "🎧 音遊 Vtuber 名單",
    description: "統整活躍於音樂遊戲領域的 Vtuber，幫助你認識更多同好。",
    link: "https://x.com/wasabi_pingkak/status/1790759608312840693",
  },
  {
    title: "🛠️ OBS 設定筆記",
    description: "直播與錄影環境的 OBS 配置教學與設定筆記。",
    link: "https://hackmd.io/@wasabi-pingkak/SJggjDT6T/https%3A%2F%2Fhackmd.io%2F%40wasabi-pingkak%2FrkpUiFT6a",
  },
  {
    title: "📮 冰角的委託指南",
    description: "教你如何寫出清楚、有禮貌又不踩雷的第一封委託信。",
    link: "https://hackmd.io/@wasabi-pingkak/S1FAxPqe0",
  },
];

export default function FeaturedProjects() {
  return (
    <section
      id="featured"
      className="bg-white dark:bg-gray-800 py-16 px-6 md:px-12 lg:px-24 transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center md:text-left">
          重點內容
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 text-sm transition"
              >
                查看詳情
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
