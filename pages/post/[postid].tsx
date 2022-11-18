import { User } from "@prisma/client";
import { subtle } from "crypto";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import MainLayout from "../../components/layouts/MainLayout";
import { av, UserAvatar } from "../../components/ui/userAvatar";
import { __host__, __port__ } from "../../utils/constants";
import {
  FirebaseErrors,
  IFirebaseErrorCode,
} from "../../utils/FirebaseErrors";
import { jsonify } from "../../utils/helpers";
import { FullPost, IPostResponse } from "../api/post/[postid]";

export const getServerSideProps: GetServerSideProps<IPostResponse|{}> = async (ctx) => {
  const { postid } = ctx.query;

  if (postid) {
    const result = await (await fetch(`http://${__host__}:3000/api/post/${postid}`)).json();
    return { props: { ...result } };
  }
  return { props: {} };
};

export default function PostPage(props?: IPostResponse) {
  const [post, setPost] = useState<FullPost | undefined>();
  const [error, setError] = useState<IFirebaseErrorCode>();

  useEffect(() => {
    if (props?.post) {
      setError(undefined);
      setPost(props.post);
    } else if (props?.error) {
      setError(props.error);
    } else {
        setError(FirebaseErrors.generic)
    }
  }, [post, error]);

  return (
    <MainLayout
      sectionTitle={post?.title || "User Profile"}
      subTitle={post?.subtitle||undefined}
    >
      {error && (
        <div className="text-red-400 italic">
          {error.code}: {error.message}
        </div>
      )}
      {post && (
        <div>
          <UserAvatar author={post.author} size={av.xxl} />
          {post.content}
        </div>
      )}
    </MainLayout>
  );
}
