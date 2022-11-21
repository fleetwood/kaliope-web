import { useEffect, useState } from "react";
import { FirebaseErrors, IFirebaseErrorCode } from "../../utils/FirebaseErrors";
import { __host__ } from "../../utils/constants";
import { PostFeedResponse } from "../../pages/api/post";
import PageStatus from "./pageStatus";
import FeedPostItem from "./posts/feedPost";
import { FullPost } from "../../pages/api/post/[postid]";
import { log } from "../../utils/helpers";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner, { SpinnerSize } from "../ui/spinner";

export default function MainContent(props?: PostFeedResponse) {
  const [posts, setPosts] = useState<Array<FullPost>>([]);
  const [error, setError] = useState<IFirebaseErrorCode>();
  // const [cursor, setCursor] = useState<number>()

  useEffect(() => {
    if (props?.posts) {
      setPosts(props.posts);
    } else {
      setError(FirebaseErrors.postNotfound);
    }
  }, [props]);

  const update = async () => {
    const url = `http://${__host__}:3000/api/post?c=${posts.length||0}`
    const results = await fetch(url)
    const more = await results.json()
    if (more.posts) {
      let set = more.posts
      log('update',url,set.length,set[0]?.postid)
      setPosts((posts) => [...posts, ...set]);
      // setCursor(posts.length+1)
    } else {
      log(`update return no results from: ${url}`)
    }
  }

  return (
    <div className="mx-auto max-w-5xl px-8 lg:px-0">
      <InfiniteScroll
        dataLength={posts.length}
        next={update}
        loader={<Spinner size={SpinnerSize.sm} />}
        hasMore={true}
      >
        {posts &&
          posts.map((p) => <FeedPostItem post={p} key={p.postid} />)}
      </InfiniteScroll>

      <PageStatus watch={posts} error={error} />
      <button
        onClick={update}
        className="bg-orange-600 hover:bg-orange-500 text-gray-200 hover:text-white p-2 w-full transition-colors duration-200 ease-in-out"
      >
        Load More...
      </button>
    </div>
  );
}
