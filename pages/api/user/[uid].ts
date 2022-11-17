import { User } from "@prisma/client"
import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../prisma/prismaContext"
import { IFirebaseErrorCode } from "../../../utils/FirebaseErrors"
import { jsonify, log, logError } from "../../../utils/helpers"

export type IUserResponse = {
    user?: User | null
    error?: IFirebaseErrorCode
}

export default async function handle (req:NextApiRequest, res:NextApiResponse<IUserResponse>) {
    const uid = req.query.uid || ''
    log('API',uid)
    try {
        const user = await prisma.user.findUnique({
            where: {
                uid: uid?.toString()
            },
            include: {
                posts: {
                    take: 10,
                    orderBy: {
                        updated_at: "desc"
                    }
                }
            }
        })
        log('\tAPI Result',user)
        res.status(200).json({user})
    }
    catch(e) {
        logError('\tFAIL',e)
        res.status(300).json({error: {code: "api/error", message: jsonify(e)}})
    }
}
