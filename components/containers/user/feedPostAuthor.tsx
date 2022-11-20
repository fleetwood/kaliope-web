import { User } from "@prisma/client";
import Link from "next/link";
import { UserAvatar } from "../../ui/userAvatar";

export type feedPostAuthorProps = {
  author: User;
};

const FeedPostAuthor = (props: feedPostAuthorProps) => {
  const { author } = props;

  return (
    <div className="flex justify-between flex-col-12">
      <div className="flex col-auto">
        <Link
          href={`/user/${author.uid}`}
          className="flex justify-items-start space-x-2"
        >
          {author && <UserAvatar author={author} />}
          {author?.displayName && (
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white relative bottom-0">
              {author.displayName}
            </h3>
          )}
        </Link>
      </div>
      <div className="col-auto">
        <span>Follows {author?.followsGroup?.length}</span>
        <span>Followers {author?.followersGroup?.length}</span>
        <span>Posts </span>
        <span>Books {author?.followersGroup?.length}</span>
      </div>
      <div className="col-auto">...more</div>
    </div>
  );
};

export default FeedPostAuthor;
