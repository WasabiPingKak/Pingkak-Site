import React, { useEffect, useState } from "react";

export default function GitHubRepoCard({ repo, title }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${repo}`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("GitHub fetch error:", err));
  }, [repo]);

  const formatRelativeTime = (dateStr) => {
    if (!dateStr) return "";
    const updatedAt = new Date(dateStr);
    const now = new Date();
    const diffMs = now - updatedAt;
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHour = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHour / 24);
    const diffMonth = Math.floor(diffDay / 30);
    const diffYear = Math.floor(diffDay / 365);

    const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

    if (diffYear >= 1) return `Updated ${rtf.format(-diffYear, "year")}`;
    if (diffMonth >= 1) return `Updated ${rtf.format(-diffMonth, "month")}`;
    if (diffDay >= 1) return `Updated ${rtf.format(-diffDay, "day")}`;
    if (diffHour >= 1) return `Updated ${rtf.format(-diffHour, "hour")}`;
    return `Updated ${rtf.format(-diffMin, "minute")}`;
  };

  if (!data) return null;

  return (
    <a
      href={data.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="block max-w-md border border-gray-200 dark:border-gray-700 rounded-xl p-4 bg-white dark:bg-zinc-800 shadow hover:shadow-md transition"
    >
      <div className="flex items-center space-x-4">
        {/* 頭像 + GitHub logo 疊圖 */}
        <div className="relative">
          <img
            src={data.owner.avatar_url}
            alt={data.owner.login}
            className="w-12 h-12 rounded-full"
          />
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub"
            className="w-5 h-5 absolute bottom-0 right-0 bg-white rounded-full p-0.5"
          />
        </div>

        {/* 專案文字資訊 */}
        <div>
          <div className="text-lg font-semibold">{title}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {data.owner.login} &bull; {formatRelativeTime(data.updated_at)}
          </div>
        </div>
      </div>
    </a>
  );
}
