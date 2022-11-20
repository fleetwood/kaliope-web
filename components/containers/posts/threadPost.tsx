import { Post, User } from "@prisma/client";
import Link from "next/link";
import { CommentIcon, HeartIcon, QuoteLeftIcon, ShareIcon } from "../../ui/icons";
import ShrinkableNavItem from "../shrinkableNavItem";
import FeedPostAuthor from "../user/feedPostAuthor";

export type ThreadPostItemType = Post & {
  author: User;
}

const ThreadPostItem = (props: ThreadPostItemType) => {

  return (
    <div className="border border-gray-300 px-6 py-4 shadow-2xl text-gray-500 shadow-cyan-900/10  dark:border-gray-800 even:bg-gray-900 odd:bg-slate-900">
      <div className="items-center gap-4">
        {"author" in props  && props?.author && <FeedPostAuthor author={props.author} />}
        {/* {props?.title && 
          <div className="border-t-slate-300 border border-l-0 border-r-0 border-b-0 mt-10 pt-5">
            <h1 className="text-sky-500 dark:text-sky-300 font-extralight text-3xl ">
              {props.title}
            </h1>
          </div>
        }
        {props && props.subtitle && 
          <div>
            <h2 className="mt-5 p-2 bg-slate-800 italic text-slate-500">
             {QuoteLeftIcon} {props.subtitle}
            </h2>
          </div>
        } */}
      </div>
      {props && props.content && 
        <>
          <div className="mt-5 px-5 pb-5 text-justify border-b-[1px] border-slate-300">
            {props.content}
          </div>
          <div className={`flex items-justify justify-between pt-2 space-x-4 text-gray-300 text-sm`}>
          <ShrinkableNavItem icon={HeartIcon} href={`/props/${props.postid}`} title="1265" />
          {/* <ShrinkableNavItem icon={CommentIcon} href={`/props/${props.postid}`} title={thread} /> */}
          <ShrinkableNavItem icon={ShareIcon} href={`/props/${props.postid}`} title="48" />
                      
            <Link
              className="mx-2 right-5 text-pink-300 underline"
              href={`/post/${props.postid}`}
            >
              Read More...
            </Link>
          </div>
        </>
      }
    </div>
  );
};

export default ThreadPostItem;
