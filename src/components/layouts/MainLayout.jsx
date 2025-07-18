// src/components/layouts/MainLayout.jsx
import React from "react";
import Header from "../Header";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-gray-900 dark:text-white">
      <Header />
      <main className="pt-32">{children}</main>
    </div>
  );
}
