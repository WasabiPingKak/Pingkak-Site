// src/components/PlanSectionSidebar.jsx
import React, { useEffect, useState } from "react";
import ScrollToTopButton from "./ScrollToTopButton";

export default function PlanSectionSidebar({ sections }) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      {
        rootMargin: "-30% 0px -60% 0px",
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

  return (
    <>
      <nav className="hidden xl:block fixed top-64 right-8 w-60 z-40 text-base space-y-6">
        {sections.map((section) => (
          <div key={section.id}>
            <div className="border-l-2 pl-2 font-bold mb-1 text-black dark:text-white">
              {section.label}
            </div>
            <ul className="ml-2 space-y-1">
              {section.items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`block hover:underline ${activeId === item.id
                      ? "text-black dark:text-white font-semibold"
                      : "text-gray-500 dark:text-gray-400"
                      }`}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className="fixed left-8 bottom-8 z-40">
        <ScrollToTopButton />
      </div>
    </>
  );
}
