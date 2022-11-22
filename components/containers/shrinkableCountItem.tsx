import React, { ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { Url } from "url";
import { count } from "console";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

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
  text-gray-200 
  hover:text-cyan-300
  transition-colors ease-linear duration-200
  flex space-x-1 ${className}
  `}>
    <span>{icon}</span>
    {title && (<span className={`hidden lg:inline-block ${titleClassName}`}>{`[${count}] ${title}`}</span>)}
  </Link>
)};

export default CountableNavItem