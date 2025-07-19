// src/components/layouts/MainLayout.jsx
import React from "react";
import Header from "../Header";
import Footer from "../Footer";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-900 text-gray-900 dark:text-white">
      <Header />
      <main className="flex-1 pt-32">{children}</main>
      <Footer />
    </div>
  );
}
