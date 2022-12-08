import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/prismaContext"
import {
  FullUserRelations,
  FullUserResponse,
} from "../../../types/user/FullUser";
import { jsonify, log, logError } from "../../../utils/helpers";

export default async function handle(req: NextApiRequest,res: NextApiResponse<FullUserResponse>) {
  const {
    body: { userid, followid, follow = true },
    method,
  } = req;

  if (method?.toUpperCase() !== "POST") {
    log('ERROR POSTING', {userid,followid,follow,method})
    // res.setHeader("Allow", ["POST"]);
    // res.status(405).end(`Method ${method} Not Allowed`);
  }

  if (!userid || !followid) {
    log('api/user/follow missing property',{userid, followid})
    res
      .status(405)
      .json({ error: { code: "api/error", message: `Missing properties for ${userid ? "" : "userid"} ${followid ? "" : "followid"}`}});
  }

  try {
    if (follow) {
      const follower = await prisma.profile.update({
          where: {
              id: userid!.toString(),
          },
          data: {
              Follows: {
                  connect: { id: followid!.toString() },
              },
              totalFollows: +1
          },
      });
      const following = await prisma.profile.update({
          where: {
              id: followid!.toString(),
          },
          data: {
              Followers: {
                  connect: {
                      id: userid!.toString(),
                  },
              },
              totalFollowers: +1
          },
      });
      if (follower && following) {
        const user = prisma.user.findUnique({
          where: { id: userid!.toString() },
          ...FullUserRelations,
        });
        res.status(200).json({ error: undefined, ...user });
      }
    }
  } catch (e) {
    logError("\tFAIL", e);
    res.status(400).json({ error: { code: "api/error", message: jsonify(e) } });
  }
}
