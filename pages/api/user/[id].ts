import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../../prisma/prismaContext"
import { FullUserRelations, FullUserResponse } from "../../../types/user/FullUser"
import { jsonify, log, logError } from "../../../utils/helpers"

export default async function handle (req:NextApiRequest, res:NextApiResponse<FullUserResponse>) {
    const id = req.query.id || ''
    log('/api/user/[id]',id)
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: id?.toString()
            },
            ...FullUserRelations
        })
        res.status(200).json({error:undefined,...user})
    }
    catch(e) {
        logError('\tFAIL',e)
        res.status(400).json({error: {code: "api/error", message: jsonify(e)}})
    }
}
