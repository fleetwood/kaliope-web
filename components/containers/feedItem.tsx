import React from "react";
import { Post, PostAuthor } from "../../graphql/post/query";

class FeedItem extends React.Component<Post> {
  render() {
    const { title, subtitle, content, author } = this.props;
    return (
      <div className="relative col-span-2 rounded-3xl border border-gray-100 p-4 mb-4 shadow-2xl shadow-cyan-900/10 after:absolute after:inset-0 after:right-8 after:ml-auto after:mt-auto after:h-px after:w-2/3 after:bg-gradient-to-l after:from-transparent after:via-cyan-300 after:to-transparent dark:border-gray-700 dark:bg-gray-800 dark:shadow-none dark:after:via-gray-400">
        <div className="flex items-center gap-4">
          {author?.photoURL && (
        <img
          src={author.photoURL}
          width="412"
          height="412"
          className="h-16 w-16 rounded-xl"
          loading="lazy"
        />
      )}
          <div>
            {author?.displayName && (
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            {author.displayName}
          </h3>
        )}
            <span className="text-sm text-gray-500 dark:text-gray-300">
              {title}
            </span>

            {subtitle && (
              <span className="text-sm text-gray-500 dark:text-gray-300">
                {subtitle}
              </span>
            )}
          </div>
        </div>
        <p className="mb-6 mt-4 text-gray-600 dark:text-gray-200">{content}</p>
      </div>
    );
  }
}

export default FeedItem;
