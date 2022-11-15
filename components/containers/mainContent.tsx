import { Post } from "kaliope-types/models/post";
import { useEffect, useState } from "react";
import Spinner from "../ui/spinner";

import { mainFeed } from "../../graphql/post/mainFeed";
import FeedPost from "./posts/feedPost";

const MainContent = () => {
  const [posts, setPosts] = useState<Array<Post>>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () =>
    mainFeed()
      .then((results:Array<Post>) => {
        if (results) {
          setPosts(results)
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
        {posts.map((post) => <FeedPost post={post} />)}
      </div>
  );
};

export default MainContent;
