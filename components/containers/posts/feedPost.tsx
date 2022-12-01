import Link from "next/link";
import { IFullPost } from "../../../types/post/FullPost";
import {
  CommentIcon,
  HeartIcon,
  QuoteLeftIcon,
  ShareIcon,
} from "../../ui/icons";
import ShrinkableNavItem from "../shrinkableNavItem";
import FeedPostAuthor from "../user/feedPostAuthor";
import ThreadPostItem from "./threadPost";

const FeedPostItem = (props: IFullPost) => {
  const post = {...props};
  const author = {...props.author}

  return (
    <div className="rounded-3xl mb-4 border border-base-300 bg-gradient-to-r from-base-300 via-base-200 to-base-300">
      <div className="items-center gap-4">
        {author && 
          <FeedPostAuthor {...props.author} containerClass="border-b border-b-secondary-content" />
        }
        {post?.title && 
          <div className="mt-5 p-5">
            {/* <>{post.postid}</> */}
            <h1 className="text-secondary font-extralight text-3xl ">
              {post.title}
            </h1>
          </div>
        }
        {post && post.subtitle && 
          <div>
            <h2 className="mx-5 p-5 bg-secondary bg-opacity-50 italic text-secondary-content">
              {QuoteLeftIcon} {post.subtitle}
            </h2>
          </div>
        }
      </div>
      {post && post.content && 
        <>
          <div className="m-5 text-justify text-primary-content border-b border-primary-content border-opacity-50">
            {post.content}
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
      {post?.thread && post.thread.map((p) => <ThreadPostItem {...p} containerClass="border-t border-secondary-content border-opacity-30 " key={p.postid} />)}
      <>&nbsp;</>
    </div>
  );
};

export default FeedPostItem;
