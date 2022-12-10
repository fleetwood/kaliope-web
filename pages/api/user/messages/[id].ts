import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../../prisma/prismaContext"
import { FullInboxRelations, FullInboxResponse } from "../../../../types/profile/FullProfile"
import { jsonify, log, logError } from "../../../../utils/helpers"

export default async function handle (req:NextApiRequest, res:NextApiResponse<FullInboxResponse>) {
    const id = req.query.id || ''
    log('/api/user/messages/[id]',id)
    try {
        const user = await prisma.profile.findUnique({
            where: {
                id: id?.toString()
            },
            ...FullInboxRelations
        })
        res.status(200).json({error:undefined,...user})
    }
    catch(e) {
        logError('\tFAIL',e)
        res.status(400).json({error: {code: "api/error", message: jsonify(e)}})
    }
}
