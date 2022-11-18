import { User } from "@prisma/client";
import Link from "next/link";
import { UserAvatar } from "../../ui/userAvatar";

export type feedPostAuthorProps = {
  author: User;
};

const FeedPostAuthor = (props: feedPostAuthorProps) => {
  const { author } = props;

  return (
    <div className="flex justify-between">
      <div className="col-auto">
        <Link
          href={`/user/${author.uid}`}
          className="flex justify-items-start space-x-2"
        >
          {author && <UserAvatar author={author} />}
          {author?.displayName && (
            <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">
              {author.displayName}
            </h3>
          )}
        </Link>
      </div>
      <div className="col-auto">...more</div>
    </div>
  );
};

export default FeedPostAuthor;
