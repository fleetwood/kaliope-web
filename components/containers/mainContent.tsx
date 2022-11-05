import { ReactNode } from "react";
import LeftMenu from "./leftMenu";

type MainContentProps = {
  className?: string;
  children?: ReactNode;
};

const MainContent = ({ className, children }: MainContentProps) => (
  <div className={className}>
    <div className="mx-auto max-w-5xl px-8 lg:px-0">
      <div className="grid gap-8 sm:grid-cols-3">
        <LeftMenu />
        <div className="relative col-span-2 rounded-3xl border border-gray-100 p-8 shadow-2xl shadow-cyan-900/10 after:absolute after:inset-0 after:right-8 after:ml-auto after:mt-auto after:h-px after:w-2/3 after:bg-gradient-to-l after:from-transparent after:via-cyan-300 after:to-transparent dark:border-gray-700 dark:bg-gray-800 dark:shadow-none dark:after:via-gray-400">

            <p className="mb-6 mt-4 text-gray-600 dark:text-gray-200">
              I love Tailus. The component blocks are well-structured, simple to
              use, and beautifully designed. It makes it really easy to have a
              good-looking website in no time.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <img
                src="https://pbs.twimg.com/profile_images/1372441824560771075/DTcuXT0Z_400x400.jpg"
                alt="Rodrigo Aguilar"
                loading="lazy"
                width="412"
                height="412"
                className="h-16 w-16 rounded-full"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Rodrigo Aguilar
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  Tailwind Awesome Creator
                </span>
              </div>
            </div>

        </div>
      </div>
    </div>
  </div>
);

export default MainContent;
