import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../prisma/prismaContext"
import { IErrorResponse } from "../../../utils/FirebaseErrors";
import { jsonify, logError } from "../../../utils/helpers"
import { FullPost, FullPostRelations } from "./[postid]"

export type PostFeedResponse = IErrorResponse & {
    posts?: FullPost[]
  };

export default async function handle (req:NextApiRequest, res:NextApiResponse<PostFeedResponse>) {
    try {
        const posts = await prisma.post.findMany({
            ...FullPostRelations,
            take: 10,
            orderBy: {
                updated_at: "desc"
            }
        })

        res.status(200).json({posts})
    }
    catch(e) {
        logError('\tFAIL',e)
        res.status(300).json({error: {code: "api/error", message: jsonify(e)}})
    }
}
