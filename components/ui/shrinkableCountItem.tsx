import React from "react";
import Link, { LinkProps } from "next/link";

type CountableItemProps = LinkProps & {
  icon: JSX.Element
  count: Number
  title?: string
  target?: string
  className?: string
  iconClassName?: string
  titleClassName?: string
}

const CountableNavItem = (props:CountableItemProps) => {
  const { icon, count, href, title, target, className, iconClassName, titleClassName } = props;
  const t = target || "_self";

  return (

  <Link href={href} passHref target={t} className={`
  text-opacity-70
  text-secondary-content 
  hover:text-opacity-100
  transition-colors ease-linear duration-200
  flex space-x-1 ${className}
  `}>
    <span>{icon}</span>
    {title && (<span className={`hidden lg:inline-block ${titleClassName}`}>{`[${count}] ${title}`}</span>)}
  </Link>
)};

export default CountableNavItem