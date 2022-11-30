import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../prisma/prismaContext"
import { jsonify, log, logError } from "../../../utils/helpers"
import { FullProfileRelations, FullProfileResponse } from "../../../types/profile/FullProfile"

export default async function handle (req:NextApiRequest, res:NextApiResponse<FullProfileResponse>) {
    const id = req.query.id || ''
    log('/api/profile/[id]',id)
    try {
        const profile = await prisma.profile.findUnique({
            where: {
                id: id?.toString()
            },
            ...FullProfileRelations
        })
        res.status(200).json({error:undefined, ...profile})
    }
    catch(e) {
        logError('\tFAIL',e)
        res.status(300).json({error: {code: "api/error", message: jsonify(e)}})
    }
}
