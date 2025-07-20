import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // 捲動淡出效果
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 20) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // 初始化深色模式
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDarkPref = saved === "dark";
    setIsDark(isDarkPref);
    document.documentElement.classList.toggle("dark", isDarkPref);
  }, []);

  // 切換深色模式
  const toggleDarkMode = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
    localStorage.setItem("theme", nextDark ? "dark" : "light");
  };

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        } bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800`}
    >
      <div className="w-full px-6 md:px-12 lg:px-24 py-4 flex justify-between items-center relative">
        {/* 左側 LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src={`${import.meta.env.BASE_URL}assets/logo.png`}
            alt="冰角 LOGO"
            className="h-20 w-auto object-contain"
          />
        </Link>

        {/* 右側控制區：深色模式 + 漢堡 */}
        <div className="flex items-center gap-4 md:hidden">
          {/* 深色模式按鈕（手機） */}
          <button
            onClick={toggleDarkMode}
            className="text-gray-700 hover:text-yellow-500 dark:text-gray-300 dark:hover:text-yellow-300 transition text-2xl"
            aria-label="Toggle dark mode"
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>

          {/* 漢堡按鈕 */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 dark:text-gray-300 text-3xl"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {/* 導覽列 + 深色模式（桌面） */}
        <div className="hidden md:flex items-center gap-6 text-2xl font-medium">
          <nav className="flex gap-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition"
            >
              首頁
            </Link>
            <Link
              to="/creator-credits"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition"
            >
              設計
            </Link>
            <Link
              to="/plan"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition"
            >
              頻道計劃
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition"
            >
              聯絡我
            </Link>
          </nav>
          <button
            onClick={toggleDarkMode}
            className="text-gray-700 hover:text-yellow-500 dark:text-gray-300 dark:hover:text-yellow-300 transition"
            aria-label="Toggle dark mode"
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* 手機版展開選單 */}
        {menuOpen && (
          <nav className="absolute top-full left-0 w-full flex flex-col items-end
          bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-xl py-4 z-40 pr-6 text-right">
            <Link
              to="/"
              className="px-6 py-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              onClick={() => setMenuOpen(false)}
            >
              首頁
            </Link>
            <Link
              to="/creator-credits"
              className="px-6 py-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              onClick={() => setMenuOpen(false)}
            >
              設計
            </Link>
            <Link
              to="/plan"
              className="px-6 py-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              onClick={() => setMenuOpen(false)}
            >
              頻道計劃
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              onClick={() => setMenuOpen(false)}
            >
              聯絡我
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
