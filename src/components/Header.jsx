import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        } bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800`}
    >
      <div className="w-full px-6 md:px-12 lg:px-24 py-4 flex justify-between items-center">
        {/* 左側 LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src={`${import.meta.env.BASE_URL}assets/logo.png`}
            alt="冰角 LOGO"
            className="h-20 w-auto object-contain"
          />
        </Link>

        {/* 右側導覽列 */}
        <nav className="flex gap-6 text-2xl font-medium">
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
          <a
            href="#contact"
            className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition"
          >
            聯絡我
          </a>
        </nav>
      </div>
    </header>
  );
}
