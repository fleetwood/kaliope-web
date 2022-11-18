import { Post, User } from "@prisma/client"
import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../prisma/prismaContext"
import { convertToFirebaseError, FirebaseErrors, IFirebaseErrorCode } from "../../../utils/FirebaseErrors"
import { jsonify, log, logError } from "../../../utils/helpers"

export type FullPost = Post & {
    author: User
    posts: FullPost[]
}

export type IPostResponse = {
  post?: FullPost|null;
  error?: IFirebaseErrorCode;
};

export default async function handle (req:NextApiRequest, res:NextApiResponse<IPostResponse>) {
    const postid = req.query.postid
    let error = FirebaseErrors.postNotfound
    if (postid) {
        try {
            const post = await prisma.post.findUnique({
                where:{
                    postid: postid.toString()
                },
                include: {
                    author: true,
                    posts: {
                        include: {
                            author:true
                        }
                    }
                }
            })
            res.end(res.status(200).json({post}))
            return;
        }
        catch(e:any) {
            error = convertToFirebaseError(error,e)
            logError('\tFAIL',e)
        }
    }
    res.status(300).json({error: {code: "api/error", message: jsonify(error)}})
}
