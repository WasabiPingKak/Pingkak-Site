// src/components/PlanSectionSidebar.jsx
import React, { useEffect, useState } from "react";

export default function PlanSectionSidebar({ sections }) {
  const [activeId, setActiveId] = useState(null);

  const handleClick = (e, itemId) => {
    e.preventDefault();
    const element = document.getElementById(itemId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      observer.observe(document.getElementById(section.id));
      section.items.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) observer.observe(el);
      });
    });

    return () => observer.disconnect();
  }, [sections]);

  // 根據 section id 決定邊框顏色
  const getSectionBorderColor = (sectionId) => {
    if (sectionId === "in-progress") {
      return "border-yellow-500 dark:border-yellow-600";
    } else if (sectionId === "completed") {
      return "border-gray-400 dark:border-gray-600";
    }
    return "border-gray-300 dark:border-gray-600";
  };

  return (
    <nav className="hidden xl:block fixed top-1/2 -translate-y-1/2 left-8 w-64 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-md">
      <div className="space-y-6">
        {sections.map((section) => (
          <div key={section.id}>
            <div className={`border-l-2 ${getSectionBorderColor(section.id)} pl-3 font-bold mb-2 text-gray-900 dark:text-white`}>
              {section.label}
            </div>
            <ul className="ml-3 space-y-1">
              {section.items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleClick(e, item.id)}
                    className={`block transition-colors duration-200 cursor-pointer ${
                      activeId === item.id
                        ? "text-gray-900 dark:text-white font-semibold"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
