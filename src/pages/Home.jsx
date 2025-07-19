// src/pages/Home.jsx
import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import Hero from "../components/Hero";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <ScrollToTopButton />
    </MainLayout>
  );
}
