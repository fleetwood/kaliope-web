import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import {
  faFontAwesome,
  faCoffee,
  faHouse,
  faUser,
  faUsers,
  faBookOpen,
  faUserPlus,
  faUserGroup,
  faGears,
  faClipboard,
  faCopy,
  faCircleQuestion,
  faQuoteLeft,
  faShare,
  faStar,
  faHeart,
  faComment,
  faComments,
  faMessage
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export const CoffeeIcon = <FontAwesomeIcon icon={faCoffee} />;
export const HouseIcon = <FontAwesomeIcon icon={faHouse} />;
export const UserIcon = <FontAwesomeIcon icon={faUser} />;
export const GearsIcon = <FontAwesomeIcon icon={faGears} />;
export const ClipboardIcon = <FontAwesomeIcon icon={faClipboard} />;
export const CopyIcon = <FontAwesomeIcon icon={faCopy} />;
export const AwesomeIcon = <FontAwesomeIcon icon={faFontAwesome} />;
export const CircleQuestionIcon = <FontAwesomeIcon icon={faCircleQuestion} />;
export const QuoteLeftIcon = <FontAwesomeIcon icon={faQuoteLeft} />;
export const ShareIcon = <FontAwesomeIcon icon={faShare} />;
export const StarIcon = <FontAwesomeIcon icon={faStar} />;
export const HeartIcon = <FontAwesomeIcon icon={faHeart} />;
export const AddUserIcon = <FontAwesomeIcon icon={faUserPlus} />;
export const MessageIcon = <FontAwesomeIcon icon={faMessage} />;

export const CommentIcon = <FontAwesomeIcon icon={faComment} />;
export const FollowsIcon = <FontAwesomeIcon icon={faUserGroup} />;
export const FollowersIcon = <FontAwesomeIcon icon={faUsers} />;
export const BooksIcon = <FontAwesomeIcon icon={faBookOpen} />
export const PostsIcon = <FontAwesomeIcon icon={faComments} />

export const UserGroupIcon = "Reserved for Follows icon"
export const UsersIcon = "Reserved for Followers icon";

export const FaIcon = (props: FontAwesomeIconProps) => (
  <FontAwesomeIcon icon={props.icon} className={props.className} />
)