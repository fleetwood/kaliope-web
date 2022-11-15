import axios from "axios";
import { Post } from "kaliope-types/models/post";

const query = `
osts(where: $postsWhere, orderBy: $orderBy, take: $take) {
    content
    created_at
    header_image
    postid
    subtitle
    title
    updated_at
    author {
      displayName
      photoURL
    }
  }`;

export const userFeed: (authorId: string) => Promise<Array<Post>> = async (
  authorId: string
) => {
  const graphql = {
    query,
    variables: {
      orderBy: [
        {
          updated_at: "desc",
        },
      ],
      where: {
        authorId: {
          equals: authorId,
        },
      },
      take: 10,
    },
  };
  try {
    return await (
      await axios.post("http://localhost:4001/graphql", graphql)
    ).data.data.posts;
  } catch (e) {
    throw e;
  }
};
