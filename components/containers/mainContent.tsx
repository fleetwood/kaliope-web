import { useEffect, useState } from "react";
import Spinner from "../ui/spinner";
import FeedPost from "./posts/feedPost";
import { Post } from ".prisma/client";
import { log } from "../../utils/helpers";

const MainContent = (props: { posts?: Post[] }) => {
  const [posts, setPosts] = useState<Array<Post>>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (props.posts) {
      setPosts(props.posts)
      setIsLoading(false)
    }
  }, [posts])

  if (isLoading) return <Spinner height={4} width={4} />;

  return (
      <div className="mx-auto max-w-5xl px-8 lg:px-0">
        {posts.map((post) => <FeedPost post={post} />)}
      </div>
  );
};

export async function getServerSideProps() {
  log('MAIN SSP')
  const posts = await (await fetch('/api/post')).json()

  return {
    props: {
      posts,
    },
  };
}

export default MainContent;
