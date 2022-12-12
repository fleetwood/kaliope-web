import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../prisma/prismaContext"
import { IFullPost, FullPostRelations } from "../../../types/post/FullPost";
import { IErrorResponse } from "../../../utils/ResponseErrors";
import { jsonify, log, logError } from "../../../utils/helpers"

export type PostFeedResponse = IErrorResponse<IFullPost[]>;

export default async function handle (req:NextApiRequest, res:NextApiResponse<PostFeedResponse>) {
    const skip = parseInt(req.query.c ? req.query.c.toString() : '0')
    try {
        const results = await prisma.post.findMany({
            ...FullPostRelations,
            take: 10,
            skip, 
            where: {
                threadParentId: null
            },
            orderBy: [{
                updated_at: "desc"
            }]
        })

        res.status(200).json({results})
    }
    catch(e) {
        logError('\tFAIL',e)
        res.status(300).json({error: {code: "api/error", message: jsonify(e)}})
    }
}
