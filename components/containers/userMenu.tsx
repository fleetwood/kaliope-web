import Link from "next/link";
import { ClipboardIcon, CopyIcon } from "../../assets/icons";
import { HeroIcon } from "../../assets/svgs";
import { UserAuth } from "../../firebase/AuthContext";
import { av, UserAvatar } from "../dynamicElements/userAvatar";
import ShrinkableNavItem from "./shrinkableNavItem";

const UserMenu = () => {
  const {user} = UserAuth();

  return (
  <div className="fixed mt-32">
    <ul className="mb-8 space-y-6 text-lg font-medium text-gray-700 dark:text-gray-200">
      {user && (
        <li>
          <Link href='./account'>
            <UserAvatar size={av.sm} />
          </Link>
        </li>
        )}
      <li className="">
        <ShrinkableNavItem href={'#'} title="Blocks" target="_blank" icon={CopyIcon} />
      </li>
      <li className="">
        <ShrinkableNavItem href="https://hypercolor.dev/generator" target="_blank" title="Gradients" icon={ClipboardIcon} />
      </li>
      <li className="">
        <ShrinkableNavItem href="https://heroicons.com" target="_blank" icon={HeroIcon} />
      </li>
    </ul>
  </div>
)};

export default UserMenu;
