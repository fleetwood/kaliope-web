import React, { ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { Url } from "url";

type ShrinkableNavItemProps = LinkProps & {
  icon: JSX.Element
  title?: string
  target?: string
  className?: string
  iconClassName?: string
  titleClassName?: string
}

const ShrinkableNavItem = (props:ShrinkableNavItemProps) => {
  const { icon, href, title, target, className, iconClassName, titleClassName } = props;
  const t = target || "_self";
  return (

  <Link href={href} passHref target={t} className={`
  text-sky-200 
  hover:text-gray-200
  hover:shadow
  rounded-3xl p-2
  transition-colors ease-linear duration-200
  flex space-x-1 ${className}
  `}>
      <span className={iconClassName}>{icon}</span>
      {title && (<span className={`hidden lg:inline-block ${titleClassName}`}>{title}</span>)}
  </Link>
)};

export default ShrinkableNavItem