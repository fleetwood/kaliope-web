import React from "react";
import { classnameProps } from "../../types/props";

const Footer = ({ className }: classnameProps) => {
  return (
    <footer className={`relative mt-32 pb-6 min-w-full ${className}`}>
      <div className="relative mx-auto flex max-w-5xl flex-col items-center justify-center px-6 sm:px-12 lg:px-0">
        <div className="flex w-full flex-wrap items-center justify-center gap-4 gap-y-6 border-t border-gray-100 pt-6 text-sm dark:border-gray-700 md:justify-between">
          <div className="order-2 flex items-center gap-3 sm:order-1">
            <span className="text-gray-600 dark:text-gray-500">
              <span className="text-sm">&copy;</span> Tailus
            </span>
          </div>
          <div className="order-first flex flex-wrap justify-center gap-y-2 gap-x-4 text-gray-600 dark:text-gray-500 sm:order-2">
            <a
              className="transition hover:text-primary dark:hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Tailus-UI"
            >
              GitHub
            </a>
            <a
              className="transition hover:text-primary dark:hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
              href="https://dev.to/tailus"
            >
              Articles
            </a>
            <a
              className="transition hover:text-primary dark:hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/c/Tailus-ui/"
            >
              YouTube
            </a>
          </div>
          <span className="order-last text-gray-500 dark:text-gray-600">
            Proudly made in Chicago
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
