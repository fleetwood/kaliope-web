import { Post, User } from "@prisma/client";
import { useEffect, useState } from "react";
import FeedPostAuthor from "../user/feedPostAuthor";

export type PostProps = {
  post: Post
}

const FeedPost = (props:PostProps) => {
  const [author, setAuthor] = useState<User>();
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    if (props.post) {
      setPost(props.post);
      // prismaClient.user.findUnique({
      //   where: {
      //     uid: post?.authorId
      //   }
      // })
      // .then(result => {
      //   if (!result || result === null) {
      //     throw('Error finding user')
      //   }
      //   setAuthor(result!)
      // })
    }
  }, [author, post]);
  return (
    <div className="relative col-span-2 rounded-3xl border border-gray-100 p-4 mb-4 shadow-2xl shadow-cyan-900/10 after:absolute after:inset-0 after:right-8 after:ml-auto after:mt-auto after:h-px after:w-2/3 after:bg-gradient-to-l after:from-transparent after:via-cyan-300 after:to-transparent dark:border-gray-700 dark:bg-gray-800 dark:shadow-none dark:after:via-gray-400">
      <div className="flex flex-row items-center gap-4">
        {author && 
        <div className="flex flex-row">
          <FeedPostAuthor author={author} />
        </div>}
        <div className="flex flex-row">
        {post && post.title &&
          <h1 className="text-gray-500 dark:text-gray-300">
            {post.title}
          </h1>
        }
        {post && post.subtitle && (
            <h2 className="text-gray-500 dark:text-gray-300">
              {post.subtitle}
            </h2>
          )}
        </div>
      </div>
      {post && post.content && (
        <div className="mb-6 mt-4 text-gray-600 dark:text-gray-200">
          {post.content}
        </div>
      )}
    </div>
  );
};

export default FeedPost;
