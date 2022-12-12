import { Message } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/prismaContext";
import { IErrorResponse } from "../../../utils/ResponseErrors";
import { jsonify, log, logError, todo, ymd } from "../../../utils/helpers";

type MessageResponse = IErrorResponse<Message> & {
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
    res.status(200).json({ error: undefined, ...message });

  } catch (e) {
    logError("\tFAIL", e);
    res.status(400).json({ error: { code: "api/error", message: jsonify(e) } });
  }
}
