import { ReactNode } from "react";

type FeedItemProps = {
  image?: string;
  author: string;
  description?: string;
  content: ReactNode;
};

const FeedItem = ({
  image,
  author,
  description,
  content,
}: FeedItemProps) => {
  return (
    <div className="relative col-span-2 rounded-3xl border border-gray-100 p-4 mb-4 shadow-2xl shadow-cyan-900/10 after:absolute after:inset-0 after:right-8 after:ml-auto after:mt-auto after:h-px after:w-2/3 after:bg-gradient-to-l after:from-transparent after:via-cyan-300 after:to-transparent dark:border-gray-700 dark:bg-gray-800 dark:shadow-none dark:after:via-gray-400">
      <div className="flex items-center gap-4">
        {image && (
          <img
            src={image}
            loading="lazy"
            width="412"
            height="412"
            className="h-16 w-16 rounded-xl"
          />
        )}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            {author}
          </h3>
          {description && (
            <span className="text-sm text-gray-500 dark:text-gray-300">
              {description}
            </span>
          )}
        </div>
      </div>
      <p className="mb-6 mt-4 text-gray-600 dark:text-gray-200">{content}</p>
    </div>
  );
};

export default FeedItem;