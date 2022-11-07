import Head from "next/head";
import { ReactNode } from "react";
import Footer from "../containers/Footer";
import LeftMenu from "../containers/leftMenu";
import Navbar from "../containers/navbar";
import SectionTitle from "../containers/sectionTitle";

export enum Layouts {
  MAIN= 'MAIN',
  LEFT_MENU = 'LEFTMENU',
}

type MainLayoutProps = {
  variant?: Layouts
  sectionTitle: String;
  pageTitle?: String;
  subTitle?: String;
  children?: ReactNode;
  className?: String
};

const MainLayout = ({
  variant,
  pageTitle,
  sectionTitle,
  subTitle,
  children,
  className
}: MainLayoutProps) => {
  const isMain = !variant || variant === Layouts.MAIN;
  const useLeftMenu = variant && variant === Layouts.LEFT_MENU;
  
  return (
  <div className={`m-auto text-gray-400 border-2 sm:border-red-300 lg:border-yellow-200 xl:border-emerald-300 ${className}`}>
    <Head>
      <title>{`Kaliope ${pageTitle || "[WEB]"}`}</title>
    </Head>
    <Navbar className="" />
    {useLeftMenu  && (
      <LeftMenu />
    )}
    {isMain && (
      <div className="py-1">
      <div className="col-span-3 mx-auto max-w-5xl py-8 md:py-16">
        <SectionTitle title={sectionTitle} subTitle={subTitle} />
      </div>
      <div className="mx-auto max-w-5xl px-8 lg:px-0">{children}</div>
    </div>
    )}
    <Footer className="" />
  </div>
)};
export default MainLayout;
