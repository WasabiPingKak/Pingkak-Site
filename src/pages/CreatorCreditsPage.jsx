// src/pages/About.jsx
import React from "react";
import CreatorCredits from "../components/CreatorCredits";
import MainLayout from "../components/layouts/MainLayout";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function CreatorCreditsPage() {
  return (
    <MainLayout>
      <CreatorCredits />
      <ScrollToTopButton />
    </MainLayout>
  );
}
