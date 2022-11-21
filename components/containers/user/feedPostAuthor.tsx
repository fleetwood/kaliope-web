import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBookOpen, faComments, faUserGroup, faUsers } from "@fortawesome/free-solid-svg-icons";
import { User } from "@prisma/client";
import Link from "next/link";
import { valToLabel } from "../../../utils/helpers";
import {FaIcon} from "../../ui/icons";
import { UserAvatar } from "../../ui/userAvatar";

export type feedPostAuthorProps = {
  author: User & {
    posts: number,
    followers: number,
    follows: number,
    books: number
  };
};

const FeedPostDetails = (props: {className: string|null, icon: IconProp; label: string; value: number | null | undefined; }) => (
  <div className={`${props.className} uppercase font-peace flex text-xl space-x-2 text-gray-300 hover-trigger`}>
        <FaIcon icon={props.icon} className="hover-toggle" />
        <div className="stroke-gray -ml-2 relative hover-target">
          {props.label}
        </div>
        <div className="text-green-200 sticky right-0 ">
          {valToLabel(props?.value||0)}
        </div>
  </div>
)

const FeedPostAuthor = (props: feedPostAuthorProps) => {
  const { author } = props;
  if (!author.posts) {
    
  }

  return (
    <div className="feed-author-container">
      <div className="feed-author-avatar">{author && <UserAvatar author={author} />}</div>
      <div className="feed-author-username">
        <Link
          href={`/user/${author.uid}`}
          className="flex justify-items-start space-x-2"
        >
          {author?.displayName && (
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white relative bottom-0">
              {author.displayName}
            </h3>
          )}
        </Link>
      </div>
      <FeedPostDetails className={"feed-author-follow"} icon={faUsers} label="Follows" value={author.follows} />
      <FeedPostDetails className={"feed-author-followers"} icon={faUserGroup} label="Followers" value={author.followers} />
      <FeedPostDetails className={"feed-author-books"} icon={faBookOpen} label="Books" value={author.books} />
      <FeedPostDetails className={"feed-author-posts"} icon={faComments} label="Posts" value={author.posts} />

    </div>
  );
};

export default FeedPostAuthor;
