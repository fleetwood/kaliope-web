import Link from "next/link";
import { AwesomeIcon, CircleQuestionIcon, ClipboardIcon, CopyIcon } from "../../assets/icons";
import { HeroIcon } from "../../assets/svgs";
import { UserAuth } from "../../firebase/AuthContext";
import { av, UserAvatar } from "../dynamicElements/userAvatar";
import ShrinkableNavItem from "./shrinkableNavItem";

const UserMenu = () => {
  const {user} = UserAuth();

  return (
  <div className="fixed mt-32">
    <ul className="ml-4 space-y-6 text-lg font-medium text-gray-700 dark:text-gray-200">
      {user && (
        <li>
          <Link href='./account'>
            <UserAvatar size={av.sm} />{user.displayName ? user.displayName : ''}
          </Link>
        </li>
        )}
      <li className="">
        <ShrinkableNavItem href={'/about'} target="_self" title="About Us" icon={CircleQuestionIcon} />
      </li>
      <li className="">
        <ShrinkableNavItem href="https://hypercolor.dev/generator" target="_blank" title="Gradients" icon={ClipboardIcon} />
      </li>
      <li className="">
        <ShrinkableNavItem href="https://fontawesome.com/search?o=r&m=free" target="_blank" icon={AwesomeIcon} title="FontAwesome" />
      </li>
    </ul>
  </div>
)};

export default UserMenu;
