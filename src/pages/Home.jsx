// src/pages/Home.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import MainLayout from "../components/layouts/MainLayout";
import Hero from "../components/Hero";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function Home() {
  return (
    <MainLayout>
      <Helmet>
        <title>山葵冰角 Wasabi PingKak - 軟體工程 × 文件創作</title>
        <meta name="description" content="用系統化思維做內容的 VTuber，目前主力是 GeoGuessr 教學。這裡整理了我的創作專案、頻道活動與技術筆記。包含 GeoPingKak、VTMap、LeetCode 解題與 OBS 設定教學。" />
        <meta property="og:title" content="山葵冰角 Wasabi PingKak - 軟體工程 × 文件創作" />
        <meta property="og:description" content="用系統化思維做內容的 VTuber，目前主力是 GeoGuessr 教學。這裡整理了我的創作專案、頻道活動與技術筆記。" />
        <meta property="og:url" content="https://wasabipingkak.github.io/Pingkak-Site/" />
        <link rel="canonical" href="https://wasabipingkak.github.io/Pingkak-Site/" />
      </Helmet>
      <Hero />
      <ScrollToTopButton />
    </MainLayout>
  );
}
