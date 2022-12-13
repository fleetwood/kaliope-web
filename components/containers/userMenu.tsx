import Link from "next/link";
import { IFullUser } from "../../types/user/FullUser";
import { UserSession } from "../hooks/session";
import { AwesomeIcon, CircleQuestionIcon, ClipboardIcon } from "../ui/icons";
import { GoogleSVG } from "../ui/svgs";
import { av, UserAvatar } from "../ui/userAvatar";
import ShrinkableIconLink from "../ui/shrinkableIconLink";

const UserMenu = () => {
  const [user] = UserSession()

  return (
  <div className="fixed mt-32">
    <ul className="ml-4 space-y-6 text-lg font-medium">
      {user && (
        <li>
          <Link href='./account'>
            <UserAvatar user={user as IFullUser} size={av.xxl} />
          </Link>
        </li>
        )}
      <li className="">
        <ShrinkableIconLink href={'/about'} target="_self" label="About Us" linkColor="secondary-content" icon={CircleQuestionIcon} />
      </li>
      <li className="">
        <ShrinkableIconLink href="https://hypercolor.dev/generator" target="_blank" label="Gradients" linkColor="secondary-content"  icon={ClipboardIcon} />
      </li>
      <li className="">
        <ShrinkableIconLink href="https://fontawesome.com/search?o=r&m=free" target="_blank" icon={AwesomeIcon} linkColor="secondary-content" label="FontAwesome" />
      </li>
      <li className="">
        <Link href="https://materialdesignicons.com/" title="Material Icons"><GoogleSVG /></Link>
      </li>
    </ul>
  </div>
)};

export default UserMenu;
