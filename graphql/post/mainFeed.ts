import axios from "axios";
import { Post } from "kaliope-types/models/post";

const query = `
query Posts($orderBy: [PostOrderByWithRelationInput!], $take: Int, $cursor: PostWhereUniqueInput) {
  posts(orderBy: $orderBy, take: $take, cursor: $cursor) {
    content
    created_at
    header_image
    postid
    updated_at
    title
    subtitle
    authorId
    author {
      uid
      email
      emailVerified
      isAnonymous
      displayName
      photoURL
      createdAt
      lastLoginAt
      _count {
        books
        ratings
        comments
        posts
      }
      books {
        bookid
        authorid
        cover
        created_at
        updated_at
        title
        description
        _count {
          book_ratings
          book_comments
        }
        book_ratings {
          bookratingid
          authorid
          bookid
          created_at
          updated_at
        }
        book_comments {
          commentid
          authorid
          created_at
          updated_at
          content
          bookid
        }
      }
      ratings {
        bookratingid
        authorid
        bookid
        created_at
        updated_at
        book {
          bookid
          authorid
          cover
          created_at
          updated_at
          title
          description
        }
      }
      comments {
        commentid
        authorid
        created_at
        updated_at
        content
        bookid
      }
      posts {
        postid
        created_at
        updated_at
        title
        subtitle
        header_image
        content
        authorId
      }
    }
  }
}`;

// export class PostAuthor {
//   uid!: string;
//   email!: string;
//   emailVerified?: boolean;
//   isAnonymous?: boolean;
//   displayName?: string;
//   photoURL?: string;

//   constructor(response: any) {
//     this.uid = response.uid;
//     this.email = response.email;
//     this.emailVerified = response.emailVerified;
//     this.isAnonymous = response.isAnonymous;
//     this.displayName = response.displayName;
//     this.photoURL = response.photoURL;
//   }
// }

// export class Post {
//   postid!: string;
//   created_at!: string;
//   updated_at!: string;
//   title!: string;
//   subtitle?: string;
//   header_image?: string;
//   content!: string;
//   authorId!: string;
//   author!: PostAuthor;

//   constructor(response: any) {
//     this.postid = response.postid;
//     this.created_at = response.created_at;
//     this.updated_at = response.updated_at;
//     this.title = response.title;
//     this.subtitle = response.subtitle;
//     this.content = response.content;
//     this.header_image = response.header_image;
//     this.author = new PostAuthor(response.author);
//     this.authorId = response.authorId
//   }
// }
export const mainFeed: () => Promise<Array<Post>> = async () => {
  const graphql = {
    query,
    variables: {
      orderBy: [
        {
          updated_at: "desc",
        },
      ],
      take: 10,
    },
  };
  try {
    return await (await axios.post("http://localhost:4001/graphql", graphql)).data.data.posts;
  } catch (e) {
    throw e;
  }
};
