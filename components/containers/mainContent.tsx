import { FormEvent, useEffect, useMemo, useState } from "react";
import { ResponseErrors, IErrorCode, convertToResponseError } from "../../utils/ResponseErrors";
import { __host__ } from "../../utils/constants";
import { PostFeedResponse } from "../../pages/api/post";
import { IFullPost } from "../../types/post/FullPost";
import PageStatus from "./pageStatus";
import FeedPostItem from "./posts/feedPost";
import { log } from "../../utils/helpers";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner, { SpinnerSize } from "../ui/spinner";
import { getApi, sendApi } from "../../utils/api";
import { FeatherPointedIcon } from "../ui/icons";
import ShrinkableIconButton from "../ui/shrinkableIconButton";
import { quote } from "../../utils/quotes";
import { DebounceInput } from "react-debounce-input";
import "react-quill/dist/quill.bubble.css";
import dynamic from "next/dynamic";
import UserSessionLayout from "../layouts/UserSession";
import { IFullUser } from "../../types/user/FullUser";
import parse from 'html-react-parser'

export default function MainContent(props?: PostFeedResponse) {
  const [user, setUser] = useState<IFullUser | undefined>();
  const [error, setError] = useState<IErrorCode>();
  const [posts, setPosts] = useState<Array<IFullPost>>([]);
  const [showCompose, setShowCompose] = useState(false);
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  // post data
  const [title, setTitle] = useState<string | null>(null);
  const [subtitle, setSubtitle] = useState<string | null>(null);
  const [header_image, setHeader_image] = useState<string | null>(null);
  const [content, setContent] = useState<string | null>(null);
  const [threadParentId, seThreadParentId] = useState<string | null>(null);

  const [placeholder, setPlaceholder] = useState<string>("");

  useEffect(() => {
    if (props?.results) {
      setPosts(props.results);
    } else {
      setError(ResponseErrors.postNotfound);
    }
  }, [props]);

  useEffect(() => {
    if (placeholder === "") setPlaceholder(quote()), [];
  });

  const update = async () => {
    const more = await getApi(`post?c=${posts.length || 0}`);
    if (more.posts) {
      let set = more.posts;
      setPosts((posts) => [...posts, ...set]);
    } else {
      log(`update return no results`);
    }
  };

  const showCancel = () => {
    if (showCompose) {
      setTitle(null);
      setSubtitle(null);
      setContent(null);
    }
    setShowCompose(!showCompose);
  };

  const sendPost = async (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (!user) {
      setError(ResponseErrors.loginRequired)
      return;
    }
    const post = await sendApi("/post/create", {
      title,
      subtitle,
      header_image,
      content,
      authorId: user!.profile!.id,
      threadParentId,
    });
    if (post.error) {
      setError(convertToResponseError(post.error))
    }
    setPosts([
      post,
      ...posts
    ])
  };

  return (
    <div className="mx-auto max-w-5xl px-8 lg:px-0">
      <div className="py-12 relative">
        <ShrinkableIconButton
          icon={FeatherPointedIcon}
          label={!showCompose ? "Compose" : "Cancel"}
          onClick={showCancel}
          className={`btn btn-primary text-primary-content px-4 py-2 absolute right-0 top-0`}
        />
        <UserSessionLayout setUser={setUser} setError={setError} required={false}>
          <form
                className={`pt-12 ${showCompose ? "block" : "hidden"}`}
                onSubmit={(e) => sendPost(e)}
              >
                {!user && <h2>Please login first</h2>}

            {user && (
              <>
                <label>Title</label>
                <DebounceInput
                  className="input input-bordered bg-base-200 w-full mb-2"
                  placeholder="[optional]"
                  minLength={2}
                  debounceTimeout={300}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label>Subtitle</label>
                <DebounceInput
                  className="input input-bordered bg-base-200 w-full mb-2"
                  placeholder="[optional]"
                  minLength={2}
                  debounceTimeout={300}
                  onChange={(e) => setSubtitle(e.target.value)}
                />
                <label>What will you say?</label>
                <ReactQuill
                  className="textarea textarea-bordered bg-base-200 w-full block mb-2"
                  theme="bubble"
                  placeholder={placeholder}
                  value={content || ""}
                  onChange={setContent}
                />
                <ShrinkableIconButton
                  icon={FeatherPointedIcon}
                  label="Post!"
                  onClick={() => sendPost}
                  className={`btn btn-primary text-primary-content px-4 py-2 absolute right-0`}
                />
            </>
            )}
          </form>
        </UserSessionLayout>
      </div>
      <div className="mt-6">
        <InfiniteScroll
          dataLength={posts.length}
          next={update}
          loader={<Spinner size={SpinnerSize.sm} />}
          hasMore={true}
        >
          {posts && posts.map((p) => <FeedPostItem {...p} key={p.postid} />)}
        </InfiniteScroll>
      </div>
      <PageStatus watch={posts} error={error} />
    </div>
  );
}
