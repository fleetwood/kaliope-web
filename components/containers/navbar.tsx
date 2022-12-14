import { UserIcon, GearsIcon, HouseIcon } from "../ui/icons";
import { classnameProps } from "../../types/props";
import ShrinkableIconLink from "../ui/shrinkableIconLink";
import { UserSession } from "./../hooks/session";

const Navbar = ({ className }: classnameProps) => {
  const [user ] = UserSession();
  const navbarClass = "";

  return (
    <>
      <nav
        className={`${className} sticky top-0 border-b-[1px] bg-secondary border-b-secondary-content mx-auto flex max-w-5xl flex-col items-center justify-center z-50`}
      >
        <div
          className={`mx-auto max-w-5xl space-x-6 text-secondary-content mr-2 my-2 flex`}
        >
          <ShrinkableIconLink
            href="/"
            label="Home"
            icon={HouseIcon}
            className={navbarClass}
          />
          {!user && (
            <ShrinkableIconLink
              href="/login"
              label="Login"
              icon={UserIcon}
              className={navbarClass}
            />
          )}
          {user && (
            <ShrinkableIconLink
              href="/account"
              label="Account"
              icon={GearsIcon}
              className={navbarClass}
            />
          )}
          <select data-choose-theme>
            <option value="kaliope">Kaliope</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="cupcake">Cupcake</option>
            <option value="autumn">Autumn</option>
            <option value="retro">Retro</option>
            <option value="luxury">Luxury</option>
          </select>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
