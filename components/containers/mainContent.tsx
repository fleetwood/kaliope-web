import { useEffect, useState } from "react";
import Spinner from "../ui/spinner";
import FeedPost from "./posts/feedPost";
import { Post } from ".prisma/client";
import { log } from "../../utils/helpers";
import { FirebaseErrors, IFirebaseErrorCode } from "../../utils/FirebaseErrors";
import { __host__ } from "../../utils/constants";
import { IPostFeedResponse } from "../../pages/api/post";

export default function MainContent(props?: IPostFeedResponse) {
  const [posts, setPosts] = useState<Array<Post>>([]);
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
  }, [posts, error]);

  return (
    <div className="mx-auto max-w-5xl px-8 lg:px-0">
      {isLoading && <Spinner height={4} width={4} />}

      {error && (
        <div className="text-red-400 italic">
          {error.code}: {error.message}
        </div>
      )}

      {posts && posts.map((post) => <FeedPost post={post} />)}
    </div>
  );
};

