// src/components/CreatorCredits.jsx
import React from "react";
import CreatorCard from "./CreatorCard";

const creators = [
  {
    name: "🍭鹽can🍭",
    handle: "@saltcan69210",
    twitter: "https://twitter.com/saltcan69210",
    avatar: "/assets/artist-saltcan.jpg",
  },
  {
    name: "李安瑟羅Zelo🌻",
    handle: "@LeeAnZelo",
    twitter: "https://twitter.com/LeeAnZelo",
    avatar: "/assets/rigger-zelo.jpg",
  },
  {
    name: "莓果雪酪 / ベリー",
    handle: "@berrysorbet_58",
    twitter: "https://twitter.com/berrysorbet_58",
    avatar: "/assets/logo-berrysorbet.jpg",
  },
];

const ImageDownloadCard = ({ imageSrc, alt, downloadUrl, caption }) => (
  <a
    href={downloadUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <img
      src={`${import.meta.env.BASE_URL}${imageSrc}`}
      alt={alt}
      className="rounded-lg shadow hover:shadow-xl transition"
    />
    <p className="text-center mt-2 text-sm text-gray-700 dark:text-gray-300">
      {caption}
    </p>
  </a>
);

export default function AboutMe() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12 space-y-12 text-gray-900 dark:text-white"
    >
      <h1 className="text-4xl font-bold mb-10 text-center">
        偉大的設計師們
      </h1>
      {/* 繪師 */}
      <div>
        <h2 className="text-4xl font-bold mb-4">繪師</h2>
        <CreatorCard {...creators[0]} />
      </div>

      {/* 建模師 */}
      <div>
        <h2 className="text-4xl font-bold mb-4">建模師</h2>
        <CreatorCard {...creators[1]} />
      </div>

      {/* LOGO 設計者 */}
      <div>
        <h2 className="text-4xl font-bold mb-4">LOGO 與標準字設計</h2>
        <CreatorCard {...creators[2]} />
      </div>

      {/* LOGO 與三視圖 */}
      <div>
        <h2 className="text-4xl font-bold mb-4">LOGO、設定與三視圖</h2>
        <div className="space-y-8">
          <ImageDownloadCard
            imageSrc="assets/LOGO_complete.png"
            alt="Wasabi PingKak LOGO"
          />
          <ImageDownloadCard
            imageSrc="assets/draft.jpg"
            alt="草圖"
            downloadUrl="https://drive.google.com/file/d/1NV8rR6mtXSs6Gj5-dc50mH7TlWI4HE24/view"
            caption="點我下載 草圖"
          />
          <ImageDownloadCard
            imageSrc="assets/model-front.png"
            alt="三視圖正面"
            downloadUrl="https://drive.google.com/file/d/12HSzW7xsiL2R-DrNIG0m9gi_DhT4w70J/view"
            caption="點我下載 三視圖（正面）"
          />
          <ImageDownloadCard
            imageSrc="assets/model-back.png"
            alt="三視圖背面"
            downloadUrl="https://drive.google.com/file/d/1qTIS3zfsUqQ_blqiqNscinJyDwB6bSP2/view"
            caption="點我下載 三視圖（背面）"
          />
        </div>
      </div>

    </section>
  );
}
