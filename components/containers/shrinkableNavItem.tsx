import React, { ReactNode } from "react";
import Link from "next/link";

type ShrinkableNavItemProps = {
  icon: JSX.Element
  href: any
  title?: string
  target?: string
  className?: string
  iconClassName?: string
  titleClassName?: string
}

const ShrinkableNavItem = ({ icon, href, title, target, className, iconClassName, titleClassName }:ShrinkableNavItemProps) => {
  const t = target || "_self";
  return (

  <Link href={href} passHref target={t} className={`
  text-gray-200 
  hover:text-cyan-300
  transition-colors ease-linear duration-200
  flex space-x-1 ${className}
  `}>
      <span className={iconClassName}>{icon}</span>
      {title && (<span className={`hidden lg:inline-block ${titleClassName}`}>{title}</span>)}
  </Link>
)};

export default ShrinkableNavItem