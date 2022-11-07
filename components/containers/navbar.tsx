import { UserIcon, GearsIcon, HouseIcon } from "../../assets/icons";
import { classnameProps } from "../../types/props";
import { UserAuth } from "../../firebase/AuthContext";
import ShrinkableNavItem from "./shrinkableNavItem";

const Navbar = ({ className }: classnameProps) => {
  const { user } = UserAuth();
  const navbarClass = ''

  return (
    <nav
      className={`${className} sticky top-0 border-b-[1px] bg-gray-800 border-gray-700 mx-auto flex max-w-5xl flex-col items-center justify-center`}
    >
      <div
        className={`mx-auto max-w-5xl space-x-6 text-gray-300 mr-2 my-2 flex`}
      >
        <ShrinkableNavItem href="./" title="Home" icon={HouseIcon}  className={navbarClass} />
        {!user && (
          <ShrinkableNavItem href="./login" title="Login" icon={UserIcon}  className={navbarClass} />
        )}
        {user && (
          <ShrinkableNavItem href="./account" title="Account" icon={GearsIcon} className={navbarClass}  />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
