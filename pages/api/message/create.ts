import { Message } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/prismaContext";
import { IErrorResponse } from "../../../utils/ResponseErrors";
import { jsonify, log, logError, todo, ymd } from "../../../utils/helpers";
import { FullInboxRelations, FullInboxResponse } from "../../../types/profile/InboxProfile";

type MessageResponse = IErrorResponse<FullInboxResponse> & {
  results?: Message;
};

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<MessageResponse>
) {
  const {
    body: { 
        content,
        messageParentId,
        recipientId,
        senderId,
     },
    method,
  } = req;

  todo('Validate message properties')

  try {
    log(`/api/message/create: ${jsonify({
      content,
      messageParentId,
      recipientId,
      senderId,
      createdAt: new Date(),
      lastLoginAt: new Date()
    })}`)
    const message = await prisma.message.create({
        data: {
            content,
            messageParentId,
            recipientId,
            senderId,
            createdAt: new Date(),
            lastLoginAt: new Date()
        }
    });
    if (message) {
      const newInbox = await prisma.profile.findUnique({
        where: {
          id: senderId
        },
        ...FullInboxRelations
      })
      res.status(200).json({ error: undefined, ...newInbox });
    }
  } catch (e) {
    logError("\tFAIL", e);
    res.status(400).json({ error: { code: "api/error", message: jsonify(e) } });
  }
}
