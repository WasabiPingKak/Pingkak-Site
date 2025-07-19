// src/pages/ContactPage.jsx
import React from "react";
import {
  FaYoutube,
  FaTwitter,
  FaDiscord,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import MainLayout from "../components/layouts/MainLayout";
import SocialLinks from "../components/SocialLinks";

export default function ContactPage() {
  return (
    <MainLayout>
      <section className=" flex flex-col items-center px-6 md:px-12 lg:px-24 pt-28 pb-12 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* 頭像區塊 */}
          <div className="flex-shrink-0">
            <img
              src={`${import.meta.env.BASE_URL}assets/site_icon.png`}
              alt="Wasabi PingKak 頭像"
              className="w-40 h-40 rounded-full object-cover border-4 border-gray-300 dark:border-gray-700 shadow-md"
            />
          </div>

          {/* 文字與連結區塊 */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              聯絡我
            </h1>
            <p className="text-gray-700 dark:text-gray-300">
              想與我交流 Vtuber 創作、技術專案，或對網站有任何想法？都可以透過下面的任何方式讓我知道。<br />
              也歡迎合作邀約、工商邀約等各種聯繫。
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              若是商業合作，請提供你的身份背景、合作方向與預期時程，推薦使用 e-mail 作為主要聯絡管道。<br />
              我會盡快抽空回覆，感謝理解！
            </p>

            {/* 社群連結區塊 */}
            <SocialLinks />
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
