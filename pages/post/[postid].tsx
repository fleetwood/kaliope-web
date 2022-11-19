import { Post, Prisma, User } from "@prisma/client";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import FeedPostItem from "../../components/containers/posts/feedPost";
import Section from "../../components/containers/section";
import MainLayout from "../../components/layouts/MainLayout";
import { av, UserAvatar } from "../../components/ui/userAvatar";
import { __host__, __port__ } from "../../utils/constants";
import { FirebaseErrors, IFirebaseErrorCode } from "../../utils/FirebaseErrors";
import { jsonify } from "../../utils/helpers";
import { IPostResponse } from "../api/post/[postid]";

export const getServerSideProps: GetServerSideProps<
  IPostResponse | {}
> = async (ctx) => {
  const { postid } = ctx.query;

  if (postid) {
    const result = await (
      await fetch(`http://${__host__}:3000/api/post/${postid}`)
    ).json();
    return { props: { ...result } };
  }
  return { props: {} };
};

export default function PostPage(props?: IPostResponse) {
  const [post, setPost] = useState<
    | (Post & {
        author: User;
        posts: Post[];
      })
    | undefined
  >();
  const [error, setError] = useState<IFirebaseErrorCode>();

  useEffect(() => {
    if (props?.post) {
      setError(undefined);
      setPost(props.post);
    } else if (props?.error) {
      setError(props.error);
    } else {
      setError(FirebaseErrors.generic);
    }
  }, [post, error]);

  return (
    <MainLayout sectionTitle={""}>
      {error && (
        <div className="text-red-400 italic">
          {error.code}: {error.message}
        </div>
      )}
      {post && <UserAvatar author={post.author} size={av.xl} />}

      <div className="py-1">
        {post && (
          <Section
            sectionTitle={post?.title}
            subTitle={post?.subtitle || undefined}
          >
            <div className="text-yellow-100 italic">{post?.postid}</div>
            <>{post?.content}</>
          </Section>
        )}
      </div>
      <>
        <div>{post?.posts.length}</div>
        {post?.posts &&
          post.posts.length > 0 &&
          post.posts.map((p) => <FeedPostItem post={p} key={p.postid} />)}

        <pre>{jsonify(post)}</pre>
        <pre>{jsonify(post?.posts)}</pre>
      </>
    </MainLayout>
  );
}
