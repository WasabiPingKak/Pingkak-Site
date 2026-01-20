// src/pages/About.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import CreatorCredits from "../components/CreatorCredits";
import MainLayout from "../components/layouts/MainLayout";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function CreatorCreditsPage() {
  return (
    <MainLayout>
      <Helmet>
        <title>委託設計名單 - 山葵冰角 Wasabi PingKak</title>
        <meta name="description" content="感謝為山葵冰角創作形象的設計團隊：繪師 鹽can、建模師 李安瑟羅Zelo、LOGO 設計 莓果雪酪。這裡提供 LOGO 與標準字的下載資源。" />
        <meta property="og:title" content="委託設計名單 - 山葵冰角" />
        <meta property="og:description" content="感謝為山葵冰角創作形象的設計團隊" />
        <meta property="og:url" content="https://wasabipingkak.github.io/Pingkak-Site/#/creator-credits" />
        <link rel="canonical" href="https://wasabipingkak.github.io/Pingkak-Site/#/creator-credits" />
      </Helmet>
      <CreatorCredits />
      <ScrollToTopButton />
    </MainLayout>
  );
}
