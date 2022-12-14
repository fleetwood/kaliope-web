import {
  faBookOpen, faCircleQuestion, faCircleXmark, faClipboard, faCoffee, faComment,
  faComments, faCopy, faEye, faFeatherPointed, faFontAwesome, faGears, faHeart, faHouse, faLeftLong, faMessage, faQuoteLeft, faRightLong, faShare,
  faStar, faUser, faUserGroup, faUserPlus, faUsers
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export const AddUserIcon = <FontAwesomeIcon icon={faUserPlus} />;
export const AwesomeIcon = <FontAwesomeIcon icon={faFontAwesome} />;
export const CircleQuestionIcon = <FontAwesomeIcon icon={faCircleQuestion} />;
export const ClipboardIcon = <FontAwesomeIcon icon={faClipboard} />;
export const CoffeeIcon = <FontAwesomeIcon icon={faCoffee} />;
export const CopyIcon = <FontAwesomeIcon icon={faCopy} />;
export const EyeIcon = <FontAwesomeIcon icon={faEye} />;
export const FeatherPointedIcon = <FontAwesomeIcon icon={faFeatherPointed} />;
export const GearsIcon = <FontAwesomeIcon icon={faGears} />;
export const HeartIcon = <FontAwesomeIcon icon={faHeart} />;
export const HouseIcon = <FontAwesomeIcon icon={faHouse} />;
export const LeftLongIcon = <FontAwesomeIcon icon={faLeftLong} />;
export const MessageIcon = <FontAwesomeIcon icon={faMessage} />;
export const QuoteLeftIcon = <FontAwesomeIcon icon={faQuoteLeft} />;
export const RightLongIcon = <FontAwesomeIcon icon={faRightLong} />;
export const ShareIcon = <FontAwesomeIcon icon={faShare} />;
export const StarIcon = <FontAwesomeIcon icon={faStar} />;
export const UserIcon = <FontAwesomeIcon icon={faUser} />;
export const XCircleIcon = <FontAwesomeIcon icon={faCircleXmark} />;

export const BooksIcon = <FontAwesomeIcon icon={faBookOpen} />
export const CommentIcon = <FontAwesomeIcon icon={faComment} />;
export const FollowsIcon = <FontAwesomeIcon icon={faUserGroup} />;
export const FollowersIcon = <FontAwesomeIcon icon={faUsers} />;
export const PostsIcon = <FontAwesomeIcon icon={faComments} />

export const UserGroupIcon = "Reserved for Follows icon"
export const UsersIcon = "Reserved for Followers icon";

export const FaIcon = (props: FontAwesomeIconProps) => (
  <FontAwesomeIcon icon={props.icon} className={props.className} />
)