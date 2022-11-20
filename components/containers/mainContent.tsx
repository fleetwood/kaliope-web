import { useEffect, useState } from "react";
import { IFirebaseErrorCode } from "../../utils/FirebaseErrors";
import { __host__ } from "../../utils/constants";
import { PostFeedResponse } from "../../pages/api/post";
import PageStatus from "./pageStatus";
import FeedPostItem from "./posts/feedPost";
import { FullPost } from "../../pages/api/post/[postid]";

export default function MainContent(props?: PostFeedResponse) {
  const [posts, setPosts] = useState<Array<FullPost>>([]);
  const [error, setError] = useState<IFirebaseErrorCode>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(!props)
    if (props?.posts) {
      setError(undefined)
      setPosts(props.posts);
    } else {
      setError(props?.error || undefined);
    }
  }, [props]);

  return (
    <div className="mx-auto max-w-5xl px-8 lg:px-0">
      <PageStatus isLoading={isLoading} error={error} />

      {posts && posts.map((post) => <FeedPostItem post={post} key={post.postid} />)}
    </div>
  );
};

