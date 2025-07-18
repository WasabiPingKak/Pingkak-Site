// src/components/Hero.jsx
import React from "react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 pt-32 pb-12 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* 左側文字區塊 */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            山葵冰角｜工程師 × 文件創作者
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            用文字記錄技術與創作的軌跡。探索、整理、分享，是我存在的方式。
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="#featured"
              className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              📘 查看精選
            </a>
          </div>
        </div>

        {/* 右側圖像區塊 */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={`${import.meta.env.BASE_URL}assets/hero-visual.jpg`}
            alt="冰角角色圖"
            className="max-h-[600px] w-auto object-contain rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
