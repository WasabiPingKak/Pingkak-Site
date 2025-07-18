// src/pages/Home.jsx
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors">
      <Header />
      <Hero />
    </main>
  );
}
