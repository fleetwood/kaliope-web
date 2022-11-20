import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import PageStatus from "../../components/containers/pageStatus";
import FeedPostItem from "../../components/containers/posts/feedPost";
import ThreadPostItem from "../../components/containers/posts/threadPost";
import Section from "../../components/containers/section";
import MainLayout from "../../components/layouts/MainLayout";
import { av, UserAvatar } from "../../components/ui/userAvatar";
import { __host__, __port__ } from "../../utils/constants";
import { jsonify } from "../../utils/helpers";
import { FullPost, FullPostResponse } from "../api/post/[postid]";

export const getServerSideProps: GetServerSideProps<
  FullPostResponse | {}
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

export default function PostPage(props?: FullPostResponse) {
  const [post, setPost] = useState<(FullPost) | undefined>();

  useEffect(() => {
    if(props?.post) {
      setPost(props.post)
    }
  },[post])

  return (
    <MainLayout sectionTitle={""}>
      <PageStatus error={props?.error} watch={post} />
      
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
        <pre>Thread count: {jsonify(post?._count.thread)}</pre>
        {post?.thread &&
          post.thread.map((p) => <ThreadPostItem {...p} />)}

        <pre>{jsonify(post?.thread)}</pre>
      </>
    </MainLayout>
  );
}
