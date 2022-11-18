import { Post, User } from "@prisma/client"
import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../prisma/prismaContext"
import { IFirebaseErrorCode } from "../../../utils/FirebaseErrors"
import { jsonify, log, logError } from "../../../utils/helpers"

export type FeedPost = Post & {
    author: User
}

export type IPostFeedResponse = {
  posts?: FeedPost[];
  error?: IFirebaseErrorCode;
};

export default async function handle (req:NextApiRequest, res:NextApiResponse<IPostFeedResponse>) {
    try {
        const posts = await prisma.post.findMany({
            include: {
                author: true,
            },
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
