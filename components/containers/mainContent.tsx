import { useEffect, useState } from "react";
import { FirebaseErrors, IFirebaseErrorCode } from "../../utils/FirebaseErrors";
import { __host__ } from "../../utils/constants";
import { PostFeedResponse } from "../../pages/api/post";
import PageStatus from "./pageStatus";
import FeedPostItem from "./posts/feedPost";
import { FullPost } from "../../pages/api/post/[postid]";
import { log } from "../../utils/helpers";

export default function MainContent(props?: PostFeedResponse) {
  const [posts, setPosts] = useState<Array<FullPost>>([]);
  const [error, setError] = useState<IFirebaseErrorCode>();
  const [cursor, setCursor] = useState<number>(1)

  useEffect(() => {
    if (props?.posts) {
      setPosts(props.posts);
      setCursor(props.posts.length+1)
      log('useEffect',`cursor: ${cursor}`,`props: ${props.posts.length}`)
    } else {
      setError(FirebaseErrors.postNotfound)
    }
  }, [props]);

  const addPosts = async() => {
    const results = await (await fetch(`http://${__host__}:3000/api/post${cursor?`?c=${cursor}`:``}`)).json()
    let concat = posts.concat(results.posts)
    setPosts(concat)
    setCursor(concat.length)
    console.log('cursor',cursor)
  }
  
  const loadMore = () => {
    log('loadMore',window.innerHeight + document.documentElement.scrollTop +1,document.scrollingElement?.scrollHeight)
      if (window.innerHeight + document.documentElement.scrollTop +1 >= document.scrollingElement?.scrollHeight!) {
        log('add posts!')
          addPosts()
      }
  }

  return (
    <div className="mx-auto max-w-5xl px-8 lg:px-0">
      {posts && posts.map((post) => <FeedPostItem post={post} key={post.postid} />)}
      <PageStatus watch={posts} error={error} />
      <button onClick={addPosts} className="bg-orange-600 hover:bg-orange-500 text-gray-200 hover:text-white p-2 w-full transition-colors duration-200 ease-in-out">
          Load More...
      </button>
    </div>
  );
};

