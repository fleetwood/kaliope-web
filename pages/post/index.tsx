import { prisma } from "../../prisma/prismaContext";
import { NextApiRequest, NextApiResponse } from "next";
import { logError } from "../../utils/helpers";

export default function handle(red:NextApiRequest, res: NextApiResponse) {
    prisma.post.findMany()
        .then(posts => {
            res.status(200).json(posts)
        })
        .catch(e => {
            res.status(403).json(logError('API ERROR',e))
        })
}