import React from "react";
import {
  FaYoutube,
  FaTwitter,
  FaDiscord,
  FaGithub,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

export default function SocialLinks() {
  return (
    <div className="flex justify-center md:justify-start gap-6 pt-2">
      <a
        href="https://www.youtube.com/@PingKak山葵冰角"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors text-2xl"
      >
        <FaYoutube />
      </a>
      <a
        href="https://twitter.com/wasabi_pingkak"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        className="text-gray-700 dark:text-gray-300 hover:text-sky-500 transition-colors text-2xl"
      >
        <FaTwitter />
      </a>
      <a
        href="https://www.instagram.com/wasabi_pingkak/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="text-gray-700 dark:text-gray-300 hover:text-pink-500 transition-colors text-2xl"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.threads.com/@wasabi_pingkak"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Threads"
        className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-2xl"
      >
        <FaThreads />
      </a>
      <a
        href="https://discord.gg/ABpdGBbDe4"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Discord"
        className="text-gray-700 dark:text-gray-300 hover:text-indigo-500 transition-colors text-2xl"
      >
        <FaDiscord />
      </a>
      <a
        href="https://github.com/wasabipingkak"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-2xl"
      >
        <FaGithub />
      </a>
      <a
        href="mailto:wasabi.pingkak@gmail.com"
        aria-label="Gmail"
        className="text-gray-700 dark:text-gray-300 hover:text-rose-500 transition-colors text-2xl"
      >
        <FaEnvelope />
      </a>
      <a
        href="https://marshmallow-qa.com/igxgfwwgas5cp1r"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Marshmallow"
        className="w-6 h-6 text-gray-700 dark:text-gray-300 hover:opacity-80 transition-opacity"
      >
        <img
          src={`${import.meta.env.BASE_URL}assets/marshmallow-icon.jpg`}
          alt="Marshmallow"
          className="w-full h-full object-contain"
        />
      </a>
    </div>
  );
}
