import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBookOpen, faComments, faUserGroup, faUsers } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { FullUser } from "../../../types/user/FullUser";
import { valToLabel } from "../../../utils/helpers";
import {FaIcon} from "../../ui/icons";
import { av, UserAvatar } from "../../ui/userAvatar";

const FeedPostDetails = (props: {className: string|null, icon: IconProp; label: string; value: number | null | undefined; }) => (
  <div className={`${props.className} uppercase font-peace flex space-x-0`}>
        <FaIcon icon={props.icon} className="hidden" />
        <div className="text-secondary-content text-opacity-30">
          {props.label}
        </div>
        <div className="text-secondary-content sticky ml-2">
          {valToLabel(props?.value||0)}
        </div>
  </div>
)

const FeedPostAuthor = (props: FullUser & {containerClass?:string}) => {
  // log('FeedPostAuthor',jsonify(props));

  return (
    <div className={`feed-author-container bg-secondary bg-opacity-50 rounded-t-3xl p-4 ${props.containerClass}`}>
      <div className="feed-author-avatar"><UserAvatar author={props} size={av.xl} /></div>
      <div className="feed-author-username">
        <Link
          href={`/user/${props.uid}`}
          className="flex justify-items-start space-x-0"
        >
          {props?.displayName && (
            <h3 className="text-3xl font-semibold text-base-100 relative bottom-0">
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
