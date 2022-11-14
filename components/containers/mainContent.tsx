import { useEffect, useState } from "react";
import Spinner from "../ui/spinner";

import { getMainPosts, Post } from "./../../graphql/post/query";
import FeedItem from "./feedItem";

const MainContent = () => {
  const [posts, setPosts] = useState<Array<Post>>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () =>
    getMainPosts()
      .then((results:Array<Post>) => {
        if (results) {
          setPosts(results.map(p => new Post(p)))
          setIsLoading(false);
        }
      })
      .catch((e) => {
        console.error("fetchData FAIL", e);
        //set an error here....
      });
  fetchData();

  if (isLoading) return <Spinner height={4} width={4} />;

  return (
      <div className="mx-auto max-w-5xl px-8 lg:px-0">
        {posts.map((post) => (
          <FeedItem title={post.title} content={post.content} author={post.author} />
          ))}
      </div>
  );
};

export default MainContent;
