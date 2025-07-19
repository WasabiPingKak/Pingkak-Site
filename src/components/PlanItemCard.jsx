import React from "react";

export default function PlanItemCard({ title, youtubeId, scheduleText, children, id }) {
  return (
    <div id={id} className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-gray-800 shadow-sm">
      {/* 標題 */}
      <h2 className="text-3xl font-bold mb-4 text-center">{title}</h2>

      {/* 說明文字區塊（從 children 傳入） */}
      {children && (
        <div className="text-xl text-gray-600 dark:text-gray-300 mb-4">
          {children}
        </div>
      )}

      {/* 日程文字（從外層傳入） */}
      {scheduleText && (
        <>
          <h3 className="section-heading">📅 日程</h3>
          <p className="text-xl text-gray-500 dark:text-gray-400 mb-3">
            {scheduleText}
          </p>
        </>
      )}

      {/* YouTube 嵌入影片 */}
      {youtubeId && (
        <div className="aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded"
          ></iframe>
        </div>
      )}
    </div>
  );
}
