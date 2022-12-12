import { useEffect, useState } from "react";
import { ResponseErrors, IErrorCode } from "../../utils/ResponseErrors";
import { __host__ } from "../../utils/constants";
import { PostFeedResponse } from "../../pages/api/post";
import { IFullPost } from "../../types/post/FullPost";
import PageStatus from "./pageStatus";
import FeedPostItem from "./posts/feedPost";
import { log } from "../../utils/helpers";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner, { SpinnerSize } from "../ui/spinner";
import { getApi } from "../../utils/api";

export default function MainContent(props?: PostFeedResponse) {
  const [posts, setPosts] = useState<Array<IFullPost>>([]);
  const [error, setError] = useState<IErrorCode>();

  useEffect(() => {
    if (props?.results) {
      setPosts(props.results);
    } else {
      setError(ResponseErrors.postNotfound);
    }
  }, [props]);

  const update = async () => {
    const more = await getApi(`post?c=${posts.length||0}`)
    if (more.posts) {
      let set = more.posts
      setPosts((posts) => [...posts, ...set]);
    } else {
      log(`update return no results`)
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
          posts.map((p) => <FeedPostItem {...p} key={p.postid} />)}
      </InfiniteScroll>
      <PageStatus watch={posts} error={error} />
      
    </div>
  );
}
