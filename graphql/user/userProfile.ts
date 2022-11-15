import axios from "axios";
import { User } from "kaliope-types/models/user";

const query = `
query User($where: UserWhereUniqueInput!) {
    user(where: $where) {
      uid
      email
      emailVerified
      isAnonymous
      displayName
      photoURL
      createdAt
      lastLoginAt
      _count {
        posts
        comments
        books
        ratings
      }
      books {
        title
        cover
      }
      ratings {
        authorid
        bookid
        bookratingid
      }
      comments {
        bookid
        content
        commentid
        created_at
        updated_at
      }
      posts {
        postid
        authorId
        title
        subtitle
        content
        header_image
        created_at
        updated_at
      }
    }
  }
`
export const userProfile: (uid: string) => Promise<User> = async (
    uid: string
  ) => {
    const graphql = {
      query,
      variables: {
        where: {
          uid
        }
      },
    };
    try {
      const results = await (
        await axios.post("http://localhost:4001/graphql", graphql)
      ).data.data;
      if (results) {
        return results
      }
      console.log('NO RESULTS FOR USERPROFILE',JSON.stringify(graphql,null,2))
    } catch (e) {
      console.log('FAILED USERPROFILE',JSON.stringify(e,null,2))
      throw e;
    }
  };
  