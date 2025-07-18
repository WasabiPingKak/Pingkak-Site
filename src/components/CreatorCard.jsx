// src/components/CreatorCard.jsx
import React from "react";

export default function CreatorCard({ name, handle, avatar, twitter }) {
  return (
    <a
      href={twitter}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-6 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-800 hover:shadow-lg transition"
    >
      <img
        src={`${import.meta.env.BASE_URL}${avatar}`}
        alt={name}
        className="w-32 h-32 rounded-full object-cover"
      />
      <div className="text-left">
        <div className="text-4xl font-bold text-gray-900 dark:text-white">
          {name}
        </div>
        <div className="text-xl text-gray-600 dark:text-gray-400">
          {handle}
        </div>
      </div>
    </a>
  );
}
