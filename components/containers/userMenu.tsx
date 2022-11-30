import Link from "next/link";
import { AwesomeIcon, CircleQuestionIcon, ClipboardIcon } from "../ui/icons";
import { av, UserAvatar } from "../ui/userAvatar";
import ShrinkableNavItem from "./shrinkableNavItem";

const UserMenu = () => {
  const user = null;

  return (
  <div className="fixed mt-32">
    <ul className="ml-4 space-y-6 text-lg font-medium">
      {user && (
        <li>
          <Link href='./account'>
            <UserAvatar author={user} size={av.xxl} />
          </Link>
        </li>
        )}
      <li className="">
        <ShrinkableNavItem href={'/about'} target="_self" title="About Us" linkColor="secondary-content" icon={CircleQuestionIcon} />
      </li>
      <li className="">
        <ShrinkableNavItem href="https://hypercolor.dev/generator" target="_blank" title="Gradients" linkColor="secondary-content"  icon={ClipboardIcon} />
      </li>
      <li className="">
        <ShrinkableNavItem href="https://fontawesome.com/search?o=r&m=free" target="_blank" icon={AwesomeIcon} linkColor="secondary-content" title="FontAwesome" />
      </li>
    </ul>
  </div>
)};

export default UserMenu;
