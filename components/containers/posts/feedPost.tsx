import Link from "next/link";
import { FullPost } from "../../../types/post/FullPost";
import {
  CommentIcon,
  HeartIcon,
  QuoteLeftIcon,
  ShareIcon,
} from "../../ui/icons";
import ShrinkableNavItem from "../shrinkableNavItem";
import FeedPostAuthor from "../user/feedPostAuthor";
import ThreadPostItem from "./threadPost";

const FeedPostItem = (props: FullPost) => {
  const post = {...props};
  const author = {...props.author}

  return (
    <div className="rounded-3xl border border-gray-100 p-8 mb-4 shadow-2xl shadow-cyan-900/10  dark:border-gray-700 dark:bg-gray-800 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
      <div className="items-center gap-4">
        {author && 
          <FeedPostAuthor {...author} />
        }
        {post?.title && 
          <div className="border-t-slate-300 border border-l-0 border-r-0 border-b-0 mt-10 pt-5">
            {/* <>{post.postid}</> */}
            <h1 className="text-sky-500 dark:text-sky-300 font-extralight text-3xl ">
              {post.title}
            </h1>
          </div>
        }
        {post && post.subtitle && 
          <div>
            <h2 className="mt-5 p-2 bg-slate-800 italic text-slate-500">
              {QuoteLeftIcon} {post.subtitle}
            </h2>
          </div>
        }
      </div>
      {post && post.content && 
        <>
          <div className="mt-5 px-5 pb-5 text-justify border-b-[1px] border-slate-300 text-gray-600 dark:text-gray-400">
            {post.content}
            {/* <pre>
            {jsonify(post)}
            </pre> */}
          </div>
          <div
            className={`flex items-justify justify-between pt-2 mx-8 space-x-6 text-gray-300`}
          >
            <ShrinkableNavItem
              icon={HeartIcon}
              href={`/post/${post.postid}`}
              title="1265"
            />
            <ShrinkableNavItem
              icon={CommentIcon}
              href={`/post/${post.postid}`}
              title={post._count?.thread.toString()}
            />
            <ShrinkableNavItem
              icon={ShareIcon}
              href={`/post/${post.postid}`}
              title="48"
            />

            <Link
              className="mx-2 right-5 text-pink-300 underline"
              href={`/post/${post.postid}`}
            >
              Read More...
            </Link>
          </div>
        </>
      }
      {post?.thread && post.thread.map((p) => <ThreadPostItem {...p} key={p.postid} />)}
    </div>
  );
};

export default FeedPostItem;
