import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/prismaContext";
import { FullInboxRelations, FullInboxResponse } from "../../../types/profile/InboxProfile";
import {
  convertToResponseError,
  ResponseErrors,
} from "../../../utils/ResponseErrors";
import { log, logError } from "../../../utils/helpers";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<FullInboxResponse | null>
) {
  const userid = req.query.id;
  let error = ResponseErrors.postNotfound;
  log(`api/message/${userid||'undefined'}`)
  if (userid) {
    try {
      const results = await prisma.profile.findUnique({
        ...FullInboxRelations,
        where: {
          id: userid.toString(),
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
