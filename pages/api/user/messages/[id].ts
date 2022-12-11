import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../../prisma/prismaContext"
import { FullProfileRelations, FullProfileResponse } from "../../../../types/profile/FullProfile"
import { jsonify, log, logError } from "../../../../utils/helpers"

export default async function handle (req:NextApiRequest, res:NextApiResponse<FullProfileResponse>) {
    const id = req.query.id || ''
    log('/api/user/messages/[id]',id)
    try {
        const user = await prisma.profile.findUnique({
            where: {
                id: id?.toString()
            },
            ...FullProfileRelations
        })
        res.status(200).json({error:undefined,...user})
    }
    catch(e) {
        logError('\tFAIL',e)
        res.status(400).json({error: {code: "api/error", message: jsonify(e)}})
    }
}
