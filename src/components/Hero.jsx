// src/components/Hero.jsx
import React from "react";
import FeaturedProjects from "./FeaturedProjects";
import SocialLinks from "../components/SocialLinks";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center px-6 md:px-12 lg:px-24 pt-32 pb-12 bg-white dark:bg-gray-900/80 transition-colors">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* 左側文字區塊 */}
        <div className="w-full md:w-1/2 text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            山葵冰角
            <span className="hidden md:inline"> </span>
            <br className="block md:hidden" />
            Wasabi PingKak<br />
          </h1>
          <h2 className="text-xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-200">
            └ 軟體工程 × 文件創作
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 space-y-4">
            我是冰角，一位喜歡做整理與教學的工程師 Vtuber。<br />
            比起即興表演，我更習慣用文字與系統化的內容，去傳遞我的理解與熱情。<br />
            <br />
            這裡是我整理文件、記錄創作的基地。<br />
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 space-y-4">
            以下是我目前正在經營的內容，包含一些實作中的專案與還在持續補完的技術筆記。
          </p>

          {/* 社群連結區塊 */}
          <SocialLinks />
        </div>

        {/* 右側圖像區塊 */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={`${import.meta.env.BASE_URL}assets/hero-visual.jpg`}
            alt="山葵冰角 Wasabi PingKak - 工程師 VTuber 角色立繪"
            className="max-h-[600px] w-auto object-contain rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* 精選內容卡片區塊 */}
      <FeaturedProjects />
    </section>
  );
}
