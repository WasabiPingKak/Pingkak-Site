// src/components/Header.jsx
import React from "react";

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div className="w-full px-6 md:px-12 lg:px-24 py-4 flex justify-between items-center">
        {/* 左側 LOGO */}
        <a href="/" className="flex items-center">
          <img
            src={`${import.meta.env.BASE_URL}assets/logo.png`}
            alt="冰角 LOGO"
            className="h-20 w-auto object-contain"
          />
        </a>

        {/* 右側導覽列 */}
        <nav className="flex gap-6 text-sm font-medium">
          <a
            href="#featured"
            className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition"
          >
            📘 精選內容
          </a>
          <a
            href="/docs"
            className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition"
          >
            📂 文件列表
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition"
          >
            📬 聯絡我
          </a>
        </nav>
      </div>
    </header>

  );
}
