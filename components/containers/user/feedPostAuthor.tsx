import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBookOpen, faComments, faUserGroup, faUsers } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { FullUser } from "../../../types/user/FullUser";
import { valToLabel } from "../../../utils/helpers";
import {FaIcon} from "../../ui/icons";
import { UserAvatar } from "../../ui/userAvatar";

const FeedPostDetails = (props: {className: string|null, icon: IconProp; label: string; value: number | null | undefined; }) => (
  <div className={`${props.className} uppercase font-peace flex text-xl space-x-2 text-gray-300`}>
        <FaIcon icon={props.icon} className="hidden" />
        <div className="stroke-gray -ml-2 relative">
          {props.label}
        </div>
        <div className="text-green-200 sticky right-0 ">
          {valToLabel(props?.value||0)}
        </div>
  </div>
)

const FeedPostAuthor = (props: FullUser) => {
  // log('FeedPostAuthor',jsonify(props));

  return (
    <div className="feed-author-container">
      <div className="feed-author-avatar"><UserAvatar author={props} /></div>
      <div className="feed-author-username">
        <Link
          href={`/user/${props.uid}`}
          className="flex justify-items-start space-x-2"
        >
          {props?.displayName && (
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white relative bottom-0">
              {props.displayName}
            </h3>
          )}
        </Link>
      </div>
      <FeedPostDetails className={"feed-author-follow"} icon={faUsers} label="Follows" value={0} />
      <FeedPostDetails className={"feed-author-followers"} icon={faUserGroup} label="Followers" value={0} />
      <FeedPostDetails className={"feed-author-books"} icon={faBookOpen} label="Books" value={props._count?.books} />
      <FeedPostDetails className={"feed-author-posts"} icon={faComments} label="Posts" value={props._count?.posts} />

    </div>
  );
};

export default FeedPostAuthor;
