import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/prismaContext";
import { FullPostRelations, FullPostResponse } from "../../../types/post/FullPost";
import {
  convertToFirebaseError,
  FirebaseErrors,
} from "../../../utils/FirebaseErrors";
import { logError } from "../../../utils/helpers";

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
        },
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
