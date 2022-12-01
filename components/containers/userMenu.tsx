import Link from "next/link";
import { useState, useEffect } from "react";
import { useSession } from "../../lib/next-auth-react-query";
import { IFullUser } from "../../types/user/FullUser";
import { UserSession } from "../hooks/session";
import { AwesomeIcon, CircleQuestionIcon, ClipboardIcon } from "../ui/icons";
import { GoogleSVG } from "../ui/svgs";
import { av, UserAvatar } from "../ui/userAvatar";
import ShrinkableNavItem from "./shrinkableNavItem";

const UserMenu = () => {
  const [user] = UserSession()

  return (
  <div className="fixed mt-32">
    <ul className="ml-4 space-y-6 text-lg font-medium">
      {user && (
        <li>
          <Link href='./account'>
            {user.name}
            <UserAvatar user={user as IFullUser} size={av.xxl} />
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
      <li className="">
        <Link href="https://materialdesignicons.com/" title="Material Icons"><GoogleSVG /></Link>
      </li>
    </ul>
  </div>
)};

export default UserMenu;
