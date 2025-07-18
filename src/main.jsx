import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Main() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        歡迎來到 Pingkak-Site
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        這是 Tailwind CSS v3 + React 的第一版測試頁
      </p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
