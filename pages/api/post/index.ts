import { Post } from "@prisma/client"
import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../prisma/prismaContext"
import { IFirebaseErrorCode } from "../../../utils/FirebaseErrors"
import { jsonify, log, logError } from "../../../utils/helpers"

export type IPostFeedResponse = {
  posts?: Post[];
  error?: IFirebaseErrorCode;
};

export default async function handle (req:NextApiRequest, res:NextApiResponse<IPostFeedResponse>) {
    log('/api/post/index')
    try {
        const posts = await prisma.post.findMany({
            include: {
                author:{}
            },
            take: 10,
            orderBy: {
                updated_at: "desc"
            }
        })
        log('\tAPI Result:',posts.length)
        res.status(200).json({posts})
    }
    catch(e) {
        logError('\tFAIL',e)
        res.status(300).json({error: {code: "api/error", message: jsonify(e)}})
    }
}
