// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreatorCreditsPage from "./pages/CreatorCreditsPage";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creator-credits" element={<CreatorCreditsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
