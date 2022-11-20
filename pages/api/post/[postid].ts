import { Prisma } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/prismaContext";
import {
  convertToFirebaseError,
  FirebaseErrors,
  IErrorResponse,
} from "../../../utils/FirebaseErrors";
import { logError } from "../../../utils/helpers";

export const FullPostRelations = Prisma.validator<Prisma.PostArgs>()({
    include: {
        _count: {
            select: {thread: true}
        },
      author: true,
      thread: {
        include: {
            author: true
        }
      }
    }
})

export type FullPost = Prisma.PostGetPayload<typeof FullPostRelations>

export type FullPostResponse = IErrorResponse & {
  post?: FullPost
};

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<FullPostResponse | null>
) {
  const postid = req.query.postid;
  let error = FirebaseErrors.postNotfound;
  if (postid) {
    try {
      const post = await prisma.post.findUnique({
        ...FullPostRelations,
        where: {
          postid: postid.toString(),
        }
      });
      if (post !== undefined && post !== null) {
        return res.status(200).json({ post });
      }
    } catch (e: any) {
      error = convertToFirebaseError(error, e);
      logError("\tFAIL", e);
    }
  }
  res.status(300).json({ error });
}
