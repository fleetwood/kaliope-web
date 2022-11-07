import { ClipboardIcon, CopyIcon } from "../../assets/icons";
import { HeroIcon } from "../../assets/svgs";
import ShrinkableNavItem from "./shrinkableNavItem";

const UserMenu = () => (
  <div>
    <ul className="mb-8 space-y-6 text-lg font-medium text-gray-700 dark:text-gray-200">
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
);

export default UserMenu;
