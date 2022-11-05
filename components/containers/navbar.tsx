import Link from "next/link";
import HomeIcon from "../../assets/icons/home";
import UserIcon from "../../assets/icons/user";
import IdCard from "../../assets/icons/id-card";
import { classnameProps } from "../../types/props";

const Navbar = ({ className }: classnameProps) => (
  <nav
    className={`${className} border-b-[1px] border-gray-700 pb-4 mt-2 relative mx-auto flex max-w-5xl flex-col items-center justify-center px-12 sm:px-6 lg:px-0`}
  >
    <div className={`mx-auto max-w-5xl space-x-6 text-gray-300 mr-0 flex`}>
      <Link href="./" className="flex space-x-1">
        <HomeIcon />
        <span>Home</span>
      </Link>
      <Link href="./login" className="flex space-x-1">
        <UserIcon />
        <span>Login</span>
      </Link>
      <Link href="./account" className="flex space-x-1">
        <IdCard />
        <span>Account</span>
      </Link>
    </div>
  </nav>
);

export default Navbar;
