import Head from "next/head";
import { ReactNode } from "react";
import UserMenu from "../containers/userMenu";
import Navbar from "../containers/navbar";
import Section from "../containers/section";
import Footer from "../containers/footer";

import { UserAuth } from "../../firebase/AuthContext";

export enum Layouts {
  MAIN = "MAIN",
  LEFT_MENU = "LEFTMENU",
}

type MainLayoutProps = {
  variant?: Layouts;
  sectionTitle: String;
  pageTitle?: String;
  subTitle?: String;
  children?: ReactNode;
  className?: String;
};

const MainLayout = ({
  variant,
  pageTitle,
  sectionTitle,
  subTitle,
  children,
  className,
}: MainLayoutProps) => {
  const isMain = !variant || variant === Layouts.MAIN;
  const useLeftMenu = variant && variant === Layouts.LEFT_MENU;
  const {user} = UserAuth()

  return (
    <div className={`
    max-w-7xl mx-auto 
    grid grid-cols-12
    text-gray-400 
    border-2 sm:border-red-300 lg:border-yellow-200 xl:border-emerald-300 
    ${className}`
    }>
      <Head>
        <title>{`Kaliope ${pageTitle || "[WEB]"}`}</title>
      </Head>
      <div className="col-span-2">
        {user && (
          <UserMenu />
        )}
      </div>
      <div className="col-span-8">
        <Navbar className="" />
        {useLeftMenu && <UserMenu />}
        {isMain && (
          <div className="py-1">
            <Section sectionTitle={sectionTitle} subTitle={subTitle}>
              {children}
            </Section>
          </div>
        )}
        <Footer className="" />
      </div>
      <div className="col-span-2 mr-0 text-right"></div>
    </div>
  );
};
export default MainLayout;
