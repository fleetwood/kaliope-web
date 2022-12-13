import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../../prisma/prismaContext"
import { FullUserRelations, FullUserResponse } from "../../../../types/user/FullUser"
import { jsonify, log, logError } from "../../../../utils/helpers"

export default async function handle (req:NextApiRequest, res:NextApiResponse<FullUserResponse>) {
    const email = req.query.email || ''
    log('/api/user/byEmail/[email',email)
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email?.toString()
            },
            ...FullUserRelations
        })
        res.status(200).json({error:undefined,...user})
    }
    catch(e) {
        logError('\tFAIL',e)
        res.status(300).json({error: {code: "api/error", message: jsonify(e)}})
    }
}
