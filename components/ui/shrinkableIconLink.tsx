import React, { ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { Url } from "url";

type ShrinkableIconLinkProps = LinkProps & {
  icon: JSX.Element
  label?: string
  target?: string
  className?: string
  iconClassName?: string
  titleClassName?: string
  linkColor?: string
}

const ShrinkableIconLink = (props:ShrinkableIconLinkProps) => {
  const { icon, href, label: title, target, className, iconClassName, titleClassName, linkColor } = props;
  const t = target || "_self";
  return (

  <Link href={href} passHref target={t} className={`
  ${linkColor || 'text-secondary-content'}
  text-opacity-70
  hover:text-opacity-100
  hover:shadow
  rounded-3xl p-2
  transition-colors ease-linear duration-200
  flex space-x-1 ${className||''}
  `}>
      <span className={iconClassName}>{icon}</span>
      {title && (<span className={`hidden lg:inline-block ${titleClassName||''}`}>{title}</span>)}
  </Link>
)};

export default ShrinkableIconLink