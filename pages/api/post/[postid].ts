import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/prismaContext";
import { FullPostRelations, FullPostResponse } from "../../../types/post/FullPost";
import {
  convertToResponseError,
  ResponseErrors,
} from "../../../utils/ResponseErrors";
import { logError } from "../../../utils/helpers";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<FullPostResponse | null>
) {
  const postid = req.query.postid;
  let error = ResponseErrors.postNotfound;
  if (postid) {
    try {
      const results = await prisma.post.findUnique({
        ...FullPostRelations,
        where: {
          postid: postid.toString(),
        },
      });
      if (results !== undefined && results !== null) {
        return res.status(200).json({ results });
      }
    } catch (e: any) {
      error = convertToResponseError(error, e);
      logError("\tFAIL", e);
    }
  }
  res.status(300).json({ error });
}
