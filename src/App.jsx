import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreatorCreditsPage from "./pages/CreatorCreditsPage";
import PlanPage from "./pages/PlanPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creator-credits" element={<CreatorCreditsPage />} />
        <Route path="/plan" element={<PlanPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}
