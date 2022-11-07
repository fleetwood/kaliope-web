import { ReactNode } from "react";
import FeedItem from "./feedItem";

type MainContentProps = {
  className?: string;
  children?: ReactNode;
};

const MainContent = ({ className, children }: MainContentProps) => (
  <div className={className}>
    <div className="mx-auto max-w-5xl px-8 lg:px-0">
      <FeedItem author="Bob" content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum corrupti vel odit natus iure nostrum, eveniet ipsum ad, cumque voluptatem tempore odio explicabo rem illo temporibus quibusdam dolorem neque ex."/>
      <FeedItem author="Bob" content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum corrupti vel odit natus iure nostrum, eveniet ipsum ad, cumque voluptatem tempore odio explicabo rem illo temporibus quibusdam dolorem neque ex."/>
      <FeedItem author="Bob" content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum corrupti vel odit natus iure nostrum, eveniet ipsum ad, cumque voluptatem tempore odio explicabo rem illo temporibus quibusdam dolorem neque ex."/>
    </div>
  </div>
);

export default MainContent;
