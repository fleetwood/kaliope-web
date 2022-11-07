import React, { ReactNode } from "react";
import Link from "next/link";

type ShrinkableNavItemProps = {
  icon: JSX.Element
  href: any
  title?: string
  target?: string
}

const ShrinkableNavItem = ({ icon, href, title, target }:ShrinkableNavItemProps) => (
  <Link href={href} passHref target={target || "_self"} className="flex space-x-1">
    <>
      {icon}
      {title && (<span className="hidden lg:inline-block">{title}</span>)}
    </>
  </Link>
);

export default ShrinkableNavItem