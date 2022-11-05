import Head from "next/head";
import { ReactNode } from "react";
import Footer from "../containers/Footer";
import Navbar from "../containers/navbar";
import SectionTitle from "../containers/sectionTitle";

type MainLayoutProps = {
  pageTitle?: String;
  sectionTitle: String;
  subTitle?: String;
  children?: ReactNode;
  className?: String
};

const MainLayout = ({
  pageTitle,
  sectionTitle,
  subTitle,
  children,
  className
}: MainLayoutProps) => (
  <div className={`m-auto border-2 sm:border-red-300 lg:border-yellow-200 xl:border-emerald-300 ${className}`}>
    <Head>
      <title>{`Kaliope ${pageTitle || "[WEB]"}`}</title>
    </Head>
    <Navbar className="" />
    <div className="py-1">
      <div className="col-span-3 mx-auto max-w-5xl py-8 md:py-16">
        <SectionTitle title={sectionTitle} subTitle={subTitle} />
      </div>
      <div className="mx-auto max-w-5xl px-8 lg:px-0">{children}</div>
    </div>
    <Footer className="" />
  </div>
);
export default MainLayout;
